window.onload = function(){

    //获取节点
    var img = document.querySelectorAll("img");
    var wrapper = document.querySelector(".wrapper");
    var pre = document.querySelector(".pre-page");
    var next = document.querySelector(".next-page");
    var doms = document.getElementsByTagName("span");
    var index = 1;
    var timer = null;
    //点击按钮调用函数
    pre.onclick= function(){
        clearInterval(timer)
        pre_page(); 
        timer=setInterval(next_page, 1500)
    }
    next.onclick = function(){
        clearInterval(timer)
        next_page();
        timer=setInterval(next_page, 1500)
    }

    //设置向前向后按钮函数  
    function next_page(){
        index++;
        wrapper.style.transition = "all 0.7s ease-in-out";
        Show();
        if(index > img.length-2){
            index = 1;
            //设置定时
            setTimeout(function(){
                wrapper.style.transition = "none";
                Show();
            },750)
        }
        active()
    }
    function pre_page(){
        index--;
        wrapper.style.transition = "all 0.7s ease-in-out";
        Show();
        if(index < 1){
            index = 5;
            setTimeout(function(){
                wrapper.style.transition = "none";
                Show();
            },750)
        }
        active()
    }
    
    // 设置定时动画
    timer = setInterval(next_page,1500);

    //底部圆点按钮函数
    for(var i=0; i<doms.length; i++){
        //添加点击监听事件
        doms[i].addEventListener("click",function(){
            clearInterval(timer)
            var n = parseInt(this.innerHTML);
            //同步前后index的值
            index = n-1;
            next_page();
            timer=setInterval(next_page, 1500)
        })
    }
    //为底部圆点添加active类
    function active(){
        for(var j = 0; j<doms.length;j++){
            doms[j].className="";
        }
        doms[index-1].className="active"
    }
    //切换函数
    function Show() {
        wrapper.style.left = "-" + index * 100 + "vw";
    }
}