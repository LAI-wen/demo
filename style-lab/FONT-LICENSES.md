# 字體授權與來源

這是獨立試玩頁。所有內建字體使用 OFL 1.1，可商業使用；保留各作者的版權與授權條款。自備字體只在瀏覽器記憶體中讀取，不上傳。

## 本站自託管

源流明體 TW、源雲明體 TW、源樣黑體 TW Regular 來自 ButTaiwan 官方 repo，完整字元保留，只將 OTF 容器轉換為 WOFF2。每份來源 commit 記錄於 fonts/sources.json，OFL 原文位於 licenses/。首次選取約 7–14 MB，之後瀏覽器可使用快取；不一次載入全部。

## Google Fonts 按需載入

只使用固定的官方字體名稱與400字重；不把客戶輸入放進 text= 查詢。選取時會連線 Google 字體服務（一般網路連線資料），字形依字體本身覆蓋範圍，缺字使用備援。

- Noto Sans TC：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/notosanstc/OFL.txt)；本頁副本 licenses/notosanstc-OFL.txt
- Noto Serif TC：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/notoseriftc/OFL.txt)；本頁副本 licenses/notoseriftc-OFL.txt
- Chiron GoRound TC：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/chirongoroundtc/OFL.txt)；本頁副本 licenses/chirongoroundtc-OFL.txt
- Huninn：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/huninn/OFL.txt)；本頁副本 licenses/huninn-OFL.txt
- Iansui：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/iansui/OFL.txt)；本頁副本 licenses/iansui-OFL.txt
- LXGW WenKai TC：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/lxgwwenkaitc/OFL.txt)；本頁副本 licenses/lxgwwenkaitc-OFL.txt
- Chocolate Classical Sans：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/chocolateclassicalsans/OFL.txt)；本頁副本 licenses/chocolateclassicalsans-OFL.txt
- Cactus Classical Serif：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/cactusclassicalserif/OFL.txt)；本頁副本 licenses/cactusclassicalserif-OFL.txt
- Chiron Hei HK：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/chironheihk/OFL.txt)；本頁副本 licenses/chironheihk-OFL.txt
- Chiron Sung HK：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/chironsunghk/OFL.txt)；本頁副本 licenses/chironsunghk-OFL.txt
- LXGW Marker Gothic：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/lxgwmarkergothic/OFL.txt)；本頁副本 licenses/lxgwmarkergothic-OFL.txt
- LXGW WenKai Mono TC：[官方授權](https://raw.githubusercontent.com/google/fonts/main/ofl/lxgwwenkaimonotc/OFL.txt)；本頁副本 licenses/lxgwwenkaimonotc-OFL.txt

## 專案清單參考

牽關：app/shared/theme-fonts.ts。VidScribe：frontend/public/fonts.json。僅參考字體名稱，沒有複製私有內容或本機來源不明字體。

此頁的官方字體固定按需載入。自備字體的檔名只用 textContent 顯示，不作為 CSS 或 URL 執行。
