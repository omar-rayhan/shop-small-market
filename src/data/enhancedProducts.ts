
export const productCategories = [
  "Electronics", "Clothing & Fashion", "Home & Garden", "Sports & Outdoors", 
  "Beauty & Personal Care", "Books & Media", "Kitchen & Dining", "Automotive",
  "Health & Wellness", "Toys & Games", "Office Supplies", "Pet Supplies",
  "Jewelry & Accessories", "Art & Crafts", "Musical Instruments", "Baby & Kids",
  "Travel & Luggage", "Grocery & Gourmet", "Industrial & Scientific", "Software"
];

export const productAdjectives = [
  "Premium", "Professional", "Deluxe", "Ultra", "Advanced", "Pro", "Elite", 
  "Standard", "Basic", "Classic", "Modern", "Vintage", "Eco-Friendly", 
  "Smart", "Wireless", "Portable", "Compact", "Heavy-Duty", "Lightweight", 
  "Waterproof", "Durable", "Flexible", "Ergonomic", "High-Performance"
];

export const productNames = [
  "Wireless Headphones", "Bluetooth Speaker", "Smartphone", "Laptop", "Tablet", "Smartwatch", "Camera", "Gaming Mouse", "Mechanical Keyboard", "Monitor",
  "Cotton T-Shirt", "Denim Jeans", "Hoodie", "Sneakers", "Dress", "Jacket", "Pants", "Skirt", "Blouse", "Boots",
  "Coffee Maker", "Blender", "Toaster", "Air Fryer", "Microwave", "Rice Cooker", "Stand Mixer", "Food Processor", "Slow Cooker", "Espresso Machine",
  "Yoga Mat", "Dumbbells", "Resistance Bands", "Water Bottle", "Running Shoes", "Fitness Tracker", "Protein Shaker", "Exercise Ball", "Jump Rope", "Foam Roller",
  "Face Serum", "Moisturizer", "Sunscreen", "Lipstick", "Foundation", "Mascara", "Shampoo", "Hair Dryer", "Perfume", "Nail Polish",
  "Office Chair", "Desk Lamp", "Notebook", "Pen Set", "Calculator", "Stapler", "File Organizer", "Whiteboard", "Computer Stand", "Printer",
  "Dog Food", "Cat Toy", "Pet Bed", "Leash", "Collar", "Litter Box", "Pet Carrier", "Dog Treats", "Bird Cage", "Fish Tank",
  "Backpack", "Suitcase", "Handbag", "Wallet", "Sunglasses", "Hat", "Scarf", "Belt", "Watch", "Jewelry Box",
  "Board Game", "Puzzle", "Action Figure", "Doll", "Building Blocks", "Remote Control Car", "Stuffed Animal", "Art Supplies", "Musical Instrument", "Educational Toy"
];

export const brands = [
  "TechPro", "StyleMax", "ComfortZone", "PowerGear", "EcoLife", "SmartTech", 
  "PremiumPlus", "ActiveLife", "HomeEssentials", "WorkMaster", "PlayTime", 
  "HealthFirst", "BeautyBest", "FashionForward", "SportsPro", "KitchenKing",
  "GardenGuru", "AutoExpert", "BookWorm", "MusicMaker", "TravelReady", 
  "PetPerfect", "BabyBest", "OfficeOptimal", "ArtisticSoul", "CraftyCrafter"
];

// More diverse and category-specific image URLs
const categoryImages = {
  "Electronics": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop", // headphones
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop", // smartphone
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop", // laptop
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop", // smartwatch
    "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop", // camera
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop", // speaker
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop", // tablet
  ],
  "Clothing & Fashion": [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", // t-shirt
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop", // shoes
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop", // jeans
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop", // dress
    "https://images.unsplash.com/photo-1506629905877-c19d82d2d5c0?w=500&h=500&fit=crop", // jacket
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop", // hoodie
  ],
  "Kitchen & Dining": [
    "https://images.unsplash.com/photo-1556909078-f8c21cd4bf90?w=500&h=500&fit=crop", // coffee maker
    "https://images.unsplash.com/photo-1585515656671-62d5cf5e015a?w=500&h=500&fit=crop", // blender
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop", // kitchen appliance
    "https://images.unsplash.com/photo-1556909078-f8c21cd4bf90?w=500&h=500&fit=crop", // toaster
  ],
  "Sports & Outdoors": [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop", // yoga mat
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop", // fitness equipment
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop", // water bottle
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop", // running shoes
  ],
  "Beauty & Personal Care": [
    "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop", // beauty products
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop", // skincare
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop", // cosmetics
  ],
  "Home & Garden": [
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop", // plant pot
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop", // home decor
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop", // furniture
  ],
  "Office Supplies": [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", // notebook
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=500&fit=crop", // office supplies
    "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=500&h=500&fit=crop", // pen
  ],
  "Default": [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
  ]
};

export const generateProducts = (count: number = 10000) => {
  const products = [];
  
  for (let i = 1; i <= count; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const adjective = productAdjectives[Math.floor(Math.random() * productAdjectives.length)];
    const productName = productNames[Math.floor(Math.random() * productNames.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    
    // Get category-specific images or fallback to default
    const categoryImageSet = categoryImages[category] || categoryImages["Default"];
    const image = categoryImageSet[Math.floor(Math.random() * categoryImageSet.length)];
    
    // Generate realistic price ranges based on category
    let basePrice = 10;
    if (category === "Electronics") basePrice = 50;
    else if (category === "Clothing & Fashion") basePrice = 25;
    else if (category === "Home & Garden") basePrice = 30;
    else if (category === "Sports & Outdoors") basePrice = 40;
    else if (category === "Beauty & Personal Care") basePrice = 20;
    else if (category === "Books & Media") basePrice = 15;
    else if (category === "Kitchen & Dining") basePrice = 35;
    else if (category === "Automotive") basePrice = 80;
    else if (category === "Health & Wellness") basePrice = 45;
    else if (category === "Toys & Games") basePrice = 20;
    
    const priceMultiplier = 0.3 + Math.random() * 3; // 0.3x to 3.3x variation
    const price = Number((basePrice * priceMultiplier).toFixed(2));
    
    // 30% chance of having an original price (discount)
    const hasDiscount = Math.random() > 0.7;
    const originalPrice = hasDiscount ? Number((price * (1.2 + Math.random() * 0.8)).toFixed(2)) : undefined;
    
    // Generate rating between 3.0 and 5.0
    const rating = Number((3 + Math.random() * 2).toFixed(1));
    
    // Generate review count
    const reviews = Math.floor(Math.random() * 5000) + 10;
    
    // 95% chance of being in stock
    const inStock = Math.random() > 0.05;
    
    // Generate more realistic product names
    const productNameVariations = [
      `${brand} ${adjective} ${productName}`,
      `${adjective} ${productName} by ${brand}`,
      `${brand} ${productName} ${adjective}`,
      `${productName} - ${adjective} ${brand}`,
      `${brand} ${productName}`
    ];
    
    const finalName = productNameVariations[Math.floor(Math.random() * productNameVariations.length)];
    
    // Generate description
    const descriptions = [
      `High-quality ${productName.toLowerCase()} designed for everyday use with premium materials and excellent durability.`,
      `Professional-grade ${productName.toLowerCase()} perfect for both beginners and experts looking for reliable performance.`,
      `Innovative ${productName.toLowerCase()} featuring the latest technology and user-friendly design for maximum comfort.`,
      `Eco-friendly ${productName.toLowerCase()} made with sustainable materials without compromising on quality or style.`,
      `Premium ${productName.toLowerCase()} crafted with attention to detail and built to last for years of reliable service.`
    ];
    
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    
    products.push({
      id: i,
      name: finalName,
      price,
      originalPrice,
      image,
      rating,
      reviews,
      category,
      description,
      inStock
    });
  }
  
  return products;
};

// Generate 10,000 products
export const enhancedProducts = generateProducts(10000);
export default enhancedProducts;
