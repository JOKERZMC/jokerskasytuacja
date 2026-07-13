const map = L.map('map',{
    crs:L.CRS.Simple,
    minZoom:-3,
    maxZoom:3
});

const img=new Image();

img.onload=function(){

const bounds=[
[0,0],
[img.height,img.width]
];

L.imageOverlay('image.png',bounds).addTo(map);

map.fitBounds(bounds);

};

img.src='image.png';
