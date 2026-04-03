'use client';
import { useCart } from '@/lib/store';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  const { user, loading } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.user_metadata?.role !== 'admin')) {
      router.push('/');
    }
  }, [user, loading, router]);

  const pathname = usePathname();

  if (loading) {
    return (
      <div className="container section text-center">
        <div style={{ padding: '4rem 0' }}>
          <div className="loader" style={{ margin: 'auto' }}></div>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!user || user.user_metadata?.role !== 'admin') {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container section-sm">
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', mdDirection: 'row' }} className="admin-flex-container">
        <aside style={{ width: '240px', flexShrink: 0 }} className="admin-sidebar">
          <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius)', position: 'sticky', top: '100px' }}>
            <div style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--neon-cyan)', letterSpacing: '0.1em' }}>Admin Control</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <Link href="/admin" className={`nav-link-admin ${pathname === '/admin' ? 'active' : ''}`}>🏠 Dashboard</Link>
              <Link href="/admin/products" className={`nav-link-admin ${pathname === '/admin/products' ? 'active' : ''}`}>📦 Products</Link>
              <Link href="/admin/orders" className={`nav-link-admin ${pathname === '/admin/orders' ? 'active' : ''}`}>🛒 Orders</Link>
              <Link href="/admin/coupons" className={`nav-link-admin ${pathname === '/admin/coupons' ? 'active' : ''}`}>🏷️ Coupons</Link>
              <Link href="/admin/users" className={`nav-link-admin ${pathname === '/admin/users' ? 'active' : ''}`}>👥 Users</Link>
              <div style={{ height: '1px', background: 'var(--border)', margin: '1rem 0' }} />
              <Link href="/" className="nav-link-admin">⬅ Back to Site</Link>
            </nav>
          </div>
        </aside>
        <main style={{ flex: 1, minWidth: 0 }}>
          {children}
        </main>
      </div>
    </div>
  );
}


