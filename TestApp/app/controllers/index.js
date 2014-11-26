function doClick(e) {
    //alert($.label.text);
  // create request
    var xhr = Titanium.Network.createHTTPClient();
    //set timeout
    xhr.setTimeout(10000);

    //Here you set the webservice address and method
    xhr.open('GET', 'http://localhost:9998/helloworld');

    //set enconding
    xhr.setRequestHeader("Content-Type", "text/plain");
	var args = {};
    //send request with parameters
    xhr.send();

    // function to deal with errors
    xhr.onerror = function() {
		Ti.API.debug(e.error);
		alert('Error');
    };
	
    // function to deal with response
    xhr.onload = function() {
        var obj = this.responseText;
        
		alert(obj);
    };

}


$.index.open();
