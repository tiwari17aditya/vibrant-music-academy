/**
 * Centralized Inquiry Database Persistence Utility
 * 
 * Stores student inquiries (Name + Phone + Timestamp + Source) securely 
 * in local database storage with reactive event triggers for Admin Portal.
 */

const STORAGE_KEY = 'vibrant_academy_inquiries_db';
const EVENT_KEY = 'vma_inquiry_added';

// Pre-seeded authentic initial inquiries for demo/preview
const INITIAL_INQUIRIES = [
  {
    id: 'inq-101',
    name: 'Rohan Sharma',
    phone: '9821045678',
    course: 'Guitar Foundations',
    source: 'Hero Demo Booking',
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: 'inq-102',
    name: 'Pooja Verma',
    phone: '9870123456',
    course: 'Drums & Rhythm',
    source: 'Footer Inquiry',
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString()
  }
];

export const getInquiries = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to read inquiries from storage:', err);
    return INITIAL_INQUIRIES;
  }
};

export const saveInquiry = ({ name, phone, course = 'General Inquiry', source = 'Website' }) => {
  if (!name || !phone) return false;

  // Sanitize phone number to 10 digits
  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  if (cleanPhone.length < 10) return false;

  const newInquiry = {
    id: `inq-${Date.now()}`,
    name: name.trim(),
    phone: cleanPhone,
    course: course.trim(),
    source: source.trim(),
    timestamp: new Date().toISOString()
  };

  try {
    const current = getInquiries();
    const updated = [newInquiry, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: newInquiry }));
    return true;
  } catch (err) {
    console.error('Failed to save inquiry:', err);
    return false;
  }
};

export const deleteInquiry = (id) => {
  try {
    const current = getInquiries();
    const updated = current.filter(inq => inq.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_KEY));
    return true;
  } catch (err) {
    console.error('Failed to delete inquiry:', err);
    return false;
  }
};

export const clearInquiries = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(EVENT_KEY));
    return true;
  } catch (err) {
    return false;
  }
};

export const subscribeInquiries = (callback) => {
  const handler = () => callback(getInquiries());
  window.addEventListener(EVENT_KEY, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(EVENT_KEY, handler);
    window.removeEventListener('storage', handler);
  };
};
