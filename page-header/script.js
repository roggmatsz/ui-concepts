document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector('.menu-wrapper');
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
            menuButton.classList.remove('active');
        } else {
            mobileMenuPanel.classList.remove('hidden');
            mobileMenuPanel.classList.add('reveal');
            mobileMenu.classList.add('reveal');
            content.classList.add('blur');
            menuButton.classList.add('active');
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