$.ajax({
	url: '/json/event_data.json',
	type: 'GET',
	success: function(data){
		console.log(data.data);
		htmldata = create_event_html(data.data);
		var ni = document.getElementById('body_content');
		ni.innerHTML += htmldata;
	}
});

function create_event_html( raw_data ){
	var tempHtml = '';
	for(var i=0 ; i<raw_data.length; i++){
		console.log(raw_data[i]);
		tempHtml += '<div class="events"><img src="'+raw_data[i].event_image+'">';
		tempHtml += '<div class="ride_name">'+raw_data[i].event_title+'</div>';
		tempHtml += '<div class="ride_date">'+raw_data[i].event_date_duration+'</div></div>'
	}
	var htmldata = tempHtml;
	return htmldata;
}