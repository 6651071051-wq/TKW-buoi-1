/* Chức năng: giỏ hàng, tìm kiếm, đếm ngược Deal sốc, đăng ký email. Nội dung sửa trong index.html */
function $(id){return document.getElementById(id)}
var cart=0,total=0;
function money(n){return n.toLocaleString("vi-VN")+"đ"}
function toast(m){var t=$("toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.x);toast.x=setTimeout(function(){t.classList.remove("show")},1800)}
document.addEventListener("click",function(e){
 var b=e.target.closest(".add");if(!b)return;
 var c=b.closest(".card");cart++;total+=Number(c.dataset.price)||0;
 $("cnt").textContent=cart;$("tot").textContent=money(total);
 toast("Đã thêm “"+c.querySelector("h3").textContent+"” vào giỏ")});
function doSearch(){var t=$("q").value.trim().toLowerCase();
 document.querySelectorAll(".card").forEach(function(c){c.style.display=c.querySelector("h3").textContent.toLowerCase().indexOf(t)>-1?"":"none"});
 $("best").scrollIntoView()}
$("go").onclick=doSearch;$("q").addEventListener("keydown",function(e){if(e.key=="Enter")doSearch()});
$("sub").onclick=function(){var m=$("mail"),ok=m.value.indexOf("@")>0;toast(ok?"Đã đăng ký nhận ưu đãi":"Vui lòng nhập email hợp lệ");if(ok)m.value=""};
function tick(){var el=$("count"),d=new Date(el.dataset.end)-new Date();
 if(isNaN(d)||d<0){el.innerHTML="<div>Đã kết thúc</div>";return}
 var v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60],l=["Ngày","Giờ","Phút","Giây"];
 el.innerHTML=v.map(function(x,i){return "<div>"+String(x).padStart(2,"0")+"<small>"+l[i]+"</small></div>"}).join("")}
tick();setInterval(tick,1000);
