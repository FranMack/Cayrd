export function JsonLd({ domain }: { domain: string }) {
  const siteName = "CAYR.D";
  const description =
    "Fútbol amateur, fútbol mayores, +30, hockey femenino y entrenamiento personalizado en Rosario. Comunidad deportiva en el complejo El Ovalo, Hipódromo de Rosario.";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: domain,
            description,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            name: siteName,
            url: domain,
            description,

            logo: {
              "@type": "ImageObject",
              url: `${domain}/icon.png`,
            },

            image: `${domain}/images/og_image.jpg`,

            address: {
              "@type": "PostalAddress",
              addressLocality: "Rosario",
              addressRegion: "Santa Fe",
              addressCountry: "AR",
            },

            areaServed: "Argentina",
            sport: ["Fútbol", "Hockey"],
          }),
        }}
      />
    </>
  );
}
