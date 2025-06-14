'use client';

import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { QrCode, Download, Share, Copy, Check, Smartphone } from 'lucide-react';

const QRCodeGenerator = () => {
  const [selectedAsset, setSelectedAsset] = useState('iphone-15-pro');
  const [qrValue, setQrValue] = useState('');
  const [copied, setCopied] = useState(false);

  const assets = [
    { id: 'iphone-15-pro', name: 'iPhone 15 Pro', warranty: '11 months left', status: 'active' },
    { id: 'macbook-pro', name: 'MacBook Pro', warranty: '2 years left', status: 'active' },
    { id: 'tesla-model-3', name: 'Tesla Model 3', warranty: 'Service due', status: 'warning' },
    { id: 'lg-refrigerator', name: 'LG Refrigerator', warranty: '4 years left', status: 'active' }
  ];

  useEffect(() => {
    const asset = assets.find(a => a.id === selectedAsset);
    if (asset) {
      const qrData = {
        assetId: asset.id,
        name: asset.name,
        warranty: asset.warranty,
        status: asset.status,
        url: `https://warrantyai.com/asset/${asset.id}`,
        timestamp: new Date().toISOString()
      };
      setQrValue(JSON.stringify(qrData));
    }
  }, [selectedAsset]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(qrValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const downloadQR = () => {
    const svg = document.getElementById('qr-code-svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `${selectedAsset}-qr-code.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'WarrantyAI QR Code',
          text: `QR Code for ${assets.find(a => a.id === selectedAsset)?.name}`,
          url: `https://warrantyai.com/asset/${selectedAsset}`
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL
      copyToClipboard();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      case 'expired': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
      <div className="flex items-center space-x-2 mb-6">
        <QrCode className="w-6 h-6 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">QR Code Generator</h3>
      </div>

      {/* Asset Selector */}
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Select Asset</label>
        <select
          value={selectedAsset}
          onChange={(e) => setSelectedAsset(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
        >
          {assets.map((asset) => (
            <option key={asset.id} value={asset.id} className="bg-gray-800">
              {asset.name}
            </option>
          ))}
        </select>
      </div>

      {/* Asset Info */}
      <div className="mb-6 bg-white/5 rounded-lg p-4 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-medium">
            {assets.find(a => a.id === selectedAsset)?.name}
          </span>
          <Smartphone className="w-5 h-5 text-blue-400" />
        </div>
        <div className={`text-xs px-2 py-1 rounded-full inline-block ${
          getStatusColor(assets.find(a => a.id === selectedAsset)?.status || 'active')
        }`}>
          {assets.find(a => a.id === selectedAsset)?.warranty}
        </div>
      </div>

      {/* QR Code Display */}
      <div className="mb-6">
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          {qrValue && (
            <QRCode
              id="qr-code-svg"
              value={qrValue}
              size={200}
              level="M"
            />
          )}
        </div>
      </div>

      {/* QR Code Actions */}
      <div className="space-y-3">
        <button
          onClick={downloadQR}
          className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 rounded-lg py-2 px-4 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>Download QR Code</span>
        </button>

        <button
          onClick={shareQR}
          className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-400 rounded-lg py-2 px-4 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Share className="w-4 h-4" />
          <span>Share QR Code</span>
        </button>

        <button
          onClick={copyToClipboard}
          className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-400 rounded-lg py-2 px-4 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : 'Copy Data'}</span>
        </button>
      </div>

      {/* QR Code Info */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="text-xs text-gray-400 space-y-1">
          <div>• QR codes contain encrypted asset data</div>
          <div>• Scan with any QR reader or WarrantyAI app</div>
          <div>• Instant access to warranty information</div>
          <div>• Works offline for basic asset details</div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
        <div className="text-sm text-blue-400 font-medium mb-2">How to Use:</div>
        <div className="text-xs text-gray-300 space-y-1">
          <div>1. Print and attach QR code to your asset</div>
          <div>2. Scan with smartphone camera or app</div>
          <div>3. Instantly view warranty status and details</div>
          <div>4. Access claim forms and support contacts</div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
        <div className="text-xs text-yellow-400">
          <strong>Demo Mode:</strong> QR codes generated in demo mode contain sample data. 
          Sign up for full functionality with real asset tracking.
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
