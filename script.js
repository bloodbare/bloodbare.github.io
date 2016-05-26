// Load is used to ensure all images have been loaded, impossible with document

jQuery(window).load(function () {



	// Takes the gutter width from the bottom margin of .post

	var container = jQuery('section');



	// Creates an instance of Masonry on #posts

	container.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-item'
	});
	
	

});