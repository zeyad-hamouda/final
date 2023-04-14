$(document).ready(function() {
    // Show/hide search box on click
    $('.search-icon').click(function() {
      $('.search-form').toggleClass('show-search');
      $('.search-icon').toggleClass('active');
      $('.search-input').focus();
    });
  
    // Remove show-search class when search icon is clicked again
    $(document).on('click', function(event) {
      if (!$(event.target).closest('.search-form').length && $('.search-form').hasClass('show-search')) {
        $('.search-form').removeClass('show-search');
        $('.search-icon').removeClass('active');
      }
    });
  });
  