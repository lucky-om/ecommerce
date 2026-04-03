'use client';
import { useState, useEffect } from 'react';
import { formatPrice } from '@/lib/data';
import { supabase } from '@/lib/supabase';

const STATUSES = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setOrders(data);
      }
      setLoading(false);
    }
    loadOrders();
  }, []);

  const filtered = orders.filter(o =>
    (statusFilter === 'all' || o.status === statusFilter) &&
    (o.id.toLowerCase().includes(search.toLowerCase()))
  );

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id);
    
    if (!error) {
      setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    } else {
      alert("Failed to update status: " + error.message);
    }
  };

  const totalRevenue = orders.reduce((s, o) => s + (o.total_amount || 0), 0);

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.5rem' }}>Order <span className="gradient-text">Management</span></h1>
        <p className="text-muted text-sm">{orders.length} total orders · {formatPrice(totalRevenue)} revenue</p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input className="input" style={{ maxWidth: 280 }} placeholder="🔍 Search by customer or order ID..." value={search} onChange={e => setSearch(e.target.value)} />
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['all', ...STATUSES].map(s => (
            <button key={s} className={`filter-chip${statusFilter === s ? ' active' : ''}`} onClick={() => setStatusFilter(s)} style={{ textTransform: 'capitalize' }}>{s}</button>
          ))}
        </div>
      </div>

      <div className="glass" style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(0,212,255,0.03)' }}>
              {['Order ID', 'Customer', 'Items', 'Amount', 'Status', 'Date', 'Update'].map(h => (
                <th key={h} style={{ padding: '0.9rem 1rem', textAlign: 'left', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => (
              <tr key={o.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '0.9rem 1rem', fontFamily: 'Orbitron, sans-serif', fontSize: '0.78rem', color: 'var(--neon-cyan)' }}>{o.id.substring(0,8).toUpperCase()}</td>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>User ID: {o.user_id.substring(0,8)}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{o.email || 'N/A'}</div>
                </td>
                <td style={{ padding: '0.9rem 1rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  View Details
                </td>
                <td style={{ padding: '0.9rem 1rem', fontWeight: 700, fontSize: '0.875rem' }}>{formatPrice(o.total_amount)}</td>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <span className={`order-status status-${o.status}`}>{o.status}</span>
                </td>
                <td style={{ padding: '0.9rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{new Date(o.created_at).toLocaleDateString()}</td>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <select
                    className="sort-select"
                    value={o.status}
                    onChange={e => updateStatus(o.id, e.target.value)}
                    style={{ fontSize: '0.78rem', padding: '0.3rem 0.6rem' }}
                  >
                    {STATUSES.map(s => <option key={s} value={s} style={{ textTransform: 'capitalize' }}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No orders found</div>
        )}
      </div>
    </div>
  );
}
