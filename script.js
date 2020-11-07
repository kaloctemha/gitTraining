document.querySelectorAll('div').forEach(element => {
    element.onmouseover = () => {
        element.style.color = 'red'
    }
    element.onmouseout = () => {
        element.style.color = 'black'
    }
});