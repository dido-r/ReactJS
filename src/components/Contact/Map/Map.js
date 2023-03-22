import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export function Map() {

    const containerStyle = {
        width: '700px',
        height: '400px'
    };

    const center = {
        lat: 43.847167,
        lng: 25.952444
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC2PuCR3uizmsDLAt01KfLRSL04sSb7Q_o"
    })

    return (

        isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                <Marker position={center} />
            </GoogleMap>
        ) : <></>
    );
}