import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

// create objects
var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();

// reusing the RevealOnScroll-Class
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

