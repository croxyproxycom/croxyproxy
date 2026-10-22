// PREVIEW MODE: proxy backend abhi connected nahi hai. Baad me Cloudflare Worker ka address PROXY_ENDPOINT me daalenge.
// Cloudflare Worker / backend ka address yaha daalo. Final URL = PROXY_ENDPOINT + encoded address
var PROXY_ENDPOINT = ""; // baad me yaha Worker address daalna, e.g. "https://proxy.example.workers.dev/?url="
var f=document.getElementById("f"),u=document.getElementById("u"),m=document.getElementById("msg");if(f){
function target(v){v=v.trim();if(!v)return"";
if(/^https?:\/\//i.test(v))return v;
if(/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(v))return"https://"+v;
return"https://start.duckduckgo.com/?q="+encodeURIComponent(v)}
function go(v){var t=target(v);if(!t){m.textContent="Enter a website address first.";return}
if(!PROXY_ENDPOINT){m.textContent="Preview mode: the proxy backend is not connected yet. This is only a design preview.";return}
m.textContent="Opening "+t+" …";location.href=PROXY_ENDPOINT+encodeURIComponent(t)}
f.addEventListener("submit",function(e){e.preventDefault();go(u.value)});
document.querySelectorAll(".quick button").forEach(function(b){b.addEventListener("click",function(){go(b.dataset.u)})});}
