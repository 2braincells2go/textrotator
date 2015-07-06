# textrotator
Simple jQuery plugin to rotate text

##HTML
```html
<html>
	<head>
		<script type="text/javascript" src="jquery.textrotator.js">
	</head>
	<style>
		#my-textrotator {list-style: none; padding:0; margin: 0 0 24px;}
		#my-textrotator li {display: none;}
	</style>
	<body>
		<ul id="my-textrotator">
			<li>Text 1</li>
			<li>Text 2</li>
		</ul>
	</body>
</html>
```
##USAGE
```html
<script type="text/javascript">
	$(function(){
		$('#my-textrotator').textRotator({
			random : true,
			fadeIn : 1000,
			fadeOut : 500,
			duration : 5000,
           	debug : false
		
		})
	})
</script>
```
