"usr strict"
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
const map = anychart.map();/////создание новой карты
map.geoData('anychart.maps.world'); //инициализация всех стран

  let data = readTextFile("training/russia.json", function(text){
    data = JSON.parse(text);
  });
  
 let allCountry =readTextFile("training/allBase.json", function(text){
  allCountry = JSON.parse(text);
  map.choropleth(data)
  map.choropleth(neighbors);    
  draw()
});


let neighbors =[{id:"EE"}, {id:"LV"}, {id:"LV"}, {id:"LT"}, {id:"PL"}, {id:"GE"}, {id:"KP"}, {id:"JP"}, {id:"US"},{id:"BY"}];

function draw () {   
  map.palette(['red', '#11111']);
  map.unboundRegions({fill: '#ffb90f'});  
  map.container('container');  
  map.draw();
}  
 
map.listen('click', function (event) { 
  const clickOnThisCountry =   event.pointIndex 
    if (!clickOnThisCountry){  
      console.log('sdfsdf')                     ////захваченная территория
      data.forEach(el => {
        for (let i=0;i<el.neighbors.length;i++){
          neighbors.push({id:el.neighbors[i]})
        }
    }); 
    }else{                                                    ////////////////соседи
      for (let i=0;i<allCountry.length;i++){
        if (allCountry[i].id===neighbors[event.pointIndex].id){
          allCountry[i].neighbors.forEach(item =>{
            neighbors.push({id:item})
          })
          data.push(allCountry[i]);
          delete neighbors[event.pointIndex];  
         
          break;
          
         
        }
      }
}  

map.choropleth(neighbors);
map.choropleth(data);    
map.draw();
console.log(neighbors)
console.log(data)
  
});

window.onload = function() {
  console.log(neighbors)
  console.log(data)
  /*
  var background = map.background();
    background.stroke('3 black');
    background.corners(100);
    background.fill('blue');*/
};
