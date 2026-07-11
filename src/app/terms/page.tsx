import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, Globe, CreditCard, Truck, RotateCcw, ShieldAlert, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Shine Enterprises",
  description: "Read the Terms of Service and guidelines for ordering products from Shine Enterprises on shinestore.in.",
};

export default function TermsOfService() {
  const sections = [
    {
      icon: <Globe className="text-[#085E39] w-6 h-6" />,
      title: "1. Acceptance of Terms",
      content: (
        <p className="text-gray-600 leading-relaxed">
          By accessing and using <strong>shinestore.in</strong>, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
        </p>
      ),
    },
    {
      icon: <CreditCard className="text-[#085E39] w-6 h-6" />,
      title: "2. Product Information & Pricing",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We make every effort to describe and display our cleaning products, their packaging, and pricing as accurately as possible. However:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>We reserve the right to modify prices, packaging, or product specifications at any time without notice.</li>
            <li>In the case of bulk or institutional orders, final prices will be determined via a customized official quote valid for the period specified in the quote.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Truck className="text-[#085E39] w-6 h-6" />,
      title: "3. Shipping, Logistics & Delivery",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Delivery timelines and logistics vary depending on the destination and order size:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Orders within Coimbatore are typically delivered within 24-48 business hours.</li>
            <li>For shipping outside Coimbatore and across Tamil Nadu or India, transit times depend on the external shipping partner selected.</li>
            <li>Shine Enterprises is not responsible for courier delays caused by unforeseen circumstances, weather, or logisitics constraints.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <RotateCcw className="text-[#085E39] w-6 h-6" />,
      title: "4. Returns, Refunds & Quality Assurance",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We pride ourselves on the quality of our cleaning solutions. If you receive a damaged or incorrect product:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Please report the issue to our customer care team within 48 hours of delivery.</li>
            <li>For institutional and custom formulations, returns are only accepted if the product deviates from the agreed-upon technical parameters or batch specifications.</li>
            <li>Approved refunds will be processed back to the original source payment method or corporate bank account within 5-7 business days.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <ShieldAlert className="text-[#085E39] w-6 h-6" />,
      title: "5. Limitation of Liability",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Shine Enterprises shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services, including but not limited to damages for loss of profits, goodwill, use, or data.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-[#F9FAFB] flex flex-col justify-between">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-[#EBF3F0] to-[#F9FAFB] border-b border-gray-100">
        <div className="container mx-auto px-5 md:px-16 text-center max-w-4xl">
          <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm text-[#085E39] mb-4 border border-[#E1EAE7]">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4" style={{ fontFamily: "Montserrat" }}>
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto font-medium">
            Effective Date: July 11, 2026. Please read our guidelines and operating policies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-16 py-12 max-w-4xl flex-grow">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-12">
          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              These Terms of Service govern your use of the website <strong>shinestore.in</strong> and standard business interactions with <strong>Shine Enterprises</strong>. By browsing this site, purchasing cleaning items, or requesting bulk quotes, you agree to be bound by these policies.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Terms Sections */}
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-3 bg-[#E8EDEE] rounded-xl text-[#085E39] shrink-0 border border-gray-100">
                  {section.icon}
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Montserrat" }}>
                    {section.title}
                  </h2>
                  <div className="text-gray-600">{section.content}</div>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-gray-100" />

          {/* Contact Section */}
          <div className="bg-[#F4F7F6] rounded-2xl p-6 md:p-8 border border-[#E2ECE8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Montserrat" }}>
                Need Help Understanding Our Terms?
              </h3>
              <p className="text-gray-600 max-w-md">
                For corporate accounts, specific SLA terms, or custom delivery policies, reach out directly.
              </p>
            </div>

            <div className="space-y-3 shrink-0 w-full md:w-auto">
              <a href="mailto:contact@shinestore.in" className="flex items-center gap-3 text-gray-700 hover:text-[#085E39] font-semibold transition-colors bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
                <Mail className="w-5 h-5 text-[#085E39]" />
                contact@shinestore.in
              </a>
              <a href="tel:+919443106008" className="flex items-center gap-3 text-gray-700 hover:text-[#085E39] font-semibold transition-colors bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
                <Phone className="w-5 h-5 text-[#085E39]" />
                +91 9443106008
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
