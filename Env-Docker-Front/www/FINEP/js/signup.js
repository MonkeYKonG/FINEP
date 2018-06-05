
 $(document).ready(function () {
 $("#showHide").click(function () {
 if ($(".password").attr("type")=="password") {
 $(".password").attr("type", "text");
 document.getElementById('showHide').innerHTML="HIDE";
 }
 else{
 $(".password").attr("type", "password");
 document.getElementById('showHide').innerHTML="SHOW";
 }

 });
  $("#showHide1").click(function () {
 if ($(".password").attr("type")=="password") {
 $(".password").attr("type", "text");
 document.getElementById('showHide1').innerHTML="HIDE";
 }
 else{
 $(".password").attr("type", "password");
 document.getElementById('showHide1').innerHTML="SHOW";
 }

 });
 });
