document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById('menuButton');
    var mobileMenuPanel = document.getElementById('mobilePanel');
    var mobileMenu = document.querySelector('.mobile-menu-items');
    
    menuButton.addEventListener('click', function(){
        if(mobileMenuPanel.classList.contains('reveal')) {
            mobileMenuPanel.classList.remove('reveal');
            mobileMenu.classList.remove('reveal');
            mobileMenuPanel.classList.add('hide');
            mobileMenu.classList.add('hide');
        } else {
            mobileMenuPanel.classList.add('reveal');
            mobileMenu.classList.add('slidedown');
        } 
    });
    mobileMenuPanel.addEventListener('animationend', function(event) {
        if(event.target.classList.contains('hide')) {
            event.target.classList.remove('hide');
            event.target.classList.add('hidden');
        }
    }); 
});