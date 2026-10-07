import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

interface EnquiryContextType {
  isOpen: boolean;
  selectedRoom: string;
  openEnquiry: (roomName?: string, triggerElement?: HTMLElement | null) => void;
  closeEnquiry: () => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('none');
  const triggerRef = useRef<HTMLElement | null>(null);

  const openEnquiry = useCallback((roomName?: string, triggerEl?: HTMLElement | null) => {
    if (triggerEl) {
      triggerRef.current = triggerEl;
    } else if (document.activeElement instanceof HTMLElement) {
      triggerRef.current = document.activeElement;
    }
    if (roomName) {
      setSelectedRoom(roomName);
    } else {
      setSelectedRoom('none');
    }
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  return (
    <EnquiryContext.Provider
      value={{
        isOpen,
        selectedRoom,
        openEnquiry,
        closeEnquiry,
        triggerRef,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = (): EnquiryContextType => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
