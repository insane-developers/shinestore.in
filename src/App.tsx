import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import CatalogWaitlist from "./pages/CatalogWaitlist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/catalog" element={<CatalogWaitlist />} />
          {/* Add specific paths matching the Coming Soon page mapping */}
          <Route path="/privacy" element={<ComingSoon />} />
          <Route path="/terms" element={<ComingSoon />} />
          <Route path="/institutional-login" element={<ComingSoon />} />
          <Route path="/bulk-inquiry" element={<ComingSoon />} />
          <Route path="/sourcing-guide" element={<ComingSoon />} />
          <Route path="/safety-datasheets" element={<ComingSoon />} />
          <Route path="/institutional" element={<ComingSoon />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
