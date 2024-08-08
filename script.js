
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})


function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}