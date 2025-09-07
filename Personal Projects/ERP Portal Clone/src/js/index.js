
const toggleButton = document.getElementById("toggle-button");
const sideBar = document.getElementById("side-bar");

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle("rotate");

    if(sideBar.classList.contains("close")) {
            sideBar.classList.toggle("close");
    }
}

function toggleSideBar() {
    sideBar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");

    Array.from(sideBar.getElementsByClassName('show')).forEach(element => {
        element.classList.remove('show')
        element.previousElementSibling.classList.remove('rotate')
    });



}