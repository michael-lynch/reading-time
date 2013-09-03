#Reading Time

A simple, lightweight jQuery plugin used to display an estimated time to read some text.

<a href="http://michael-lynch.github.io/estimated-reading-time/" target="_blank">See a demo</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script src="/js/plugins/readingTime.js"></script>
    
Create an element on your page with the ID of 'eta' where the estimated reading time will display.

	<div id="eta"></div>
	
Optionally you can create an element with whatever class or ID you want to display the total word count. The word count will only be displayed if you set the wordCountTarget parameter when initiating the plugin (see below).

	<div id="word-count"></div>
    
Initialize the plugin targeting the class, ID or element that contains the text in which you want to estimate the reading time of. 

	$('article').readingTime();
	
####Options

<ol>

<li>
readingTimeTarget: "id"
<br />A string that defines the ID of the element that will store the estimated reading time (default: 'eta').
</li>

<li>wordCountTarget: "id"
<br />A string that defines the ID of the element that will store the total word count (default: ''). 
</li>

<li>readingSpeed: integer
<br />An integer that defines the words per minute at which to calculate the estimated reading time (default: 270).
</li>

<li>round: boolean
<br />A boolean value that indicates whether or not the estimated reading time should be rounded to the closest minute (default: true).
</li>

<li>lang: "en / fr / de"
<br />A two letter string that indicates the language to be used (default: "en").
</li>

</ol>

#####Example:

		$(function() {
			
				$('article').readingTime({
					readingTimeTarget: 'reading-time',
					wordCountTarget: 'word-count',
					readingSpeed: 275,
					round: false,
					lang: 'fr',
				});
				
			});