let nav = document.querySelector('nav')

const topThreshold = 10;

window.addEventListener("scroll", () =>{
 if(window.scrollY > topThreshold) {
  nav.classList.add("bg-white");
 } else {
  nav.classList.remove("bg-white");
 }
})




// const counts = document.querySelectorAll('.count')
// const speed = 97
// counts.forEach((counter) => {
//     function upData(){
//         const target = Number(counter.getAttribute('data-target'))
//         const count =Number(counter.innerText)
//         const inc = target / speed
//         if(count < target){
//             counter.innerText = Math.floor(inc + count)
//             setTimeout(upData, 1)
//         }else{
//             counter.innerText = target
//         }

//     }
//     upData()
// })



const counts = document.querySelectorAll('.count');
const speed = 97;
let animationStarted = false;

function checkIfInView() {
    counts.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        const isInView = (rect.top <= window.innerHeight && rect.bottom >= 0);
        
        if (isInView && !counter.classList.contains('animated')) {
            counter.classList.add('animated');
            animateCounter(counter);
        }
    });
}

function animateCounter(counter) {
    const target = Number(counter.getAttribute('data-target'));
    const count = Number(counter.innerText);
    const inc = target / speed;
    
    if (count < target) {
        counter.innerText = Math.floor(inc + count);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
}

// Initial check
checkIfInView();

// Check on scroll
window.addEventListener('scroll', checkIfInView);