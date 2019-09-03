
function creative_slider() {
        my_slider_counter = 0;
        curr_slide = 0;
	var intervalID_slide;
        $('#slideshow_cont .slide_box').each(function() {
            $(this).addClass('slide_' + my_slider_counter);
            my_slider_counter++;
        });
        function home_switch_slide() {
            if(curr_slide >= my_slider_counter) {
                curr_slide = 0;
            } else if(curr_slide < 0) {
                curr_slide = (my_slider_counter-1);
	    }
            $('.slide_' + curr_slide).fadeIn(750);
        }
        function hide_curr_slide() {
               $('.slide_' + curr_slide).stop();
               //$('.slide_' + curr_slide).fadeOut(1000);
               $('.slide_' + curr_slide).fadeOut(400);
        }
        function next_slide_slider(jump_to_slide) {
            hide_curr_slide(); 
            if(jump_to_slide == null) {
                curr_slide++;     
            } else {
                curr_slide = jump_to_slide;
	    }
            t_slide=setTimeout(home_switch_slide,50); 
            //home_switch_image();
        }
        
        function prev_slide_slider(jump_to_slide) {
            hide_curr_slide();
//            curr_slide--;        
            if(jump_to_slide == null) {
                curr_slide--;     
	    } else  {
                curr_slide = jump_to_slide;
	    }
            //home_switch_image();
            t_slide=setTimeout(home_switch_slide,50);
        }        
        
        $('.slide_prev').click(function() {
            prev_slide_slider();
            clearInterval(intervalID_slide);
	    if ($('#slideshow_cont').is(':hover')) {
		    
	    } else {
		intervalID_slide = setInterval(next_slide_slider, 8000000);
	    }
        });
        
        $('.slide_next').click(function() {
            next_slide_slider();
            clearInterval(intervalID_slide);
	    if ($('#slideshow_cont').is(':hover')) {
		    
	    } else {
		intervalID_slide = setInterval(next_slide_slider, 8000000);
	    }
        });                
        
        //setInterval(next_slide_image, 5000);
        intervalID_slide = setInterval(next_slide_slider, 8000000);  
	
	$('#slideshow_cont').hover(
		function() {
//			alert('in');
			clearInterval(intervalID_slide);
//			alert(intervalID_slide);
		},
		function() {
//			alert('out');
			clearInterval(intervalID_slide);
			intervalID_slide = setInterval(next_slide_slider, 8000000);  
//			alert(intervalID_slide);
		}
	);
  }  
  
$(document).ready(function() {
	
        $('.menu_container li').hover(
            function () {
                $('ul:first', this).css('display','block');
     
            }, 
            function () {
                $('ul:first', this).css('display','none');         
            }
        );               	
	    
	creative_slider();
	    
});