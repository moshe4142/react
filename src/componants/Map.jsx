import React, { useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import Button from './Button';
import { OpenStreetMapProvider } from "leaflet-geosearch"
import MyMarker from './MyMarker';


const Map = () => {
    const mapProvider = new OpenStreetMapProvider();
    const [position, setPosition] = useState([51.505, -0.09]);
    const searchInputRef = useRef();

    const locationSearch = async () => {
        const inputValue = searchInputRef.current.value;
        try {
            const results = await mapProvider.search({ query: inputValue });
            if (results.length > 0) {
                setPosition([results[0].y, results[0].x]);
            } else {
                console.log('No results found');
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        locationSearch();
    };

    return (
        <>
            <div className="w-[700px] m-auto">
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <input
                            id="area"
                            type="text"
                            placeholder="Enter area to search"
                            ref={searchInputRef}
                            className="h-10 m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:drop-shadow-lg"
                        />
                        <Button type="submit" number="Search" />
                    </div>

                </form>
            </div>
            <div className="w-[700px] h-[500px] m-auto my-8 border-gray border-[1px] rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <MyMarker pos={position} />
                </MapContainer>
            </div>

        </>
    );
};

export default Map;
