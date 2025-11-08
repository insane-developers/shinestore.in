
// Global type definitions

interface Window {
  initMap?: () => void;
  google?: {
    maps: {
      Map: any;
      Marker: any;
      InfoWindow: any;
      Animation: {
        DROP: number;
      };
      LatLng: any;
    };
  };
}
