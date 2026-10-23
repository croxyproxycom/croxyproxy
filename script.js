// PROXY_ENDPOINT: Cloudflare Worker ka address baad me yaha daalna, e.g. "https://proxy.example.workers.dev/?url="
var PROXY_ENDPOINT = "";
(function(){
var f=document.getElementById("f"),u=document.getElementById("u"),m=document.getElementById("msg");
function target(v){v=v.trim();if(!v)return"";
if(/^https?:\/\//i.test(v))return v;
if(/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(v))return"https://"+v;
return"https://start.duckduckgo.com/?q="+encodeURIComponent(v)}
function go(v){var t=target(v);if(!t){m.textContent="Enter a website address first.";return}
if(!PROXY_ENDPOINT){m.textContent="Preview mode: the proxy backend is not connected yet.";return}
m.textContent="Opening "+t+" …";location.href=PROXY_ENDPOINT+encodeURIComponent(t)}
if(f)f.addEventListener("submit",function(e){e.preventDefault();go(u.value)});
document.querySelectorAll(".quick button").forEach(function(b){b.addEventListener("click",function(){go(b.dataset.u)})});
document.querySelectorAll(".ad").forEach(function(a){function c(){if(a.querySelector("iframe,ins[data-ad-status=filled]"))a.classList.add("on")}c();new MutationObserver(c).observe(a,{childList:true,subtree:true,attributes:true})});
})();
