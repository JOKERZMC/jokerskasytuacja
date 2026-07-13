const map = L.map("map").setView([34.0522,-118.2437],11);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap'
}).addTo(map);

L.marker([34.0522,-118.2437])
.addTo(map)
.bindPopup("Los Angeles");
