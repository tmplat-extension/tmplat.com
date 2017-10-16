---
---
$(function () {

  // Activate styled tooltips and popovers.
  $('[title]').tooltip();
  $('[data-toggle="popover"]').each(function() {
    var $this = $(this);
    var selector = $this.data('content-selector');
    if (selector) {
      $this.popover({
        content: $(selector).html(),
        html: true
      });
    } else {
      $this.popover();
    }
  });

  // Activate Chrome Web Store inline installations.
  var chrome = window.chrome || {};
  if (chrome.app && chrome.webstore) {
    $('.chrome_install_button').on('click.chrome', function() {
      var $this = $(this);
      if (!$this.hasClass('chrome_install_button')) {
        $this.off('.chrome');
        return;
      }
      chrome.webstore.install($this.attr('href'), function() {
        $this.toggleClass('chrome_install_button disabled').off('.chrome');
        $this.html($this.html().replace('Install', 'Installed'));
      });
      return false;
    });
  }

  // Attempt to highlight the best matching navigation link.
  $('.masthead > .nav > li > a').each(function() {
    var $this = $(this);
    var href = $this.attr('href');
    var path = location.pathname;
    if ((href === '/' && href === path) || (href !== '/' && !path.indexOf(href))) {
      $this.parent().addClass('active');
      return false;
    }
  });

  // Add sharing buttons and then load script if sharing is enabled.
  if ($('.st_container').length) {
    $.getScript('https://ws.sharethis.com/button/buttons.js', function() {
      window.stLight.options({
        embeds: true,
        onhover: false,
        publisher: '{{ site.sharethis_account }}',
        tracking: 'google'
      });
    });
  }

});
