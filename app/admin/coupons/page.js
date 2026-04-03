'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { formatPrice } from '@/lib/data';

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCoupon, setNewCoupon] = useState({ code: '', discount_type: 'percent', discount_value: 10, min_order: 1000 });
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    async function loadCoupons() {
      const { data, error } = await supabase.from('coupons').select('*').order('created_at', { ascending: false });
      if (!error && data) setCoupons(data);
      setLoading(false);
    }
    loadCoupons();
  }, []);

  const handleAdd = async () => {
    const { data, error } = await supabase.from('coupons').insert([newCoupon]).select();
    if (!error && data) {
      setCoupons([data[0], ...coupons]);
      setShowAdd(false);
      setNewCoupon({ code: '', discount_type: 'percent', discount_value: 10, min_order: 1000 });
    } else {
      alert("Error adding coupon: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this coupon?")) return;
    const { error } = await supabase.from('coupons').delete().eq('id', id);
    if (!error) {
      setCoupons(prev => prev.filter(c => c.id !== id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.5rem' }}>Coupon <span className="gradient-text">Management</span></h1>
          <p className="text-muted text-sm">{coupons.length} active coupons</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>+ Create Coupon</button>
      </div>

      {showAdd && (
        <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderRadius: 'var(--radius)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Create New Coupon</h3>
          <div className="grid-3" style={{ gap: '1rem' }}>
            <div className="input-group">
              <label className="input-label">Code</label>
              <input className="input" placeholder="e.g. SAVE20" value={newCoupon.code} onChange={e => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })} />
            </div>
            <div className="input-group">
              <label className="input-label">Type</label>
              <select className="input" value={newCoupon.discount_type} onChange={e => setNewCoupon({ ...newCoupon, discount_type: e.target.value })}>
                <option value="percent">Percentage (%)</option>
                <option value="flat">Flat Amount (₹)</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Value</label>
              <input className="input" type="number" value={newCoupon.discount_value} onChange={e => setNewCoupon({ ...newCoupon, discount_value: parseInt(e.target.value) })} />
            </div>
          </div>
          <div style={{ marginTop: '1rem' }} className="input-group">
            <label className="input-label">Min Order Amount</label>
            <input className="input" type="number" value={newCoupon.min_order} onChange={e => setNewCoupon({ ...newCoupon, min_order: parseInt(e.target.value) })} />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button className="btn btn-primary" onClick={handleAdd}>Save Coupon</button>
            <button className="btn btn-ghost" onClick={() => setShowAdd(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="glass" style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(0,212,255,0.03)' }}>
              {['Code', 'Discount', 'Min Order', 'Status', 'Actions'].map(h => (
                <th key={h} style={{ padding: '0.9rem 1rem', textAlign: 'left', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coupons.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '0.9rem 1rem', fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>{c.code}</td>
                <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem' }}>
                  {c.discount_type === 'percent' ? `${c.discount_value}% Off` : `${formatPrice(c.discount_value)} Off`}
                </td>
                <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem' }}>
                  {formatPrice(c.min_order)}
                </td>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>Active</span>
                </td>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <button className="btn btn-sm btn-ghost text-danger" onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {coupons.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No coupons created yet</div>
        )}
      </div>
    </div>
  );
}
