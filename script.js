
var apiKey = 'AIzaSyBrQ40XQ2QxuFoUvrpaH2nS_1wDane9SGs';

// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
gapi.client.load('blogger', 'v3', function() {
  var request = gapi.client.blogger.posts.list({
  	'blogId': '5702556281551443759',
    'fetchImages': true,
    'maxResults': 4,
    'orderBy': 'published'
  });
  request.execute(function(resp) {
  	for (var i = 0; i < resp.items.length; i++) {
  		var link = document.createElement('a');
  		link.href = resp.items[i].url;
  		var text = document.createElement('p');
	    var strong = document.createElement('h5');
	    var small = document.createElement('small');
	    var image = document.createElement('img');
	    if (resp.items[i].images !== undefined) {
		    image.src = resp.items[i].images[0].url;
		} else {
		    image.src = 'http://placehold.it/400x200';
		}
	    strong.appendChild(document.createTextNode(resp.items[i].title));
	    small.appendChild(document.createTextNode(moment(resp.items[i].published)));
	    text.appendChild(strong);
	    text.appendChild(small);
	    link.appendChild(image);
	    link.appendChild(text);
	    var griditem = document.createElement('div');
	    griditem.className = 'grid-item col-md-3';
	    griditem.appendChild(link);
	    document.getElementById('blog').appendChild(griditem);
  		
  	}
  });
});
}

function handleClientLoad() {
	gapi.client.setApiKey(apiKey);
	window.setTimeout(makeApiCall,1);
}
