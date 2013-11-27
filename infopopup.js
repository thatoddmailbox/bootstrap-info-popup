(function ( $ ) {
 
    $.infoPopup = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            type: "info",
            text: "Hello!"
        }, options );
 
        var $container = $("<center></center>");
        $container.css("position", "fixed");
        $container.css("top", "20px");
        $container.css("left", "0");
        $container.css("right", "0");
        $container.css("height", "0");
        $container.css("text-align", "center");
        
        var $thingToPop = $('<div class="alert"><button type="button" class="close" data-dismiss="alert">&times;</button>' + settings.text + '</div>');
        $thingToPop.css("display", "inline-block");
        $thingToPop.css("text-align", "center");
        $thingToPop.addClass("alert-" + settings.type);
        
        $container.append($thingToPop);
        $("body").append($container);
    };
 
}( jQuery ));