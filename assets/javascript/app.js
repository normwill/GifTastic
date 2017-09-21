$(document).ready(function(){

	$('button').on('click', function(){
		var actors = $(this).data('name');
		var queryURL = "https://api.giphy.com/search?q=" + actors + "&api_key=9df48d3cd8834e9faea004c4d05c2666";

		$.ajax({
			url: queryURL,
			method: 'GET'
		})

		.done(function(response) {

			console.log(response);

			var results = response.data;

			for (var i = 0; i < results.length; i++) {

				var actorsDiv = $('</div>');

				var p = $('</p>');

				p.text(results[i].rating);

				var actorsImage = $('</img>');

				actorsImage.addClass('actImg')

				actorsImage.attr('src', results[i].images.fixed_height.url);

				actorsImage.attr("data-still", results[i].images.fixed_height_still.url)

				actorsImage.attr('data-animate', results[i].images.fixed_height.url)

				.attr('data-state', 'still');

				actorsDiv.append(p);

				actorsDiv.append(actorsImage);

				actorsDiv.prependTo($('#gifs'));

			}


			$('.actImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var actors = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var actorbutton = $("#gif-input").val();
            //adds the new actor

            var newButton = $("</button>").addClass( "btn btn-info people").attr('data-name',actorbutton).html(actorbutton).css({'margin': '5px'});
            
            $("#actorsbutons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/search?q=" + actorbutton + "&api_key=9df48d3cd8834e9faea004c4d05c2666";
                console.log(actorbutton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var actorsDiv = $('</div>');

                    var p =$('</p>');

                    p.text(results[i].rating);

                    var actorsImage = $('</img>');

                    actorsImage.addClass('actImg')

                    actorsImage.attr('src', results[i].images.fixed_height_still.url);

                    actorsImage.attr('data-still', results[i].images.fixed_height_still.url)

                    actorsImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    actorsDiv.append(p);

                    actorsDiv.append(actorsImage);

                    actorsDiv.prependTo($('#gifs'));
                }

                $('.actImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});
	

