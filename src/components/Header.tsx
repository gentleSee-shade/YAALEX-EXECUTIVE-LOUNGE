import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { siteConfig } from '../data/siteConfig';
import { useEnquiry } from '../context/EnquiryContext';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openEnquiry } = useEnquiry();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for header background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Trap focus & lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
  ];

  return (
    <>
      {/* Skip to main content link for screen readers & keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#B7895F] focus:text-[#14110F] focus:font-medium focus:text-sm focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1E1A17]/95 backdrop-blur-md border-b border-[#2A241F] py-3 shadow-lg'
            : 'bg-gradient-to-b from-[#14110F]/80 via-[#14110F]/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Logo light={true} />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-sans tracking-[0.12em] uppercase"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative py-1 transition-colors duration-200 text-xs tracking-[0.16em] ${
                    isActive
                      ? 'text-[#F3EDE4] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B7895F]'
                      : 'text-[#C9BFB2] hover:text-[#F3EDE4]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Primary CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => openEnquiry()}
              className="tracking-[0.16em]"
            >
              Check Availability
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] transition-colors focus-visible:outline-2 focus-visible:outline-[#B7895F]"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-[#1E1A17] text-[#F3EDE4] flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200 md:hidden"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#2A241F]">
            <Logo light={true} onClick={() => setIsMobileMenuOpen(false)} />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-[#C9BFB2] hover:text-white transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          <nav className="flex flex-col py-8 space-y-5 flex-1" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-serif tracking-wider transition-colors py-1 ${
                    isActive ? 'text-[#B7895F]' : 'text-[#F3EDE4] hover:text-[#B7895F]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#2A241F] space-y-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-3 text-sm text-[#C9BFB2] hover:text-[#B7895F] transition-colors py-1"
            >
              <Phone className="w-4 h-4 text-[#B7895F]" />
              <span>{siteConfig.phone}</span>
            </a>

            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiry();
              }}
            >
              Check Availability
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
