var main = document.querySelector("#main");
var cur = document.querySelector(".cursor");

main.addEventListener("mousemove", function(details){
    cur.style.left = details.x+"px"
    cur.style.top = details.y+"px"
})