(function(){
        var bg=function(){
            var winHeight=window.innerHeight;
            var winWidth=window.innerWidth;
            var div_page=document.body.children;
            var img=document.getElementById("card_1").nextElementSibling.getElementsByTagName("img");
            img[0].style.top=(winHeight/10)+"px";
            img[1].style.top=(winHeight/10)+"px";
            img[0].style.left=(winWidth/16)+"px";
            img[1].style.left=(winWidth/16)+"px";
            var div_date=document.getElementById("date");
            var wechat=document.querySelector("#card_1>div>span>img:first-child");
            var qq=document.querySelector("#card_1>div>span>img:nth-child(2)");
            wechat.onmouseover=qq.onmouseover=function(){
                if(this==wechat)var i=0;else i=1;
                img[i].style.display="block";
            }
            var li_page=document.getElementById("card_1").nextElementSibling.nextElementSibling;
            li_page.onclick=function(e){
                if(e.target.tagName==="IMG"){
                    if (e.target.className == "cur_page") {
                        e.target.className = "";
                    } else {
                        var imgs = li_page.getElementsByTagName("img");
                        for (var i in imgs) {
                            imgs[i].className = "";
                        }
                        e.target.className = "cur_page";

                    }
                }
            }
            //页面滚动执行事件
            window.onscroll=function(){
                //获取当前可视区域距离页面顶部距离
                var winScrollY=window.scrollY;
                //获取右侧产生变化的图标
                var img=li_page.getElementsByTagName("img");
                //遍历上面获得的图标
                for (var i in img) {
                    //将所有图标的class清空，清除选中的样式
                    img[i].className = "";
                }
                if(winScrollY<960){
                    //如果可视区高度小于960px，给第一个图标添加效果为选中状态，以下同理
                    img[0].className="cur_page";
                }else if(winScrollY<1920){
                    img[1].className="cur_page";
                }else if(winScrollY<2880){
                    img[2].className="cur_page";
                }else {
                    img[3].className="cur_page";
                }
            }
            var card=document.getElementById("card_1");
            card.onmousemove=function(e){
                var x=e.offsetX;
                var y=e.offsetY;
                //x/2<card.style.width;
                card.style.background=`radial-gradient(circle at ${x}px ${y}px,#aaa,#000)`;
            }
            wechat.onmouseout=qq.onmouseout=function(){
                if(this==wechat)var i=0;else i=1;
                 img[i].style.display="none";
            }
            function new_date(){
                var now=new Date();
                if(now.getDate()<10)var d="0"+now.getDate();else d=now.getDate();
                if(now.getMinutes()<10)var m="0"+now.getMinutes();else m=now.getMinutes();
                if(now.getSeconds()<10)var s="0"+now.getSeconds();else s=now.getSeconds();
                div_date.innerHTML=`当前时间:${now.getFullYear()}年${now.getMonth()+1}月${d}日 ${now.getHours()}:${m}:${s}`;
            }new_date();
            setInterval(new_date,1000);
            var img_pro=document.querySelectorAll("#bg-page3>div>div>div>div>img");
            var imgHeight=window.getComputedStyle(img_pro[0]).height;
            for(var i of img_pro) {
                i.parentNode.parentNode.style.height=imgHeight;
                //i.parentElement.nextElementSibling.style.height=imgHeight;
            };

         };
        window.onload=window.onresize=bg;
})();