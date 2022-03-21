let USCoordinates= [37.09024,-97.712891]
let zoomLevel=4
let map= L.map('bridges-map').setView(USCoordinates,zoomLevel)



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(map);


BRIDGES=[

    {"Bridges":"Verrazano-Narrows Bridge","Spanlength":"1298.4","coordinates":[40.6066,-74.0447]},
    {"Bridges":"Golden Gate Bridge","Spanlength":"1280.2","coordinates":[37.8199,-122.4783]},
    {"Bridges":"Mackinac Bridge","Spanlength":"1158.0","coordinates":[45.8174,-84.7278]},
    {"Bridges":"George Washington Bridge","Spanlength":"1067.0","coordinates":[40.8517,-73.9527]},
    {"Bridges":"Tacoma Narrows Bridge","Spanlength":"853.44","coordinates":[47.2690,-122.5517]},

]
BRIDGES.forEach(function (bridgename){
    let markerText=`<b>${bridgename.Bridges}</b>  <p>Spanlength: ${bridgename.Spanlength}</p>`
    L.marker(bridgename.coordinates).bindPopup(markerText).addTo(map)
})


