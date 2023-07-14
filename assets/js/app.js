window.onload = function() {
    initMap();
  };
function initMap() {
    // Crea un objeto de mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13, // Ajusta el nivel de zoom según tus necesidades
      center: {lat: -31.74345424177942, lng: -60.51265198676682} // Establece la ubicación central del mapa
    });
  
    // Crea marcadores para las sucursales
    var sucursal1 = new google.maps.Marker({
      position: {lat: -31.738634304134134, lng: -60.52815480483503},
      map: map,
      title: 'Medical - Casa Central'
    });
  
    var sucursal2 = new google.maps.Marker({
      position: {lat: -31.756945437688103,  lng: -60.49707949336527},
      map: map,
      title: 'Medical - Base Operativa'
    });
  
    //var sucursal3 = new google.maps.Marker({
    //  position: {lat: 40.987, lng: -74.321},
    //  map: map,
    //  title: 'Sucursal 3'
    //});
    
    // Crea una ventana de información para cada marcador
  var infoWindow1 = new google.maps.InfoWindow({
    content: 'Medical - Casa Central' 
  });

  var infoWindow2 = new google.maps.InfoWindow({
    content: 'Información de la Sucursal 2'
  });

  //var infoWindow3 = new google.maps.InfoWindow({
    //content: 'Información de la Sucursal 3'
  //});

  // Asigna eventos de clic a los marcadores para abrir las ventanas de información
  sucursal1.addListener('click', function() {
    infoWindow1.open(map, sucursal1);
  });

  sucursal2.addListener('click', function() {
    infoWindow2.open(map, sucursal2);
  });

  //sucursal3.addListener('click', function() {
    //infoWindow3.open(map, sucursal3);
  //});
}


    