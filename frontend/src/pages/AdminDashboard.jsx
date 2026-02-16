import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, ShoppingBag, Activity, Eye, X } from 'lucide-react';
import CustomChart from '../components/CustomChart';
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

  const salesChartData = [
    { label: 'Week 1', value: 750 },
    { label: 'Week 2', value: 880 },
    { label: 'Week 3', value: 920 },
    { label: 'Week 4', value: 850 },
  ];

  const revenueChartData = [
    { label: 'Jan', value: 45000 },
    { label: 'Feb', value: 52000 },
    { label: 'Mar', value: 68000 },
    { label: 'Apr', value: 73000 },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="glass backdrop-blur-lg border-b border-border-glow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Admin Dashboard</h1>
            <p className="text-text-tertiary text-xs sm:text-sm">Welcome back, Administrator</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="glass rounded-lg px-3 sm:px-4 py-2">
              <span className="text-xs sm:text-sm text-neon-cyan font-bold">Last Updated: Today</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass glass-hover rounded-2xl p-4 sm:p-8 border border-border-dark backdrop-blur-xl slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 glass rounded-lg ${stat.color}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-neon-green text-xs sm:text-sm font-bold">{stat.change}</span>
                </div>
                <h3 className="text-text-secondary text-xs sm:text-sm font-medium mb-1 sm:mb-2">{stat.label}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-text-primary">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Sales Chart */}
          <div className="lg:col-span-2 glass glass-hover rounded-2xl p-4 sm:p-8 border border-border-glow backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Sales Performance</h2>
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan hidden sm:block" />
            </div>

            {/* Custom Chart */}
            <CustomChart data={salesChartData} type="bar" />
          </div>

          {/* Top Performers */}
          <div className="glass glass-hover rounded-2xl p-4 sm:p-8 border border-border-glow backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">Top Performers</h2>
            <div className="space-y-3 sm:space-y-4">
              {products.slice(0, 3).map((product, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 sm:p-3 glass rounded-lg gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-text-primary truncate">{product.name}</p>
                    <p className="text-xs text-text-tertiary">{product.sales} sales</p>
                  </div>
                  <span className="text-neon-cyan font-bold text-xs sm:text-sm flex-shrink-0">{product.revenue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="glass glass-hover rounded-2xl p-4 sm:p-8 border border-border-glow backdrop-blur-xl mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Revenue Trend</h2>
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan hidden sm:block" />
          </div>
          <CustomChart data={revenueChartData} type="line" />
        </div>

        {/* Products Table */}
        <div className="glass glass-hover rounded-2xl p-4 sm:p-8 border border-border-glow backdrop-blur-xl mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Product Performance</h2>
            <button className="px-3 sm:px-4 py-2 glass rounded-lg text-neon-cyan font-bold hover:bg-bg-tertiary transition-colors text-sm sm:text-base w-fit">
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-dark">
                  <th className="text-left py-2 sm:py-4 px-2 sm:px-4 font-bold text-text-secondary">Product</th>
                  <th className="text-left py-2 sm:py-4 px-2 sm:px-4 font-bold text-text-secondary hidden sm:table-cell">Category</th>
                  <th className="text-right py-2 sm:py-4 px-2 sm:px-4 font-bold text-text-secondary">Sales</th>
                  <th className="text-right py-2 sm:py-4 px-2 sm:px-4 font-bold text-text-secondary hidden sm:table-cell">Revenue</th>
                  <th className="text-center py-2 sm:py-4 px-2 sm:px-4 font-bold text-text-secondary">Status</th>
                  <th className="text-center py-2 sm:py-4 px-2 sm:px-4 font-bold text-text-secondary">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={idx} className="border-b border-border-dark hover:bg-bg-tertiary/30 transition-colors">
                    <td className="py-2 sm:py-4 px-2 sm:px-4">
                      <p className="font-bold text-text-primary text-xs sm:text-base">{product.name}</p>
                    </td>
                    <td className="py-2 sm:py-4 px-2 sm:px-4 hidden sm:table-cell">
                      <span className="text-text-secondary text-xs sm:text-sm">{product.category}</span>
                    </td>
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-right">
                      <span className="font-bold text-text-primary text-xs sm:text-base">{product.sales}</span>
                    </td>
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-right hidden sm:table-cell">
                      <span className="font-bold text-neon-cyan text-xs sm:text-base">{product.revenue}</span>
                    </td>
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-center">
                      <span className={`text-xs font-bold px-2 sm:px-3 py-1 rounded-full ${
                        product.status === 'Trending'
                          ? 'text-neon-green bg-neon-green/10'
                          : 'text-neon-cyan bg-neon-cyan/10'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-center">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="p-1 sm:p-2 glass rounded-lg hover:border-neon-cyan transition-all"
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
        <div className="glass glass-hover rounded-2xl p-4 sm:p-8 border border-border-glow backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Recent Orders</h2>
            <button className="px-3 sm:px-4 py-2 glass rounded-lg text-neon-cyan font-bold hover:bg-bg-tertiary transition-colors text-sm sm:text-base w-fit">
              View All
            </button>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {recentOrders.map((order, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 p-3 sm:p-4 glass rounded-lg hover:border-neon-cyan transition-all">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-text-primary text-xs sm:text-base">{order.id}</p>
                  <p className="text-xs sm:text-sm text-text-tertiary">{order.customer}</p>
                </div>
                <div className="flex-1 min-w-0 hidden sm:block">
                  <p className="text-xs sm:text-sm text-text-secondary truncate">{order.product}</p>
                </div>
                <div className="flex justify-between sm:flex-1 sm:text-right gap-4">
                  <div>
                    <p className="font-bold text-neon-cyan text-xs sm:text-base">{order.amount}</p>
                    <p className="text-xs text-text-tertiary">{order.date}</p>
                  </div>
                  <div>
                    <span className={`text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap ${
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
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass rounded-2xl border border-border-glow max-w-md w-full p-6 sm:p-8 slide-in">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-2xl font-bold text-text-primary truncate">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 glass rounded-lg hover:border-neon-pink transition-all flex-shrink-0 ml-2"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-neon-pink" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="text-text-tertiary text-xs sm:text-sm">Category</p>
                  <p className="font-bold text-text-primary text-sm">{selectedProduct.category}</p>
                </div>
                <div>
                  <p className="text-text-tertiary text-xs sm:text-sm">Status</p>
                  <p className={`font-bold text-sm ${selectedProduct.status === 'Trending' ? 'text-neon-green' : 'text-neon-cyan'}`}>
                    {selectedProduct.status}
                  </p>
                </div>
                <div>
                  <p className="text-text-tertiary text-xs sm:text-sm">Sales</p>
                  <p className="font-bold text-text-primary text-sm">{selectedProduct.sales}</p>
                </div>
                <div>
                  <p className="text-text-tertiary text-xs sm:text-sm">Revenue</p>
                  <p className="font-bold text-neon-cyan text-sm">{selectedProduct.revenue}</p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 flex gap-3 sm:gap-4">
                <button className="flex-1 px-3 sm:px-4 py-2 glass rounded-lg text-neon-cyan font-bold hover:bg-bg-tertiary transition-colors text-sm">
                  Edit
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 bg-neon-pink/10 rounded-lg text-neon-pink font-bold hover:bg-neon-pink/20 transition-colors text-sm">
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
