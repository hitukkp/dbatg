$.ajax({
	url: '/json/dbatg_team.json',
	type: 'GET',
	success: function(data){
		htmldata = create_event_html(data.data);
		var ni = document.getElementById('columns');
		ni.innerHTML += htmldata;
	}
});

function create_event_html( raw_data ){
	var tempHtml = '';
	for(var i=0 ; i<raw_data.length; i++){
		var role = raw_data[i].is_admin==1 ? 'admin' : 'team';
		tempHtml += '<div class="pin '+role+'">';
		tempHtml += '<img src="'+raw_data[i].member_img+'" />';
		tempHtml += raw_data[i].is_admin==1 ? '<h3>Admin</h3>' : '';
		tempHtml += '<h4>'+raw_data[i].member_name+'</h4>';
		tempHtml += '<p class="member_since"> Member since '+raw_data[i].member_from+' </p>';
		tempHtml += '<p class="member_details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p></div>';
	}
	var htmldata = tempHtml;

	return htmldata;
}

$("#footer_content").load("../footer.html");
$("#header_container").load("../menu.html");