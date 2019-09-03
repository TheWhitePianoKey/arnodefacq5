// Ajax-fetching "Load more posts"
$('.load_more_cont a').on('click', function(e) {
	e.preventDefault();
	//$(this).addClass('loading').text('Loading...');
        //$('.load_more_text a').html('Loading...');
        $('.load_more_cont a').css('display','none');
	$.ajax({
		type: "GET",
		url: $(this).attr('href') + '#content',
		dataType: "html",
		success: function(out) {
			result = $(out).find('.home_wide_box');
			nextlink = $(out).find('.load_more_cont a').attr('href');
                        //alert(nextlink);
			//$('#boxes').append(result).masonry('appended', result);
                    $('#content').append(result);
                    $('#content').append('<div class="clear"></div>');
			//$('.fetch a').removeClass('loading').text('Load more posts');
                        //$('.load_more_text a').html('Load More');
                        

                        
                        
//                      alert(nextlink);
			if (nextlink != undefined) {
				$('.load_more_cont a').attr('href', nextlink);
                                $('.load_more_cont a').css('display','inline-block');
			} else {
				$('.load_more_cont').remove();
                                $('#content').append('<div class="clear"></div>');
                              //  $('.load_more_cont').css('visibilty','hidden');
			}

/*
                    if (nextlink != undefined) {
                        $.get(nextlink, function(data) {
                          if($(data + ":contains('home_box')") != '') {
                            //alert('not found');
                                                    $('.load_more_cont').remove();
                                                    $('#content_inside').append('<div class="clear"></div>');        
                          }
                        });                        
                    }*/
			

			$('.home_tall_box, .home_wide_box').hover(
				function() {
					$(this).find('.home_text_box').css('display','block');
				},
				function() {
					$(this).find('.home_text_box').css('display','none');
				}
			);			
			
                        
		}
	});
});