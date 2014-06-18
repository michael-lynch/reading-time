#Reading Time

A simple, lightweight jQuery plugin used to display an estimated time to read some text.

<a href="http://michael-lynch.github.io/reading-time/" target="_blank">See a demo</a>

<a href="http://michael-lynch.github.io/reading-time/remote.html" target="_blank">See a demo using a remote file</a>

<a href="http://michael-lynch.github.io/reading-time/remote-multiple.html" target="_blank">See a demo using multiple remote files</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script src="/js/plugins/readingTime.js"></script>
```
    
Create an element with the class of 'eta' where the estimated reading time will display.

```html
<article>
	<div class="eta"></div>
</article>
```
	
Optionally you can also create an element with whatever class or ID you want to display the total word count.

<em>The word count will only be displayed if you set the wordCountTarget parameter when initiating the plugin (see below).</em>

```html
<article>
	<div class="eta"></div>
	
	<div class="word-count"></div>
</article>
```
    
Initialize the plugin targeting the class, ID or element that contains the text in which you want to estimate the reading time of. 

```js
$('article').readingTime();
```
	
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

```js
$(function() {
	var $article = $('article');
	
	$article.readingTime({
		readingTimeTarget: $article.find('.reading-time'),
		wordCountTarget: $article.find('.word-count'),
		wordsPerMinute: 275,
		round: false,
		lang: 'fr'
	});
});
```
			
#####Multiple Articles

Often you will have multiple articles or excerpts on a single page, in which case you would want to iterate through each.

```js
$(function() {

	$('article').each(function() {
	
		$(this).readingTime({
			readingTimeTarget: $(this).find('.reading-time')
		});
		
	});
		
});
```

#####Using a Remote File

If you want to display the estimated reading time of copy that lives in a remote file, you would initialize the plugin and use the remotePath and remoteTarget options.

In this case, the plugin would display the amount of text contained in the element with the class of "my-article" in the file called "remote.html."

```js
$(function() {

	$('article').readingTime({
		remotePath: 'the/path/remote.html',
		remoteTarget: '.my-article'
	});
	
});
```
		
<a href="http://michael-lynch.github.io/reading-time/remote.html" target="_blank">See a demo using a remote file</a>
		
#####Using Multiple Remote Files

If you want to display the estimated reading time of copy for multiple articles that live in remote files, you would want to iterate through each article on your page and use data attributes to declare the file and target for each article. Be sure to initialize the plugin on the body and use the remotePath and remoteTarget options.

Here is what your markup might look like <em>(notice the data-file and data-target attributes on each article)</em>:

```html
<!-- first article excerpt -->
<article data-file="articles/a.html" data-target="article">

	<h1>Magna Lorem Quam Nullam</h1>
	
	<p>By: Mike Lynch</p>
	
	<!-- reading time and word count -->
	<p><span class="eta"></span> (<span class="words"></span> words)</p>

	<p>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	
	<a href="articles/a.html" class="btn">Read more</a>
	
</article>

<!-- second article excerpt -->
<article data-file="articles/b.html" data-target="article">

	<h1>Justo Cursus Inceptos Ipsum</h1>
	
	<p>By: Mike Lynch</p>
	
	<!-- reading time and word count -->
	<p><span class="eta"></span> (<span class="words"></span> words)</p>

	<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean 
	lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
	
	<a href="articles/b.html" class="btn">Read more</a>
	
</article>

<!-- third article excerpt -->
<article data-file="articles/c.html" data-target="article">

	<h1>Sem Vehicula Dapibus Malesuada</h1>
	
	<p>By: Mike Lynch</p>
	
	<!-- reading time and word count -->
	<p><span class="eta"></span> (<span class="words"></span> words)</p>

	<p>Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Nullam id dolor id nibh 
	ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	
	<a href="articles/c.html" class="btn">Read more</a>
	
</article>
```
		
Here is what your JS would look like:

```js
$(function() {

	$('article').each(function() {

	    $(this).readingTime({
			readingTimeTarget: $(this).find('.eta'),
			wordCountTarget: $(this).find('.words'),
			remotePath: $(this).attr('data-file'),
			remoteTarget: $(this).attr('data-target')
		});
		
	});
	
});
```
		
<a href="http://michael-lynch.github.io/reading-time/remote-multiple.html" target="_blank">See a demo using multiple remote files</a>
