function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

  let data = readTextFile("js.json", function(text){
  data = JSON.parse(text);
});

let data1 = readTextFile("js1.json", function(text){
   data1 = JSON.parse(text);
});

const map = anychart.map();
map.geoData('anychart.maps.world');  

map.listen('click', function (event) {   
  //console.log(event.pointIndex) 
 // console.log(data1[event.pointIndex].id)
  data1.push( {id: 'AU'})
  map.choropleth(anychart.data.set(data1));      
         
      map.draw();
});




anychart.onDocumentLoad(function () { 
  function draw (data) {   
    map.unboundRegions({fill: '#ffb90f'});         
    map.choropleth(anychart.data.set(data));      
    map.container('container');      
    map.draw();
  }  
  console.log('fsfd')
  console.log(data)
  draw(data)

});