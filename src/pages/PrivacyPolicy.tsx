import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { AlertCircle } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Yaalex Executive Lodge";
  }, []);

  return (
    <div className="bg-[#F6F2EC] text-[#1C1814] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340] mb-2">
            LEGAL NOTICE
          </p>
          <h1 className="font-serif fluid-h1 font-normal text-[#1C1814]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6B6158] mt-2">
            Last updated: October 2026
          </p>
        </header>

        {/* Client Note Banner */}
        <div className="p-4 bg-[#EDE6DC] border border-[#D5CABB] rounded-xs mb-8 flex items-start gap-3 text-xs text-[#6B6158]">
          <AlertCircle className="w-5 h-5 text-[#8A6340] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#1C1814]">Note for Lodge Management:</strong> This privacy policy contains sample placeholder wording for website launch. Please review and replace with your verified legal counsel provisions before production commercial deployment.
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs p-6 sm:p-10 text-sm leading-relaxed text-[#6B6158] space-y-6">
          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">1. Information We Collect</h2>
            <p>
              When you submit an availability enquiry through our website, {siteConfig.name} collects the details you provide voluntarily: your full name, phone number, email address (if provided), arrival/departure dates, number of guests, and any special requests or notes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">2. How We Use Your Information</h2>
            <p>
              We use your contact and stay information exclusively to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>Respond directly to your booking enquiry via phone or email;</li>
              <li>Confirm accommodation availability and provide rates;</li>
              <li>Coordinate check-in requirements upon your arrival in Takoradi.</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or distribute guest personal contact records to third-party marketing services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">3. Payment Information</h2>
            <p>
              This website does not collect credit card numbers or process digital payments directly online. Any agreed room reservation payments or deposits are handled directly between the guest and Yaalex Executive Lodge management through standard verified hospitality channels.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[#1C1814] mb-2">4. Contact & Inquiries</h2>
            <p>
              If you have any questions about this privacy statement or wish to amend any details submitted via enquiry, please contact {siteConfig.name} directly at {siteConfig.phone} or via physical mail at {siteConfig.address}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
