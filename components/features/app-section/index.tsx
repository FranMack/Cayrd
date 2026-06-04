import Image from "next/image";
import { AppInfo } from "./app-info";
import { AppImage } from "./app-image";



export function AppSection() {
  return (
    <section id="app" className="relative overflow-hidden bg-[#0d0d0d] py-20">
      {/* Diagonal orange gradient strip */}
      <div className="absolute right-0 top-1/2 h-[600px] w-[400px] -translate-y-1/2 rotate-12 bg-gradient-to-b from-orange/20 via-orange/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Text content */}
          <AppInfo />

          {/* Right - Phone mockup con imagen */}
        <AppImage/>
        </div>
      </div>
    </section>
  );
}
