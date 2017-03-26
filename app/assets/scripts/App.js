import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

// create objects
var mobileMenu = new MobileMenu();

// reusing the RevealOnScroll-Class
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");