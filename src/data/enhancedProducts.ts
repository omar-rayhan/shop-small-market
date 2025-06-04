
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
  "Headphones", "T-Shirt", "Watch", "Backpack", "Shoes", "Laptop", "Phone", 
  "Camera", "Sunglasses", "Wallet", "Jacket", "Pants", "Bag", "Bottle", 
  "Book", "Notebook", "Pen", "Mouse", "Keyboard", "Monitor", "Tablet", 
  "Speaker", "Charger", "Case", "Stand", "Lamp", "Chair", "Desk", "Pillow",
  "Blanket", "Towel", "Cup", "Plate", "Bowl", "Knife", "Fork", "Spoon",
  "Pan", "Pot", "Blender", "Mixer", "Toaster", "Microwave", "Refrigerator",
  "Vacuum", "Iron", "Dryer", "Washer", "Sofa", "Table", "Mirror", "Clock",
  "Frame", "Vase", "Candle", "Plant", "Tool", "Drill", "Hammer", "Screwdriver",
  "Saw", "Wrench", "Pliers", "Ladder", "Paint", "Brush", "Roller", "Bucket",
  "Hose", "Sprinkler", "Mower", "Trimmer", "Shovel", "Rake", "Gloves", "Hat",
  "Scarf", "Belt", "Tie", "Dress", "Skirt", "Shirt", "Sweater", "Coat",
  "Boots", "Sandals", "Sneakers", "Slippers", "Socks", "Underwear", "Bra",
  "Swimwear", "Pajamas", "Robe", "Jewelry", "Ring", "Necklace", "Bracelet",
  "Earrings", "Watch", "Perfume", "Cologne", "Shampoo", "Conditioner", "Soap",
  "Lotion", "Cream", "Serum", "Mascara", "Lipstick", "Foundation", "Powder"
];

export const brands = [
  "TechPro", "StyleMax", "ComfortZone", "PowerGear", "EcoLife", "SmartTech", 
  "PremiumPlus", "ActiveLife", "HomeEssentials", "WorkMaster", "PlayTime", 
  "HealthFirst", "BeautyBest", "FashionForward", "SportsPro", "KitchenKing",
  "GardenGuru", "AutoExpert", "BookWorm", "MusicMaker", "TravelReady", 
  "PetPerfect", "BabyBest", "OfficeOptimal", "ArtisticSoul", "CraftyCrafter"
];

const imageUrls = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1506629905877-c19d82d2d5c0?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop"
];

export const generateProducts = (count: number = 10000) => {
  const products = [];
  
  for (let i = 1; i <= count; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const adjective = productAdjectives[Math.floor(Math.random() * productAdjectives.length)];
    const productName = productNames[Math.floor(Math.random() * productNames.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const image = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    
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
      name: `${brand} ${adjective} ${productName}`,
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
