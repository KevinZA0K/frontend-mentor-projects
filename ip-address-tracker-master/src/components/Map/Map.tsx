import { Marker,MapContainer,Popup,TileLayer } from "react-leaflet";
import "./../leaflet.css"
import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
import { useCallback, useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";


export const Map = () => {

    const API = useContext(ApiContext)

  return (
    <>
    {API.status && <MapContainer
        style={{height:'100vh', zIndex: '-1'}}
        center={[API.ipDetails.location.lat, API.ipDetails.location.lng]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[API.ipDetails.location.lat, API.ipDetails.location.lng]}>
          <Popup>
            Your Location!
          </Popup>
        </Marker>
      </MapContainer>}
      </>
  )
}
