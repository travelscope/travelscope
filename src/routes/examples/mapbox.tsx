import Map from "react-map-gl";

const MAPBOX_API_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN;

export function ExampleMapboxRoute() {
  return (
    <div className="z-0">
      <Map
        mapboxAccessToken={MAPBOX_API_ACCESS_TOKEN}
        initialViewState={{
          longitude: 115.1774426,
          latitude: -8.7079382,
          zoom: 13,
        }}
        style={{ width: 500, height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}
