export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "iPhones",
    price: 1199,
    image: "/images/iphone-15.png",
    specs: "A17 Pro chip · 48MP Camera · Titanium",
    isFeatured: true,
    badge: "New"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Samsung",
    price: 1299,
    image: "/images/samsung-s24.png",
    specs: "Snapdragon 8 Gen 3 · 200MP · S Pen",
    isFeatured: true,
    badge: "Hot"
  },
  {
    id: 3,
    name: 'MacBook Pro 14" M3',
    category: "Laptops",
    price: 1599,
    image: "/images/macbook-pro.png",
    specs: "M3 Pro · 18GB RAM · 512GB SSD",
    isFeatured: true,
    badge: "Popular"
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2",
    category: "Watches",
    price: 799,
    image: "/images/apple-watch.png",
    specs: "Precision GPS · 36hr Battery · Titanium",
    isFeatured: true,
    badge: "Premium"
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Speakers",
    price: 349,
    image: "/images/iphone-15.png",
    specs: "Noise Canceling · 30-hour battery",
    isFeatured: false,
    badge: null
  }
];

export const cars = [
  {
    id: 101,
    name: "Tesla Model S Plaid",
    category: "Cars",
    price: 89990,
    image: "/images/premium-car.png",
    specs: "1020 hp · 1.99s 0-60 · 396 mi range",
    condition: "New"
  },
  {
    id: 102,
    name: "BMW M4 Competition",
    category: "Cars",
    price: 78100,
    image: "/images/premium-car.png",
    specs: "503 hp · 3.4s 0-60 · M xDrive",
    condition: "New"
  }
];

export const categories = [
  { name: "iPhones", count: "12+ Models" },
  { name: "Samsung", count: "15+ Models" },
  { name: "Watches", count: "20+ Styles" },
  { name: "Speakers", count: "30+ Devices" },
  { name: "Laptops", count: "10+ Options" },
  { name: "Cars", count: "50+ Vehicles" }
];
