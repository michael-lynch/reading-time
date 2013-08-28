/*!

Name: Estimated Reading Time
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: August 14, 2013
Licensed under the MIT license

*/

;(function($) {

    $.fn.estimatedReadingTime = function(options) {
    
    	//return if no element was bound
		//so chained events can continue
		if(!this.length) { 
			return this; 
		}

		//define default parameters
        var defaults = {
	        readingTimeTarget: 'eta',
	        wordCountTarget: '',
	        readingSpeed: 270,
	        round: true
        }
        
        //define plugin
        var plugin = this;

        //define element
        var el = $(this);

        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        //define vars
        var readingTimeTarget = plugin.settings.readingTimeTarget;
        var wordCountTarget = plugin.settings.wordCountTarget;
        var readingSpeed = plugin.settings.readingSpeed;
        var round = plugin.settings.round;

        //define text
        var text = el.text();

        //split text by spaces to define total words
		var totalWords = text.split(' ').length;
		
		//define words per second based on words per minute (readingSpeed)
		var wordsPerSecond = readingSpeed / 60;
		
		//define total reading time in seconds
		var totalReadingTimeSeconds = totalWords / wordsPerSecond;
		
		//define reading time in minutes
		var readingTimeMinutes = Math.round(totalReadingTimeSeconds / 60);
		
		//define remaining reading time seconds
		var readingTimeSeconds = Math.round(totalReadingTimeSeconds - readingTimeMinutes * 60);
		
		//if round is set to true
		if(round === true) {
			
			//if minutes are greater than 0
			if(readingTimeMinutes > 0) {
		
				//set reading time by the minute
				$('#'+readingTimeTarget).text(readingTimeMinutes + ' Min');
			
			} else {
				
				//set reading time as less than a minute
				$('#'+readingTimeTarget).text('Less than a minute');
				
			}
		
		//if round is set to false	
		} else {
		
			//format reading time
			var readingTime = readingTimeMinutes + ':' + readingTimeSeconds;
			
			//set reading time in minutes and seconds
			$('#'+readingTimeTarget).text(readingTime + ' Min');
			
		}

		//if word count container isn't blank or undefined
		if(wordCountTarget !== '' && wordCountTarget !== undefined) {
		
			//set word count
			$('#'+wordCountTarget).text(totalWords);
		
		}
        

    }

})(jQuery);