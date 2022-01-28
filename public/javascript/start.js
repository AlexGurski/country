const map = anychart.map();

map.title('Countries'); 
map.geoData('anychart.maps.world');  
anychart.onDocumentReady(function () {      
    anychart.data.loadJsonFile('js.json',
      function (data) {          
        let dataSet = anychart.data.set(data);          
        var series = map.choropleth(dataSet);  
        map.listen('click', function (event) {   
       console.log(event.pointIndex) 
       console.log(data[event.pointIndex].id)
  });
        map.container('container');      
        map.draw();
      }
    );
   
  });