import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }
    events() {
        // bind: anything we include into the bind() will be used
        // as the "this"-keyword when this method runs
        // we want it to point to our object --> "this"
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    // this.menuContent... runs in response of the events() method
    // --> "this" gets set to the DOM-event, that it is fired from == menuIcon
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;