"use client";
import { useIsVisible } from "@/hooks/use-is-visible";
import Image from "next/image";

interface CouchCardProps {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  image: string;
  color: string; // Tailwind color class for ring (e.g., "ring-blue-500")
  position: string; // Tailwind object-position class (e.g., "object-top")
  index: number;
}

export const CouchCard = ({
  name,
  role,
  bio,
  tags,
  image,
  position,
  color,
  index,
}: CouchCardProps) => {
  const [ref, isVisible] = useIsVisible();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl bg-card transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-orange/10 ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-8 scale-[0.98] opacity-0 blur-sm"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 140}ms` : "0ms" }}
    >
      {/* Orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

      <div className="p-6">
        {/* Avatar with photo */}
        <div
          className={`relative mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ${color}`}
        >
          <Image
            src={image}
            alt={`Foto de ${name}`}
            fill
            className={`object-cover ${position}`}
            sizes="96px"
          />
        </div>

        {/* Name and role */}
        <h3 className="font-(--font-bebas) text-2xl tracking-wide">{name}</h3>
        <p className="mb-4 text-sm text-orange">{role}</p>

        {/* Bio */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
