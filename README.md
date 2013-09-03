#Reading Time

A simple, lightweight jQuery plugin used to display an estimated time to read some text.

<a href="http://michael-lynch.github.io/estimated-reading-time/" target="_blank">See a demo</a>

<a href="http://michael-lynch.github.io/estimated-reading-time/remote.html" target="_blank">See a demo using a remote file</a>

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

<li>remotePath: "path"
<br />A string that indicates the path to the remote file (default: null).
</li>

<li>remoteTarget: "id"
<br />A string that indicates the ID of the element in the remote file that contains the text in which you want to estimate the reading time of (default: null).
</li>

<li>wordsPerMinute: integer
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
					wordsPerMinute: 275,
					round: false,
					lang: 'fr',
				});
				
			});
			
			
#####Using a Remote File

If you want to display the estimated reading time of copy that lives in a remote file, you would initialize the plugin on the body and use the remotePath and remoteTarget options.

In this case, the plugin would display the amount of text contained in the element with the ID of "my-article" in the file called "remote.html."

		$(function() {
		
			$('body').readingTime({
				wordCountTarget: 'words',
				remotePath: 'the/path/remote.html',
				remoteTarget: 'my-article'
			});
			
		});