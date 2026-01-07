
export const productCategories = [
  "Electronics", "Clothing & Fashion", "Home & Garden", "Sports & Outdoors", 
  "Beauty & Personal Care", "Kitchen & Dining", "Office Supplies", "Books & Media"
];

export const brands = [
  "TechPro", "StyleMax", "ComfortZone", "PowerGear", "EcoLife", "SmartTech", 
  "PremiumPlus", "ActiveLife", "HomeEssentials", "WorkMaster"
];

// Product types with matching images per category
const categoryProducts: Record<string, { name: string; image: string }[]> = {
  "Electronics": [
    { name: "Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
    { name: "Smart Watch", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80" },
    { name: "Bluetooth Speaker", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80" },
    { name: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },
    { name: "Power Bank", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80" },
    { name: "USB Cable", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  ],
  "Clothing & Fashion": [
    { name: "Running Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { name: "Sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80" },
    { name: "Canvas Shoes", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80" },
    { name: "Sport Shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80" },
    { name: "Winter Jacket", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
    { name: "Baseball Cap", image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&q=80" },
  ],
  "Kitchen & Dining": [
    { name: "Coffee Maker", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80" },
    { name: "Blender", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&q=80" },
    { name: "Cooking Pot Set", image: "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?w=400&q=80" },
    { name: "Kitchen Knife Set", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&q=80" },
  ],
  "Sports & Outdoors": [
    { name: "Yoga Mat", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80" },
    { name: "Dumbbell Set", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
    { name: "Water Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    { name: "Fitness Band", image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&q=80" },
  ],
  "Beauty & Personal Care": [
    { name: "Skincare Set", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80" },
    { name: "Makeup Kit", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80" },
    { name: "Perfume", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80" },
  ],
  "Home & Garden": [
    { name: "Plant Pot", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80" },
    { name: "Table Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80" },
    { name: "Throw Pillow", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
  ],
  "Office Supplies": [
    { name: "Notebook Set", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80" },
    { name: "Desk Organizer", image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&q=80" },
    { name: "Pen Set", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
  ],
  "Books & Media": [
    { name: "Novel Collection", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80" },
    { name: "Hardcover Book", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80" },
    { name: "Book Bundle", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80" },
  ],
};

const adjectives = ["Premium", "Professional", "Deluxe", "Ultra", "Pro", "Classic", "Modern", "Eco"];

export const generateProducts = (count: number = 10000) => {
  const products = [];
  
  for (let i = 1; i <= count; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const categoryItems = categoryProducts[category];
    const productItem = categoryItems[Math.floor(Math.random() * categoryItems.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    // Generate realistic price ranges based on category
    let basePrice = 20;
    if (category === "Electronics") basePrice = 60;
    else if (category === "Clothing & Fashion") basePrice = 45;
    else if (category === "Kitchen & Dining") basePrice = 50;
    else if (category === "Sports & Outdoors") basePrice = 35;
    else if (category === "Beauty & Personal Care") basePrice = 30;
    
    const priceMultiplier = 0.5 + Math.random() * 2;
    const price = Number((basePrice * priceMultiplier).toFixed(2));
    
    const hasDiscount = Math.random() > 0.7;
    const originalPrice = hasDiscount ? Number((price * (1.2 + Math.random() * 0.5)).toFixed(2)) : undefined;
    
    const rating = Number((3.5 + Math.random() * 1.5).toFixed(1));
    const reviews = Math.floor(Math.random() * 2000) + 50;
    const inStock = Math.random() > 0.05;
    
    const finalName = `${brand} ${adjective} ${productItem.name}`;
    
    const description = `High-quality ${productItem.name.toLowerCase()} designed for everyday use with premium materials and excellent durability.`;
    
    products.push({
      id: i,
      name: finalName,
      price,
      originalPrice,
      image: productItem.image,
      rating,
      reviews,
      category,
      description,
      inStock
    });
  }
  
  return products;
};

export const enhancedProducts = generateProducts(10000);
export default enhancedProducts;
