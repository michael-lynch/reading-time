/*!

Name: Reading Time
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: August 14, 2013
Date Updated: June 19, 2015
Licensed under the MIT license

*/

;(function($) {

    $.fn.readingTime = function(options) {

		//define default parameters
        var defaults = {
	        readingTimeTarget: '.eta',
	        wordCountTarget: null,
	        wordsPerMinute: 270,
	        round: true,
	        lang: 'en',
			lessThanAMinuteString: '',
			prependTimeString: '',
			prependWordString: '',
	        remotePath: null,
	        remoteTarget: null,
	        success: function() {},
	        error: function() {}
        },
        plugin = this,
        el = $(this);

        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        //define vars
        var s = plugin.settings;
        
        //if no element was bound
		if(!this.length) {
		
			//run error callback
			s.error.call(this); 
			
			//return so chained events can continue
			return this; 
		}
        
        //if s.lang is set to italian
        if(s.lang == 'it') {
			
        	var lessThanAMinute = s.lessThanAMinuteString || "Meno di un minuto";
        	
        	var minShortForm = 'min';
	     
        //if s.lang is set to french
        } else if(s.lang == 'fr') {
			
        	var lessThanAMinute = s.lessThanAMinuteString || "Moins d'une minute";
        	
        	var minShortForm = 'min';
	     
	    //if s.lang is set to german  
        } else if(s.lang == 'de') {
        
	        var lessThanAMinute = s.lessThanAMinuteString || "Weniger als eine Minute";
	        
	        var minShortForm = 'min';

        //if s.lang is set to spanish
        } else if(s.lang == 'es') {
	        
	        var lessThanAMinute = s.lessThanAMinuteString || "Menos de un minuto";
	        
	        var minShortForm = 'min';
	        
        //if s.lang is set to dutch
        } else if(s.lang == 'nl') {
	        
	        var lessThanAMinute = s.lessThanAMinuteString || "Minder dan een minuut";
	        
	        var minShortForm = 'min';
	
		//if s.lang is set to slovak
        } else if(s.lang == 'sk') {
	        
	        var lessThanAMinute = s.lessThanAMinuteString || "Menej než minútu";
	        
	        var minShortForm = 'min';
	
		//if s.lang is set to czech
        } else if(s.lang == 'cz') {
	        
	        var lessThanAMinute = s.lessThanAMinuteString || "Méně než minutu";
	        
	        var minShortForm = 'min';

		//if s.lang is set to Hungarian
        } else if(s.lang == 'hu') {
	        
	        var lessThanAMinute = s.lessThanAMinuteString || "Kevesebb mint egy perc";
	        
	        var minShortForm = 'perc';

	    //default s.lang is english
        } else {
	        
	        var lessThanAMinute = s.lessThanAMinuteString || 'Less than a minute';
	        
	        var minShortForm = 'min';
	        
        }
        
        var setTime = function(text) {
        
        	if(text !== '') {

		        //split text by spaces to define total words
				var totalWords = text.trim().split(/\s+/g).length;
				
				//define words per second based on words per minute (s.wordsPerMinute)
				var wordsPerSecond = s.wordsPerMinute / 60;
				
				//define total reading time in seconds
				var totalReadingTimeSeconds = totalWords / wordsPerSecond;
				
				//define reading time in minutes
				//if s.round is set to true
				if(s.round === true) {
	
					var readingTimeMinutes = Math.round(totalReadingTimeSeconds / 60);
	
				//if s.round is set to false
				} else {
	
					var readingTimeMinutes = Math.floor(totalReadingTimeSeconds / 60);
	
				}
	
				//define remaining reading time seconds
				var readingTimeSeconds = Math.round(totalReadingTimeSeconds - readingTimeMinutes * 60);
				
				//if s.round is set to true
				if(s.round === true) {
					
					//if minutes are greater than 0
					if(readingTimeMinutes > 0) {
				
						//set reading time by the minute
						$(s.readingTimeTarget).text(s.prependTimeString + readingTimeMinutes + ' ' + minShortForm);
					
					} else {
						
						//set reading time as less than a minute
						$(s.readingTimeTarget).text(s.prependTimeString + lessThanAMinute);
						
					}
				
				//if s.round is set to false	
				} else {
				
					//format reading time
					var readingTime = readingTimeMinutes + ':' + readingTimeSeconds;
					
					//set reading time in minutes and seconds
					$(s.readingTimeTarget).text(s.prependTimeString + readingTime);
					
				}
		
				//if word count container isn't blank or undefined
				if(s.wordCountTarget !== '' && s.wordCountTarget !== undefined) {
				
					//set word count
					$(s.wordCountTarget).text(s.prependWordString + totalWords);
				
				}
				
				//run success callback
				s.success.call(this);
				
			} else {
				
				//run error callback
				s.error.call(this, 'The element is empty.');
			}
		
		};

		//for each element
		el.each(function() {
        
	        //if s.remotePath and s.remoteTarget aren't null
	        if(s.remotePath != null && s.remoteTarget != null) {

	        	//get contents of remote file
	    		$.get(s.remotePath, function(data) {
					
					//set time using the remote target found in the remote file
					setTime($('<div>').html(data).find(s.remoteTarget).text());
					
				});
		        
	        } else {
	
		        //set time using the targeted element
		        setTime(el.text());
	        }
        });
    }

})(jQuery);
