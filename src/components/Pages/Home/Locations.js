import { useEffect, useState } from "react";
import { getLocations } from "../../Functions/Functions";
import marker from "../../../assets/icons/marker.png";
import { useProjects } from "../Projects/Context/ProjectsContext";
import { MapContainer, Marker, TileLayer, GeoJSON, Popup } from "react-leaflet";
import georgia from "../../../assets/mygeodata/georgia.json";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router";
import L from "leaflet";
const Locations = () => {
  const { ids } = useProjects();
  const [coords, setCoords] = useState([]);
  const lang = sessionStorage.getItem("lng");
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          const promises = ids.map(async (el) => {
            const data = await getLocations(el[1]);
            return {
              ...data,
              id: el[1], // include the id with the fetched data
            };
          });
          const resolvedCoords = await Promise.all(promises);
          setCoords(resolvedCoords);
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
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {coords.length > 0 &&
          coords.map((location, index) => (
            <Marker
              key={index}
              position={location.coords.split(",")}
              icon={customIcon}
            >
              <Popup>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "none",
                    padding: "5px 0",
                    borderRadius: "4px",
                  }}
                >
                  <h4 style={{ padding: "0", margin: "0" }}>
                    {lang === "en" ? location.headers.en : location.headers.ge}
                  </h4>
                  <button
                    style={{
                      marginTop: "5px",
                      cursor: "pointer",
                      background: "#007bff",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                    }}
                    onClick={() => navigate(`/project/${location.id}`)}
                  >
                    {t("projectsPage.moreBtn")}
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        <GeoJSON data={georgia}></GeoJSON>
      </MapContainer>
    </div>
  );
};

export default Locations;
