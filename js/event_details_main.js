function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var event_id = getParameterByName('event_id');
var listvalues = localStorage.getItem('event_'+event_id);
var finalvalue = JSON.parse(listvalues);
console.log(finalvalue);

var ni = document.getElementById('body_content');
ni.innerHTML += htmldata;