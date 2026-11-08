const assert=require('node:assert/strict');
const {webkit,chromium}=require('playwright');
const url=process.env.URL||'http://127.0.0.1:32882';
(async()=>{for(const engine of [webkit,chromium]){const b=await engine.launch();for(const width of [320,393,768,899,900,1280]){const p=await b.newPage({viewport:{width,height:700},isMobile:width<900,hasTouch:width<900});let errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
// Both homepage carousels must preserve their 20px gutter after scroll snapping.
for(const strip of await p.locator('[style*="scroll-snap-type: x mandatory"]').all()) {
  await strip.scrollIntoViewIfNeeded();
  for(const target of [0,200,0]) {
    await strip.evaluate((e,x)=>{e.scrollLeft=x},target); await p.waitForTimeout(180);
    if(target===0) {
      const g=await strip.evaluate(e=>({scroll:e.scrollLeft,left:e.querySelector('button').getBoundingClientRect().left-e.getBoundingClientRect().left}));
      assert.ok(Math.abs(g.left-20)<=1, 'Homepage carousel must preserve 20px leading gutter: '+JSON.stringify(g));
    }
  }
}
await p.getByText('全部作品',{exact:true}).first().click();await p.getByText('單鑽鑽墜',{exact:true}).first().click();const main=p.locator('main');const geo=()=>main.evaluate(e=>{const g=e.querySelector('[data-product-gallery]'),info=g.nextElementSibling;return{pos:getComputedStyle(g).position,g:g.getBoundingClientRect().toJSON(),info:info.getBoundingClientRect().toJSON(),width:innerWidth,scrollWidth:document.documentElement.scrollWidth,sh:e.parentElement.clientHeight}});let d=await geo();assert.equal(d.pos,width<900?'static':'sticky');assert.ok(d.scrollWidth<=width);assert.ok(width<900?d.info.top>=d.g.bottom-1:d.info.left>=d.g.right-1);
await main.evaluate(e=>e.parentElement.scrollTop=600);await p.waitForTimeout(350);d=await geo();if(width<900)assert.ok(d.g.bottom<=d.info.top+1,'Gallery must not overlap product information after scrolling');
await p.getByRole('button',{name:'如何詢問與預約'}).click();await p.getByRole('button',{name:'私訊詢問這款',exact:true}).click();await p.getByRole('dialog',{name:'私訊詢問'}).waitFor();await p.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new Error('test denial')}}}));await p.getByRole('button',{name:'複製訊息',exact:true}).click();await p.getByText('無法複製，請長按上方訊息選取',{exact:true}).waitFor();await p.keyboard.press('Escape');await p.getByRole('dialog').waitFor({state:'hidden'});
if(width===393){await main.evaluate(e=>e.parentElement.scrollTop=400);await p.screenshot({path:`/tmp/jewelry-fixed-${engine.name()}.png`});await p.setViewportSize({width:393,height:550});await p.waitForTimeout(150);assert.equal((await geo()).sh,550);}
await p.getByText('故事',{exact:true}).last().click();await p.locator('[data-screen-label="前台 故事列表"]').waitFor();await p.getByText('閱讀全文',{exact:true}).first().click();await p.locator('main').waitFor();assert.ok(await p.locator('main').innerText());await p.getByText('關於我們',{exact:true}).last().click();await p.locator('[data-screen-label="前台 關於我們"]').waitFor();await p.getByText('管理示範',{exact:true}).click();await p.locator('[data-screen-label="後台"]').waitFor();assert.deepEqual(errors,[]);console.log(JSON.stringify({engine:engine.name(),width,result:'PASS'}));await p.close();}await b.close();}})().catch(e=>{console.error(e);process.exit(1)});
