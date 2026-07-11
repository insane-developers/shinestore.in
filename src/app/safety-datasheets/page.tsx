"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Send, 
  FileText, 
  Loader2, 
  Mail, 
  Phone, 
  FileCheck, 
  ExternalLink,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ==========================================
// CONFIGURATION: Paste your OneDrive or Google Drive shared folder link here.
// If empty (""), the page will automatically show the request form and instructions
// on how to request documents, hiding the direct download drive button.
// ==========================================
const SHARED_DRIVE_LINK = ""; // e.g., "https://drive.google.com/drive/folders/..."

export default function SafetyDatasheets() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    docType: "Safety Datasheet (SDS)",
    product: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database/email API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted Successfully",
        description: `Your request for the ${formData.docType} of "${formData.product || 'selected products'}" has been sent. We will email the files to ${formData.email} shortly.`,
        duration: 5000,
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        docType: "Safety Datasheet (SDS)",
        product: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen font-sans bg-[#F9FAFB] flex flex-col justify-between">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-[#EBF3F0] to-[#F9FAFB] border-b border-gray-100">
        <div className="container mx-auto px-5 md:px-16 text-center max-w-4xl">
          <span className="text-[#085E39] font-bold text-xs uppercase tracking-widest bg-[#E1EAE7] px-3.5 py-1.5 rounded-full mb-4 inline-block border border-[#D5E2DE]">
            Compliance & Safety
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 mt-2" style={{ fontFamily: "Montserrat" }}>
            Product Safety & Compliance
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Access Material Safety Data Sheets (SDS) and official Quality Certificates for Shine Enterprises products.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-5 md:px-16 py-12 max-w-5xl flex-grow space-y-12">
        {/* Shared Repository Card */}
        {SHARED_DRIVE_LINK ? (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E2ECE8] bg-gradient-to-r from-white to-[#F4F7F6] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex p-2.5 bg-[#E8EDEE] rounded-xl text-[#085E39]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: "Montserrat" }}>
                Shared Document Archive
              </h2>
              <p className="text-gray-600 max-w-xl">
                We maintain a public repository containing up-to-date SDS files, compliance declarations, and standard product specifications.
              </p>
            </div>
            <a 
              href={SHARED_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#085E39] hover:bg-[#06492b] text-white font-bold py-4 px-8 rounded-full transition-all text-xs tracking-wider uppercase inline-flex items-center gap-2 shrink-0 shadow-sm"
            >
              Browse Shared Drive
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <div className="bg-[#F3F6F5] rounded-3xl p-6 md:p-8 border border-gray-200 flex gap-4 items-start">
            <Info className="w-6 h-6 text-[#085E39] shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h3 className="font-bold text-gray-950" style={{ fontFamily: "Montserrat" }}>
                Document Repository Note
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our central cloud folder link is currently being configured. To obtain official signed Material Safety Data Sheets (MSDS / SDS), Certificates of Analysis (COA), or technical data for any batch, please submit the request form below. Our compliance desk responds within 2-4 business hours.
              </p>
            </div>
          </div>
        )}

        {/* Request Form Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Left - Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#085E39] font-bold text-xs uppercase tracking-wider">
              Document Desk
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight" style={{ fontFamily: "Montserrat" }}>
              Request Quality Documents
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We tailor document packets based on institutional customer audits and compliance requirements. You may request:
            </p>
            <ul className="space-y-3.5 text-sm text-gray-600 font-medium">
              <li className="flex gap-3 items-center">
                <div className="p-1 bg-[#E8EDEE] rounded-full text-[#085E39]">
                  <ShieldCheck size={14} />
                </div>
                <span>Material Safety Data Sheets (SDS / MSDS)</span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="p-1 bg-[#E8EDEE] rounded-full text-[#085E39]">
                  <ShieldCheck size={14} />
                </div>
                <span>Certificates of Analysis (COA)</span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="p-1 bg-[#E8EDEE] rounded-full text-[#085E39]">
                  <ShieldCheck size={14} />
                </div>
                <span>ISO & Regulatory Compliance Letters</span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="p-1 bg-[#E8EDEE] rounded-full text-[#085E39]">
                  <ShieldCheck size={14} />
                </div>
                <span>Custom Dilution Guideline Charts</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              <a href="mailto:contact@shinestore.in" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#085E39] font-semibold transition-colors">
                <Mail className="w-5 h-5 text-[#0A6C4A]" />
                <span>contact@shinestore.in</span>
              </a>
              <a href="tel:+919443106008" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#085E39] font-semibold transition-colors">
                <Phone className="w-5 h-5 text-[#0A6C4A]" />
                <span>+91 9443106008</span>
              </a>
            </div>
          </div>

          {/* Form Right - Input Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-[#F9FAFB] focus:bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. purchasing@school.edu"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-[#F9FAFB] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Institution / Company</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Shine Enterprises"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-[#F9FAFB] focus:bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Document Type *</label>
                <select
                  name="docType"
                  value={formData.docType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-[#F9FAFB] focus:bg-white cursor-pointer"
                >
                  <option>Safety Datasheet (SDS)</option>
                  <option>Certificate of Analysis (COA)</option>
                  <option>Technical Specification Sheet</option>
                  <option>Regulatory Compliance Certificate</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Product Name *</label>
              <input
                type="text"
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                placeholder="e.g. Ultra Floor Cleaner, Dishwash Liquid, or Custom Concentration"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-[#F9FAFB] focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Additional Instructions (Optional)</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know if you require specific batches, custom formats, or physical signed copies..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-[#F9FAFB] focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#085E39] hover:bg-[#06492b] disabled:bg-gray-200 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting Request...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Submit Request
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
