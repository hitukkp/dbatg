var htmldata = '<div class="events"><div class="ride_name"></div><div class="ride_picture"></div><div class="ride_date"></div></div><div class="events"><div class="ride_name"></div><div class="ride_picture"></div><div class="ride_date"></div></div><div class="events"><div class="ride_name"></div><div class="ride_picture"></div><div class="ride_date"></div></div>';
var ni = document.getElementById('body_content');
ni.innerHTML += htmldata;

$.ajax({
	url: '/json/event_data.json',
	type: 'GET',
	success: function(data){
		console.log(data.data);
	}
});