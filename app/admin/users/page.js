'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadUsers() {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setUsers(data);
      }
      setLoading(false);
    }
    loadUsers();
  }, []);

  const filtered = users.filter(u => 
    u.full_name?.toLowerCase().includes(search.toLowerCase()) || 
    u.id.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAdmin = async (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId);
    
    if (!error) {
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } else {
      alert("Failed to update role: " + error.message);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.5rem' }}>User <span className="gradient-text">Management</span></h1>
        <p className="text-muted text-sm">{users.length} registered users</p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <input 
          className="input" 
          style={{ maxWidth: 380 }} 
          placeholder="🔍 Search by name or ID..." 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
      </div>

      <div className="glass" style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(0,212,255,0.03)' }}>
              {['User', 'System ID', 'Role', 'Joined', 'Actions'].map(h => (
                <th key={h} style={{ padding: '0.9rem 1rem', textAlign: 'left', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 700, fontSize: '0.8rem' }}>
                      {u.full_name?.charAt(0) || '?'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{u.full_name || 'Anonymous User'}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '0.9rem 1rem', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {u.id.substring(0,8)}...
                </td>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <span className={`badge ${u.role === 'admin' ? 'badge-purple' : 'badge-cyan'}`} style={{ fontSize: '0.7rem' }}>
                    {u.role || 'user'}
                  </span>
                </td>
                <td style={{ padding: '0.9rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {u.created_at ? new Date(u.created_at).toLocaleDateString() : 'N/A'}
                </td>
                <td style={{ padding: '0.9rem 1rem' }}>
                  <button 
                    className={`btn btn-sm ${u.role === 'admin' ? 'btn-outline' : 'btn-ghost'}`}
                    onClick={() => toggleAdmin(u.id, u.role)}
                  >
                    {u.role === 'admin' ? 'Revoke Admin' : 'Make Admin'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No users found</div>
        )}
      </div>
    </div>
  );
}
