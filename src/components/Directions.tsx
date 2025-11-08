import React, { useEffect, useRef, useState } from "react";
import { Map, Navigation } from "lucide-react";

const Directions = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Store coordinates (example: Coimbatore, India coordinates)
  const storeLocation = {
    lat: 10.997194126419899,
    lng: 76.957896408306,
    //10.997444407519314, 76.95823572677877
    //10.997194126419899, 76.957896408306
  };

  useEffect(() => {
    // Load Google Maps API script with the provided API key
    const loadGoogleMapsApi = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDI9WGmridzvmiWeCR85y8-ZwyBOHM33D8&callback=initMap&libraries=places,geometry`;
      script.async = true;
      script.defer = true;

      // Define the callback function globally
      window.initMap = () => {
        if (!mapRef.current) return;

        const map = new window.google.maps.Map(mapRef.current, {
          center: storeLocation,
          zoom: 15,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
        });

        // Add marker for store location
        const marker = new window.google.maps.Marker({
          position: storeLocation,
          map: map,
          title: "Shine Store",
          animation: window.google.maps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; min-width: 200px; font-family: Arial, sans-serif;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #333;">Shine Enterprises</h3>
              <p style="margin: 0 0 4px 0; font-size: 13px; color: #666;">34 Edyar Street</p>
              <p style="margin: 0 0 4px 0; font-size: 13px; color: #666;">Coimbatore, Tamil Nadu 641001</p>
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #666;">India</p>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #888;">📞 +91 9443106008</p>
              <p style="margin: 0; font-size: 12px; color: #888;">✉️ shinestoredotin@gmail.com</p>
            </div>
          `,
          maxWidth: 250,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        // Open info window by default
        infoWindow.open(map, marker);

        setMapLoaded(true);
      };

      document.head.appendChild(script);
    };

    loadGoogleMapsApi();

    // Cleanup
    return () => {
      window.initMap = undefined;
    };
  }, []);

  return (
    <section id="directions" className="py-20 md:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl md:text-7xl mb-10 text-pink-100 animate-fade-in"
          style={{ fontFamily: "Montserrat", fontWeight: "800" }}
        >
          directions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 p-3 rounded-full">
                <Map className="text-white" />
              </div>
              <h3
                className="text-2xl"
                style={{ fontFamily: "Montserrat", fontWeight: "700" }}
              >
                Find Us
              </h3>
            </div>

            <div
              className="space-y-4 text-gray-300"
              style={{ fontFamily: "Open Sans", fontWeight: "600" }}
            >
              <p className="text-lg">
                Visit our store to explore our wide range of cleaning products
                and solutions.
              </p>

              <div className="bg-gray-900 rounded-lg p-4 border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300">
                <h4
                  className="text-white mb-1"
                  style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                >
                  Shine Enteprises
                </h4>
                <p>34 Edyar Street</p>
                <p>Coimbatore, Tamil Nadu 641001</p>
                <p>India</p>
              </div>

              <div className="space-y-2">
                <p>
                  <span
                    className="text-white"
                    style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                  >
                    Hours:
                  </span>{" "}
                  Mon-Sat: 9:00 AM - 8:00 PM
                </p>
                <p>
                  <span
                    className="text-white"
                    style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                  >
                    Phone:
                  </span>{" "}
                  +91 9443106008
                </p>
                <p>
                  <span
                    className="text-white"
                    style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                  >
                    Email:
                  </span>{" "}
                  shinestoredotin@gmail.com
                </p>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/Knm1zcFHeT7z2ted7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full transition-all transform hover:translate-y-[-3px] hover:shadow-lg"
                  style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div
              ref={mapRef}
              className={`w-full min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden border-2 border-purple-400/30 transition-all duration-500 ${
                mapLoaded ? "opacity-100" : "opacity-50"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
