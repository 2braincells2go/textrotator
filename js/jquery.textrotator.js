(function($) {
    $.textRotator = function(element, options) {
        var defaults = {
			random : true,
			fadeIn : 1000,
			fadeOut : 500,
			duration : 5000  

        }
        var plugin = this;
        plugin.settings = {}
		plugin.globals = {
			child_select : 1,
			$child_select : null
		}
        var $element = $(element), element = element;    /* reference to the actual DOM element*/
        // the "constructor" method that gets called when the object is created
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
			//console.log('init',plugin.settings);
			if (plugin.settings.random){
				plugin.globals.child_select = Math.floor((Math.random() * $element.children().length) + 1);
			}
			plugin.globals.$child_select = $element.find('li:nth-child('+ plugin.globals.child_select+')');
			plugin._fadeIn();
		}
		//resizes main image
		plugin._fadeIn = function() {			
			plugin.globals.$child_select.fadeIn({
					duration : plugin.settings.fadeIn,
					easing: 'swing',
					complete: function () {
						if ($element.find('li').length > 1) {							
							plugin._fadeOut();
						}
						
					}
				
				});		 
		}		
		plugin._fadeOut = function() {				
			plugin.globals.$child_select.delay(plugin.settings.duration).fadeOut({
				duration : plugin.settings.fadeOut,
				easing: 'swing',
				complete: function () {
					if  (plugin.globals.$child_select.is('li:last')){
						plugin.globals.$child_select = $element.find('li:first');													
					}
					else {
						plugin.globals.$child_select = plugin.globals.$child_select.next('li');								
					}
					plugin._fadeIn();						
				}				
			});		 			
		}
        plugin.init();
    }
    // add the plugin to the jQuery.fn object
    $.fn.textRotator = function(options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('textRotator')) {
                var plugin = new $.textRotator(this, options);
                $(this).data('textRotator', plugin);
            }
        });
    }
})(jQuery);
