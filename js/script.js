
let nav = document.querySelector("#full1");
window.addEventListener("scroll", function(){
    let scroll_valu = this.window.scrollY
    if (scroll_valu>150) {
       nav.classList.add("sticky") 
    } else {
        nav.classList.remove("sticky")
    }
})