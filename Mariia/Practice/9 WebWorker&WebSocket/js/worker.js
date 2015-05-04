/**
 * Created by Mariia_Obizna on 4/22/2015.
 */

self.addEventListener('message', function(e) {
    var data = e.data.split(" ").map( function (val){
        return val.charAt(0).toUpperCase()+val.substr(1);
    }).join(' ');
    self.postMessage(data);
}, false);

