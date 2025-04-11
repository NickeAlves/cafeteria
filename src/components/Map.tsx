import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type Tienda = {
  id: string;
  nombre: string;
  lat: number;
  lng: number;
};

type MapaProps = {
  tiendas: Tienda[];
};

const centro = {
  lat: 42.341163,
  lng: -3.699913,
};

const Map = ({ tiendas }: MapaProps) => {
  const [errorCarga, setErrorCarga] = useState(false);

  if (errorCarga) {
    return (
      <div className="w-full h-full bg-red-50/90 flex items-center justify-center rounded-xl p-6">
        <div className="text-center max-w-md">
          <ExclamationTriangleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Error al cargar el mapa
          </h3>
          <p className="text-gray-600 mb-4">
            Estamos teniendo problemas para cargar el mapa. Por favor, verifica
            tu conexión a internet.
          </p>
          <button
            onClick={() => setErrorCarga(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      onError={() => setErrorCarga(true)}
      loadingElement={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[var(--brown-color)]"></div>
        </div>
      }
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={centro}
        zoom={12}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          fullscreenControl: true,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {tiendas.map((tienda) => (
          <Marker
            key={tienda.id}
            position={{ lat: tienda.lat, lng: tienda.lng }}
            title={tienda.nombre}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
