// Optional JS to handle specific actions (for now, this is not necessary for download functionality)
document.querySelector('.download-btn').addEventListener('click', function() {
    console.log('Download button clicked!');
});


var sidenav = document.querySelector(".side-navbar");
/*var navbarToggle = document.querySelector(".navbar-menu-toggle");
*/
function shownavbar() {
    sidenav.style.left = "0";
}

function closenavbar() {
    sidenav.style.left = "-60%";
}




