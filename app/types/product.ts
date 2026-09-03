// data/products.ts
export interface ProductSpecGroup {
  group: string
  items: { label: string; value: string }[]
}

export interface StoreLocation {
  name: string
  address: string
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
}

export interface Product {
  id: number
  name: string
  price: string
  monthlyPrice?: string
  category: string
  brand?: string
  images: string[]
  colors?: { name: string; hex: string }[]
  optionsLabel?: string
  options?: string[]
  description: string
  specs?: ProductSpecGroup[]
  stores?: StoreLocation[]
}

export const productsDatabase: Product[] = [
  // Homepage Featured
  {
    id: 1,
    name: 'MacBook Neo 13-inch',
    price: '$799',
    monthlyPrice: '$66.58/mo',
    category: 'Mac',
    brand: 'Apple',
    images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Space Gray', hex: '#53555B' }, { name: 'Silver', hex: '#E2E4E1' }],
    optionsLabel: 'Storage',
    options: ['256GB', '512GB'],
    description: 'Portable power for your everyday workflow.',
    specs: [{ group: 'Performance', items: [{ label: 'Chip', value: 'M3' }] }]
  },
  {
    id: 2,
    name: 'iPad Air 13-inch (M4)',
    price: '$1,079',
    monthlyPrice: '$89.91/mo',
    category: 'iPad',
    brand: 'Apple',
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Space Gray', hex: '#53555B' }, { name: 'Starlight', hex: '#F0EBE3' }],
    optionsLabel: 'Connectivity',
    options: ['Wi-Fi', 'Wi-Fi + Cellular'],
    description: 'Fresh design with unmatched performance.',
    specs: [{ group: 'Display', items: [{ label: 'Screen', value: '13-inch Liquid Retina' }] }]
  },
  {
    id: 3,
    name: 'iPhone 17e',
    price: '$779',
    monthlyPrice: '$64.91/mo',
    category: 'iPhone',
    brand: 'Apple',
    images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Black', hex: '#212121' }, { name: 'White', hex: '#F5F5F7' }],
    optionsLabel: 'Storage',
    options: ['128GB', '256GB'],
    description: 'Next-gen iPhone standard.'
  },
  {
    id: 4,
    name: 'Apple Watch Series 11',
    price: '$479',
    category: 'Watch',
    brand: 'Apple',
    images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Jet Black', hex: '#1C1C1E' }],
    optionsLabel: 'Case Size',
    options: ['42mm', '46mm'],
    description: 'Advanced health tracking and display screen.'
  },

  // Promotions Section
  {
    id: 5,
    name: 'Samsung Galaxy S24 Ultra',
    price: '$1,299',
    monthlyPrice: '$108.25/mo',
    category: 'Phones',
    brand: 'Samsung',
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Titanium Gray', hex: '#636267' }, { name: 'Titanium Black', hex: '#2B2B2C' }],
    optionsLabel: 'Storage',
    options: ['256GB', '512GB', '1TB'],
    description: 'Welcome to the era of mobile AI with Galaxy AI built-in.',
    specs: [{ group: 'Camera', items: [{ label: 'Main Sensor', value: '200 MP' }] }]
  },
  {
    id: 6,
    name: 'iPhone 14',
    price: '$699',
    monthlyPrice: '$58.25/mo',
    category: 'iPhone',
    brand: 'Apple',
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Midnight', hex: '#1B2228' }, { name: 'Starlight', hex: '#F0EBE3' }],
    optionsLabel: 'Storage',
    options: ['128GB', '256GB'],
    description: 'As awesome as ever with all-day battery life.'
  },
  {
    id: 7,
    name: 'Google Pixel 8',
    price: '$699',
    monthlyPrice: '$58.25/mo',
    category: 'Phones',
    brand: 'Google',
    images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Hazel', hex: '#8C9088' }, { name: 'Obsidian', hex: '#323436' }],
    optionsLabel: 'Storage',
    options: ['128GB', '256GB'],
    description: 'Powerful handheld processing driven by Google Tensor G3.'
  },
  {
    id: 8,
    name: 'Xiaomi 13T Pro',
    price: '$649',
    monthlyPrice: '$54.00/mo',
    category: 'Phones',
    brand: 'Xiaomi',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
    colors: [{ name: 'Alpine Blue', hex: '#7195B8' }, { name: 'Black', hex: '#1F1F1F' }],
    optionsLabel: 'Storage',
    options: ['256GB', '512GB'],
    description: 'Masterpiece in sight with Leica professional camera system.'
  }
]