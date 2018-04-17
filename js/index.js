	$('#nav-order span').hide();
	$('#nav-order button').click(function(){
		$(this).children('span').show();
		$('#nav-order button').not($(this)).children('span').hide();
	});
    	
	$('#footer1').click(function(){
		$('.container').show();
	});
	$('#footer2').click(function(){
		$('.container').hide();
	});
	$('#footer3').click(function(){
		$('.container').hide();
	});
	$('#footer4').click(function(){
		$('.container').hide();
	});
	
	$('#footer li').eq(0).find('a').css({'color':'black'});
	$('#footer li').click(function(){
		$(this).find('a').css({'color':'black'});
		$('#footer li').not($(this)).find('a').css({'color':'#337ab7'});
	})
	
