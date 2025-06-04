
export const mockProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 1234,
    category: "Electronics",
    description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    inStock: true
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 567,
    category: "Clothing",
    description: "Soft, comfortable organic cotton t-shirt perfect for everyday wear.",
    inStock: true
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2103,
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring, GPS, and waterproof design.",
    inStock: true
  },
  {
    id: 4,
    name: "Ceramic Plant Pot Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 890,
    category: "Home & Garden",
    description: "Beautiful set of 3 ceramic plant pots with drainage holes and saucers.",
    inStock: true
  },
  {
    id: 5,
    name: "Professional Yoga Mat",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1506629905877-c19d82d2d5c0?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 456,
    category: "Sports",
    description: "Non-slip, eco-friendly yoga mat with alignment guides and carrying strap.",
    inStock: true
  },
  {
    id: 6,
    name: "Vitamin C Face Serum",
    price: 45.99,
    originalPrice: 65.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1567,
    category: "Beauty",
    description: "Brightening vitamin C serum for radiant, youthful-looking skin.",
    inStock: false
  },
  {
    id: 7,
    name: "Bestseller Novel Collection",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 234,
    category: "Books",
    description: "Collection of 3 bestselling novels from award-winning authors.",
    inStock: true
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 789,
    category: "Sports",
    description: "Insulated stainless steel water bottle keeps drinks hot for 12 hours, cold for 24 hours.",
    inStock: true
  }
];

// Generate additional products to reach 1000
const additionalProducts = [];
const baseProducts = [...mockProducts];

for (let i = 9; i <= 1000; i++) {
  const baseProduct = baseProducts[(i - 9) % baseProducts.length];
  additionalProducts.push({
    ...baseProduct,
    id: i,
    name: `${baseProduct.name} - Model ${i}`,
    price: Number((baseProduct.price + (Math.random() * 50 - 25)).toFixed(2)),
    reviews: Math.floor(Math.random() * 2000) + 100,
    rating: Number((Math.random() * 2 + 3).toFixed(1)), // 3.0 to 5.0
    inStock: Math.random() > 0.1 // 90% in stock
  });
}

export const allProducts = [...mockProducts, ...additionalProducts];

// Export the complete product list as default
export default allProducts;
