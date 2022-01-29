"usr strict"
const map = anychart.map();/////создание новой карты
map.geoData('anychart.maps.world'); //инициализация всех стран

  let data = readTextFile("training/russia.json", function(text){                  //подгрузка стартовой страны
    data = JSON.parse(text);
  });
  
 let allCountry =readTextFile("training/allBase.json", function(text){              // загрузка всех стран
  allCountry = JSON.parse(text);
  
  map.choropleth(neighbors); 
  map.choropleth(data)
  map.palette(['red', '#11111']);
  map.unboundRegions({fill: '#ffb90f'});  
  map.container('container');    
  map.draw();
  console.log(map)
});


let neighbors =[{id:"EE"}, {id:"LV"}, {id:"LV"}, {id:"LT"}, {id:"PL"}, {id:"GE"}, {id:"KP"}, {id:"JP"}, {id:"US"},{id:"BY"}];

 
map.listen('click', function (event) {                    ////захваченная территория
  const clickOnThisCountry =   event.pointIndex 
  console.log(clickOnThisCountry)
    if (!clickOnThisCountry){                            
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

map.choropleth(neighbors,data);
console.log(neighbors)
console.log(data)

console.log(map)
  
});

window.onload = function() {
  //map.callout({items: ["LV", "US"]});
  console.log(neighbors)
  console.log(data)
  /*
  var background = map.background();
    background.stroke('3 black');
    background.corners(100);
    background.fill('blue');*/
};
