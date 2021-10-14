$(".switch-theme-button").click(function() {
  $(this).toggleClass("light");
  if($(this).hasClass("light")){
      $("link[href^='css']").attr("href","css/light-mode.css");
      $("link[href^='../css']").attr("href","../css/light-mode.css");
    $(".switch-theme-icon i").removeClass('fa-sun');
    $(".switch-theme-icon i").addClass('fa-moon')
  } else {
      $("link[href^='css']").attr("href","css/style.css");
      $("link[href^='../css']").attr("href","../css/style.css");
    $(".switch-theme-icon i").removeClass('fa-moon');
    $(".switch-theme-icon i").addClass('fa-sun')
  }
});