import React, { useState } from 'react';
import { X, QrCode, CreditCard, ShieldCheck, CheckCircle2, Download, Send, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

const PaymentModal = ({ enrollmentData, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card'
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptId, setReceiptId] = useState('');

  // Mock Card Form State
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedReceiptId = `VMA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setReceiptId(generatedReceiptId);
      setIsProcessing(false);
      setIsSuccess(true);

      // Save to localStorage for student reference
      const existing = JSON.parse(localStorage.getItem('vibrant_enrollments') || '[]');
      existing.push({ ...enrollmentData, receiptId: generatedReceiptId, paidAt: new Date().toISOString() });
      localStorage.setItem('vibrant_enrollments', JSON.stringify(existing));
    }, 1500);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Iyer Sir! I have registered for ${enrollmentData.course.title} at Vibrant Music Academy.%0A%0AStudent: ${enrollmentData.name}%0APhone: ${enrollmentData.phone}%0AReceipt ID: ${receiptId}%0AAmount: ₹${enrollmentData.amount}%0ABatch: ${enrollmentData.batch}`;
    return `https://wa.me/${ACADEMY_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '620px' }} onClick={(e) => e.stopPropagation()}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Vibrant Academy Payment Gateway</h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-dark-muted)' }}>100% Free Open-Source Payment Flow</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {!isSuccess ? (
          <div>
            {/* Enrollment Summary Banner */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--card-dark-border)',
              borderRadius: '12px',
              padding: '1.2rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: 700 }}>{enrollmentData.course.title}</span>
                <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.2rem' }}>
                  ₹{enrollmentData.amount.toLocaleString('en-IN')}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                Student: {enrollmentData.name} ({enrollmentData.phone}) | {enrollmentData.batch}
              </div>
            </div>

            {/* Payment Method Selector */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`btn ${paymentMethod === 'upi' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.9rem' }}
              >
                <QrCode size={18} /> UPI / GPay / PhonePe
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                className={`btn ${paymentMethod === 'card' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.9rem' }}
              >
                <CreditCard size={18} /> Card / NetBanking
              </button>
            </div>

            {/* UPI QR Display */}
            {paymentMethod === 'upi' && (
              <div style={{ textAlign: 'center', padding: '1rem', background: '#ffffff', borderRadius: '16px', color: '#0f172a', marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                  Scan QR with any UPI App
                </div>

                {/* SVG Mock QR Code */}
                <div style={{ margin: '0.5rem auto', width: '180px', height: '180px', background: '#000', padding: '10px', borderRadius: '12px' }}>
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <rect width="100" height="100" fill="#fff" />
                    {/* Corner Squares */}
                    <rect x="5" y="5" width="30" height="30" fill="#000" />
                    <rect x="10" y="10" width="20" height="20" fill="#fff" />
                    <rect x="15" y="15" width="10" height="10" fill="#000" />

                    <rect x="65" y="5" width="30" height="30" fill="#000" />
                    <rect x="70" y="10" width="20" height="20" fill="#fff" />
                    <rect x="75" y="15" width="10" height="10" fill="#000" />

                    <rect x="5" y="65" width="30" height="30" fill="#000" />
                    <rect x="10" y="70" width="20" height="20" fill="#fff" />
                    <rect x="15" y="75" width="10" height="10" fill="#000" />

                    {/* Mock Pattern Dots */}
                    <rect x="40" y="15" width="10" height="10" fill="#000" />
                    <rect x="45" y="35" width="15" height="15" fill="#000" />
                    <rect x="25" y="45" width="10" height="10" fill="#000" />
                    <rect x="65" y="45" width="20" height="10" fill="#000" />
                    <rect x="45" y="65" width="10" height="25" fill="#000" />
                    <rect x="65" y="75" width="20" height="15" fill="#000" />
                  </svg>
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                  UPI VPA: <span style={{ color: '#d97706' }}>iyer.sir.vibrant@upi</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                  Supported Apps: Google Pay, PhonePe, Paytm, BHIM, CRED
                </div>
              </div>
            )}

            {/* Card Inputs */}
            {paymentMethod === 'card' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="4532 •••• •••• 8910"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--card-dark-border)',
                      color: 'inherit',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--card-dark-border)',
                        color: 'inherit',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                      CVV Code
                    </label>
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength="3"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--card-dark-border)',
                        color: 'inherit',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleSimulatePayment}
              disabled={isProcessing}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              {isProcessing ? "Verifying Transaction..." : `Pay ₹${enrollmentData.amount.toLocaleString('en-IN')} & Confirm`}
            </button>
          </div>
        ) : (
          /* Receipt Screen */
          <div style={{ textAlign: 'center' }}>
            <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>Registration Successful!</h3>
            <p style={{ color: '#10b981', fontWeight: 700, margin: '0 0 1.5rem 0' }}>
              Welcome to Vibrant Music Academy Family!
            </p>

            {/* Receipt Box */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--primary)',
              borderRadius: '14px',
              padding: '1.5rem',
              textAlign: 'left',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Receipt No:</span>
                <span style={{ fontWeight: 800 }}>{receiptId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                <span style={{ color: '#9ca3af' }}>Student:</span>
                <span>{enrollmentData.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                <span style={{ color: '#9ca3af' }}>Course:</span>
                <span>{enrollmentData.course.title}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                <span style={{ color: '#9ca3af' }}>Batch:</span>
                <span>{enrollmentData.batch}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 800, marginTop: '0.8rem', color: 'var(--primary)' }}>
                <span>Total Fee Paid:</span>
                <span>₹{enrollmentData.amount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ background: '#25D366', color: '#ffffff' }}
              >
                <Send size={18} /> Send Receipt to Iyer Sir via WhatsApp
              </a>
              <button onClick={() => window.print()} className="btn btn-secondary">
                <Download size={18} /> Print / Save PDF Receipt
              </button>
              <button onClick={onClose} className="btn btn-secondary">
                Done & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PaymentModal;
