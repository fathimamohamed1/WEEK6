let metroAreaCenterCoordinates=[44.96,-93.2]
let zoomLevel=9// 1=whole world 20=city blocks

let map= L.map('college-map').setView(metroAreaCenterCoordinates,zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(map);
// Add some markers for Minneapolis College and Saint Paul College
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates)
    .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)

let NormandaleCoordinates=[44.8297,-93.3312]
let NormandaleMarker=L.marker(NormandaleCoordinates)
    .bindPopup('Normandale College <br><a href="https://www.normandale.edu/">Website</a>')
    .addTo(map)







// Add a circle approximately around the Twin Cities metro
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'black',    // use any CSS color name
    radius: 30000,
    fillOpacity: 0.08
})
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)