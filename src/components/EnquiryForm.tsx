import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/siteConfig';
import { rooms } from '../data/rooms';
import { Phone, MessageSquare, Mail, Calendar, User, Users, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';

interface EnquiryFormProps {
  initialRoom?: string;
  onSuccess?: () => void;
  className?: string;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomPreference: string;
  message: string;
  honeypot: string; // Anti-spam
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialRoom = 'none',
  onSuccess,
  className = '',
}) => {
  const mountTimeRef = useRef<number>(Date.now());

  // Calculate default dates: check-in tomorrow, check-out day after
  const getTomorrowStr = (daysAhead: number = 1) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return d.toISOString().split('T')[0];
  };

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: getTomorrowStr(1),
    checkOut: getTomorrowStr(2),
    adults: 1,
    children: 0,
    roomPreference: initialRoom,
    message: '',
    honeypot: '',
  });

  useEffect(() => {
    if (initialRoom) {
      setFormData((prev) => ({ ...prev, roomPreference: initialRoom }));
    }
  }, [initialRoom]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validate dates whenever checkIn changes
  const handleCheckInChange = (newCheckIn: string) => {
    setFormData((prev) => {
      let newCheckOut = prev.checkOut;
      if (newCheckIn >= prev.checkOut) {
        // Move check-out to the next day
        const checkInDate = new Date(newCheckIn);
        checkInDate.setDate(checkInDate.getDate() + 1);
        newCheckOut = checkInDate.toISOString().split('T')[0];
      }
      return {
        ...prev,
        checkIn: newCheckIn,
        checkOut: newCheckOut,
      };
    });

    if (errors.checkIn || errors.checkOut) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.checkIn;
        delete next.checkOut;
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    // Phone validation: allows Ghana local (02X, 05X, 03X) or international format (+233...)
    const phoneClean = formData.phone.trim().replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+?\d{9,15}|0\d{9})$/;
    if (!phoneClean) {
      newErrors.phone = 'Please provide a valid phone number.';
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +233 31 229 0817 or 0244 000 000).';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Please select a check-in date.';
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Please select a check-out date.';
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out date must be after your check-in date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildSummaryMessage = () => {
    const roomText =
      formData.roomPreference === 'none'
        ? 'No specific room preference'
        : formData.roomPreference;

    return `Hello Yaalex Executive Lodge, I would like to enquire about room availability.\n\n` +
      `Guest Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      (formData.email ? `Email: ${formData.email}\n` : '') +
      `Dates: ${formData.checkIn} to ${formData.checkOut}\n` +
      `Guests: ${formData.adults} adult(s)${formData.children > 0 ? `, ${formData.children} child(ren)` : ''}\n` +
      `Room Choice: ${roomText}\n` +
      (formData.message ? `Note: ${formData.message}\n` : '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam honeypot check
    if (formData.honeypot) {
      setSubmitSuccess(true);
      return;
    }

    // Fast-submit spam detection (< 1.5 seconds)
    if (Date.now() - mountTimeRef.current < 1500) {
      setSubmitError('Please review your details before submitting.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (siteConfig.formEndpoint && siteConfig.formEndpoint.trim() !== '') {
        const response = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error('Server returned an error.');
        }

        setSubmitSuccess(true);
        if (onSuccess) onSuccess();
      } else {
        // Form endpoint not configured: provide polite direct dispatch
        // If WhatsApp is configured:
        if (siteConfig.whatsappNumber) {
          const text = encodeURIComponent(buildSummaryMessage());
          const cleanWa = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
          window.open(`https://wa.me/${cleanWa}?text=${text}`, '_blank');
        } else if (siteConfig.email) {
          const subject = encodeURIComponent(`Reservation Enquiry - ${formData.fullName}`);
          const body = encodeURIComponent(buildSummaryMessage());
          window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        }
        // Always show the calm received state on screen
        setSubmitSuccess(true);
        if (onSuccess) onSuccess();
      }
    } catch {
      setSubmitError(
        'Unable to submit online at this moment. Please call +233 31 229 0817 directly or contact us via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      checkIn: getTomorrowStr(1),
      checkOut: getTomorrowStr(2),
      adults: 1,
      children: 0,
      roomPreference: 'none',
      message: '',
      honeypot: '',
    });
    setSubmitSuccess(false);
    setSubmitError(null);
    setErrors({});
  };

  if (submitSuccess) {
    return (
      <div className={`p-6 sm:p-8 bg-[#1E1A17] text-[#F3EDE4] border border-[#B7895F]/30 ${className}`}>
        <div className="flex items-center gap-3 text-[#B7895F] mb-4">
          <CheckCircle className="w-6 h-6 stroke-[1.5]" />
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3EDE4]">Enquiry Received</h3>
        </div>
        <p className="font-sans text-sm sm:text-base text-[#C9BFB2] leading-relaxed mb-6">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your availability enquiry for {formData.checkIn} to {formData.checkOut}. Yaalex Executive Lodge will respond promptly via your provided phone number to confirm details.
        </p>
        <div className="p-4 bg-[#2A241F] border border-[#B7895F]/20 mb-6 text-xs text-[#C9BFB2] space-y-1">
          <p><span className="text-[#B7895F]">Guests:</span> {formData.adults} adult(s) {formData.children > 0 && `· ${formData.children} child(ren)`}</p>
          <p><span className="text-[#B7895F]">Room:</span> {formData.roomPreference === 'none' ? 'No preference' : formData.roomPreference}</p>
          <p><span className="text-[#B7895F]">Contact phone:</span> {formData.phone}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" size="md" onClick={handleReset}>
            Send Another Enquiry
          </Button>
          <Button
            asAnchor
            href={`tel:${siteConfig.phoneRaw}`}
            variant="secondary-dark"
            size="md"
            icon={<Phone className="w-4 h-4" />}
          >
            Call {siteConfig.phone}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-5 ${className}`}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-field">Leave this empty</label>
        <input
          type="text"
          id="website-field"
          name="website-field"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      {submitError && (
        <div
          role="alert"
          className="p-4 bg-red-950/60 border border-red-800 text-red-200 text-sm flex items-start gap-3 rounded-xs"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
          <div>
            <p className="font-medium">Enquiry Notice</p>
            <p className="mt-0.5 text-xs text-red-200/90">{submitError}</p>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
          Full Name <span className="text-[#B7895F]">*</span>
        </label>
        <div className="relative">
          <input
            id="fullName"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: '' });
            }}
            placeholder="e.g. Kwesi Mensah"
            className="w-full bg-[#1E1A17] border border-[#2A241F] focus:border-[#B7895F] focus:ring-1 focus:ring-[#B7895F] text-[#F3EDE4] px-3.5 py-2.5 text-sm rounded-xs outline-none transition-colors placeholder:text-[#6B6158]"
          />
          <User className="w-4 h-4 text-[#6B6158] absolute right-3 top-3 pointer-events-none" />
        </div>
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-xs text-red-400 font-sans" aria-live="polite">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Contact Grid: Phone and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
            Phone Number <span className="text-[#B7895F]">*</span>
          </label>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              placeholder="e.g. +233 31 229 0817"
              className="w-full bg-[#1E1A17] border border-[#2A241F] focus:border-[#B7895F] focus:ring-1 focus:ring-[#B7895F] text-[#F3EDE4] px-3.5 py-2.5 text-sm rounded-xs outline-none transition-colors placeholder:text-[#6B6158]"
            />
            <Phone className="w-4 h-4 text-[#6B6158] absolute right-3 top-3 pointer-events-none" />
          </div>
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-400 font-sans" aria-live="polite">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
            Email <span className="text-[#6B6158] text-[10px] lowercase">(optional)</span>
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="e.g. name@company.com"
              className="w-full bg-[#1E1A17] border border-[#2A241F] focus:border-[#B7895F] focus:ring-1 focus:ring-[#B7895F] text-[#F3EDE4] px-3.5 py-2.5 text-sm rounded-xs outline-none transition-colors placeholder:text-[#6B6158]"
            />
            <Mail className="w-4 h-4 text-[#6B6158] absolute right-3 top-3 pointer-events-none" />
          </div>
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400 font-sans" aria-live="polite">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Date Pickers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkIn" className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
            Check-In Date <span className="text-[#B7895F]">*</span>
          </label>
          <div className="relative">
            <input
              id="checkIn"
              type="date"
              required
              min={todayStr}
              aria-required="true"
              aria-invalid={Boolean(errors.checkIn)}
              aria-describedby={errors.checkIn ? "checkIn-error" : undefined}
              value={formData.checkIn}
              onChange={(e) => handleCheckInChange(e.target.value)}
              className="w-full bg-[#1E1A17] border border-[#2A241F] focus:border-[#B7895F] focus:ring-1 focus:ring-[#B7895F] text-[#F3EDE4] px-3.5 py-2.5 text-sm rounded-xs outline-none transition-colors"
            />
            <Calendar className="w-4 h-4 text-[#6B6158] absolute right-3 top-3 pointer-events-none" />
          </div>
          {errors.checkIn && (
            <p id="checkIn-error" className="mt-1 text-xs text-red-400 font-sans" aria-live="polite">
              {errors.checkIn}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="checkOut" className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
            Check-Out Date <span className="text-[#B7895F]">*</span>
          </label>
          <div className="relative">
            <input
              id="checkOut"
              type="date"
              required
              min={formData.checkIn || todayStr}
              aria-required="true"
              aria-invalid={Boolean(errors.checkOut)}
              aria-describedby={errors.checkOut ? "checkOut-error" : undefined}
              value={formData.checkOut}
              onChange={(e) => {
                setFormData({ ...formData, checkOut: e.target.value });
                if (errors.checkOut) setErrors({ ...errors, checkOut: '' });
              }}
              className="w-full bg-[#1E1A17] border border-[#2A241F] focus:border-[#B7895F] focus:ring-1 focus:ring-[#B7895F] text-[#F3EDE4] px-3.5 py-2.5 text-sm rounded-xs outline-none transition-colors"
            />
            <Calendar className="w-4 h-4 text-[#6B6158] absolute right-3 top-3 pointer-events-none" />
          </div>
          {errors.checkOut && (
            <p id="checkOut-error" className="mt-1 text-xs text-red-400 font-sans" aria-live="polite">
              {errors.checkOut}
            </p>
          )}
        </div>
      </div>

      {/* Guests Steppers */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
            Adults
          </label>
          <div className="flex items-center justify-between bg-[#1E1A17] border border-[#2A241F] px-2 py-1.5 rounded-xs">
            <button
              type="button"
              disabled={formData.adults <= 1}
              onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
              className="w-8 h-8 flex items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] disabled:opacity-30 disabled:cursor-not-allowed text-base font-bold transition-colors"
              aria-label="Decrease adults"
            >
              −
            </button>
            <span className="text-sm font-medium text-[#F3EDE4]">{formData.adults}</span>
            <button
              type="button"
              disabled={formData.adults >= 10}
              onClick={() => setFormData({ ...formData, adults: Math.min(10, formData.adults + 1) })}
              className="w-8 h-8 flex items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] disabled:opacity-30 disabled:cursor-not-allowed text-base font-bold transition-colors"
              aria-label="Increase adults"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
            Children
          </label>
          <div className="flex items-center justify-between bg-[#1E1A17] border border-[#2A241F] px-2 py-1.5 rounded-xs">
            <button
              type="button"
              disabled={formData.children <= 0}
              onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
              className="w-8 h-8 flex items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] disabled:opacity-30 disabled:cursor-not-allowed text-base font-bold transition-colors"
              aria-label="Decrease children"
            >
              −
            </button>
            <span className="text-sm font-medium text-[#F3EDE4]">{formData.children}</span>
            <button
              type="button"
              disabled={formData.children >= 8}
              onClick={() => setFormData({ ...formData, children: Math.min(8, formData.children + 1) })}
              className="w-8 h-8 flex items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] disabled:opacity-30 disabled:cursor-not-allowed text-base font-bold transition-colors"
              aria-label="Increase children"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Room Preference */}
      <div>
        <label htmlFor="roomPreference" className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
          Room Preference
        </label>
        <select
          id="roomPreference"
          value={formData.roomPreference}
          onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
          className="w-full bg-[#1E1A17] border border-[#2A241F] focus:border-[#B7895F] focus:ring-1 focus:ring-[#B7895F] text-[#F3EDE4] px-3.5 py-2.5 text-sm rounded-xs outline-none transition-colors"
        >
          <option value="none">No preference / General availability</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.name}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-1.5">
          Special Notes or Questions <span className="text-[#6B6158] text-[10px] lowercase">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Expected arrival time or dietary requirements..."
          className="w-full bg-[#1E1A17] border border-[#2A241F] focus:border-[#B7895F] focus:ring-1 focus:ring-[#B7895F] text-[#F3EDE4] px-3.5 py-2.5 text-sm rounded-xs outline-none transition-colors placeholder:text-[#6B6158] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        size="lg"
        className="w-full justify-center"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting Enquiry...
          </span>
        ) : (
          'Send Availability Enquiry'
        )}
      </Button>

      {/* Honest reassurance */}
      <p className="text-[11px] text-[#6B6158] text-center leading-relaxed">
        We will check availability for your dates and get back to you directly. No online charge or payment is processed on this site.
      </p>

      {/* Direct Contact Alternatives */}
      <div className="pt-4 border-t border-[#2A241F]">
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C9BFB2] mb-3 text-center">
          Or Contact the Lodge Directly
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#2A241F] hover:bg-[#352E28] text-xs font-sans text-[#F3EDE4] transition-colors rounded-xs focus-visible:outline-2 focus-visible:outline-[#B7895F]"
          >
            <Phone className="w-3.5 h-3.5 text-[#B7895F]" />
            <span>Call {siteConfig.phone}</span>
          </a>

          {siteConfig.whatsappNumber && (
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(buildSummaryMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#2A241F] hover:bg-[#352E28] text-xs font-sans text-[#F3EDE4] transition-colors rounded-xs focus-visible:outline-2 focus-visible:outline-[#B7895F]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B7895F]" />
              <span>WhatsApp Message</span>
            </a>
          )}

          {siteConfig.email && (
            <a
              href={`mailto:${siteConfig.email}?subject=Reservation Enquiry`}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#2A241F] hover:bg-[#352E28] text-xs font-sans text-[#F3EDE4] transition-colors rounded-xs focus-visible:outline-2 focus-visible:outline-[#B7895F]"
            >
              <Mail className="w-3.5 h-3.5 text-[#B7895F]" />
              <span>Email</span>
            </a>
          )}
        </div>
      </div>
    </form>
  );
};
