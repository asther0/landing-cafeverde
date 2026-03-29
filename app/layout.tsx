import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CafeVerde - CafÃ© de Especialidad en Miraflores",
  description: "Descubre la experiencia artesanal del cafÃ© de especialidad en el corazÃ³n de Miraflores. Brunch, catas y los mejores granos de origen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
