#Reading Time

A simple, lightweight jQuery plugin used to display an estimated time to read some text.

<a href="http://michael-lynch.github.io/reading-time/" target="_blank">See a demo</a>

<a href="http://michael-lynch.github.io/reading-time/remote.html" target="_blank">See a demo using a remote file</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script src="/js/plugins/readingTime.js"></script>
    
Inside the element that contains your copy, create an element with the class of 'eta' where the estimated reading time will display.

	<article>
	
		<div class="eta"></div>
		
		//COPY GOES HERE
	
	</article>
	
Also inside the element that contains your copy, you can create an element with whatever class or ID you want to display the total word count.

<em>The word count will only be displayed if you set the wordCountTarget parameter when initiating the plugin (see below).</em>

	<article>
	
		<div class="eta"></div>
		
		<div class="word-count"></div>
		
		//COPY GOES HERE
	
	</article>
    
Initialize the plugin targeting the class, ID or element that contains the text in which you want to estimate the reading time of. 

	$('article').readingTime();
	
####Options

<ol>

<li>
readingTimeTarget: "id / class / element"
<br />A string that defines the ID, class or element that will store the estimated reading time (default: 'eta').
</li>

<li>wordCountTarget: "id / class / element"
<br />A string that defines the ID, class or element that will store the total word count (default: ''). 
</li>

<li>remotePath: "path"
<br />A string that indicates the path to the remote file (default: null).
</li>

<li>remoteTarget: "id / class / element"
<br />A string that defines the ID, class or element in the remote file that contains the text in which you want to estimate the reading time of (default: null).
</li>

<li>wordsPerMinute: integer
<br />An integer that defines the words per minute at which to calculate the estimated reading time (default: 270).
</li>

<li>round: boolean
<br />A boolean value that indicates whether or not the estimated reading time should be rounded to the closest minute (default: true).
</li>

<li>lang: "en / fr / de / es / nl"
<br />A two letter string that indicates the language to be used (default: "en").
</li>

<li>lessThanAMinuteString: string
<br />A string that changes the default "Less than a minute" copy (default: '').
</li>

<li>prependTimeString: string
<br />A string that is prepended before the estimated reading time (default: '').
</li>

<li>prependWordString: string
<br />A string that is prepended before the total word count (default: '').
</li>

</ol>

#####Example:

		$(function() {
			
			$('article').readingTime({
				readingTimeTarget: '.reading-time',
				wordCountTarget: '.word-count',
				wordsPerMinute: 275,
				round: false,
				lang: 'fr',
			});
				
		});
			
			
#####Multiple Articles

Often you will have multiple articles or excerpts on a single page, in which case you would want to iterate through each.

		$(function() {
		
			$('article').each(function() {
			
				$(this).readingTime();
				
			});
				
		});


#####Using a Remote File

If you want to display the estimated reading time of copy that lives in a remote file, you would initialize the plugin on the body and use the remotePath and remoteTarget options.

In this case, the plugin would display the amount of text contained in the element with the class of "my-article" in the file called "remote.html."

		$(function() {
		
			$('body').readingTime({
				remotePath: 'the/path/remote.html',
				remoteTarget: '.my-article'
			});
			
		});
