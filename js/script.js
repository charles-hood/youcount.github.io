function arrowfunc(){$("#extra").css({"-webkit-transition":"width 0.5s, height 0.5s, border-radius 0.5s, transform 0.5s",transition:"width 0.5s, height 0.5s, border-radius 0.5s, transform 0.5s"});var a,b;0===arrowvar?(window.innerWidth>800?(b="35vw",a="80%"):(b="88vw",a="98%"),document.getElementById("extra").style.transform="translateY(0)",$("#extra").css({width:a,height:b,borderRadius:"4px"}),$("#arrowCircle").css({transform:"rotate(180deg)"}),setTimeout(function(){document.getElementById("extra").classList.add("extra"),menushrink(),$("#extraContent").css({opacity:"1"}),$("html, body").animate({scrollTop:$("#extra").offset().top},500),$("#charts").fadeIn(500)},500),arrowvar=1):(window.innerWidth>800?(b="4vw",a="4vw"):(b="10vw",a="10vw"),menuswitch2=2,menushrink(),$("html, body").animate({scrollTop:0},500),setTimeout(function(){menuswitch2=0,menushrink(),document.getElementById("extra").classList.remove("extra"),document.getElementById("extra").style.transform="translateY(-4vw)",$("#extra").css({width:a,height:b,borderRadius:"5vw"}),$("#arrowCircle").css({transform:"rotate(0deg)"}),$("#charts").hide(),$("#extraContent").css({opacity:"0"})}),arrowvar=0),setTimeout(function(){$("#extra").css({"-webkit-transition":"all 0s ease 0s",transition:"all 0s ease 0s"})},1e3)}function menubuttonfunc(){0===menuswitch1?showmenu():hidemenu()}function showmenu(){loc=$("#buttonBig").offset().top,setTimeout(function(){$("#mainPage").css({overflow:"hidden"}),$("#contents").css({position:"absolute"}),menuswitch1=1},500),menuswitch2=1,menushrink(),$("#buttonBig").addClass("cross"),$("#contents").css({position:"fixed"}),$("#contents").fadeIn(750),$("#bg1").slideDown(500),$("#buttonBig").css({"background-color":"rgba(0,0,0,0.5)"})}function hidemenu(){setTimeout(function(){menuswitch1=0},500),menuswitch2=0,$("#buttonBig").removeClass("cross"),$("#contents").fadeOut(250),$("#contents,#bg1").slideUp(500),$("#buttonBig").css({"background-color":"transparent"}),nav("hide",null),$("#mainPage").css({overflow:"visible"}),window.scrollTo(0,loc),menushrink()}function menushrink(a){if(0===menuswitch2){var b=window.innerHeight/5;window.pageYOffset>b?$("#menu").css({position:"fixed",height:"10%"}):$("#menu").css({position:"absolute",height:"30%"});var c=b/2;document.getElementById("logo2").style.position="fixed",window.pageYOffset>c?(document.getElementById("logo").style.display="none",document.getElementById("logo2").style.display="initial"):(document.getElementById("logo2").style.display="none",document.getElementById("logo").style.display="inherit")}else $("#menu").css({position:"fixed",height:"10%"}),document.getElementById("logo2").style.display="inherit",document.getElementById("logo").style.display="none";"smooth"==a&&($("#menu").css({transition:"height 0.5s linear"}),setTimeout(function(){$("#menu").css({transition:"all 0s"})}))}function nav(a,b){"show"==a?"help"==b?0===help?($("#help").slideDown(1e3),$("#menuHelp").css({color:"black","background-color":"rgba(0,0,0,0.1)","font-weight":"900"}),help=1):($("#help").slideUp(1e3),$("#menuHelp").css({color:"grey","background-color":"white","font-weight":"100"}),setTimeout(function(){help=0},1e3)):"about"==b?0===about?($("#about").slideDown(1e3),$("#menuAbout").css({color:"black","background-color":"rgba(0,0,0,0.1)","font-weight":"900"}),about=1):($("#about").slideUp(1e3),$("#menuAbout").css({color:"grey","background-color":"white","font-weight":"100"}),setTimeout(function(){about=0},1e3)):0===embed?($("#embed").slideDown(1e3),$("#menuEmbed").css({color:"black","background-color":"rgba(0,0,0,0.1)","font-weight":"900"}),embed=1):($("#embed").slideUp(1e3),$("#menuEmbed").css({color:"grey","background-color":"white","font-weight":"100"}),setTimeout(function(){embed=0},1e3)):($("#about,#help,#embed").hide(),$("#menuAbout,#menuHelp,#menuEmbed").css({color:"grey","background-color":"white","font-weight":"100"}),help=0,about=0,embed=0)}function trigenter(a){13===a.keyCode&&getValue()}function linkshare(){$("#pageUrl").fadeIn(),$("#bg2").fadeIn()}function chartbutton(){$("#charts").css({"-webkit-transition":"all 0.5s",transition:"all 0.5s"}),0===firstload?($.getScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js",function(){isChart=1,document.getElementById("charts").style.height="40vh",$("#myChart-wrapper").show(),$("#showchart").fadeOut(),$("#hidechart").fadeIn(),chartswitch=1,setTimeout(function(){$("#charts").css({"-webkit-transition":"all 0s",transition:"all 0s"})},500)}),$("#showchart").html("LOADING..."),firstload=1):(setTimeout(function(){$("#charts").css({"-webkit-transition":"all 0s",transition:"all 0s"})},500),$("#showchart").html("SHOW TREND"),0===chartswitch?(isChart=1,document.getElementById("charts").style.height="40vh",$("#myChart-wrapper").show(),$("#showchart").fadeOut(),$("#hidechart").fadeIn(),chartswitch=1):(myLineChart.destroy(),document.getElementById("charts").style.height="15vh",$("#myChart-wrapper").hide(),$("#showchart").fadeIn(),$("#hidechart").fadeOut(100),chartswitch=0,isChart=0))}for(var images=document.getElementsByTagName("img"),pl=0;pl<images.length;pl++)!images[pl].src&&images[pl].id&&"instruct"!=images[pl].id&&(images[pl].src="/images/"+images[pl].id+".png");document.getElementById("instruct").src="/images/instruct.png",window.top===window.self&&window.top.location==window.self.location&&"youcount.github.io"==window.location.hostname&&"youcount.github.io"==window.top.location.hostname||(window.top.location=window.self.location),"https:"!=window.location.protocol&&(window.location.href="https:"+window.location.href.substring(window.location.protocol.length));var emailParts=["manas.khurana20","gmail","com","&#46;","&#64;"];document.getElementById("email").innerHTML=emailParts[0]+emailParts[4]+emailParts[1]+emailParts[3]+emailParts[2],document.getElementById("email").href="mailto:"+document.getElementById("email").innerHTML,$("#buttonBig").on("click",function(){menubuttonfunc()}),$("#fb").on("click",function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value")),"_blank")}),$("#tw").on("click",function(){window.open("https://twitter.com/share?text="+document.getElementById("username").value+" now has "+actualCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" subscribers!&url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&hashtags=YouCount","_blank")}),$("#lnkdIn").on("click",function(){window.open("https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&title="+encodeURIComponent(channelname)+"'s%20Live%20Subscriber%20Count&source=YouCount","_blank")}),$("#tb").on("click",function(){window.open("http://www.tumblr.com/share/link?url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value")),"_blank")}),$("#rdit").on("click",function(){window.open("http://www.reddit.com/submit?url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&title="+encodeURIComponent(channelname)+"'s%20Live%20Subscriber%20Count","_blank")}),$("#link").on("click",function(){linkshare()}),$("#bg2").on("click",function(){$("#pageUrl").fadeOut(),$("#bg2").hide()}),$("#menuHelp,#menuAbout,#menuEmbed").on("click",function(){nav("show",this.className)}),$("#input button").on("click",function(){getValue()}),$(".suggest").on("click",function(){username=this.dataset.id,rawInput=this.dataset.id;var a="https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+this.dataset.id+"&fields=items/snippet&key="+getKey();getText(a,function(a){channelname=a.items[0].snippet.title,document.title=channelname+"'s YouTube Live Subscriber Count - YouCount",changeText(document.querySelector("#username"),channelname),2===isChart&&(isChart=1),live();var b=a.items[0].snippet.publishedAt.split("T")[0];if(b=b.split("-"),"01"==b[1]?b[1]="Jan":"02"==b[1]?b[1]="Feb":"03"==b[1]?b[1]="Mar":"04"==b[1]?b[1]="Apr":"05"==b[1]?b[1]="May":"06"==b[1]?b[1]="Jun":"07"==b[1]?b[1]="Jul":"08"==b[1]?b[1]="Aug":"09"==b[1]?b[1]="Sep":"10"==b[1]?b[1]="Oct":"11"==b[1]?b[1]="Nov":"12"==b[1]&&(b[1]="Dec"),changeText(document.getElementById("pubDate"),b[2]+"-"+b[1]+"-"+b[0]),document.getElementById("dp").src=a.items[0].snippet.thumbnails.default.url,1==popstatevar){var c,d;c=a.items[0].snippet.customUrl?a.items[0].snippet.customUrl.trim():channelname.trim().replace(/\s+/g,"+");var e="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+encodeURIComponent(c)+"&type=channel&maxResults=1&key="+getKey();getText(e,function(a){d=a.pageInfo.totalResults<1||a.items[0].snippet.channelId.trim()!=username?username:c,history.pushState(null,null,"#!/"+d),changeText(document.getElementById("embedUrl"),'<iframe src="https://youcount.github.io/e/#!/'+d+'" height="100" width="250" frameborder="0"></iframe>'),changeText(document.querySelector("#pageUrl input"),"https://youcount.github.io/#!/"+d)})}popstatevar=1;var f="https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+username+"&fields=items/statistics&key="+getKey();getText(f,function(a){changeText(document.getElementById("totalVideos"),a.items[0].statistics.videoCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),changeText(document.getElementById("totalViews"),a.items[0].statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})})}),$("#arrowCircle").on("click",function(){arrowfunc()}),$("#logo,#logo2").on("click",function(){location.href="/"}),$("#showchart,#hidechart").on("click",function(){chartbutton()});var shareswitch=0;$("#share").on("click",function(){0===shareswitch?($("#sharebox").height("auto"),$("#fb,#tw,#lnkdIn,#tb,#rdit,#link").fadeIn(200),shareswitch=3):($("#sharebox").height("10vh"),$("#fb,#tw,#lnkdIn,#tb,#rdit,#link").fadeOut(200),setTimeout(function(){shareswitch=0},200))}),$("body").on("click",function(){0!==shareswitch&&(--shareswitch,1==shareswitch&&($("#sharebox").height("10vh"),$("#fb,#tw,#lnkdIn,#tb,#rdit,#link").fadeOut(200),setTimeout(function(){shareswitch=0},200)))}),$("#username").focusin(function(){$("#input").css({"background-color":"rgba(255,0,0,0.4)"}),$("#input button").fadeIn(250),$("#username").select()}),$("#username").focusout(function(){$("#input").css({"background-color":"rgba(0,0,0,0.3)"}),$("#input button, #suggest").fadeOut(250)}),$("#username").on("keyup",function(){var a=document.getElementById("username").value;return a.trim()?($("#suggest").show(),void("Not Found!"!=a.trim()&&"Loading..."!=a.trim()&&getText("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+encodeURIComponent(a)+"&type=channel&maxResults=5&relevanceLanguage=en&key="+getKey(),function(a){if(!(a.pageInfo.totalResults<1))for(var b=0;b<5;b++)try{document.querySelectorAll(".suggest")[b].style.display="block",document.querySelectorAll(".suggest")[b].dataset.id=a.items[b].snippet.channelId.trim(),document.querySelectorAll(".suggest div")[b].textContent=a.items[b].snippet.title,document.querySelectorAll(".suggestImg")[b].src=a.items[b].snippet.thumbnails.default.url}catch(a){document.querySelectorAll(".suggest")[b].style.display="none"}}))):void $("#suggest").hide()});var arrowvar=0,menuswitch1=0,menuswitch2=0,loc;window.onscroll=function(){menushrink()},menushrink();var help=0,about=0,embed=0,chartswitch=0,firstload=0;
