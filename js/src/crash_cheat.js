<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         
         document.title = '╭(°A°`)╮ 你不理我了';
         clearTimeout(titleTime);
     }
     else {
         
         document.title = '(ฅ>ω<*ฅ) 么么哒';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });