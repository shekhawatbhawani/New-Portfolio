console.log("Jai Shree Ram")

// Nav Toggle button 

let button = document.querySelector(".menu-icon")
let toggleNav = document.querySelector("#toggle-nav")
console.log(button)


button.addEventListener("click", function(){
	let ans = toggleNav.classList.toggle("active")
    console.log("Jai Shree Ram");
    console.log(ans);
    
});


// nav activate on scroll 

let nav = document.querySelectorAll("nav li a")
let section = document.querySelectorAll("section")

console.log(nav);
console.log(section);


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            nav.forEach(link => {
                link.classList.remove("active");
                document.querySelector("nav li a[href*=" + id + "]").classList.add("active");
            });
        }


    });

}
// sticky nav bar
let header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

// scroll reveal 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});







