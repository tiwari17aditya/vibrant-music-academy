import React, { useState, useEffect } from 'react';
import { Lock, Key, X, Download, Trash2, CheckCircle2, User, Phone, Calendar, ShieldAlert, RefreshCw, Eye } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

const DEFAULT_PIN = "1234";

const AdminPortal = ({ onClose }) => {
  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState('');
  
  // Custom PIN stored only in session state (No disk cache for security)
  const [currentPin, setCurrentPin] = useState(() => {
    return sessionStorage.getItem('admin_pin_temp') || DEFAULT_PIN;
  });

  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');
  const [pinSuccessMsg, setPinSuccessMsg] = useState('');

  // Data states
  const [enrollments, setEnrollments] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [selectedTab, setSelectedTab] = useState('enrollments'); // 'enrollments' | 'inquiries'

  // Load data from client storage (or seed test data)
  const loadAdminData = () => {
    try {
      const storedEnrollments = JSON.parse(localStorage.getItem('vibrant_enrollments') || '[]');
      const storedInquiries = JSON.parse(localStorage.getItem('vibrant_inquiries') || '[]');

      // If empty, provide rich sample test data for Iyer Sir to preview!
      if (storedEnrollments.length === 0) {
        const sampleEnrollments = [
          {
            receiptId: "VMA-2026-8912",
            name: "Aditya Tiwari",
            phone: "9820012345",
            email: "aditya.tiwari@example.com",
            course: { title: "Guitar Foundations & Intermediate Mastery", fee: "₹4,500 / month" },
            batch: "Weekend Morning (Sat-Sun 10 AM)",
            learningMode: "Offline Studio Class (Ghansoli, Navi Mumbai, 400701)",
            amount: 4500,
            date: new Date().toLocaleDateString('en-IN'),
            status: "Enrolled"
          },
          {
            receiptId: "VMA-2026-7431",
            name: "Sneha Kulkarni",
            phone: "9819123456",
            email: "sneha.k@example.com",
            course: { title: "Trinity College London Exam Preparation", fee: "₹6,000 / month" },
            batch: "Weekday Evening (Tue-Thu 6 PM)",
            learningMode: "Offline Studio Class (Ghansoli, Navi Mumbai, 400701)",
            amount: 6000,
            date: new Date().toLocaleDateString('en-IN'),
            status: "Pending Audition"
          }
        ];
        localStorage.setItem('vibrant_enrollments', JSON.stringify(sampleEnrollments));
        setEnrollments(sampleEnrollments);
      } else {
        setEnrollments(storedEnrollments);
      }

      if (storedInquiries.length === 0) {
        const sampleInquiries = [
          {
            id: 1,
            name: "Rajesh Varma",
            phone: "9876543210",
            message: "Interested in weekend keyboard classes for my 8-year-old daughter.",
            date: new Date().toLocaleDateString('en-IN'),
            status: "New Inquiry"
          }
        ];
        localStorage.setItem('vibrant_inquiries', JSON.stringify(sampleInquiries));
        setInquiries(sampleInquiries);
      } else {
        setInquiries(storedInquiries);
      }
    } catch (err) {
      console.error("Failed to load admin data:", err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setPinError('');
    if (pinInput === currentPin) {
      setIsAuthenticated(true);
      loadAdminData();
    } else {
      setPinError("Incorrect Security PIN. Please try again.");
    }
  };

  const handleChangePin = (e) => {
    e.preventDefault();
    if (newPin.length < 4) {
      setPinError("PIN must be at least 4 digits.");
      return;
    }
    if (newPin !== confirmNewPin) {
      setPinError("New PINs do not match.");
      return;
    }
    setCurrentPin(newPin);
    sessionStorage.setItem('admin_pin_temp', newPin);
    setIsChangingPin(false);
    setNewPin('');
    setConfirmNewPin('');
    setPinSuccessMsg("Admin PIN updated successfully for this session!");
    setTimeout(() => setPinSuccessMsg(''), 4000);
  };

  const handleClearData = (type) => {
    if (window.confirm(`Are you sure you want to clear all ${type}?`)) {
      if (type === 'enrollments') {
        localStorage.removeItem('vibrant_enrollments');
        setEnrollments([]);
      } else {
        localStorage.removeItem('vibrant_inquiries');
        setInquiries([]);
      }
    }
  };

  const exportToCSV = (data, filename) => {
    if (data.length === 0) return;
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).map(v => `"${typeof v === 'object' ? v.title || JSON.stringify(v) : v}"`).join(','));
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filename}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '850px', width: '95%' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-dark-border)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'rgba(245,158,11,0.2)', color: 'var(--primary)' }}>
              <Lock size={22} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Iyer Sir's Admin Portal</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dark-muted)' }}>Secured Dashboard | Vibrant Music Academy</span>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {/* Auth Screen */}
        {!isAuthenticated ? (
          <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
            <Key size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Enter Admin Security PIN</h4>
            <p className="theme-text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Default PIN is <strong style={{ color: 'var(--primary)' }}>1234</strong>. (No disk cache for maximum security).
            </p>

            {pinError && (
              <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#ef4444', padding: '0.75rem', borderRadius: '10px', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                {pinError}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <input
                type="password"
                maxLength="8"
                placeholder="Enter 4-digit PIN"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1.4rem',
                  letterSpacing: '0.4em',
                  textAlign: 'center',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--primary)',
                  color: 'inherit',
                  marginBottom: '1.2rem',
                  boxSizing: 'border-box'
                }}
              />
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Unlock Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div>
            {pinSuccessMsg && (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981', padding: '0.75rem', borderRadius: '10px', fontSize: '0.88rem', marginBottom: '1rem' }}>
                {pinSuccessMsg}
              </div>
            )}

            {/* Admin Controls Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button
                  onClick={() => setSelectedTab('enrollments')}
                  className={`btn btn-sm ${selectedTab === 'enrollments' ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Registrations & Payments ({enrollments.length})
                </button>
                <button
                  onClick={() => setSelectedTab('inquiries')}
                  className={`btn btn-sm ${selectedTab === 'inquiries' ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Online Inquiries ({inquiries.length})
                </button>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button onClick={() => setIsChangingPin(!isChangingPin)} className="btn btn-secondary btn-sm">
                  <Key size={14} /> Change PIN
                </button>
                <button onClick={loadAdminData} className="btn btn-secondary btn-sm">
                  <RefreshCw size={14} /> Refresh Data
                </button>
              </div>
            </div>

            {/* PIN Change Drawer */}
            {isChangingPin && (
              <form onSubmit={handleChangePin} style={{ background: 'rgba(255,255,255,0.04)', padding: '1.2rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid var(--primary)' }}>
                <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1rem' }}>Change Admin Security PIN</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="password"
                    placeholder="New 4-digit PIN"
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-dark-border)', color: 'inherit' }}
                  />
                  <input
                    type="password"
                    placeholder="Confirm New PIN"
                    value={confirmNewPin}
                    onChange={(e) => setConfirmNewPin(e.target.value)}
                    style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-dark-border)', color: 'inherit' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Save New PIN</button>
              </form>
            )}

            {/* Enrollments View */}
            {selectedTab === 'enrollments' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ margin: 0 }}>Student Registrations & Fee Receipts</h4>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => exportToCSV(enrollments, 'vibrant_enrollments')} className="btn btn-secondary btn-sm">
                      <Download size={14} /> Export CSV
                    </button>
                    <button onClick={() => handleClearData('enrollments')} className="btn btn-secondary btn-sm" style={{ color: '#ef4444' }}>
                      <Trash2 size={14} /> Clear All
                    </button>
                  </div>
                </div>

                {enrollments.length === 0 ? (
                  <p className="theme-text-muted" style={{ textStyle: 'italic', padding: '2rem 0', textAlign: 'center' }}>
                    No student registrations recorded yet.
                  </p>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--card-dark-border)' }}>
                          <th style={{ padding: '0.75rem' }}>Receipt ID</th>
                          <th style={{ padding: '0.75rem' }}>Student Name</th>
                          <th style={{ padding: '0.75rem' }}>Mobile</th>
                          <th style={{ padding: '0.75rem' }}>Course</th>
                          <th style={{ padding: '0.75rem' }}>Amount</th>
                          <th style={{ padding: '0.75rem' }}>Batch & Mode</th>
                          <th style={{ padding: '0.75rem' }}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {enrollments.map((item, idx) => (
                          <tr key={idx} style={{ borderBottom: '1px solid var(--card-dark-border)' }}>
                            <td style={{ padding: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>{item.receiptId}</td>
                            <td style={{ padding: '0.75rem', fontWeight: 600 }}>{item.name}</td>
                            <td style={{ padding: '0.75rem' }}>{item.phone}</td>
                            <td style={{ padding: '0.75rem' }}>{item.course?.title || item.course}</td>
                            <td style={{ padding: '0.75rem', fontWeight: 700, color: '#10b981' }}>₹{item.amount}</td>
                            <td style={{ padding: '0.75rem', fontSize: '0.8rem', color: '#9ca3af' }}>{item.batch}</td>
                            <td style={{ padding: '0.75rem', fontSize: '0.8rem' }}>{item.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Inquiries View */}
            {selectedTab === 'inquiries' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ margin: 0 }}>Online Student Callback Inquiries</h4>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => exportToCSV(inquiries, 'vibrant_inquiries')} className="btn btn-secondary btn-sm">
                      <Download size={14} /> Export CSV
                    </button>
                    <button onClick={() => handleClearData('inquiries')} className="btn btn-secondary btn-sm" style={{ color: '#ef4444' }}>
                      <Trash2 size={14} /> Clear All
                    </button>
                  </div>
                </div>

                {inquiries.length === 0 ? (
                  <p className="theme-text-muted" style={{ fontStyle: 'italic', padding: '2rem 0', textAlign: 'center' }}>
                    No inquiries received yet.
                  </p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {inquiries.map((inq, idx) => (
                      <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-dark-border)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                          <strong style={{ color: 'var(--primary)' }}>{inq.name} ({inq.phone})</strong>
                          <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{inq.date}</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#d1d5db' }}>{inq.message || "No specific message provided."}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPortal;
