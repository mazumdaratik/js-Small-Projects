var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check =0;

btn.addEventListener("click", function(){
    if(check === 0) {
        istatus.innerHTML = "Request Sent"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Request"
        check = 1
    } else {
        istatus.innerHTML = "Mutual with 5 others"
        istatus.style.color = "red"
        btn.innerHTML = "Remove Friend"

        check = 0
    }
})
