(function ( $ ) {
	var currentPageName = document.location.pathname.match(/[^\/]+$/)[0];
	var firstCheck=0;
	$.scrollAdjuster = function(element, options) {
		var plugin = this;
		
		plugin.settings = {focus:undefined,variation:0};
		var $element = $(element), 
        element = element;  
		
		plugin.init = function() {
			plugin.settings = $.extend({focus:undefined,variation:0}, options);
			if(firstCheck==0){
				//alert('init');
				
				//if(sessionStorage.hasOwnProperty(currentPageName)){
					if(sessionStorage.getItem(currentPageName)){
					var sessionData = JSON.parse(sessionStorage[currentPageName]);
					
					if($.trim(sessionData.focus)!='' && sessionData.focus!= undefined ){
						var hgt = $('#'+sessionData.focus).offset().top-sessionData.variation;						
						$('html, body').animate({
									scrollTop: hgt,		 
						},500,function(){
							$('#'+sessionData.focus).focus();
							 sessionStorage.removeItem(currentPageName);
						});					
					}
					else{
						$('html, body').animate({
							scrollTop: sessionData.scrollTo,		 
						}, 500,function () {
							 sessionStorage.removeItem(currentPageName);
						});
					}
				}				
				firstCheck=1;
			}
		}
	
		plugin.updateStorage = function(scrollTo) {
			sessionStorage[currentPageName] = JSON.stringify({'scrollTo':scrollTo,'focus':plugin.settings.focus,'variation':plugin.settings.variation});
        }
		plugin.init();
	}
	
	$.fn.scrollAdjuster = function(options) {
		 return $(this).each(function() {
			if (undefined == $(this).data('scrollAdjuster')) {
				var plugin = new $.scrollAdjuster(this, options);
				$(this).data('scrollAdjuster', plugin);
				$(this).on('click',function(){
					plugin.updateStorage($("body").scrollTop());
				});
			}
		});
	}	
}( jQuery ));	