document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById('menuButton');
    var mobileMenuPanel = document.querySelector('.mobile-wrapper');
    var mobileMenu = document.querySelector('.mobile-menu-items');
    
    //temporary stub
    var content = document.querySelector('.content');
    
    menuButton.addEventListener('click', function(){
        if(mobileMenuPanel.classList.contains('reveal')) {
            mobileMenuPanel.classList.remove('reveal');
            mobileMenu.classList.remove('reveal');
            mobileMenuPanel.classList.add('hide');
            mobileMenu.classList.add('hide');
            content.classList.remove('blur');
        } else {
            mobileMenuPanel.classList.remove('hidden');
            mobileMenuPanel.classList.add('reveal');
            mobileMenu.classList.add('reveal');
            content.classList.add('blur');
        } 
    });
    mobileMenuPanel.addEventListener('animationend', function(event) {
        if(event.target.classList.contains('hide')) {
            mobileMenuPanel.classList.remove('hide');
            mobileMenuPanel.classList.add('hidden');
            mobileMenu.classList.remove('hide');
        }
    }); 
});