#Estimated Reading Time

A simple, lightweight jQuery plugin used to display an estimated time to read some text.

##Instructions

Include jQuery and the plugin in the head or footer of your page.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script src="/js/plugins/estimatedReadingTime.js"></script>
    
Create an element on your page with the ID of 'eta' where the estimated reading time will display.

	<div id="eta"></div>
	
Optionally you can create an element with whatever class or ID you want to display the total word count. The word count will only be displayed if you set the wordCountTarget parameter when initiating the plugin (see below).

	<div id="word-count"></div>
    
Initialize the plugin targeting the class, ID or element that contains the text in which you want to estimate the reading time for. 

	$('article').estimatedReadingTime();
	
####Options

1. readingTimeTarget: "id"
<br />A string that defines the ID of the element that will store the estimated reading time (default: 'eta').

2. wordCountTarget: "id"
<br />A string that defines the ID of the element that will store the total word count (default: ''). 

3. readingSpeed: integer
<br />An integer that defines the words per minute at which to calculate the estimated reading time (default: 270).

4. round: boolean
<br />A bollean value that indicates whether or not the estimated reading time should be rounded to the closest minute (default: true).

#####Example:

		$(function() {
			
				$('article').estimatedReadingTime({
					readingTimeTarget: 'reading-time',
					wordCountTarget: 'word-count',
					readingSpeed: 275,
					round: false,
				});
				
			});