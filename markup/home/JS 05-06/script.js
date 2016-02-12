 function trim(string) {
     return string.replace(/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, '');
 }
 var init = 0;
 var startDate;
 var clocktimer;

 function clearFields() {
     init = 0;
     clearTimeout(clocktimer);
     document.querySelector('.clockS').innerHTML = '00:00:00.00';
 }

 function clearALL() {
     clearFields();
     document.getElementById('marker').innerHTML = '';
 }

 function startTIME() {
     var thisDate = new Date();
     var t = thisDate.getTime() - startDate.getTime();
     var ms = t % 1000;
     t -= ms;
     ms = Math.floor(ms / 10);
     t = Math.floor(t / 1000);
     var s = t % 60;
     t -= s;
     t = Math.floor(t / 60);
     var m = t % 60;
     t -= m;
     t = Math.floor(t / 60);
     var h = t % 60;
     if (h < 10) h = '0' + h;
     if (m < 10) m = '0' + m;
     if (s < 10) s = '0' + s;
     if (ms < 10) ms = '0' + ms;
     if (init == 1) {
         document.querySelector('.clockS').innerHTML = h + ':' + m + ':' + s + '.' + ms;
     }
     clocktimer = setTimeout("startTIME()", 10);
 }

 function findTIME() {
     console.log(document.querySelector('.clockS').innerHTML);
     if (init == 0) {
         startDate = new Date();
         startTIME();
         init = 1;
     } else {
         var str = trim(document.querySelector('.clockS').innerHTML);
         document.getElementById('marker').innerHTML = document.querySelector('.clockS').innerHTML + '<br>' + document.getElementById('marker').innerHTML;
     }
 }