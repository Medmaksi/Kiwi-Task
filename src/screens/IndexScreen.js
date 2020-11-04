import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import Navigation from '../components/Navigation';

const IndexScreen = (props) => {
    const [center, setCenter] = useState({lat: 47.608013, lng: -122.335167});
    const [zoom, setZoom] = useState(11);
    const [random, setRandom] = useState({min: -122.335167, max:47.608013});
    const [limit, setLimit] = useState(0);

    const randomArb = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const markers = [
        {id: 1, lat: random.max*randomArb(1.08013,1.101), lng: random.min*randomArb(-1.08013,1.101)},{id: 2, lat: random.max*randomArb(-1.08013,1.101), lng: random.min*randomArb(1.08013,-1.101)},{id: 3, lat: random.max*randomArb(1.08013,1.0101), lng: random.min*randomArb(1.08013,1.0101)},{id: 4, lat: random.max*randomArb(1.08013,1.00101), lng: random.min*randomArb(1.08013,1.00101)},{id: 5, lat: random.max*randomArb(1.08013,1.0101), lng: random.min*randomArb(1.008013,1.0101)},{id: 6, lat: random.max*randomArb(1.008013,1.0101), lng: random.min*randomArb(1.008013,1.0101)},{id: 7, lat: random.max*randomArb(1.008013,1.0101), lng: random.min*randomArb(1.008013,1.0101)},{id: 8, lat: random.max*randomArb(1.008013,1.00101), lng: random.min*randomArb(1.08013,1.0101)},{id: 9, lat: random.max*randomArb(1.008013,1.0101), lng: random.min*randomArb(1.08013,1.0101)},{id: 10, lat: random.max*randomArb(1.008013,1.0101), lng: random.min*randomArb(1.08013,1.0101)},{id: 11, lat: random.max*randomArb(1.08013,1.0101), lng: random.min*randomArb(1.0008013,1.00101)},{id: 12, lat: random.max*randomArb(1.0008013,1.00101), lng: random.min*randomArb(1.0008013,1.00101)},{id: 13, lat: random.max*randomArb(1.0008013,1.00101), lng: random.min*randomArb(1.08013,1.0101)},{id: 14, lat: random.max*randomArb(1.008013,1.0101), lng: random.min*randomArb(1.008013,1.0101)}
    ];




    const createMapOptions = () => {
        return(
            {
                styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
            }
        )
    }

    const TimeCounter = () => {
        useEffect(() => {

               if(limit<20){
                   const interval= setInterval(() => {
                   setRandom({ max: randomArb(47.608013,47.6101),min:randomArb(-122.335167,-122.217064)});
                   setLimit(limit+1);
                   }, 7000)
               return () => clearInterval(interval);
               }
        }, []);

        return(
            <div style={{ height: '100vh', width: '100vw' }}>
                <Navigation/>
                <GoogleMapReact
                    options={createMapOptions}
                    bootstrapURLKeys={{ key: 'AIzaSyCAXF0qCZqdhy3PQVZHWPBU0KH7sNmy8E0' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    {markers.map((markerInfo)=>{
                        console.log(markerInfo);
                       return <Marker key={markerInfo.id} lat={markerInfo.lat} lng={markerInfo.lng} text="My Marker" color='blue'/>
                    })}

                </GoogleMapReact>
            </div>
        )
    }

    return (
        <TimeCounter/>
    );
}

export default IndexScreen;



