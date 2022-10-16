


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
