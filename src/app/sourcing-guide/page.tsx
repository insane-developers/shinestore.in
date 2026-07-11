import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Compass, 
  ClipboardList, 
  Beaker, 
  FileCheck, 
  Truck, 
  ChevronRight, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Sliders, 
  Coins 
} from "lucide-react";

export const metadata = {
  title: "Institutional Sourcing Guide | Shine Enterprises",
  description: "A step-by-step guide for institutions, schools, hospitals, and corporations to source bulk cleaning products from Shine Enterprises.",
};

export default function SourcingGuide() {
  const steps = [
    {
      num: "01",
      icon: <Compass className="w-6 h-6 text-[#085E39]" />,
      title: "Explore Product Range",
      desc: "Browse our standard catalog of premium cleaners, disinfectants, dishwash liquids, and personal hygiene products to identify what fits your needs.",
    },
    {
      num: "02",
      icon: <ClipboardList className="w-6 h-6 text-[#085E39]" />,
      title: "Submit Bulk Inquiry",
      desc: "Fill out our quick online bulk inquiry form or contact our team directly, specifying expected monthly volume, bottle sizes (e.g., 5L, 20L, 50L), and delivery timeline.",
    },
    {
      num: "03",
      icon: <Beaker className="w-6 h-6 text-[#085E39]" />,
      title: "Custom Formulations & Samples",
      desc: "Request customized fragrance levels, active-matter concentration, or colors. We ship institutional sample batches directly to your facility for validation.",
    },
    {
      num: "04",
      icon: <FileCheck className="w-6 h-6 text-[#085E39]" />,
      title: "Get Corporate Quotes",
      desc: "Receive customized tax-compliant GST quotes and SLA agreements with volume-based pricing discounts structured for long-term contract partners.",
    },
    {
      num: "05",
      icon: <Truck className="w-6 h-6 text-[#085E39]" />,
      title: "Production & Delivery",
      desc: "Once confirmed, we initiate quality-controlled production. Deliveries are dispatched using our regional fleet (Coimbatore) or trusted cargo channels pan-India.",
    },
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#085E39]" />,
      title: "Industrial-Grade QC",
      desc: "Every batch is rigorously tested for active ingredients and consistency, guaranteeing maximum effectiveness and safety for public environments.",
    },
    {
      icon: <Sliders className="w-8 h-8 text-[#085E39]" />,
      title: "Tailored Adjustments",
      desc: "We can adjust viscosity, surfactant levels, or color coding to align with your facility's internal cleaning guidelines or automated dispensers.",
    },
    {
      icon: <Coins className="w-8 h-8 text-[#085E39]" />,
      title: "Direct Factory Pricing",
      desc: "Cut out middlemen distributors. Partner directly with the manufacturer to reduce facility maintenance overheads by up to 25%.",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-[#F9FAFB] flex flex-col justify-between">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-[#EBF3F0] to-[#F9FAFB] border-b border-gray-100">
        <div className="container mx-auto px-5 md:px-16 text-center max-w-4xl">
          <span className="text-[#085E39] font-bold text-xs uppercase tracking-widest bg-[#E1EAE7] px-3.5 py-1.5 rounded-full mb-4 inline-block border border-[#D5E2DE]">
            Procurement & Logistics
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 mt-2" style={{ fontFamily: "Montserrat" }}>
            Institutional Sourcing Guide
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            A comprehensive blueprint for schools, hospitals, hotels, corporate offices, and industries to source premium cleaning chemicals directly.
          </p>
        </div>
      </div>

      {/* Process Map */}
      <main className="container mx-auto px-5 md:px-16 py-12 max-w-6xl flex-grow space-y-20">
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: "Montserrat" }}>
              Our 5-Step Sourcing Workflow
            </h2>
            <p className="text-gray-600 mt-3 font-medium">
              We've streamlined our manufacturing and procurement flow to align with institutional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative group hover:border-[#085E39]/30 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-black text-gray-200 group-hover:text-[#085E39]/20 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2.5 bg-[#E8EDEE] rounded-xl border border-gray-100">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "Montserrat" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-[#085E39] font-bold text-xs uppercase tracking-wider">
                Partner Benefits
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight" style={{ fontFamily: "Montserrat" }}>
                Built to Support Bulk Operations
              </h2>
              <p className="text-gray-600 font-medium">
                At Shine Enterprises, we understand the complexities of corporate facility supply. We deliver value, predictability, and safety.
              </p>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-sm text-[#085E39] font-bold">
                  <CheckCircle2 size={16} /> Ready to cater to MOQ of 100L+
                </div>
                <div className="flex items-center gap-2 text-sm text-[#085E39] font-bold mt-2">
                  <CheckCircle2 size={16} /> GST Tax Invoices provided
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="bg-[#F8FAF9] rounded-2xl p-6 border border-[#E9EFEF] space-y-4">
                  <div className="p-3 bg-white rounded-xl shadow-xs border border-gray-100 inline-block">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "Montserrat" }}>
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-gradient-to-r from-[#0A6C4A] to-[#085E39] rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-10 -translate-y-10 blur-2xl"></div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "Montserrat" }}>
              Ready to Streamline Your Cleanliness Sourcing?
            </h2>
            <p className="text-emerald-100 text-lg max-w-xl font-medium">
              Connect with our Institutional Supply Specialist. We'll consult, send free samples, and deliver custom quotes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/bulk-inquiry" className="bg-[#F6C000] text-gray-900 hover:bg-yellow-400 font-bold py-3.5 px-8 rounded-full transition-all text-xs tracking-wider uppercase inline-flex items-center gap-2">
                Go to Bulk Inquiry
                <ChevronRight size={16} />
              </Link>
              <a href="tel:+919443106008" className="bg-white/10 hover:bg-white/15 text-white font-bold py-3.5 px-8 rounded-full transition-all text-xs tracking-wider uppercase inline-flex items-center gap-2 border border-white/20">
                <Phone size={16} />
                Call Procurement
              </a>
              <a href="mailto:contact@shinestore.in" className="bg-white/10 hover:bg-white/15 text-white font-bold py-3.5 px-8 rounded-full transition-all text-xs tracking-wider uppercase inline-flex items-center gap-2 border border-white/20">
                <Mail size={16} />
                Email Purchase RFP
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
