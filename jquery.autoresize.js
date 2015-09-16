/*!
 * jQuery AutoResize plugin
 */
;(function ($, window, document, undefined) {

  var containsText = function (value) {
    return (value.replace(/\s/g, '').length > 0);
  };

  var init = function(element, options) {
    var $element = $(element);
    var height = $element.outerHeight();
    var diff = parseInt($element.css('paddingBottom')) +
               parseInt($element.css('paddingTop')) || 0;

    if (containsText(element.value)) {
      $element.height(element.scrollHeight - diff);
    }

    // keyup is required for IE to properly reset height when deleting text
    $element.on('input keyup', function(event) {
      var $window = $(window);
      var currentScrollPosition = $window.scrollTop();

      $(this)
        .height(0)
        .height(this.scrollHeight - diff);

      $window.scrollTop(currentScrollPosition);
    });
  }

  $.fn['autoResize'] = function (options) {
    this.each(function() {
      if (!$.data(this, 'pluginAutoResize')) {
        $.data(this, 'pluginAutoResize', init(this, options));
      }
    });
    return this;
  };

})(jQuery, window, document);
