var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n 班級:四設三甲 \n 姓名:韋誠昌 \n 你的學號:40823148 \n 網站倉儲 \n 網站連結 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'TASK', 'text': '學員list \n 2b-list \n \n \n \n', 'tags': '', 'url': 'TASK.html'}, {'title': 'HWPages', 'text': '程式 來源參考:mde.tw \n # 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/40823148/292f9cb269defe6a29bbbe67eb2a3069/raw/5f15d62ea98b22de40e3a277a3b7468b289729c6/cad2021_2b_stud_list"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    print("<p><a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>"+ str(num) + "</a></p>") \n 各學員網站 \n 40723126 \n 40723135 \n 40723217 \n 40732331 \n 40823114 \n 40823115 \n 40823117 \n 40823119 \n 40823122 \n 40823127 \n 40823146 \n 40823148 \n 40823215 \n 40871106 \n 40923201 \n 40923203 \n 40923204 \n 40923205 \n 40923206 \n 40923207 \n 40923208 \n 40923209 \n 40923210 \n 40923211 \n 40923212 \n 40923213 \n 40923214 \n 40923216 \n 40923217 \n 40923218 \n 40923219 \n 40923220 \n 40923221 \n 40923223 \n 40923224 \n 40923225 \n 40923226 \n 40923227 \n 40923228 \n 40923229 \n 40923230 \n 40923231 \n 40923232 \n 40923233 \n 40923234 \n 40923235 \n 40923236 \n 40923237 \n 40923238 \n 40923239 \n 40923240 \n 40923241 \n 40923242 \n 40923243 \n 40923244 \n 40923245 \n 40923246 \n 40923247 \n 40923248 \n 40923249 \n 40923250 \n 40923251 \n 40923252 \n 40923253 \n 40971220 \n 40971227 \n \n', 'tags': '', 'url': 'HWPages.html'}, {'title': 'repo+pages', 'text': '程式 來源參考:mde.tw \n # 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/40823148/292f9cb269defe6a29bbbe67eb2a3069/raw/5f15d62ea98b22de40e3a277a3b7468b289729c6/cad2021_2b_stud_list"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    print("<p>倉儲:<a href=\'https://github.com/" + str(account) + "/cad2021_hw\'>"+ str(num) + "</a> 網頁:<a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>"+ str(num) + "</a></p>") \n 倉儲: 40723126  網頁: 40723126 \n 倉儲: 40723135  網頁: 40723135 \n 倉儲: 40723217  網頁: 40723217 \n 倉儲: 40732331  網頁: 40732331 \n 倉儲: 40823114  網頁: 40823114 \n 倉儲: 40823115  網頁: 40823115 \n 倉儲: 40823117  網頁: 40823117 \n 倉儲: 40823119  網頁: 40823119 \n 倉儲: 40823122  網頁: 40823122 \n 倉儲: 40823127  網頁: 40823127 \n 倉儲: 40823146  網頁: 40823146 \n 倉儲: 40823148  網頁: 40823148 \n 倉儲: 40823215  網頁: 40823215 \n 倉儲: 40871106  網頁: 40871106 \n 倉儲: 40923201  網頁: 40923201 \n 倉儲: 40923203  網頁: 40923203 \n 倉儲: 40923204  網頁: 40923204 \n 倉儲: 40923205  網頁: 40923205 \n 倉儲: 40923206  網頁: 40923206 \n 倉儲: 40923207  網頁: 40923207 \n 倉儲: 40923208  網頁: 40923208 \n 倉儲: 40923209  網頁: 40923209 \n 倉儲: 40923210  網頁: 40923210 \n 倉儲: 40923211  網頁: 40923211 \n 倉儲: 40923212  網頁: 40923212 \n 倉儲: 40923213  網頁: 40923213 \n 倉儲: 40923214  網頁: 40923214 \n 倉儲: 40923216  網頁: 40923216 \n 倉儲: 40923217  網頁: 40923217 \n 倉儲: 40923218  網頁: 40923218 \n 倉儲: 40923219  網頁: 40923219 \n 倉儲: 40923220  網頁: 40923220 \n 倉儲: 40923221  網頁: 40923221 \n 倉儲: 40923223  網頁: 40923223 \n 倉儲: 40923224  網頁: 40923224 \n 倉儲: 40923225  網頁: 40923225 \n 倉儲: 40923226  網頁: 40923226 \n 倉儲: 40923227  網頁: 40923227 \n 倉儲: 40923228  網頁: 40923228 \n 倉儲: 40923229  網頁: 40923229 \n 倉儲: 40923230  網頁: 40923230 \n 倉儲: 40923231  網頁: 40923231 \n 倉儲: 40923232  網頁: 40923232 \n 倉儲: 40923233  網頁: 40923233 \n 倉儲: 40923234  網頁: 40923234 \n 倉儲: 40923235  網頁: 40923235 \n 倉儲: 40923236  網頁: 40923236 \n 倉儲: 40923237  網頁: 40923237 \n 倉儲: 40923238  網頁: 40923238 \n 倉儲: 40923239  網頁: 40923239 \n 倉儲: 40923240  網頁: 40923240 \n 倉儲: 40923241  網頁: 40923241 \n 倉儲: 40923242  網頁: 40923242 \n 倉儲: 40923243  網頁: 40923243 \n 倉儲: 40923244  網頁: 40923244 \n 倉儲: 40923245  網頁: 40923245 \n 倉儲: 40923246  網頁: 40923246 \n 倉儲: 40923247  網頁: 40923247 \n 倉儲: 40923248  網頁: 40923248 \n 倉儲: 40923249  網頁: 40923249 \n 倉儲: 40923250  網頁: 40923250 \n 倉儲: 40923251  網頁: 40923251 \n 倉儲: 40923252  網頁: 40923252 \n 倉儲: 40923253  網頁: 40923253 \n 倉儲: 40971220  網頁: 40971220 \n 倉儲: 40971227  網頁: 40971227 \n', 'tags': '', 'url': 'repo+pages.html'}, {'title': '隨機抽10位學員', 'text': '程式 來源參考:mde.tw \n from browser import html\nfrom browser import document\nimport random\n\nbrython_div = document["brython_div"]\n\n# 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/40823148/292f9cb269defe6a29bbbe67eb2a3069/raw/5f15d62ea98b22de40e3a277a3b7468b289729c6/cad2021_2b_stud_list"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\n\n# 根據 href 與 content 將 html 元件中的 anchor 插入頁面\ndef makeLink(href, content):\n    brython_div <= html.A(content, href=href)\n    brython_div <= html.BR()\n\n\n# 從學員資料中隨機取出 10 位學員的網頁進行查核\nselect = 10\nrandom.shuffle(data)\ndata = data[:10]\n\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    content = str(num)\n    href = "https://"+ str(account) + ".github.io/cad2021_hw"\n    makeLink(href, content) \n', 'tags': '', 'url': '隨機抽10位學員.html'}, {'title': 'HW1', 'text': '\n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 繪圖', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 緣起說明與介紹 \n 請不要直接從找到的 CAD1 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD1 繪圖.html'}, {'title': 'CAD1 安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 套件下載安裝與配置 \n CAD1 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 操作流程.html'}, {'title': 'CAD2 繪圖', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 緣起說明與介紹 \n 請不要直接從找到的 CAD2 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD2 繪圖.html'}, {'title': 'CAD2 安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 安裝配置.html'}, {'title': 'CAD2 操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 操作流程.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD1 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'HW1-1', 'text': '\n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': '\n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': '\n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': '\n \n', 'tags': '', 'url': 'Final Project.html'}]};