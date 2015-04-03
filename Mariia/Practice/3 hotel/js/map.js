/**
 * Created by Mariia_Obizna on 3/17/2015.
 */
function initialize() {
    var myLatlng = new google.maps.LatLng(48.151018, 17.109792);
    var mapOptions = {
        zoom: 17,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
