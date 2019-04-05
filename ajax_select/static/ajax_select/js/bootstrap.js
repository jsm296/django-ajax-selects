(function(w) {
  /**
   * load jquery and jquery-ui if needed
   */

  function not(thing) {
    return typeof thing === 'undefined';
  }

  function loadJS(src) {
    var script_tag = ""
    script_tag = '<script type="text/javascript"  src="' + src + '"><\/script>';
    console.log( "in loadJS(), loading " + script_tag )
    document.write( script_tag );
  }

  function loadCSS(href) {
    var script = document.createElement('link');
    script.href = href;
    script.type = 'text/css';
    script.rel = 'stylesheet';
    document.head.appendChild(script);
  }

  if (not(w.jQuery)) {
    loadJS('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');
  }

  if (not(w.jQuery) || not(w.jQuery.ui) || not(w.jQuery.ui.autocomplete)) {
    loadJS('//code.jquery.com/ui/1.10.3/jquery-ui.js');
    loadCSS('//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css');
  }
})(window);
