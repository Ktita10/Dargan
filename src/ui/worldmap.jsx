"use client";
import WorldMap from "./world-map";

export function WorldMapDemo() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <WorldMap
        dots={[
          {
            start: { lat: -31.5375, lng: -68.5364 }, // San Juan, Argentina
            end: { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brasil
          },
          {
            start: { lat: -31.5375, lng: -68.5364 }, // San Juan, Argentina
            end: { lat: -34.9011, lng: -56.1645 }, // Montevideo, Uruguay
          },
          {
            start: { lat: -31.5375, lng: -68.5364 }, // San Juan, Argentina
            end: { lat: 25.2048, lng: 55.2708 }, // Dubai, EAU
          },
        ]}
        lineColor="#15803d"
      />
    </div>
  );
}
