"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Building2, 
  GraduationCap, 
  Plane, 
  UploadCloud, 
  CheckCircle2, 
  Loader2, 
  Send, 
  X, 
  Award, 
  Building, 
  Percent, 
  FileText,
  Download,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function InstitutionalRFQ() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    pinCode: "",
    category: "Schools & Colleges",
    message: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const rfqFormRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Drag and Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // Limit file size to 5MB
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload files smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload files smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const scrollToRFQ = () => {
    rfqFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const triggerChecklistDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Download Started",
        description: "Your Institutional Hygiene Checklist is downloading.",
        duration: 4000,
      });

      const content = `SHINE ENTERPRISES - B2B HYGIENE CHECKLIST
===============================================
Institutional & Commercial Sanitization Checklist

1. CLASSROOMS & AUDITORIUMS (Daily)
   [ ] Desk and seating disinfection
   [ ] Door handles, light switches, and whiteboards
   [ ] Floors mopped with Shine Floor Cleaner (1:50 dilution)
   [ ] Waste bins cleared and disinfected

2. CORPORATE OFFICES & CONFERENCE ROOMS (Daily)
   [ ] Shared workstations & phone sanitization
   [ ] Glass panels polished with Shine Glass Sparkle
   [ ] High-touch cabinet knobs & elevator panels
   [ ] Multi-purpose sanitizing wipes refill

3. HIGH-TRAFFIC RESTROOMS & COMMON AREAS (3x Daily)
   [ ] Sinks, taps, and washroom counters sanitized
   [ ] Urinal bowls treated with Shine Acidic Toilet Cleaner
   [ ] Floor cleaning with neutral sanitizing agent
   [ ] Liquid Hand Soap dispensers refilled (Shine Pearl Soap)

Thank you for choosing Shine Enterprises for your sanitation compliance.
Contact: contact@shinestore.in | +91 9443106008`;

      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Shine_Institutional_Hygiene_Checklist.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1200);
  };

  const toBase64 = (file: File): Promise<string> => 
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian phone number starting with 6-9.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{6}$/.test(formData.pinCode)) {
      toast({
        title: "Invalid PIN Code",
        description: "Please enter a valid 6-digit delivery area PIN code.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    let fileData: string | undefined = undefined;
    if (selectedFile) {
      try {
        fileData = await toBase64(selectedFile);
      } catch (error) {
        console.error("Error reading file:", error);
        toast({
          title: "File Upload Error",
          description: "Failed to read the selected file. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
    }

    try {
      let baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.shinestore.in";
      
      // Fallback for local dev testing
      if (typeof window !== "undefined" && window.location.hostname === "localhost" && baseUrl.includes("api.shinestore.in")) {
        baseUrl = "http://localhost:5000";
      }

      const API_URL = `${baseUrl}/v0/rfq/request`;

      const payload = {
        ...formData,
        fileName: selectedFile ? selectedFile.name : undefined,
        fileData
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast({
          title: "RFQ Submitted Successfully!",
          description: `Thank you, ${formData.name}. Your quote request has been routed to our B2B team. A customized quote will be sent to ${formData.email} within 24 hours.`,
          duration: 5000,
        });

        // Reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          pinCode: "",
          category: "Schools & Colleges",
          message: ""
        });
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast({
          title: "Submission Failed",
          description: responseData.message || "Failed to submit RFQ. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting RFQ:", error);
      toast({
        title: "Connection Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    {
      icon: <GraduationCap className="w-10 h-10 text-[#085E39]" />,
      title: "Schools & Colleges",
      points: [
        "Safe, skin-friendly hand soap formulations",
        "Disinfectants tested for child environments",
        "Bulk dilution drums (50L to 200L MOQ sizes)",
        "Durable washroom hygiene solutions"
      ]
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#085E39]" />,
      title: "Banks & Corporate Offices",
      points: [
        "Premium fragrance liquid detergents & hand wash",
        "Streak-free glass cleaners for corporate facades",
        "Lobby floor shine and polishing compounds",
        "Regular weekly replenishment contracts"
      ]
    },
    {
      icon: <Plane className="w-10 h-10 text-[#085E39]" />,
      title: "Airports & Govt Offices",
      points: [
        "Heavy-duty surface degreasers and cleaners",
        "Non-corrosive sanitation supplies for electronics",
        "Full MSDS / SDS and compliance documentation",
        "Priority logistics & emergency supply dispatches"
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-[#F9FAFB] flex flex-col justify-between">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-[#EBF3F0] to-[#F9FAFB] border-b border-gray-100 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-[#085E39]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-[#F6C000]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-5 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[#085E39] font-bold text-xs uppercase tracking-widest bg-[#E1EAE7] px-3.5 py-1.5 rounded-full border border-[#D5E2DE]">
              B2B Commercial Sourcing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight" style={{ fontFamily: "Montserrat" }}>
              Direct Factory Cleaning Supplies for <span className="text-[#085E39]">Institutions</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Equip your corporate facilities, educational campuses, or healthcare centers with premium, tax-compliant sanitation chemicals. Lower your facility operations overhead.
            </p>
            <div className="flex flex-wrap gap-4 pt-3">
              <button 
                onClick={scrollToRFQ}
                className="bg-[#085E39] hover:bg-[#06492b] text-white font-bold py-4 px-8 rounded-xl transition-all text-xs tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                Request a Bulk Quote
                <ChevronRight size={16} />
              </button>
              <button 
                onClick={triggerChecklistDownload}
                disabled={isDownloading}
                className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:text-[#085E39] font-bold py-4 px-8 rounded-xl transition-all text-xs tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download Hygiene Checklist
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative border border-gray-100 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" 
                alt="Institutional Cleaning" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#085E39] text-white p-5 rounded-2xl border border-white/10 shadow-lg flex gap-4 items-center">
                <div className="p-3 bg-white/10 rounded-xl">
                  <ShieldCheck className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ fontFamily: "Montserrat" }}>ISO Certified Formulas</h4>
                  <p className="text-emerald-100 text-xs mt-0.5">Approved compliance for state audits & schools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white border-y border-gray-200 py-6">
        <div className="container mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex items-center justify-center gap-4 py-4 md:py-0">
            <div className="p-2.5 bg-[#E8EDEE] rounded-xl text-[#085E39]">
              <Percent className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-gray-900 text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>Direct Factory Pricing</h4>
              <p className="text-gray-500 text-xs font-semibold">Cleantech chemical formulations</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 py-4 md:py-0">
            <div className="p-2.5 bg-[#E8EDEE] rounded-xl text-[#085E39]">
              <Building className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-gray-900 text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>100% GST ITC Compliant</h4>
              <p className="text-gray-500 text-xs font-semibold">Valid Input Tax Credit invoices</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-4 md:py-0">
            <div className="p-2.5 bg-[#E8EDEE] rounded-xl text-[#085E39]">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-gray-900 text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>MSME Registered</h4>
              <p className="text-gray-500 text-xs font-semibold">Certified small business vendor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5 md:px-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#085E39] font-bold text-xs uppercase tracking-wider">
              Tailored Sourcing Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "Montserrat" }}>
              Catering to Key Sectors
            </h2>
            <p className="text-gray-500 font-medium">
              We adjust formulation concentrations, packing styles, and delivery schedules to meet strict institutional guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs hover:border-[#085E39]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="p-3 bg-[#E8EDEE] rounded-2xl inline-block">
                    {ind.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Montserrat" }}>
                    {ind.title}
                  </h3>
                  <ul className="space-y-3">
                    {ind.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-sm text-gray-600 font-medium">
                        <CheckCircle2 size={16} className="text-[#085E39] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Form Container */}
      <section ref={rfqFormRef} id="rfq" className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-16 max-w-4xl space-y-12">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "Montserrat" }}>
              Request For Quote (RFQ)
            </h2>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Complete the detailed sheet below or upload your purchase spreadsheet. Our sales desk will issue custom pricing packages.
            </p>
          </div>

          <div className="bg-[#F8FAF9] rounded-3xl p-8 md:p-12 border border-[#E9EFEF] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Part 1: Company & Contact */}
              <div className="space-y-5">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#085E39] border-b border-[#E1EAE7] pb-2">
                  1. Corporate & Contact Details
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Contact Person Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Binil Kumar"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. procurement@shinestore.in"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Contact Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9443106008"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Organization Name / GSTIN *</label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Shine Enterprises"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Part 2: Sourcing Location & Requirements */}
              <div className="space-y-5">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#085E39] border-b border-[#E1EAE7] pb-2">
                  2. Sourcing Requirements
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Delivery Pin Code *</label>
                    <input
                      type="text"
                      name="pinCode"
                      required
                      value={formData.pinCode}
                      onChange={handleChange}
                      placeholder="e.g. 641001"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Primary Product Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-white cursor-pointer"
                    >
                      <option>Schools & Colleges</option>
                      <option>Banks & Corporate Offices</option>
                      <option>Airports & Govt Facilities</option>
                      <option>Industrial Formulations (Custom Dilutions)</option>
                      <option>Other / Multi-Category Sourcing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Specific Requirements / Volume details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about products, packing preferences (e.g. 5L cans), dilution strengths, or contract length..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#085E39]/10 focus:border-[#085E39] transition-all bg-white resize-none"
                  />
                </div>
              </div>

              {/* Part 3: File Upload Zone */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Quick Upload Purchase Order / Item List</label>
                
                <div 
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-6 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer ${
                    dragActive 
                      ? "border-[#085E39] bg-[#E8EDEE]/30" 
                      : "border-gray-300 hover:border-[#085E39] bg-white"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.xlsx,.xls,.png,.jpg,.jpeg"
                  />
                  
                  {selectedFile ? (
                    <div className="flex items-center gap-3 bg-[#E8EDEE] text-[#085E39] px-4 py-2 rounded-xl border border-[#D5E2DE] relative">
                      <FileText size={18} />
                      <span className="text-xs font-bold truncate max-w-[200px]">{selectedFile.name}</span>
                      <button 
                        type="button" 
                        onClick={(e) => { e.stopPropagation(); clearFile(); }}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <UploadCloud size={36} className="text-gray-400" />
                      <div className="text-center">
                        <p className="text-sm font-bold text-gray-700">Drag & drop requirements sheet here, or <span className="text-[#085E39] hover:underline">browse files</span></p>
                        <p className="text-[11px] text-gray-400 mt-1">Accepts PDF, Excel, Word, or Image files (Max 5MB)</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#085E39] hover:bg-[#06492b] disabled:bg-gray-200 text-white font-bold py-4 px-6 rounded-xl transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting RFQ...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Submit Request for Quote
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Assistance Help Desk */}
      <section className="py-12 bg-[#F4F7F6] border-t border-[#E2ECE8]">
        <div className="container mx-auto px-5 md:px-16 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-1 text-left">
            <h4 className="font-extrabold text-gray-900 text-xl" style={{ fontFamily: "Montserrat" }}>Have Questions or Complex SLAS?</h4>
            <p className="text-gray-600 text-sm font-medium">Connect directly with our Chief Procurement Officer for tailored accounts.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 shrink-0 w-full md:w-auto">
            <a href="tel:+919443106008" className="flex items-center gap-2.5 text-xs font-bold text-gray-800 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-xs hover:text-[#085E39] hover:border-[#085E39]/30 transition-all">
              <Phone size={16} className="text-[#085E39]" />
              +91 9443106008
            </a>
            <a href="mailto:contact@shinestore.in" className="flex items-center gap-2.5 text-xs font-bold text-gray-800 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-xs hover:text-[#085E39] hover:border-[#085E39]/30 transition-all">
              <Mail size={16} className="text-[#085E39]" />
              contact@shinestore.in
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
