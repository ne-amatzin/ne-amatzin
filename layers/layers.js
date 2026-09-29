var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_MapafinalLaCampanera_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa final La Campanera<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapafinalLaCampanera_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9922694.269453, 1543618.047699, -9921980.137490, 1544136.683790]
        })
    });
var lyr_Numeros_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Numeros<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Numeros_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9922743.071583, 1543529.112644, -9921928.310243, 1544159.887616]
        })
    });
var format_Zonas_3 = new ol.format.GeoJSON();
var features_Zonas_3 = format_Zonas_3.readFeatures(json_Zonas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_3.addFeatures(features_Zonas_3);
var lyr_Zonas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonas_3, 
                style: style_Zonas_3,
                popuplayertitle: 'Zonas',
                interactive: true,
                title: '<img src="styles/legend/Zonas_3.png" /> Zonas'
            });
var format_Entregadas_4 = new ol.format.GeoJSON();
var features_Entregadas_4 = format_Entregadas_4.readFeatures(json_Entregadas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entregadas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entregadas_4.addFeatures(features_Entregadas_4);
var lyr_Entregadas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entregadas_4, 
                style: style_Entregadas_4,
                popuplayertitle: 'Entregadas',
                interactive: true,
                title: '<img src="styles/legend/Entregadas_4.png" /> Entregadas'
            });
var format_Parciales_5 = new ol.format.GeoJSON();
var features_Parciales_5 = format_Parciales_5.readFeatures(json_Parciales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parciales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parciales_5.addFeatures(features_Parciales_5);
var lyr_Parciales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parciales_5, 
                style: style_Parciales_5,
                popuplayertitle: 'Parciales',
                interactive: true,
                title: '<img src="styles/legend/Parciales_5.png" /> Parciales'
            });
var format_Renuncias_6 = new ol.format.GeoJSON();
var features_Renuncias_6 = format_Renuncias_6.readFeatures(json_Renuncias_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renuncias_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renuncias_6.addFeatures(features_Renuncias_6);
var lyr_Renuncias_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renuncias_6, 
                style: style_Renuncias_6,
                popuplayertitle: 'Renuncias',
                interactive: true,
                title: '<img src="styles/legend/Renuncias_6.png" /> Renuncias'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MapafinalLaCampanera_1.setVisible(true);lyr_Numeros_2.setVisible(true);lyr_Zonas_3.setVisible(true);lyr_Entregadas_4.setVisible(true);lyr_Parciales_5.setVisible(true);lyr_Renuncias_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MapafinalLaCampanera_1,lyr_Numeros_2,lyr_Zonas_3,lyr_Entregadas_4,lyr_Parciales_5,lyr_Renuncias_6];
lyr_Zonas_3.set('fieldAliases', {'fid': 'fid', });
lyr_Entregadas_4.set('fieldAliases', {'id': 'id', 'Otro': 'Otro', });
lyr_Parciales_5.set('fieldAliases', {'id': 'id', });
lyr_Renuncias_6.set('fieldAliases', {'id': 'id', });
lyr_Zonas_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Entregadas_4.set('fieldImages', {'id': 'TextEdit', 'Otro': 'TextEdit', });
lyr_Parciales_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Renuncias_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Zonas_3.set('fieldLabels', {'fid': 'no label', });
lyr_Entregadas_4.set('fieldLabels', {'id': 'no label', 'Otro': 'no label', });
lyr_Parciales_5.set('fieldLabels', {'id': 'no label', });
lyr_Renuncias_6.set('fieldLabels', {'id': 'no label', });
lyr_Renuncias_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});