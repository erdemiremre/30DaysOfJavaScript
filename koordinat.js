let xkordinasyon = 0;

let ykordinasyon = 0;

let ie = document.all?true:false;

if (!ie) document.captureEvents(Event.MOUSEMOVE)

//document.onmousemove = koordinat;
document.onclick = koordinat;

function koordinat(k){

    if(ie){ 

      xkordinasyon = event.clientX + document.body.scrollLeft;

      ykordinasyon = event.clientY + document.body.scrollTop;

    }

	else{  

      xkordinasyon = k.pageX;

      ykordinasyon = k.pageY;

    }   

    document.getElementById('xkoordinat').innerHTML = xkordinasyon;

    document.getElementById('ykoordinat').innerHTML = ykordinasyon;

    return true;

}


let _Map, _Draw, _Source, _Layer;

InitializeMap = () => {

    _Source = new ol.source.Vector({ wrapX: false });

    _Layer = new ol.layer.Vector({
        source: _Source,
    });

    _Map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            _Layer
        ],
        view: new ol.View({
            center: [3875337.272593909, 4673762.797695817],
            zoom: 7
        })
    });
}

AddInteraction = () => {

    _Draw = new ol.interaction.Draw({
        source: _Source,
        type: "Point"
    });

    _Map.addInteraction(_Draw);

    _Draw.setActive(false);

    _Draw.on(
        "drawend",
        (_event) => {

            console.log(_event.feature.getGeometry().getCoordinates());

            _Draw.setActive(false);
        });
}

AddPoint = () => {

    _Draw.setActive(true);
}

const modalBtn = document.getElementById("modal-ac");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-kapat");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalKapat.addEventListener("click", () => {
  modal.style.display = "none";
});




