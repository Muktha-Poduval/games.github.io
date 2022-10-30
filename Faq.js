<!doctype html>
<html>
<!--**********Head***********-->
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<style>body{margin:0;}</style>



<title>
Games
</title>
</head>
<!--**********Body***********-->
<body>
<!--**********Header***********-->
<header>
<!--**********Nav***********-->
  
 <div style="background:#ABC4FF; padding:10px;">
<ul style="word-spacing:40px;">
<li style="display:inline-block;"><a href="index.html" style="background:#D7E3FC; padding:8px 15px; text-decoration:none; border-radius:20px;">Home </a></li>
<li style="display:inline-block;"><a href="hobby.html" style="background:#D7E3FC; padding:8px 15px; text-decoration:none; border-radius:20px;">Hobby </a></li>
<li style="display:inline-block;"><a href="contacts.html" style="background:#D7E3FC; padding:8px 15px; text-decoration:none; border-radius:20px;">Contact</a></li>
<li style="display:inline-block;"><a href="feedback.html" style="background:#D7E3FC; padding:8px 15px; text-decoration:none; border-radius:20px;">Feedback</a></li>
</ul>
</div>

<div style="background:#C1D3FE; padding:20px; text-align:center;">
<h1>FAQ page</h1>
</div>

</header>

<!--**********Main***********-->
<main style="background:#D7E3FC; padding:20px;">

$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });
  
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
      
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
      
    }
  );
});

</main>

<!--**********Footer***********-->
<footer style="background:#ABC4FF; padding:20px; text-align:center;">
<h2>Let's Keep In Touch</h2>
<a href="mailto:muktha.pod@gmail.com" style="background:#D7E3FC; padding:10px 20px; border-radius:5px; text-decoration:none; ">Connect</a>
</footer>
<script src="script.js"></script>
</body>
</html>
