"use client";
import { GOOGLE_API } from "@/shared/constants";
import { useEffect, useRef } from "react";

export default function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the map
      const watfordLocation = { lat: 51.6565, lng: -0.3903 }; // Watford coordinates
      const map = new window.google.maps.Map(mapRef.current, {
        center: watfordLocation,
        zoom: 15,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }], // Hide points of interest
          },
        ],
      });

      // Add marker
      new window.google.maps.Marker({
        position: watfordLocation,
        map,
        title: "Watford Tutoring Academy",
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-xl"
      style={{ height: "400px" }}
    />
  );
}
