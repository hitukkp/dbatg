$.ajax({
	url: '/json/event_data.json',
	type: 'GET',
	success: function(data){
		htmldata = create_event_html(data.data);
		var ni = document.getElementById('body_content');
		ni.innerHTML += htmldata;
	}
});

function create_event_html( raw_data ){
	var tempHtml = '';
	for(var i=0 ; i<raw_data.length; i++){
		localStorage.removeItem('event_'+raw_data[i].event_id);
		tempHtml += '<div class="events"><img src="'+raw_data[i].event_image+'">';
		tempHtml += '<a href="'+raw_data[i].event_url+'?event_id='+raw_data[i].event_id+'">';
		tempHtml += '<div class="ride_name">'+raw_data[i].event_name+'</div>';
		tempHtml += '<div class="ride_date">'+raw_data[i].event_date_duration+'</div></div>'
		localStorage.setItem('event_'+raw_data[i].event_id, JSON.stringify(raw_data[i])); 
	}
	var htmldata = tempHtml;

	return htmldata;
}

$(".events").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".know_us").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
