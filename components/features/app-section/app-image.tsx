"use client";
import { useIsVisible } from "@/hooks/use-is-visible";
import Image from "next/image";
export function AppImage(){
 const [ref, isVisible] = useIsVisible();
    return(
           <div ref={ref} className={`flex justify-center lg:justify-end ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700 ease-out`}>
                    <div className="relative">
                      {/* Orange glow */}
                      <div className="absolute -inset-8 rounded-[60px] bg-orange/20 blur-3xl" />
                      <div className="relative  rounded-[40px] border-4 border-gray-800 bg-background p-2 shadow-2xl flex items-center justify-center">
                        <Image
                          src="/images/aplicacion.webp"
                          alt="Vista previa de la app CAYR.D"
                          width={260}
                          height={380}
                          className="rounded-[32px] object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
    )
}   