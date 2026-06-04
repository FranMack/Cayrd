import { LocationInfo } from "./location-info";
import { LocationMap } from "./location-map";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Hip%C3%B3dromo+de+Rosario/@-32.9458,-60.6615,17z";

export function Location() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h2 className="mb-12 text-center font-(--font-bebas) text-4xl tracking-wide sm:text-5xl">
          Dónde <span className="text-orange">estamos</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left - Info */}
          <LocationInfo />

          {/* Right - Map Image (clickable) */}
          <LocationMap google_map_url={GOOGLE_MAPS_URL} />
        </div>
      </div>
    </section>
  );
}
