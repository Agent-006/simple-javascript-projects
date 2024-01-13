let main = document.querySelector('#main');
let crsr = document.querySelector('#cursor');

main.addEventListener('mousemove', (dets) => {
    crsr.style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px)`;
})