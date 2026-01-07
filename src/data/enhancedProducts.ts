
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

// Working category-specific image URLs
const categoryImages: Record<string, string[]> = {
  "Electronics": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
  ],
  "Clothing & Fashion": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80",
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",
    "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&q=80",
  ],
  "Kitchen & Dining": [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
    "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80",
  ],
  "Sports & Outdoors": [
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    "https://images.unsplash.com/photo-1598136490941-30d885318abd?w=400&q=80",
  ],
  "Beauty & Personal Care": [
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
  ],
  "Home & Garden": [
    "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&q=80",
    "https://images.unsplash.com/photo-1567225477277-c8162eb4991d?w=400&q=80",
    "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80",
  ],
  "Office Supplies": [
    "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
    "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80",
    "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&q=80",
  ],
  "Books & Media": [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80",
  ],
  "Toys & Games": [
    "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&q=80",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80",
  ],
  "Pet Supplies": [
    "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80",
  ],
  "Health & Wellness": [
    "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  ],
  "Jewelry & Accessories": [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80",
  ],
  "Default": [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&q=80",
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
