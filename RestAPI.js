function fetch(){
	var url="https://apis.martcart.pk/api/v1/user/login";
	$.ajax({
		url:url,
		type:"GET",
		dataType: "JSON",
		data:JSON.stringify({ }),
		success:function(data){
			$('.message').append("<li>"+JSON.stringify(data)+"</li>");
		}
	});
};