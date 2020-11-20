function clicked(event) {
    const id = event.target.id;
    let element = document.getElementById(id);
    if (element) {
        let counter = element.innerText === '' ? 0 : parseInt(element.innerText);
        element.innerHTML = counter + 1;
    }
}