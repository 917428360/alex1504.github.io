
$(document).ready(function(){
	//平台、设备和操作系统 
        var system = { 
            win: false, 
            mac: false, 
            xll: false, 
            ipad:false 
        }; 
        //检测平台 
        var p = navigator.platform; 
        system.win = p.indexOf("Win") == 0; 
        system.mac = p.indexOf("Mac") == 0; 
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
        system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false; 
        //跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面 
        if (system.win || system.mac || system.xll||system.ipad) { 
 					$('.weibo').attr("href","http://weibo.com/alex1504")
        } else { 
 
           $('.weibo').attr("href","http://weibo.cn/alex1504")
        }
        
})