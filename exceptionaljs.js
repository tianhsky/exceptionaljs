if((typeof exceptionaljs_path)=='undefined' || exceptionaljs_path==null){
  exceptionaljs_path = '/js_exceptions';
}
if((typeof bowser)=='undefined' || bowser==null){
  bowser = {error: 'Please include bowser'};
}
window.onerror = function(message, url, linenumber) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var viewport = w + ' x ' + h;
  var data = {
    exception: {
      page_url: document.URL,
      file_url: url,
      line_number: linenumber,
      message: message,
      browser: JSON.stringify(bowser),
      os: navigator.platform,
      viewport: viewport,
      cookie: document.cookie,
      client_time: (new Date()).toString()
    }
  };
  jQuery.ajax({
    url: exceptionaljs_path,
    type: 'POST',
    dataType: 'json',
    data: data
  });
};
