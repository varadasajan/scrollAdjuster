# scrollAdjuster
When we navigate away from page, remember the scroll position and while returning to the page scroll to that exact position with an animation

Note:-Since this plugin make use of html session storage, if you are planning to run this code on internet explorer please make sure that you are running it using a server


##Quick start

Download and link the latest Jquery file

Include Jquery as well as the plugin js on the file

    <script src="js/jquery.min.js"></script>
    <script src="js/scrolladjuster.js"></script>

###To initialize the plugin 

      <script>$(document).ready(function(){
      	$('.clickOne').scrollAdjuster();
    	</script>
###To focus on an input field
You could set the focus parameter on the plugin with the input's ID as follows

      <script>$(document).ready(function(){
      	  $('.clickThree').scrollAdjuster({focus:'focusOne'});
      </script>
###To focus on an input field by leaving some space on top
You could pass another parameter to set top as follows

      <script>$(document).ready(function(){
      	  $('.clickFour').scrollAdjuster({focus:'focusTwo',variation:300});
      </script>


