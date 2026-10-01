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
var format_Zonas_2 = new ol.format.GeoJSON();
var features_Zonas_2 = format_Zonas_2.readFeatures(json_Zonas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_2.addFeatures(features_Zonas_2);
var lyr_Zonas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonas_2, 
                style: style_Zonas_2,
                popuplayertitle: 'Zonas',
                interactive: true,
                title: '<img src="styles/legend/Zonas_2.png" /> Zonas'
            });
var format_Entregadas_3 = new ol.format.GeoJSON();
var features_Entregadas_3 = format_Entregadas_3.readFeatures(json_Entregadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entregadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entregadas_3.addFeatures(features_Entregadas_3);
var lyr_Entregadas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entregadas_3, 
                style: style_Entregadas_3,
                popuplayertitle: 'Entregadas',
                interactive: true,
                title: '<img src="styles/legend/Entregadas_3.png" /> Entregadas'
            });
var format_Parciales_4 = new ol.format.GeoJSON();
var features_Parciales_4 = format_Parciales_4.readFeatures(json_Parciales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parciales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parciales_4.addFeatures(features_Parciales_4);
var lyr_Parciales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parciales_4, 
                style: style_Parciales_4,
                popuplayertitle: 'Parciales',
                interactive: true,
                title: '<img src="styles/legend/Parciales_4.png" /> Parciales'
            });
var format_Renuncias_5 = new ol.format.GeoJSON();
var features_Renuncias_5 = format_Renuncias_5.readFeatures(json_Renuncias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renuncias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renuncias_5.addFeatures(features_Renuncias_5);
var lyr_Renuncias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renuncias_5, 
                style: style_Renuncias_5,
                popuplayertitle: 'Renuncias',
                interactive: true,
                title: '<img src="styles/legend/Renuncias_5.png" /> Renuncias'
            });
var format_Areasdetrabajoyotros_6 = new ol.format.GeoJSON();
var features_Areasdetrabajoyotros_6 = format_Areasdetrabajoyotros_6.readFeatures(json_Areasdetrabajoyotros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areasdetrabajoyotros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasdetrabajoyotros_6.addFeatures(features_Areasdetrabajoyotros_6);
var lyr_Areasdetrabajoyotros_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areasdetrabajoyotros_6, 
                style: style_Areasdetrabajoyotros_6,
                popuplayertitle: 'Areas de trabajo y otros',
                interactive: true,
                title: '<img src="styles/legend/Areasdetrabajoyotros_6.png" /> Areas de trabajo y otros'
            });
var format_Areadeacopio_7 = new ol.format.GeoJSON();
var features_Areadeacopio_7 = format_Areadeacopio_7.readFeatures(json_Areadeacopio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areadeacopio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areadeacopio_7.addFeatures(features_Areadeacopio_7);
var lyr_Areadeacopio_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areadeacopio_7, 
                style: style_Areadeacopio_7,
                popuplayertitle: 'Area de acopio  ',
                interactive: true,
                title: '<img src="styles/legend/Areadeacopio_7.png" /> Area de acopio  '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MapafinalLaCampanera_1.setVisible(true);lyr_Zonas_2.setVisible(true);lyr_Entregadas_3.setVisible(true);lyr_Parciales_4.setVisible(true);lyr_Renuncias_5.setVisible(true);lyr_Areasdetrabajoyotros_6.setVisible(true);lyr_Areadeacopio_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MapafinalLaCampanera_1,lyr_Zonas_2,lyr_Entregadas_3,lyr_Parciales_4,lyr_Renuncias_5,lyr_Areasdetrabajoyotros_6,lyr_Areadeacopio_7];
lyr_Zonas_2.set('fieldAliases', {'fid': 'fid', });
lyr_Entregadas_3.set('fieldAliases', {'id': 'id', 'Otro': 'Otro', });
lyr_Parciales_4.set('fieldAliases', {'id': 'id', });
lyr_Renuncias_5.set('fieldAliases', {'id': 'id', });
lyr_Areasdetrabajoyotros_6.set('fieldAliases', {'Areas': 'Areas', });
lyr_Areadeacopio_7.set('fieldAliases', {'id': 'id', });
lyr_Zonas_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_Entregadas_3.set('fieldImages', {'id': 'TextEdit', 'Otro': 'TextEdit', });
lyr_Parciales_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Renuncias_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Areasdetrabajoyotros_6.set('fieldImages', {'Areas': 'TextEdit', });
lyr_Areadeacopio_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Zonas_2.set('fieldLabels', {'fid': 'no label', });
lyr_Entregadas_3.set('fieldLabels', {'id': 'inline label - visible with data', 'Otro': 'header label - always visible', });
lyr_Parciales_4.set('fieldLabels', {'id': 'no label', });
lyr_Renuncias_5.set('fieldLabels', {'id': 'no label', });
lyr_Areasdetrabajoyotros_6.set('fieldLabels', {'Areas': 'no label', });
lyr_Areadeacopio_7.set('fieldLabels', {'id': 'no label', });
lyr_Areadeacopio_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});