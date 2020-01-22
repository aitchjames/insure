class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".mobile-nav");    
        this.menuIconHamburger = document.querySelector(".mobile-hamburger");    
        this.menuIconClose = document.querySelector(".mobile-close");    
        this.menuContent = document.querySelector(".nav");
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuIconHamburger.classList.toggle("mobile-hamburger__is-open");
        this.menuIconClose.classList.toggle("mobile-close__is-visible");
        this.menuContent.classList.toggle("nav-menu__is-visible");
    }
}

new MobileMenu();