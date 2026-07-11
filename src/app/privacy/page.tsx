import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Shine Enterprises",
  description: "Learn about how Shine Enterprises collects, uses, and protects your personal information on shinestore.in.",
};

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="text-[#085E39] w-6 h-6" />,
      title: "1. Information We Collect",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We collect information to provide better services to our users. The types of personal information we collect include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong>Contact Details:</strong> Your name, email address, phone number, and shipping/billing address when you make inquiries or purchases.</li>
            <li><strong>Business Information:</strong> GSTIN, company name, and industry type for institutional orders and bulk inquiry processing.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website, such as page visits, browsing time, and device information.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Lock className="text-[#085E39] w-6 h-6" />,
      title: "2. How We Use Your Information",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shine Enterprises uses the collected data for various purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>To process your orders, deliver products, and send invoice confirmations.</li>
            <li>To respond to bulk inquiries and institutional requests efficiently.</li>
            <li>To improve our product catalog, website design, and customer service.</li>
            <li>To send promotional emails, newsletters, or special offers (only if you have opted in).</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Shield className="text-[#085E39] w-6 h-6" />,
      title: "3. Information Protection & Sharing",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            We implement robust security measures to protect your personal information. We do not sell, trade, or rent your personal identification information to others. We may share information with trusted third-party service providers (such as logistics partners) strictly to fulfill deliveries and payments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            All transaction details and business files are stored securely and accessed only by authorized personnel to ensure full confidentiality.
          </p>
        </>
      ),
    },
    {
      icon: <FileText className="text-[#085E39] w-6 h-6" />,
      title: "4. Cookies and Web Analytics",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website uses cookies to enhance user experience. Cookies help us analyze web traffic, remember user preferences, and keep track of your session.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You can choose to accept or decline cookies through your browser settings. Declining cookies may prevent you from taking full advantage of the website features.
          </p>
        </>
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
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4" style={{ fontFamily: "Montserrat" }}>
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto font-medium">
            Last Updated: July 11, 2026. Learn how we protect your personal and business data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-16 py-12 max-w-4xl flex-grow">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-12">
          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Welcome to <strong>shinestore.in</strong> (operated by <strong>Shine Enterprises</strong>). We are committed to protecting your privacy. This Privacy Policy details how we handle the collection, storage, and use of personal and corporate data when you visit our website or interact with our services.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Policy Sections */}
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
                Questions or Concerns?
              </h3>
              <p className="text-gray-600 max-w-md">
                If you have questions about this policy or our data practices, please reach out directly.
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
