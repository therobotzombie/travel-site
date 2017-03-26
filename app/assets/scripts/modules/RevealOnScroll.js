// works as long as jquery is in our node_modules folder
import $ from 'jquery';
// Waypoints is a library that makes it easy to execute a function whenever you scroll to an element.
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els; // four items
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }
    createWaypoints() {
        var that = this;

        this.itemsToReveal.each(function() {
            var currentItem = this; // points to the current DOM-element

            // create new object that is an instance of th Waypoint Class
            new Waypoint({
                element: currentItem, // "this" here would only point to the waypoint object
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;