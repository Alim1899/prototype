import { useEffect, useState } from "react";
import { getLocations } from "../../Functions/Functions";
import marker from "../../../assets/icons/marker.png";
import { useProjects } from "../Projects/Context/ProjectsContext";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
const Locations = () => {
  const { ids } = useProjects();
  const [coords, setCoords] = useState([]);
  const customIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [32, 32], // adjust size as needed
    iconAnchor: [16, 32], // point of the icon which corresponds to marker's location
    popupAnchor: [0, -32], // optional: where the popup should open relative to icon
  });
  useEffect(() => {
    const fetchCoords = async () => {
      if (ids.length > 0) {
        try {
          const promises = ids.map((el) => getLocations(el[1]));
          const resolvedCoords = await Promise.all(promises);
          const parsedCoords = resolvedCoords.map((coordStr) => {
            const [lat, lng] = coordStr.split(",").map(Number);
            return [lat, lng];
          });
          setCoords(parsedCoords);
        } catch (error) {
          console.error("Error fetching coordinates:", error);
        }
      }
    };
    fetchCoords();
  }, [ids]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[42.26423835098129, 42.70606967293128]}
        zoom={6.3}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {coords.length > 0 &&
          coords.map((location, index) => (
            <Marker key={index} position={location} icon={customIcon}>
              {/* <Popup>{location.popup}</Popup> */}
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Locations;
