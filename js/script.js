document.querySelectorAll('div').forEach(element => {
    element.onmouseover = () => {
        element.style.color = 'red'
    }
    element.onmouseout = () => {
        element.style.color = 'black'
    }
});


function exportAsPNG() {
    console.log();
    html2canvas(document.querySelector("body")).then(canvas => {
        canvas.toBlob(function (blob) {
            saveAs(blob, "git-cheat-sheet.png");
            let file = new Blob([blob], { type: "application/octet-stream" });
            let blobURL = URL.createObjectURL(file);
            window.location.href = blobURL;
        })
    });
}