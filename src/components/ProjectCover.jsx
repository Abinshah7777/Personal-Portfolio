import React from 'react';

/**
 * Generates realistic mockups for each project type
 */
export default function ProjectCover({ label, type }) {
  const renders = {
    lms: () => (
      <svg viewBox="0 0 600 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="340" fill="#FAFAF7" />
        
        {/* Header */}
        <rect width="600" height="50" fill="#3548E0" opacity="0.08" />
        <text x="30" y="35" fontFamily="Arial" fontSize="14" fill="#3548E0" fontWeight="600">LearnHub</text>
        <line x1="0" y1="50" x2="600" y2="50" stroke="#E4E3DD" strokeWidth="1" />
        
        {/* Course Cards */}
        {/* Card 1 */}
        <rect x="30" y="75" width="160" height="120" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <rect x="30" y="75" width="160" height="60" fill="#3548E0" opacity="0.1" rx="6" />
        <text x="120" y="115" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">Python 101</text>
        <rect x="40" y="150" width="140" height="3" fill="#E4E3DD" rx="2" />
        <rect x="40" y="150" width="90" height="3" fill="#3548E0" rx="2" />
        <text x="40" y="170" fontFamily="Arial" fontSize="9" fill="#6B7280">Progress: 75%</text>
        
        {/* Card 2 */}
        <rect x="220" y="75" width="160" height="120" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <rect x="220" y="75" width="160" height="60" fill="#3548E0" opacity="0.12" rx="6" />
        <text x="300" y="115" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">Web Dev</text>
        <rect x="230" y="150" width="140" height="3" fill="#E4E3DD" rx="2" />
        <rect x="230" y="150" width="110" height="3" fill="#3548E0" rx="2" />
        <text x="230" y="170" fontFamily="Arial" fontSize="9" fill="#6B7280">Progress: 92%</text>
        
        {/* Card 3 */}
        <rect x="410" y="75" width="160" height="120" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <rect x="410" y="75" width="160" height="60" fill="#3548E0" opacity="0.09" rx="6" />
        <text x="490" y="115" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">Data Science</text>
        <rect x="420" y="150" width="140" height="3" fill="#E4E3DD" rx="2" />
        <rect x="420" y="150" width="70" height="3" fill="#3548E0" rx="2" />
        <text x="420" y="170" fontFamily="Arial" fontSize="9" fill="#6B7280">Progress: 45%</text>
        
        {/* Certificate badge */}
        <circle cx="520" cy="240" r="25" fill="#3548E0" opacity="0.15" />
        <text x="520" y="245" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#3548E0" fontWeight="600">✓</text>
        <text x="520" y="280" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#6B7280">3 Certificates</text>
        
        {/* Stats */}
        <text x="40" y="250" fontFamily="Arial" fontSize="12" fill="#3548E0" fontWeight="600">Enrolled: 12</text>
        <text x="40" y="280" fontFamily="Arial" fontSize="12" fill="#3548E0" fontWeight="600">Completed: 3</text>
      </svg>
    ),
    api: () => (
      <svg viewBox="0 0 600 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="340" fill="#FAFAF7" />
        
        {/* Toolbar */}
        <rect width="600" height="45" fill="#3548E0" opacity="0.06" />
        <text x="30" y="32" fontFamily="Arial" fontSize="14" fill="#3548E0" fontWeight="600">Catalogue Manager</text>
        <line x1="0" y1="45" x2="600" y2="45" stroke="#E4E3DD" strokeWidth="1" />
        
        {/* Search bar */}
        <rect x="20" y="60" width="560" height="32" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="30" y="81" fontFamily="Arial" fontSize="12" fill="#9CA3AF">🔍 Search inventory...</text>
        
        {/* Table Header */}
        <text x="30" y="125" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">Product ID</text>
        <text x="150" y="125" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">Name</text>
        <text x="340" y="125" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">Stock</text>
        <text x="450" y="125" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">Price</text>
        <line x1="20" y1="135" x2="580" y2="135" stroke="#E4E3DD" strokeWidth="1" />
        
        {/* Table Rows */}
        <text x="30" y="165" fontFamily="Arial" fontSize="10" fill="#374151">SKU-001</text>
        <text x="150" y="165" fontFamily="Arial" fontSize="10" fill="#374151">Laptop</text>
        <text x="340" y="165" fontFamily="Arial" fontSize="10" fill="#10B981">45 units</text>
        <text x="450" y="165" fontFamily="Arial" fontSize="10" fill="#374151">$999</text>
        
        <text x="30" y="200" fontFamily="Arial" fontSize="10" fill="#374151">SKU-002</text>
        <text x="150" y="200" fontFamily="Arial" fontSize="10" fill="#374151">Mouse</text>
        <text x="340" y="200" fontFamily="Arial" fontSize="10" fill="#10B981">128 units</text>
        <text x="450" y="200" fontFamily="Arial" fontSize="10" fill="#374151">$45</text>
        
        <text x="30" y="235" fontFamily="Arial" fontSize="10" fill="#374151">SKU-003</text>
        <text x="150" y="235" fontFamily="Arial" fontSize="10" fill="#374151">Monitor</text>
        <text x="340" y="235" fontFamily="Arial" fontSize="10" fill="#F97316">8 units</text>
        <text x="450" y="235" fontFamily="Arial" fontSize="10" fill="#374151">$299</text>
        
        {/* API Status */}
        <circle cx="30" cy="305" r="4" fill="#10B981" />
        <text x="45" y="310" fontFamily="Arial" fontSize="10" fill="#10B981">API Status: Connected</text>
      </svg>
    ),
    ecommerce: () => (
      <svg viewBox="0 0 600 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="340" fill="#FAFAF7" />
        
        {/* Header */}
        <rect width="600" height="50" fill="#3548E0" opacity="0.08" />
        <text x="30" y="35" fontFamily="Arial" fontSize="14" fill="#3548E0" fontWeight="600">Forever Store</text>
        <text x="540" y="35" fontFamily="Arial" fontSize="12" fill="#3548E0">🛒 Cart (3)</text>
        <line x1="0" y1="50" x2="600" y2="50" stroke="#E4E3DD" strokeWidth="1" />
        
        {/* Product Grid */}
        {/* Product 1 */}
        <rect x="20" y="70" width="130" height="180" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <rect x="20" y="70" width="130" height="80" fill="#3548E0" opacity="0.1" rx="6" />
        <text x="85" y="120" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#9CA3AF">[Product Image]</text>
        <text x="85" y="155" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#374151" fontWeight="600">Shirt</text>
        <text x="85" y="175" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">$29.99</text>
        <text x="85" y="235" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#3548E0" fontWeight="600">+ Add</text>
        
        {/* Product 2 */}
        <rect x="170" y="70" width="130" height="180" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <rect x="170" y="70" width="130" height="80" fill="#3548E0" opacity="0.1" rx="6" />
        <text x="235" y="120" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#9CA3AF">[Product Image]</text>
        <text x="235" y="155" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#374151" fontWeight="600">Jeans</text>
        <text x="235" y="175" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">$59.99</text>
        <text x="235" y="235" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#3548E0" fontWeight="600">+ Add</text>
        
        {/* Product 3 */}
        <rect x="320" y="70" width="130" height="180" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <rect x="320" y="70" width="130" height="80" fill="#3548E0" opacity="0.1" rx="6" />
        <text x="385" y="120" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#9CA3AF">[Product Image]</text>
        <text x="385" y="155" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#374151" fontWeight="600">Jacket</text>
        <text x="385" y="175" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#3548E0" fontWeight="600">$89.99</text>
        <text x="385" y="235" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#3548E0" fontWeight="600">+ Add</text>
        
        {/* Product 4 */}
        <rect x="470" y="70" width="110" height="180" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <rect x="470" y="70" width="110" height="80" fill="#3548E0" opacity="0.1" rx="6" />
        <text x="525" y="120" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#9CA3AF">[Image]</text>
        <text x="525" y="155" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#374151" fontWeight="600">Hat</text>
        <text x="525" y="172" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#3548E0" fontWeight="600">$19.99</text>
        <text x="525" y="235" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="#3548E0" fontWeight="600">+ Add</text>
      </svg>
    ),
    dashboard: () => (
      <svg viewBox="0 0 600 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="340" fill="#FAFAF7" />
        
        {/* Header */}
        <rect width="600" height="50" fill="#3548E0" opacity="0.08" />
        <text x="30" y="35" fontFamily="Arial" fontSize="14" fill="#3548E0" fontWeight="600">Telemetry Dashboard</text>
        <text x="520" y="35" fontFamily="Arial" fontSize="10" fill="#10B981">● Live</text>
        <line x1="0" y1="50" x2="600" y2="50" stroke="#E4E3DD" strokeWidth="1" />
        
        {/* Metric Cards */}
        {/* Card 1 */}
        <rect x="20" y="70" width="110" height="90" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="75" y="90" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Requests</text>
        <text x="75" y="130" textAnchor="middle" fontFamily="Arial" fontSize="18" fill="#3548E0" fontWeight="600">2.4K</text>
        
        {/* Card 2 */}
        <rect x="150" y="70" width="110" height="90" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="205" y="90" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Latency</text>
        <text x="205" y="130" textAnchor="middle" fontFamily="Arial" fontSize="18" fill="#3548E0" fontWeight="600">45ms</text>
        
        {/* Card 3 */}
        <rect x="280" y="70" width="110" height="90" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="335" y="90" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Success</text>
        <text x="335" y="130" textAnchor="middle" fontFamily="Arial" fontSize="18" fill="#10B981" fontWeight="600">99.8%</text>
        
        {/* Card 4 */}
        <rect x="410" y="70" width="170" height="90" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="495" y="90" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Errors (24h)</text>
        <text x="495" y="130" textAnchor="middle" fontFamily="Arial" fontSize="18" fill="#F97316" fontWeight="600">12</text>
        
        {/* Chart area */}
        <rect x="20" y="180" width="560" height="130" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        
        {/* Mini Line Chart */}
        <text x="30" y="195" fontFamily="Arial" fontSize="10" fill="#3548E0" fontWeight="600">Request Volume (Last 24h)</text>
        
        {/* Chart lines */}
        <polyline points="40,270 80,240 120,260 160,220 200,245 240,215 280,235 320,200 360,230 400,210 440,250 480,190 520,240" 
                  fill="none" stroke="#3548E0" strokeWidth="2" opacity="0.6" />
        <polyline points="40,270 80,240 120,260 160,220 200,245 240,215 280,235 320,200 360,230 400,210 440,250 480,190 520,240" 
                  fill="#3548E0" opacity="0.08" />
        
        {/* Grid lines */}
        <line x1="30" y1="210" x2="530" y2="210" stroke="#E4E3DD" strokeWidth="0.5" opacity="0.5" />
        <line x1="30" y1="210" x2="530" y2="210" stroke="#E4E3DD" strokeWidth="0.5" opacity="0.5" />
        <line x1="30" y1="240" x2="530" y2="240" stroke="#E4E3DD" strokeWidth="0.5" opacity="0.5" />
      </svg>
    ),
    weather: () => (
      <svg viewBox="0 0 600 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="340" fill="#FAFAF7" />
        
        {/* Header */}
        <rect width="600" height="50" fill="#3548E0" opacity="0.08" />
        <text x="30" y="35" fontFamily="Arial" fontSize="14" fill="#3548E0" fontWeight="600">Weather Forecast</text>
        <text x="500" y="35" fontFamily="Arial" fontSize="10" fill="#3548E0">📍 NYC</text>
        <line x1="0" y1="50" x2="600" y2="50" stroke="#E4E3DD" strokeWidth="1" />
        
        {/* Current Weather Card */}
        <rect x="20" y="70" width="280" height="160" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="8" />
        <circle cx="80" cy="120" r="30" fill="#3548E0" opacity="0.15" />
        <text x="80" y="128" textAnchor="middle" fontFamily="Arial" fontSize="24" fill="#3548E0">☀️</text>
        <text x="140" y="110" fontFamily="Arial" fontSize="28" fill="#3548E0" fontWeight="600">72°F</text>
        <text x="140" y="135" fontFamily="Arial" fontSize="12" fill="#9CA3AF">Partly Cloudy</text>
        <text x="140" y="155" fontFamily="Arial" fontSize="11" fill="#6B7280">Humidity: 65%</text>
        <text x="140" y="175" fontFamily="Arial" fontSize="11" fill="#6B7280">Wind: 12 mph</text>
        
        {/* Forecast Cards */}
        {/* Tomorrow */}
        <rect x="320" y="70" width="85" height="75" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="362" y="88" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Tomorrow</text>
        <text x="362" y="110" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#3548E0">🌤️</text>
        <text x="362" y="135" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#3548E0" fontWeight="600">75°F</text>
        
        {/* Day 3 */}
        <rect x="425" y="70" width="85" height="75" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="467" y="88" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Day 3</text>
        <text x="467" y="110" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#3548E0">⛅</text>
        <text x="467" y="135" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#3548E0" fontWeight="600">68°F</text>
        
        {/* Day 4 */}
        <rect x="320" y="165" width="85" height="75" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="362" y="183" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Day 4</text>
        <text x="362" y="205" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#3548E0">🌧️</text>
        <text x="362" y="230" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#3548E0" fontWeight="600">65°F</text>
        
        {/* Day 5 */}
        <rect x="425" y="165" width="85" height="75" fill="white" stroke="#E4E3DD" strokeWidth="1" rx="6" />
        <text x="467" y="183" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Day 5</text>
        <text x="467" y="205" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#3548E0">☁️</text>
        <text x="467" y="230" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#3548E0" fontWeight="600">70°F</text>
      </svg>
    ),
  };

  return renders[type] ? renders[type]() : renders.lms();
}
