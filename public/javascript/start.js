

  let data = [
    {id: 'RU', name: 'Vanuatu'},
{id: 'WF', name: 'Wallis and Futuna'},
{id: 'WS', name: 'Samoa'},
 {id: 'YE', name: 'Yemen'},
  ]
let data1=[
  {
    "id": "YT",
    "name": "Mayotte"
}, {
    "id": "ZA",
    "name": "South Africa"
}, {
    "id": "ZM",
    "name": "Zambia"
}, {
    "id": "ZW",
    "name": "Zimbabwe"
}
]

const map = anychart.map();
map.geoData('anychart.maps.world');  

map.listen('click', function (event) {   
  //console.log(event.pointIndex) 
 // console.log(data1[event.pointIndex].id)
//  data1.push( {id: 'AU'})
  map.choropleth(anychart.data.set(data1));      
  map.palette(['#ffa726', '#fb8c00']);
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