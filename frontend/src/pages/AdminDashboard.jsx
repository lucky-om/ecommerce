import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, ShoppingBag, Activity, Eye, X } from 'lucide-react';
import '../styles/globals.css';

const AdminDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const stats = [
    { label: 'Total Revenue', value: '$245,890', change: '+12.5%', icon: TrendingUp, color: 'text-neon-cyan' },
    { label: 'Total Orders', value: '2,847', change: '+8.2%', icon: ShoppingBag, color: 'text-neon-pink' },
    { label: 'Active Users', value: '12,543', change: '+15.3%', icon: Users, color: 'text-neon-purple' },
    { label: 'Page Views', value: '89,234', change: '+22.1%', icon: Activity, color: 'text-neon-green' },
  ];

  const products = [
    { id: 1, name: 'SonicX Pro Max', category: 'Wireless', sales: 1203, revenue: '$89,435', status: 'Active' },
    { id: 2, name: 'GameMaster Elite', category: 'Gaming', sales: 856, revenue: '$62,980', status: 'Active' },
    { id: 3, name: 'Studio Master Pro', category: 'Studio', sales: 342, revenue: '$43,298', status: 'Active' },
    { id: 4, name: 'Sonic Air Lite', category: 'Wireless', sales: 1845, revenue: '$52,145', status: 'Trending' },
    { id: 5, name: 'Retro Classic Pro', category: 'Studio', sales: 234, revenue: '$18,456', status: 'Active' },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', product: 'SonicX Pro Max', amount: '$499', date: '2024-01-15', status: 'Delivered' },
    { id: 'ORD-002', customer: 'Jane Smith', product: 'GameMaster Elite', amount: '$349', date: '2024-01-14', status: 'Processing' },
    { id: 'ORD-003', customer: 'Mike Johnson', product: 'Studio Master Pro', amount: '$799', date: '2024-01-13', status: 'Shipped' },
    { id: 'ORD-004', customer: 'Sarah Williams', product: 'Sonic Air Lite', amount: '$199', date: '2024-01-12', status: 'Delivered' },
    { id: 'ORD-005', customer: 'Tom Brown', product: 'Retro Classic Pro', amount: '$299', date: '2024-01-11', status: 'Processing' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="glass backdrop-blur-lg border-b border-border-glow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-text-primary">Admin Dashboard</h1>
            <p className="text-text-tertiary text-sm">Welcome back, Administrator</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="glass rounded-lg px-4 py-2">
              <span className="text-sm text-neon-cyan font-bold">Last Updated: Today</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass glass-hover rounded-2xl p-8 border border-border-dark backdrop-blur-xl slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 glass rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-neon-green text-sm font-bold">{stat.change}</span>
                </div>
                <h3 className="text-text-secondary text-sm font-medium mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Sales Chart */}
          <div className="lg:col-span-2 glass glass-hover rounded-2xl p-8 border border-border-glow backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary">Sales Performance</h2>
              <BarChart3 className="w-6 h-6 text-neon-cyan" />
            </div>

            {/* Simple Bar Chart */}
            <div className="space-y-6">
              {[
                { label: 'Week 1', value: 75, max: 100 },
                { label: 'Week 2', value: 88, max: 100 },
                { label: 'Week 3', value: 92, max: 100 },
                { label: 'Week 4', value: 85, max: 100 },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary font-medium">{item.label}</span>
                    <span className="text-neon-cyan font-bold">${item.value * 10}K</span>
                  </div>
                  <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-500"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="glass glass-hover rounded-2xl p-8 border border-border-glow backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Top Performers</h2>
            <div className="space-y-4">
              {products.slice(0, 3).map((product, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 glass rounded-lg">
                  <div>
                    <p className="text-sm font-bold text-text-primary">{product.name}</p>
                    <p className="text-xs text-text-tertiary">{product.sales} sales</p>
                  </div>
                  <span className="text-neon-cyan font-bold text-sm">{product.revenue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="glass glass-hover rounded-2xl p-8 border border-border-glow backdrop-blur-xl mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">Product Performance</h2>
            <button className="px-4 py-2 glass rounded-lg text-neon-cyan font-bold hover:bg-bg-tertiary transition-colors">
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-dark">
                  <th className="text-left py-4 px-4 font-bold text-text-secondary">Product</th>
                  <th className="text-left py-4 px-4 font-bold text-text-secondary">Category</th>
                  <th className="text-right py-4 px-4 font-bold text-text-secondary">Sales</th>
                  <th className="text-right py-4 px-4 font-bold text-text-secondary">Revenue</th>
                  <th className="text-center py-4 px-4 font-bold text-text-secondary">Status</th>
                  <th className="text-center py-4 px-4 font-bold text-text-secondary">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={idx} className="border-b border-border-dark hover:bg-bg-tertiary/30 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-bold text-text-primary">{product.name}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-text-secondary text-sm">{product.category}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-bold text-text-primary">{product.sales}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-bold text-neon-cyan">{product.revenue}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        product.status === 'Trending'
                          ? 'text-neon-green bg-neon-green/10'
                          : 'text-neon-cyan bg-neon-cyan/10'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="p-2 glass rounded-lg hover:border-neon-cyan transition-all"
                      >
                        <Eye className="w-4 h-4 text-neon-cyan" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="glass glass-hover rounded-2xl p-8 border border-border-glow backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">Recent Orders</h2>
            <button className="px-4 py-2 glass rounded-lg text-neon-cyan font-bold hover:bg-bg-tertiary transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 glass rounded-lg hover:border-neon-cyan transition-all">
                <div className="flex-1">
                  <p className="font-bold text-text-primary">{order.id}</p>
                  <p className="text-sm text-text-tertiary">{order.customer}</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-sm text-text-secondary">{order.product}</p>
                </div>
                <div className="flex-1 text-right">
                  <p className="font-bold text-neon-cyan">{order.amount}</p>
                  <p className="text-xs text-text-tertiary">{order.date}</p>
                </div>
                <div className="ml-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    order.status === 'Delivered'
                      ? 'text-neon-green bg-neon-green/10'
                      : order.status === 'Shipped'
                      ? 'text-neon-cyan bg-neon-cyan/10'
                      : 'text-neon-pink bg-neon-pink/10'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="glass rounded-2xl border border-border-glow max-w-md w-full p-8 slide-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text-primary">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 glass rounded-lg hover:border-neon-pink transition-all"
              >
                <X className="w-5 h-5 text-neon-pink" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-text-tertiary text-sm">Category</p>
                  <p className="font-bold text-text-primary">{selectedProduct.category}</p>
                </div>
                <div>
                  <p className="text-text-tertiary text-sm">Status</p>
                  <p className={`font-bold ${selectedProduct.status === 'Trending' ? 'text-neon-green' : 'text-neon-cyan'}`}>
                    {selectedProduct.status}
                  </p>
                </div>
                <div>
                  <p className="text-text-tertiary text-sm">Sales</p>
                  <p className="font-bold text-text-primary">{selectedProduct.sales}</p>
                </div>
                <div>
                  <p className="text-text-tertiary text-sm">Revenue</p>
                  <p className="font-bold text-neon-cyan">{selectedProduct.revenue}</p>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button className="flex-1 px-4 py-2 glass rounded-lg text-neon-cyan font-bold hover:bg-bg-tertiary transition-colors">
                  Edit
                </button>
                <button className="flex-1 px-4 py-2 bg-neon-pink/10 rounded-lg text-neon-pink font-bold hover:bg-neon-pink/20 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
