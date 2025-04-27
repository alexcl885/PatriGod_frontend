import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapaCiudades.css';

const MapaCiudades = () => {
  // Ajustamos el centro a España, pero con un zoom más cercano
  const spainCenter = [40.4168, -3.7038]; // Centro de Madrid, España
  const zoomLevel = 7; // Aumento el zoom para que se vea más de cerca

  const ciudades = [
    { nombre: 'Alcalá de Henares', coords: [40.4810, -3.3635] },
    { nombre: 'Ávila', coords: [40.6565, -4.6818] },
    { nombre: 'Baeza', coords: [37.9937, -3.4715] },
    { nombre: 'Cáceres', coords: [39.4752, -6.3720] },
    { nombre: 'Córdoba', coords: [37.8882, -4.7794] },
    { nombre: 'Cuenca', coords: [40.0704, -2.1374] },
    { nombre: 'Ibiza (Eivissa)', coords: [38.9089, 1.4321] },
    { nombre: 'Mérida', coords: [38.9170, -6.3400] },
    { nombre: 'Salamanca', coords: [40.9701, -5.6635] },
    { nombre: 'San Cristóbal de La Laguna', coords: [28.4853, -16.3160] },
    { nombre: 'Santiago de Compostela', coords: [42.8805, -8.5457] },
    { nombre: 'Segovia', coords: [40.9429, -4.1088] },
    { nombre: 'Tarragona', coords: [41.1189, 1.2445] },
    { nombre: 'Toledo', coords: [39.8628, -4.0273] },
    { nombre: 'Úbeda', coords: [38.0114, -3.3731] },
  ];

  return (
    <div className="map-container">
      <MapContainer
        center={spainCenter}
        zoom={zoomLevel}
        className="leaflet-map"
        scrollWheelZoom={false}  // deshabilita el zoom con la rueda del ratón
        dragging={true}          // deshabilita el movimiento del mapa
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ciudades.map((ciudad, index) => (
          <Marker key={index} position={ciudad.coords}>
            <Popup>
              {ciudad.nombre}, Ciudad Patrimonio de la Humanidad.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapaCiudades;
