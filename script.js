// Ads: jab asli ad load hota hai tab "Advertisement" label dikhta hai.
(function(){
document.querySelectorAll(".ad").forEach(function(a){function c(){if(a.querySelector("iframe,ins[data-ad-status=filled]"))a.classList.add("on")}c();new MutationObserver(c).observe(a,{childList:true,subtree:true,attributes:true})});
})();
