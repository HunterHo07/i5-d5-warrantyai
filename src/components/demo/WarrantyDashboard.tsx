'use client';

import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  QrCode,
  Camera,
  Bell,
  Download,
  Share,
  Plus,
  Smartphone,
  Car,
  Home,
  Laptop,
  Utensils
} from 'lucide-react';

interface WarrantyDashboardProps {
  selectedCategory: string;
}

const WarrantyDashboard = ({ selectedCategory }: WarrantyDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('expiry');

  const warrantyData = {
    electronics: [
      { 
        id: 1, 
        name: 'iPhone 15 Pro', 
        brand: 'Apple', 
        purchaseDate: '2023-12-15', 
        warrantyExpiry: '2024-12-15', 
        status: 'active', 
        value: '$1,199',
        serialNumber: 'F2LLD3XHPD6T',
        category: 'Smartphone'
      },
      { 
        id: 2, 
        name: 'MacBook Pro 16"', 
        brand: 'Apple', 
        purchaseDate: '2022-08-20', 
        warrantyExpiry: '2025-08-20', 
        status: 'active', 
        value: '$2,499',
        serialNumber: 'C02ZD1XHMD6T',
        category: 'Laptop'
      },
      { 
        id: 3, 
        name: 'Sony A7R V Camera', 
        brand: 'Sony', 
        purchaseDate: '2023-03-10', 
        warrantyExpiry: '2024-03-10', 
        status: 'expired', 
        value: '$3,899',
        serialNumber: '7654321',
        category: 'Camera'
      },
      { 
        id: 4, 
        name: 'AirPods Pro 2', 
        brand: 'Apple', 
        purchaseDate: '2023-06-15', 
        warrantyExpiry: '2024-06-15', 
        status: 'warning', 
        value: '$249',
        serialNumber: 'HXRC2XHPD6T',
        category: 'Audio'
      }
    ],
    vehicles: [
      { 
        id: 5, 
        name: 'Tesla Model 3', 
        brand: 'Tesla', 
        purchaseDate: '2022-01-15', 
        warrantyExpiry: '2026-01-15', 
        status: 'warning', 
        value: '$45,000',
        serialNumber: '5YJ3E1EA4NF123456',
        category: 'Electric Vehicle'
      },
      { 
        id: 6, 
        name: 'BMW X5 xDrive40i', 
        brand: 'BMW', 
        purchaseDate: '2021-09-20', 
        warrantyExpiry: '2025-09-20', 
        status: 'active', 
        value: '$65,000',
        serialNumber: 'WBAJA7C50NCE12345',
        category: 'SUV'
      },
      { 
        id: 7, 
        name: 'Honda Civic Type R', 
        brand: 'Honda', 
        purchaseDate: '2023-05-10', 
        warrantyExpiry: '2026-05-10', 
        status: 'active', 
        value: '$43,000',
        serialNumber: 'SHHFK8G60NU123456',
        category: 'Sports Car'
      }
    ],
    appliances: [
      { 
        id: 8, 
        name: 'LG OLED65C3PUA', 
        brand: 'LG', 
        purchaseDate: '2023-02-14', 
        warrantyExpiry: '2026-02-14', 
        status: 'active', 
        value: '$1,799',
        serialNumber: '302MABC123456',
        category: 'Television'
      },
      { 
        id: 9, 
        name: 'Dyson V15 Detect', 
        brand: 'Dyson', 
        purchaseDate: '2023-08-05', 
        warrantyExpiry: '2025-08-05', 
        status: 'active', 
        value: '$749',
        serialNumber: 'DY-V15-123456',
        category: 'Vacuum'
      },
      { 
        id: 10, 
        name: 'KitchenAid Stand Mixer', 
        brand: 'KitchenAid', 
        purchaseDate: '2022-11-25', 
        warrantyExpiry: '2024-11-25', 
        status: 'warning', 
        value: '$379',
        serialNumber: 'KSM150PS123456',
        category: 'Kitchen Appliance'
      }
    ],
    food: [
      { 
        id: 11, 
        name: 'Organic Milk', 
        brand: 'Whole Foods', 
        purchaseDate: '2024-01-10', 
        warrantyExpiry: '2024-01-17', 
        status: 'expired', 
        value: '$4.99',
        serialNumber: 'WF-MILK-240110',
        category: 'Dairy'
      },
      { 
        id: 12, 
        name: 'Sourdough Bread', 
        brand: 'Local Bakery', 
        purchaseDate: '2024-01-12', 
        warrantyExpiry: '2024-01-15', 
        status: 'expired', 
        value: '$5.50',
        serialNumber: 'LB-BREAD-240112',
        category: 'Bakery'
      },
      { 
        id: 13, 
        name: 'Greek Yogurt', 
        brand: 'Chobani', 
        purchaseDate: '2024-01-11', 
        warrantyExpiry: '2024-01-25', 
        status: 'active', 
        value: '$6.99',
        serialNumber: 'CHO-YOG-240111',
        category: 'Dairy'
      }
    ]
  };

  const currentData = warrantyData[selectedCategory as keyof typeof warrantyData] || [];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'active':
        return { color: 'text-green-400 bg-green-500/20', icon: CheckCircle, label: 'Active' };
      case 'warning':
        return { color: 'text-yellow-400 bg-yellow-500/20', icon: Clock, label: 'Expiring Soon' };
      case 'expired':
        return { color: 'text-red-400 bg-red-500/20', icon: AlertTriangle, label: 'Expired' };
      default:
        return { color: 'text-gray-400 bg-gray-500/20', icon: Clock, label: 'Unknown' };
    }
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredData = currentData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'expiry':
        return new Date(a.warrantyExpiry).getTime() - new Date(b.warrantyExpiry).getTime();
      case 'name':
        return a.name.localeCompare(b.name);
      case 'value':
        return parseFloat(b.value.replace(/[$,]/g, '')) - parseFloat(a.value.replace(/[$,]/g, ''));
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'electronics': return Laptop;
      case 'vehicles': return Car;
      case 'appliances': return Home;
      case 'food': return Utensils;
      default: return Laptop;
    }
  };

  const CategoryIcon = getCategoryIcon(selectedCategory);

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <CategoryIcon className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-white capitalize">{selectedCategory} Dashboard</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 p-2 rounded-lg transition-all">
              <Plus className="w-5 h-5" />
            </button>
            <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 p-2 rounded-lg transition-all">
              <Camera className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="warning">Expiring Soon</option>
            <option value="expired">Expired</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
          >
            <option value="expiry">Sort by Expiry</option>
            <option value="name">Sort by Name</option>
            <option value="value">Sort by Value</option>
          </select>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="p-6">
        <div className="grid gap-4">
          {sortedData.map((item) => {
            const statusInfo = getStatusInfo(item.status);
            const StatusIcon = statusInfo.icon;
            const daysUntilExpiry = getDaysUntilExpiry(item.warrantyExpiry);

            return (
              <div key={item.id} className="bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${statusInfo.color}`}>
                      <StatusIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.brand} • {item.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold">{item.value}</span>
                    <QrCode className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors cursor-pointer" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Purchase Date:</span>
                    <div className="text-white">{new Date(item.purchaseDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Warranty Expiry:</span>
                    <div className="text-white">{new Date(item.warrantyExpiry).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Days Remaining:</span>
                    <div className={`font-semibold ${
                      daysUntilExpiry > 30 ? 'text-green-400' : 
                      daysUntilExpiry > 0 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {daysUntilExpiry > 0 ? `${daysUntilExpiry} days` : 'Expired'}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    Serial: {item.serialNumber}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <Bell className="w-4 h-4" />
                    </button>
                    <button className="text-green-400 hover:text-green-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {sortedData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              No assets found matching your criteria
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all">
              Add New Asset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WarrantyDashboard;
