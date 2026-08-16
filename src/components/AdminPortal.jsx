import React, { useState, useEffect } from 'react';
import { X, Lock, KeyRound, Download, Trash2, PhoneCall, RefreshCw, CheckCircle, Database } from 'lucide-react';
import { getInquiries, deleteInquiry, clearInquiries, subscribeInquiries } from '../utils/inquiryStorage';

const AdminPortal = ({ onClose }) => {
  const [pinInput, setPinInput] = useState('');
  const [adminPin, setAdminPin] = useState('1234');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [inquiries, setInquiries] = useState([]);
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinChangedMsg, setPinChangedMsg] = useState(false);

  useEffect(() => {
    setInquiries(getInquiries());
    const unsubscribe = subscribeInquiries((updated) => {
      setInquiries(updated);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === adminPin) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect PIN! Default PIN: 1234');
    }
  };

  const handleChangePin = (e) => {
    e.preventDefault();
    if (newPin.length >= 4) {
      setAdminPin(newPin);
      setIsChangingPin(false);
      setNewPin('');
      setPinChangedMsg(true);
      setTimeout(() => setPinChangedMsg(false), 3000);
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Name', 'Phone', 'Course/Interest', 'Source', 'Timestamp'];
    const rows = inquiries.map(inq => [
      inq.id,
      `"${inq.name}"`,
      `"${inq.phone}"`,
      `"${inq.course}"`,
      `"${inq.source}"`,
      `"${inq.timestamp}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `VMA_Student_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1200 }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          width: '95%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-dark-card)',
          border: '1px solid var(--primary)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-dark-border)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)'
            }}>
              <Lock size={22} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Iyer Sir Admin Portal</h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dark-muted)' }}>
                Student Callbacks & Inquiry Database Desk
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {!isAuthenticated ? (
          /* PIN Authentication Screen */
          <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <KeyRound size={32} color="#3b82f6" />
            </div>

            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Admin PIN Enter Karein</h4>
            <p className="theme-text-muted" style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Only for Iyer Sir. Default Security PIN is <strong>1234</strong>
            </p>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="password"
                maxLength={6}
                placeholder="Enter Admin PIN (Default: 1234)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                style={{
                  padding: '0.8rem',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  letterSpacing: '0.3em',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit'
                }}
              />

              {errorMsg && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600 }}>
                  {errorMsg}
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Unlock Portal
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Dashboard */
          <div>
            {/* Action Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.5rem',
              background: 'rgba(255,255,255,0.03)',
              padding: '1rem',
              borderRadius: '12px',
              border: '1px solid var(--card-dark-border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Database size={20} color="var(--primary)" />
                <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>
                  Total Inquiries Saved: <span style={{ color: 'var(--primary)' }}>{inquiries.length}</span>
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button
                  onClick={handleExportCSV}
                  className="btn btn-secondary btn-sm"
                  disabled={inquiries.length === 0}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Download size={16} /> Export CSV
                </button>
                <button
                  onClick={() => setIsChangingPin(!isChangingPin)}
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <KeyRound size={16} /> Change PIN
                </button>
              </div>
            </div>

            {pinChangedMsg && (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} /> Admin Security PIN successfully updated for this session!
              </div>
            )}

            {isChangingPin && (
              <form onSubmit={handleChangePin} style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '10px' }}>
                <input
                  type="password"
                  placeholder="New 4-digit PIN"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  style={{
                    padding: '0.6rem',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid var(--card-dark-border)',
                    color: 'inherit',
                    flex: 1
                  }}
                />
                <button type="submit" className="btn btn-primary btn-sm">Update PIN</button>
              </form>
            )}

            {/* Inquiries Data Table */}
            {inquiries.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-dark-muted)' }}>
                No student inquiries stored yet.
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--card-dark-border)', color: 'var(--primary)' }}>
                      <th style={{ padding: '0.75rem' }}>Student Name</th>
                      <th style={{ padding: '0.75rem' }}>Phone Number</th>
                      <th style={{ padding: '0.75rem' }}>Course / Interest</th>
                      <th style={{ padding: '0.75rem' }}>Source</th>
                      <th style={{ padding: '0.75rem' }}>Date & Time</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map((inq) => (
                      <tr key={inq.id} style={{ borderBottom: '1px solid var(--card-dark-border)' }}>
                        <td style={{ padding: '0.85rem', fontWeight: 700 }}>{inq.name}</td>
                        <td style={{ padding: '0.85rem' }}>
                          <a
                            href={`tel:${inq.phone}`}
                            style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                          >
                            <PhoneCall size={14} /> {inq.phone}
                          </a>
                        </td>
                        <td style={{ padding: '0.85rem' }}>
                          <span className="badge badge-blue">{inq.course}</span>
                        </td>
                        <td style={{ padding: '0.85rem', color: 'var(--text-dark-muted)', fontSize: '0.82rem' }}>
                          {inq.source}
                        </td>
                        <td style={{ padding: '0.85rem', color: 'var(--text-dark-muted)', fontSize: '0.82rem' }}>
                          {new Date(inq.timestamp).toLocaleString()}
                        </td>
                        <td style={{ padding: '0.85rem', textAlign: 'center' }}>
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            title="Delete Entry"
                            style={{
                              background: 'rgba(239, 68, 68, 0.15)',
                              border: 'none',
                              color: '#ef4444',
                              padding: '0.4rem',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {inquiries.length > 0 && (
              <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                <button
                  onClick={clearInquiries}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    textDecoration: 'underline'
                  }}
                >
                  Clear All Inquiries
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPortal;
