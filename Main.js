const css = ['do-', '-effect', 'animate__animated'];

document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll(`.${css[2]}`);
    elements.forEach(element => {
        const elementPos = element.getBoundingClientRect();
        if (elementPos.y + 20 < window.innerHeight) {
            element.classList.forEach(cssClass => {
                if (cssClass.includes(css[0]) && cssClass.includes(css[1]) && element.classList.contains(css[2])) {
                    element.classList.add(cssClass.replace(css[0], '').replace(css[1], ''));
                    element.classList.remove(cssClass);
                }
            })
        }
    });
});
