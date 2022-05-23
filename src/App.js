import React from 'react';
import { MapContainer, TileLayer, LayersControl, Marker, Popup,} from 'react-leaflet';
import LeafletControlGeocoder from "./LeafletControlGeocoder";
import './App.css';
import teslaData from "./data/tesla-sites.json"



const {BaseLayer} = LayersControl;

function App() {

  const filteredStations = teslaData.filter(tsla => tsla.address.country === "Italy")

  
  
  return (
    <MapContainer center={[41.871941, 12.567380]} zoom={7} scrollWheelZoom={true}>
      <LayersControl>

        {filteredStations.map(tsla =>(
           <Marker
           key ={tsla.id} 
           position={[tsla.gps.latitude, tsla.gps.longitude]}>

           <Popup  position={[tsla.gps.latitude, tsla.gps.longitude]}>
             <div>
               <h2>{"Name: " + tsla.name}</h2>
               <h3>{"Street: " + tsla.address.street}</h3>
               <p>{"Status: " + tsla.status}</p>
               <p>{"Number of Charging Stations: " + tsla.stallCount}</p>
             </div>

          </Popup>
           </Marker>

          
        )) }
         <LeafletControlGeocoder />
       <BaseLayer checked name="MapTiler">
        <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=rhAmyOjY0T5GhF7TwaNx"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      </BaseLayer>
      <BaseLayer name="Satellite">
        <TileLayer
        url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=rhAmyOjY0T5GhF7TwaNx"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
       </BaseLayer>
       <BaseLayer name="Outdoor">
        <TileLayer
        url="https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=rhAmyOjY0T5GhF7TwaNx"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
    
       </BaseLayer>
       <BaseLayer name="Transparent">
        <TileLayer
        url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=rhAmyOjY0T5GhF7TwaNx"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
    
       </BaseLayer>
      </LayersControl>
    </MapContainer>
  );
}

export default App;