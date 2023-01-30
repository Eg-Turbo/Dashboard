li = document.querySelectorAll(".main ul li")
frame = document.querySelector("iframe")
slide = document.querySelectorAll(".slide")
hostserv = document.querySelectorAll(".host")

li.forEach(ele => {
  ele.addEventListener("click",()=>{
    for(let i =0 ; i<li.length ; i++) {
        li[i].classList.remove("active")
    }
    ele.classList.add("active")
    frame.src = `./pages/${ele.dataset.file}`
  })  
});
slide.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        ele.classList.toggle("activ-option")
    })
})
hostserv.forEach(ele=>{
    ele.addEventListener("click",()=>{
        for(let i =0 ; i<hostserv.length ; i++) {
            hostserv[i].classList.remove("active-server")
        }
        ele.classList.add("active-server")
    })
})