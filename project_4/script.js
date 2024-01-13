let elems = document.querySelectorAll('.elem');

elems.forEach((elem) => {
    elem.addEventListener('mouseleave', () => {
        elem.childNodes[3].style.opacity = 0;
    });
    elem.addEventListener('mouseenter', () => {
        elem.childNodes[3].style.opacity = 1;
    });
    elem.addEventListener('mousemove', (dets) => {
        // elem.childNodes[3].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        elem.childNodes[3].style.top = dets.y + 'px';
        elem.childNodes[3].style.left = dets.x + 'px';
    })
});