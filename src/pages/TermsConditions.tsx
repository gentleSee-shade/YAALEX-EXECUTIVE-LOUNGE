import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { AlertCircle } from 'lucide-react';

export const TermsConditions: React.FC = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Yaalex Executive Lodge";
  }, []);

  return (
    <div className="bg-[#F6F2EC] text-[#1C1814] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340] mb-2">
            LEGAL NOTICE
          </p>
          <h1 className="font-serif fluid-h1 font-normal text-[#1C1814]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#6B6158] mt-2">
            Last updated: October 2026
          </p>
        </header>

        {/* Client Note Banner */}
        <div className="p-4 bg-[#EDE6DC] border border-[#D5CABB] rounded-xs mb-8 flex items-start gap-3 text-xs text-[#6B6158]">
          <AlertCircle className="w-5 h-5 text-[#8A6340] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#1C1814]">Note for Lodge Management:</strong> This terms and conditions document contains sample placeholder clauses for the website launch. Please replace with your lodge's confirmed formal policies, check-in rules, deposit requirements, and cancellation terms.
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs p-6 sm:p-10 text-sm leading-relaxed text-[#6B6158] space-y-6">
          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">1. Website Use & Booking Enquiries</h2>
            <p>
              This website serves as an informational and enquiry portal for {siteConfig.name}. Submitting an enquiry through the online form or direct telephone contact indicates an expression of interest and does not constitute a guaranteed room confirmation until confirmed directly by lodge management.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">2. Rates & Availability</h2>
            <p>
              Room rates and availability are subject to verification upon direct contact. While we strive to maintain accurate room descriptions, actual room allocation may depend on availability at the time of final confirmation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">3. Check-In & Check-Out Policies</h2>
            <p>
              Guests are kindly asked to respect standard arrival and departure schedules. Special arrival accommodations should be communicated in advance during reservation confirmation. Valid identification may be required upon check-in.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">4. Guest Conduct & Property</h2>
            <p>
              Guests are expected to treat lodge premises, staff, and fellow visitors with courtesy and respect. Any damage to property or lodge equipment may result in corresponding repair or replacement charges.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising in connection with stay agreements shall be subject to the jurisdiction of the courts in Ghana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
