import React, { useEffect, useRef, useState } from "react";
import { MapPin, MessageCircleQuestion, Clock, Truck, Map } from "lucide-react";

const Directions = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Store coordinates
  const storeLocation = {
    lat: 10.997194126419899,
    lng: 76.957896408306,
  };

  useEffect(() => {
    // Load Google Maps API script with the provided API key
    const loadGoogleMapsApi = () => {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

      if (!apiKey) {
        console.error(
          "Google Maps API key is not configured. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.",
        );
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places,geometry";
      script.async = true;
      script.defer = true;

      // Define the callback function globally
      window.initMap = () => {
        if (!mapRef.current) return;

        const map = new window.google.maps.Map(mapRef.current, {
          center: storeLocation,
          zoom: 15,
          disableDefaultUI: true, // Clean map style
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

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style='padding: 8px; font-family: sans-serif;'>
              <h3 style='margin: 0 0 5px 0; font-size: 14px; font-weight: bold; color: #111;'>Shine Enterprises</h3>
              <p style='margin: 0; font-size: 12px; color: #555;'>34 Edyar Street, Coimbatore</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        setMapLoaded(true);
      };

      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapsApi();
    } else if (window.initMap) {
      window.initMap();
    }

    // Cleanup
    return () => {
      window.initMap = undefined;
    };
  }, []);

  return (
    <section
      id="directions"
      className="py-20 md:py-28 bg-[#0a0a0a] text-white w-full"
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* Left Column - Information */}
          <div className="flex flex-col">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
              style={{ fontFamily: "Montserrat" }}
            >
              Visit Our Hub
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-lg leading-relaxed">
              Experience our full inventory firsthand. Our flagship facility in
              Coimbatore serves as the primary distribution center for southern
              India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 mb-12">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    34 Edyar street,
                    <br />
                    Coimbatore, Tamil
                    <br />
                    Nadu
                    <br />
                    641001, India
                  </p>
                </div>
              </div>

              {/* Connect */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <MessageCircleQuestion className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Connect
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-1">
                    +91 9443106008
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    shinestoredotin@gmail.com
                  </p>
                </div>
              </div>

              {/* Store Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Store Hours
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-1">
                    Mon - Sat
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              {/* Logistics */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <Truck className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Logistics
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-1">
                    Pan-India delivery
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Available safely
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/Knm1zcFHeT7z2ted7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[350px] bg-[#1CE594] hover:bg-[#15c57e] transition-colors text-black font-bold py-4 px-6 rounded-md flex items-center justify-center gap-3 shadow-lg"
            >
              <Map size={20} />
              Open in Google Maps
            </a>
          </div>

          {/* Right Column - Map Interface */}
          <div className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center p-6">
            {/* Offset green border mimicking the design */}
            <div className="absolute inset-0 border border-[#1CE594]/30 rounded-xl transform translate-x-4 translate-y-4 -rotate-1 pointer-events-none"></div>

            {/* Outer map container taking up the entire tan box */}
            <div className="relative w-full h-full bg-[#d0aba0] rounded-xl shadow-2xl z-10 p-6 md:p-10 flex items-center justify-center">
              {/* The actual map target element isolated from React's conditional rendering */}
              <div
                ref={mapRef}
                className={`w-full h-full bg-[#d0aba0] rounded-lg overflow-hidden transition-opacity duration-700 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
              />

              {/* Fallback while map loads */}
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-bold pointer-events-none">
                  Loading Map...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
