const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2
});

const width = 8192;
const height = 8192;

const bounds = [
    [0, 0],
    [height, width]
];

L.imageOverlay('image.png', bounds).addTo(map);

map.fitBounds(bounds);
