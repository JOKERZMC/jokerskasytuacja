const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 3
});

const img = new Image();

img.onload = async function () {

    const bounds = [
        [0, 0],
        [img.height, img.width]
    ];

    L.imageOverlay('image.png', bounds).addTo(map);
    map.fitBounds(bounds);

    const response = await fetch("markers.json");
    const markers = await response.json();

    const allMarkers = [];

    markers.forEach(marker => {

        const m = L.circleMarker(
            [marker.y, marker.x],
            {
                radius:8,
                color:"#ffffff",
                weight:2,
                fillColor:getColor(marker.type),
                fillOpacity:1
            }
        );

        m.bindPopup(`
            <h3>${marker.name}</h3>
            <b>Kategoria:</b> ${marker.type}<br>
            ${marker.description}
        `);

        m.addTo(map);

        marker.leaflet = m;

        allMarkers.push(marker);

    });

    document.getElementById("search").addEventListener("input", function(){

        const value=this.value.toLowerCase();

        allMarkers.forEach(marker=>{

            if(marker.name.toLowerCase().includes(value)){

                marker.leaflet.addTo(map);

            }else{

                map.removeLayer(marker.leaflet);

            }

        });

    });

};

img.src="image.png";

function getColor(type){

    switch(type){

        case "gang":
            return "green";

        case "shop":
            return "orange";

        case "weapon":
            return "red";

        case "house":
            return "blue";

        default:
            return "white";

    }

}
