function dropDown(){
    document.getElementById("drop-down-menu").classList.toggle("show");
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbttn')) {
        let dropdown = document.getElementsByClassName("drop-down-content");
        for(let i = 0; i < dropdown.length; i++) {
            let openDropdown = dropdown[i];
            if (openDropdown.classList.contains('show')) {
                
                openDropdown.classList.remove('show');
            }
        }
    }
});