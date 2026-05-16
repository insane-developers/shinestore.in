import "../index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata = {
  title:
    "Shine Enterprises | Premium Cleaning Products in Coimbatore | Shine Store",
  description:
    "Shine Enterprises offers premium cleaning products and solutions in Coimbatore, Tamil Nadu. Visit our store at 34 Edyar Street for household, commercial, and industrial cleaning supplies. Quality products for every cleaning need.",
  keywords:
    "cleaning products Coimbatore, cleaning supplies Tamil Nadu, shine store, shine enterprises, household cleaning, industrial cleaning, commercial cleaning products, 34 Edyar Street",
  authors: [{ name: "Shine Enterprises" }],
  openGraph: {
    type: "website",
    url: "https://shinestore.in/",
    title: "Shine Enterprises | Premium Cleaning Products in Coimbatore",
    description:
      "Premium cleaning products and solutions for homes and industries in Coimbatore. Visit Shine Store at 34 Edyar Street for quality cleaning supplies.",
    images: [
      {
        url: "https://shinestore.in/favicon.ico",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
