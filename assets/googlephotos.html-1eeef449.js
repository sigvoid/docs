import{_ as i,a as c,b as h}from"./Google-photosend-15a5bc4f.js";import{_ as d,r,o as p,c as g,b as e,e as o,a as t,w as _,f as s}from"./app-d342278e.js";const u={},f=s('<h1 id="谷歌相册" tabindex="-1"><a class="header-anchor" href="#谷歌相册" aria-hidden="true">#</a> 谷歌相册</h1><h2 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id" aria-hidden="true">#</a> <strong>根文件夹 ID</strong></h2><p>根目录root，其他目录ID未知( <s>貌似不能挂载单独的相册</s> 已解决下面有介绍)</p><h2 id="获取-client-id-client-secret" tabindex="-1"><a class="header-anchor" href="#获取-client-id-client-secret" aria-hidden="true">#</a> <strong>获取 client_id, client_secret</strong></h2>',4),m={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"client_id(客户端ID) client_secret(客户端秘钥)",-1),k=e("strong",null,"谷歌网盘",-1),y=s('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示 此应用未经 Google 验证</p><p>您获得了授权，可以使用一款目前处于测试阶段的应用。除非您了解向您发出邀请的开发者，否则请勿继续。</p><p>我们点击左侧的<strong>继续</strong>就行</p><p>此选项记得勾选不然会报错，下面的注意事项当中有说明</p><p><img src="'+i+'" alt="Googlephotos"></p></div><p>现在更加方便了，其实获取谷歌云盘的时候勾选了相册到时候获取到的token也可以拿来挂载相册~一举两得</p><p>记得打开 <strong><code>Photos Library API</code></strong> 哦~</p>',3),v={href:"https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"挂载单个相册目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#挂载单个相册目录","aria-hidden":"true"},"#"),o(),e("strong",null,"挂载单个相册目录")],-1),x={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},L=e("strong",null,"客户端ID",-1),P=e("strong",null,"秘钥",-1),V=e("strong",null,"刷新令牌",-1),q={href:"https://alist.nn.ci/tool/google/album",target:"_blank",rel:"noopener noreferrer"},U=e("li",null,"根文件ID（就是相册ID）：默认root，展示全部，若只想展示单个相册，可以填写你想展示的相册ID",-1),w=e("strong",null,[e("code",null,"access_token")],-1),A={href:"https://github.com/alist-org/alist/discussions/3264#discussioncomment-5051171",target:"_blank",rel:"noopener noreferrer"},N=s('<h4 id="填写示意图" tabindex="-1"><a class="header-anchor" href="#填写示意图" aria-hidden="true">#</a> <strong>填写示意图</strong></h4><p><img src="'+c+'" alt="Googlephotos"></p><h2 id="两个注意事项" tabindex="-1"><a class="header-anchor" href="#两个注意事项" aria-hidden="true">#</a> <strong>两个注意事项：</strong></h2>',3),K=e("li",null,[e("p",null,"failed get objs: failed to list objs: Request had insufficient authentication scopes.: []"),e("ul",null,[e("li",null,[o("是因为在获取授权的时候没有勾选 相册权限（查看上面提到的图片） "),e("code",null,"查看和整理您的Google相册媒体库中的内容,向媒体库上传内容。")]),e("li",null,[o("获取 "),e("code",null,"access_token"),o("、"),e("code",null,"refresh_token"),o(" 时未声明"),e("code",null,"https://www.googleapis.com/auth/photoslibrary"),o("的范围。")])])],-1),j={href:"https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview",target:"_blank",rel:"noopener noreferrer"},D=e("ul",null,[e("li",null,[o("是因为对应的项目没有开启 "),e("strong",null,[e("code",null,"Photos Library API")]),o(" 谷歌相册API")])],-1),E=s('<h3 id="挂载展示" tabindex="-1"><a class="header-anchor" href="#挂载展示" aria-hidden="true">#</a> <strong>挂载展示</strong></h3><p><img src="'+h+'" alt="Googlephotos"></p><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',3);function M(S,C){const n=r("ExternalLinkIcon"),l=r("RouterLink"),a=r("Mermaid");return p(),g("div",null,[f,e("p",null,[o("获取工具 "),e("a",m,[o("https://alist.nn.ci/tool/google/request"),t(n)])]),e("p",null,[o("如何获取自己的 "),b,o(" 去看"),t(l,{to:"/zh/guide/drivers/googledrive.html"},{default:_(()=>[k]),_:1}),o("哪一篇")]),y,e("ul",null,[e("li",null,[e("strong",null,[e("a",v,[o("https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513"),t(n)])])])]),I,e("p",null,[o("根据"),e("a",x,[o("上面"),t(n)]),o("获取到的"),L,o("和"),P,o("和"),V]),e("p",null,[o("我们填写到 "),e("strong",null,[e("a",q,[o("https://alist.nn.ci/tool/google/album"),t(n)])]),o(" 即可获取我们每个相册的单个目录ID")]),e("ul",null,[U,e("li",null,[o("在我们填写后下方也会出现一个 "),w,o(" 这个也可以填写到刷新令牌里面前使用和之前获取到的，这两个都可以用 - "),e("a",A,[o("解释"),t(n)])])]),N,e("ol",null,[K,e("li",null,[e("p",null,[o("failed get objs: failed to list objs: Photos Library API has not been used in project ... before or it is disabled. Enable it by visiting "),e("a",j,[o("https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview"),t(n)]),o(" then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []")]),D])]),E,t(a,{id:"mermaid-118",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCsqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9KeaATVnpZmbmpuCjfB2NgY1QSTggqIttKk9KLEggyFzJRUQ4VohViwaLIhmErNS4Fyo5/NWfNszq4nuxc/n9AWa2VlVZyfm5qck1hcbGsL8bKtra1dolE00NvPOra/WLfv6ZJ2qFkgVS6paQpwLTAnWpqBFSQZRkPMDQ3yidXVA2p82dCpp4vLtMzkbKAWBSU9Pf2Uosyy1KJi/eT83Nz8PL2Mktwc5fLUpJTEMt3na6c9n7pUCUkPMGSJ1AMA71C3Mg=="})])}const z=d(u,[["render",M],["__file","googlephotos.html.vue"]]);export{z as default};
