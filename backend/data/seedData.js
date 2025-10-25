const Gift = require('../models/GiftModel');

const sampleGifts = [
  // Electronics - Under ₹1,000
  {
    title: "Basic Bluetooth Earbuds",
    description: "Affordable wireless earbuds with decent sound quality and 6-hour battery life.",
    price: 799,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    tags: ["tech", "music", "wireless"],
    rating: 4.2,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=bluetooth+earbuds+under+1000"
  },
  {
    title: "Phone Stand with Wireless Charging",
    description: "Adjustable phone stand with wireless charging capability for desk use.",
    price: 899,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    category: "Electronics",
    tags: ["tech", "charging", "accessories"],
    rating: 4.3,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=phone+stand+wireless+charging"
  },
  
  // Electronics - ₹1,000-₹2,500
  {
    title: "Portable Bluetooth Speaker",
    description: "Compact wireless speaker with 360-degree sound and waterproof design.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    category: "Electronics",
    tags: ["tech", "music", "portable"],
    rating: 4.4,
    platform: "Myntra",
    platformLink: "https://www.myntra.com/audio-speakers"
  },
  {
    title: "Smart Fitness Band",
    description: "Basic fitness tracker with heart rate monitoring and step counting.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Electronics",
    tags: ["tech", "fitness", "health"],
    rating: 4.1,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=fitness+band"
  },
  
  // Electronics - ₹2,500-₹5,000
  {
    title: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    tags: ["tech", "music", "wireless"],
    rating: 4.5,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Wireless-Headphones/dp/B0863TXGM3"
  },
  {
    title: "Gaming Mouse",
    description: "High-precision gaming mouse with RGB lighting and programmable buttons.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1572536147248-e88c1284c9c4?w=400",
    category: "Electronics",
    tags: ["gaming", "tech", "accessories"],
    rating: 4.6,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/logitech-g402-hyperion-fury-wired-optical-gaming-mouse/p/itmf3y7h5z9hqjhz"
  },
  {
    title: "Gaming Headset",
    description: "Professional gaming headset with 7.1 surround sound and noise-canceling microphone.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1572536147248-e88c1284c9c4?w=400",
    category: "Electronics",
    tags: ["gaming", "tech", "audio"],
    rating: 4.7,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/Razer-Kraken-Gaming-Headset-Console/dp/B07Q7VQ9K8"
  },
  {
    title: "Gaming Keyboard",
    description: "Mechanical gaming keyboard with RGB backlighting and anti-ghosting technology.",
    price: 4499,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    category: "Electronics",
    tags: ["gaming", "tech", "keyboard"],
    rating: 4.5,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/redragon-k552-rgb-mechanical-gaming-keyboard/p/itmfb8c8c8c8c8c8"
  },
  {
    title: "Gaming Controller",
    description: "Wireless gaming controller compatible with PC, mobile, and gaming consoles.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1606144042614-2412a0c2a92c?w=400",
    category: "Electronics",
    tags: ["gaming", "tech", "controller"],
    rating: 4.4,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/Xbox-Wireless-Controller-Carbon-Black/dp/B07XJ8C8F5"
  },
  {
    title: "Gaming Chair",
    description: "Ergonomic gaming chair with RGB lighting and adjustable height for long gaming sessions.",
    price: 8999,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    category: "Electronics",
    tags: ["gaming", "chair", "comfort"],
    rating: 4.6,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/redragon-gaming-chair-rgb-led/p/itmfb8c8c8c8c8c8"
  },
  {
    title: "Gaming Desk Mat",
    description: "Large gaming desk mat with RGB lighting and smooth surface for mouse movement.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    category: "Electronics",
    tags: ["gaming", "desk", "accessories"],
    rating: 4.3,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/gaming-desk-mat-rgb-led/dp/B08N5WRWNW"
  },
  
  // Electronics - ₹5,000-₹10,000
  {
    title: "Smart Fitness Watch",
    description: "Advanced smartwatch with GPS, heart rate monitoring, and 7-day battery life.",
    price: 7999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Electronics",
    tags: ["tech", "fitness", "smartwatch"],
    rating: 4.7,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=smart+fitness+watch"
  },
  {
    title: "Tablet for Kids",
    description: "Educational tablet with parental controls and kid-friendly content.",
    price: 6999,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    category: "Electronics",
    tags: ["tech", "kids", "educational"],
    rating: 4.4,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=kids+tablet"
  },
  // Fashion - Under ₹1,000
  {
    title: "Cotton T-Shirt Set",
    description: "Comfortable cotton t-shirts in various colors, perfect for casual wear.",
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Fashion",
    tags: ["fashion", "clothing", "casual"],
    rating: 4.2,
    platform: "Myntra",
    platformLink: "https://www.myntra.com/tshirts"
  },
  {
    title: "Stylish Sunglasses",
    description: "UV protection sunglasses with trendy frame design for everyday use.",
    price: 899,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    category: "Fashion",
    tags: ["fashion", "sunglasses", "accessories"],
    rating: 4.1,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=sunglasses+under+1000"
  },
  
  // Fashion - ₹1,000-₹2,500
  {
    title: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots and coin compartment.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Fashion",
    tags: ["fashion", "leather", "accessories"],
    rating: 4.4,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=leather+wallet"
  },
  {
    title: "Silk Scarf",
    description: "Beautiful hand-painted silk scarf perfect for adding elegance to any outfit.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400",
    category: "Fashion",
    tags: ["fashion", "silk", "accessories"],
    rating: 4.5,
    platform: "Myntra",
    platformLink: "https://www.myntra.com/scarves"
  },
  
  // Fashion - ₹2,500-₹5,000
  {
    title: "Designer Handbag",
    description: "Elegant leather handbag perfect for any occasion, available in multiple colors.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Fashion",
    tags: ["fashion", "leather", "accessories"],
    rating: 4.6,
    platform: "Ajio",
    platformLink: "https://www.ajio.com/search?text=handbag"
  },
  {
    title: "Premium Watch",
    description: "Stainless steel watch with genuine leather strap and water resistance.",
    price: 4499,
    image: "https://images.unsplash.com/photo-1523170335258-f5b6c6e8e4c4?w=400",
    category: "Fashion",
    tags: ["fashion", "watch", "accessories"],
    rating: 4.7,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/Fossil-Gen-5-Smartwatch-Smoke/dp/B07VXCW7F8"
  },

  // Personalized - Under ₹1,000
  {
    title: "Custom Keychain",
    description: "Personalized keychain with name engraving, perfect for daily use.",
    price: 299,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    category: "Personalized",
    tags: ["personalized", "keychain", "custom"],
    rating: 4.3,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=personalized+keychain"
  },
  {
    title: "Photo Mug",
    description: "Custom photo mug with your favorite picture, microwave and dishwasher safe.",
    price: 599,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
    category: "Personalized",
    tags: ["personalized", "mug", "custom"],
    rating: 4.4,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=photo+mug"
  },
  
  // Personalized - ₹1,000-₹2,500
  {
    title: "Personalized Photo Frame",
    description: "Beautiful wooden frame with custom engraving for your special memories.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
    category: "Personalized",
    tags: ["personalized", "memories", "home"],
    rating: 4.8,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=personalized+photo+frame"
  },
  {
    title: "Custom Name Necklace",
    description: "Personalized gold-plated necklace with custom name or word engraving.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
    category: "Personalized",
    tags: ["personalized", "jewelry", "custom"],
    rating: 4.6,
    platform: "Myntra",
    platformLink: "https://www.myntra.com/jewellery"
  },
  
  // Personalized - ₹2,500-₹5,000
  {
    title: "Engraved Wooden Box",
    description: "Handcrafted wooden keepsake box with personalized engraving and velvet lining.",
    price: 3299,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    category: "Personalized",
    tags: ["personalized", "wooden", "keepsake"],
    rating: 4.7,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=personalized+wooden+box"
  },
  {
    title: "Custom Portrait Art",
    description: "Hand-drawn portrait from your photo, perfect for gifting special memories.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
    category: "Personalized",
    tags: ["personalized", "art", "portrait"],
    rating: 4.9,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=custom+portrait"
  },

  // Cooking - Under ₹1,000
  {
    title: "Spice Collection Box",
    description: "Essential spice collection with 12 different spices in a wooden organizer.",
    price: 799,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
    category: "Cooking",
    tags: ["cooking", "spices", "kitchen"],
    rating: 4.3,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=spice+collection+box"
  },
  {
    title: "Coffee Mug Set",
    description: "Set of 4 ceramic coffee mugs with different designs, perfect for coffee lovers.",
    price: 599,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    category: "Cooking",
    tags: ["cooking", "mugs", "kitchen"],
    rating: 4.2,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=coffee+mug+set"
  },
  
  // Cooking - ₹1,000-₹2,500
  {
    title: "Artisan Coffee Gift Set",
    description: "Premium coffee beans from around the world with a beautiful presentation box.",
    price: 1799,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    category: "Cooking",
    tags: ["coffee", "gourmet", "cooking"],
    rating: 4.6,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=coffee+gift+set"
  },
  {
    title: "Kitchen Knife Set",
    description: "Professional stainless steel knife set with wooden block for home cooking.",
    price: 2299,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    category: "Cooking",
    tags: ["cooking", "knives", "kitchen"],
    rating: 4.5,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=knife+set"
  },
  
  // Cooking - ₹2,500-₹5,000
  {
    title: "Professional Chef Knife Set",
    description: "High-quality stainless steel knife set with wooden block for the cooking enthusiast.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    category: "Cooking",
    tags: ["cooking", "knives", "kitchen"],
    rating: 4.8,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=chef+knife+set"
  },
  {
    title: "Cooking Class Voucher",
    description: "Gift certificate for a hands-on cooking class with professional chefs.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    category: "Cooking",
    tags: ["cooking", "experience", "learning"],
    rating: 4.8,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=cooking+class"
  },

  // Art - Under ₹1,000
  {
    title: "Sketching Pencil Set",
    description: "Professional graphite pencil set with different hardness levels for detailed sketching.",
    price: 399,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
    category: "Art",
    tags: ["art", "sketching", "pencils"],
    rating: 4.4,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=sketching+pencils"
  },
  {
    title: "Watercolor Paint Set",
    description: "Basic watercolor paints with brushes, perfect for beginners and kids.",
    price: 699,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
    category: "Art",
    tags: ["art", "watercolor", "painting"],
    rating: 4.3,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=watercolor+paint"
  },
  
  // Art - ₹1,000-₹2,500
  {
    title: "Art Supplies Kit",
    description: "Complete set of art supplies including brushes, paints, and canvas.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
    category: "Art",
    tags: ["art", "creative", "supplies"],
    rating: 4.6,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=art+supplies+kit"
  },
  {
    title: "Drawing Tablet",
    description: "Basic drawing tablet perfect for digital art and graphic design beginners.",
    price: 2299,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    category: "Art",
    tags: ["art", "digital", "tablet"],
    rating: 4.2,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=drawing+tablet"
  },
  
  // Art - ₹2,500-₹5,000
  {
    title: "Professional Art Kit",
    description: "Complete professional art supplies including premium brushes, paints, and canvas.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
    category: "Art",
    tags: ["art", "creative", "supplies"],
    rating: 4.7,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=professional+art+kit"
  },
  {
    title: "Digital Drawing Tablet Pro",
    description: "Advanced pressure-sensitive drawing tablet for professional digital art.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    category: "Art",
    tags: ["art", "digital", "tablet"],
    rating: 4.6,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=digital+drawing+tablet"
  },

  // Fitness - Under ₹1,000
  {
    title: "Resistance Band Set",
    description: "Complete resistance band set with different resistance levels and accessories.",
    price: 599,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "Fitness",
    tags: ["fitness", "resistance", "workout"],
    rating: 4.5,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=resistance+bands"
  },
  {
    title: "Yoga Mat",
    description: "Non-slip yoga mat perfect for home workouts and yoga sessions.",
    price: 799,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    category: "Fitness",
    tags: ["fitness", "yoga", "health"],
    rating: 4.4,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=yoga+mat"
  },
  
  // Fitness - ₹1,000-₹2,500
  {
    title: "Fitness Tracker",
    description: "Basic fitness tracker with step counting and heart rate monitoring.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "Fitness",
    tags: ["fitness", "tracker", "health"],
    rating: 4.3,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=fitness+tracker"
  },
  {
    title: "Yoga Mat & Accessories",
    description: "Premium yoga mat with carrying strap and resistance bands for home workouts.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    category: "Fitness",
    tags: ["fitness", "yoga", "health"],
    rating: 4.7,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=yoga+mat+accessories"
  },
  
  // Fitness - ₹2,500-₹5,000
  {
    title: "Smart Fitness Watch",
    description: "Advanced fitness watch with GPS, heart rate monitoring, and 7-day battery life.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Fitness",
    tags: ["fitness", "smartwatch", "health"],
    rating: 4.6,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=smart+fitness+watch"
  },
  {
    title: "Adjustable Dumbbells",
    description: "Pair of adjustable dumbbells with multiple weight plates for home gym.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "Fitness",
    tags: ["fitness", "weights", "gym"],
    rating: 4.5,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/amazon-basics-adjustable-dumbbells-40kg/p/itmfb8c8c8c8c8c8"
  },

  // Additional categories
  {
    title: "Gourmet Chocolate Box",
    description: "Luxury assorted chocolates from Belgium in an elegant gift box.",
    price: 899,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400",
    category: "Food",
    tags: ["chocolate", "gourmet", "sweet"],
    rating: 4.9,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=gourmet+chocolate+box"
  },
  {
    title: "Spa Gift Basket",
    description: "Luxurious spa gift basket with bath salts, candles, and skincare products.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "Wellness",
    tags: ["spa", "relaxation", "wellness"],
    rating: 4.5,
    platform: "Nykaa",
    platformLink: "https://www.nykaa.com/search/result/?q=spa+gift+basket"
  },
  {
    title: "Board Game Collection",
    description: "Set of 3 popular board games perfect for family game nights.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400",
    category: "Entertainment",
    tags: ["games", "family", "fun"],
    rating: 4.4,
    platform: "Flipkart",
    platformLink: "https://www.flipkart.com/search?q=board+games"
  },
  {
    title: "Plant Care Kit",
    description: "Everything needed to start a beautiful indoor garden with succulents and tools.",
    price: 799,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    category: "Gardening",
    tags: ["plants", "gardening", "nature"],
    rating: 4.3,
    platform: "Amazon",
    platformLink: "https://www.amazon.in/s?k=plant+care+kit"
  }
];

const seedDatabase = async () => {
  try {
    await Gift.deleteMany({});
    await Gift.insertMany(sampleGifts);
    console.log('Database seeded successfully with sample gifts');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = { seedDatabase, sampleGifts };
