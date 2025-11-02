export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
}

export const mockProducts: Product[] = [
  // Uzbek cuisine (curated, reliable images)
  {
    id: "UZ1",
    name: "Palov (Osh)",
    description: "Guruch, sabzi, go'sht va ziravorlardan tayyorlangan milliy taom",
    price: 12.99,
    category: "Uzbek",
    image_url:
      "https://www.tasteatlas.com/images/dishes/26b4e8d361794b9fbd15c29e54807c76.jpg",
  },
  {
    id: "UZ2",
    name: "Lag'mon",
    description: "Qo'l bilan cho'zilgan ugra va go'shtli-sabzavotli sous",
    price: 11.49,
    category: "Uzbek",
    image_url:
      "https://i.ytimg.com/vi/2WQYgVPlZy4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCce81HNPOF8vmWqjU30mQw5kSOwQ",
  },
  {
    id: "UZ3",
    name: "Manti",
    description: "Bug'da pishirilgan katta chuchvara, go'sht va piyoz bilan",
    price: 10.99,
    category: "Uzbek",
    image_url:
      "https://people-travels.com/storage/images/sights/uzbek-manti.jpg",
  },
  {
    id: "UZ4",
    name: "Somsa",
    description: "Tandirda pishirilgan qatlamli somsa",
    price: 4.49,
    category: "Uzbek",
    image_url:
      "https://ifazo.uz/wp-content/uploads/2024/10/photo_2024-10-29_11-32-26.jpg",
  },
  {
    id: "UZ5",
    name: "Shurva (Shurpa)",
    description: "Sabzavotli va go'shtli sho'rva",
    price: 7.99,
    category: "Uzbek",
    image_url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbdv4ZeiafWZESZgA6I2gkJ6-T3Ycbarr-mprUc1KN341-bANWaX5cZ_EP4eL0fBMlW9qnqMN6HfAILfqTImKzCNFsMFGdIyeizY5kr9M9YErpao_d3QdUcwBmd0jtTbm8t5PmfVRaQ8gL/w1200-h630-p-k-no-nu/Tovuq+shurva.JPG",
  },
  {
    id: "UZ6",
    name: "Chuchvara",
    description: "Kichik chuchvaralar sho'rvada",
    price: 8.49,
    category: "Uzbek",
    image_url:
      "https://i.ytimg.com/vi/J1ybJ5jlwrQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARGLWdlmxY6OVcoRYNIgPl7f8v8A",
  },

  // Turkish cuisine (curated)
  {
    id: "TR1",
    name: "Döner Kebab",
    description: "Yupqa non ichida döner, sabzavot va sos",
    price: 9.99,
    category: "Turkish",
    image_url:
      "https://adventure.com/wp-content/uploads/2023/06/Hero-Doner-kebab-Germany-sylwia-pietruszka-n5sElcWfebg-unsplash-scaled.jpg",
  },
  {
    id: "TR2",
    name: "İskender Kebab",
    description: "Döner, yogurt va pomidorli sos, non bo'laklari ustida",
    price: 13.49,
    category: "Turkish",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/%C4%B0skender_Kebap.jpg",
  },
  {
    id: "TR3",
    name: "Lahmacun",
    description: "Yupqa xamir ustida qiymali aralashma",
    price: 6.99,
    category: "Turkish",
    image_url:
      "https://www.mekkafood.com/images/1000x500/pui0411210978_3.jpg",
  },
  {
    id: "TR4",
    name: "Pide",
    description: "Turkcha pitsa (qayiq non)",
    price: 9.49,
    category: "Turkish",
    image_url:
      "https://www.fuegowoodfiredovens.com/wp-content/uploads/2024/08/turkish-cheese-pide.jpeg",
  },
  {
    id: "TR5",
    name: "Köfte",
    description: "Turkcha kotletlar",
    price: 10.49,
    category: "Turkish",
    image_url:
      "https://www.worldfoodstory.co.uk/wp-content/uploads/2019/08/DSC_0226.jpg",
  },
  {
    id: "TR6",
    name: "Baklava",
    description: "Yong'oq va shirin sirop bilan qatlamli desert",
    price: 5.99,
    category: "Desserts",
    image_url:
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/03/14/190495.jpg",
  },
  {
    id: "TR7",
    name: "Künefe",
    description: "Pishloqli shirinlik, sirop bilan",
    price: 7.49,
    category: "Desserts",
    image_url:
      "https://www.chefturko.com/wp-content/uploads/2024/04/turkish-kunefe-recipe.webp",
  },
  {
    id: "TR8",
    name: "Ayran",
    description: "Sovuq yogurt ichimligi",
    price: 2.49,
    category: "Beverages",
    image_url:
      "https://bakkali.app/cdn/shop/collections/Ayran1-be64bf78.jpg?v=1713553558&width=1296",
  },
  {
    id: "TR9",
    name: "Turkcha choy",
    description: "Qora choy, stakanlarda",
    price: 1.49,
    category: "Beverages",
    image_url:
      "https://xabar.uz/static/uploads/74/720__LGSyQS0N7VB2r8JGaC1p6l3Jeja1fGLB.jpg",
  },

  // European classics (curated)
  {
    id: "EU1",
    name: "Beef Stroganoff",
    description: "Mol go'shti bo'laklari smetana sousida",
    price: 18.99,
    category: "European",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Beef_Stroganoff.jpg",
  },
  {
    id: "EU2",
    name: "Paella",
    description: "Ispan guruchi dengiz mahsulotlari bilan",
    price: 19.99,
    category: "European",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Paella-mixta.jpg",
  },
  {
    id: "EU3",
    name: "Chicken Schnitzel",
    description: "Yupqa urilgan tovuq go'shti, oltin qovurilgan",
    price: 14.49,
    category: "European",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Wiener_Schnitzel.jpg",
  },
  {
    id: "EU4",
    name: "Tiramisu",
    description: "Mascarpone va kofeli pechenye qatlamlari",
    price: 6.99,
    category: "Desserts",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Tiramisu_-_Raffaele_Diomede.jpg",
  },
  {
    id: "EU5",
    name: "Crème Brûlée",
    description: "Vanilli krem ustida karamel qobig'i",
    price: 7.49,
    category: "Desserts",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cr%C3%A8me_br%C3%BBl%C3%A9e.jpg",
  },
  // Appetizers
  {
    id: "1",
    name: "Bruschetta al Pomodoro",
    description: "Crispy bread topped with fresh tomatoes, garlic, and basil",
    price: 8.99,
    category: "Appetizers",
    image_url:
      "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2024/08/bruschette-al-pomodoro-still-life.jpg",
  },
  {
    id: "2",
    name: "Shrimp Calamari",
    description: "Golden fried calamari with spicy marinara sauce",
    price: 12.99,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1599599810694-b3fa3a51b5a9?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Mozzarella Sticks",
    description: "Breaded and fried mozzarella with marinara dipping sauce",
    price: 7.99,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1615299002651-688a8b90ef5b?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and fresh parsley",
    price: 5.99,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1599599810828-78d7cb2d12f5?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    name: "Chicken Wings",
    description: "Spicy buffalo wings with blue cheese dip",
    price: 10.99,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1535727066051-a01e0a06a565?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Spinach Artichoke Dip",
    description:
      "Creamy dip with fresh spinach and artichoke, served with tortilla chips",
    price: 9.99,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },

  // Main Course
  {
    id: "7",
    name: "Grilled Salmon Fillet",
    description:
      "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
    price: 28.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
  {
    id: "8",
    name: "Ribeye Steak",
    description:
      "Prime 12oz ribeye with garlic mashed potatoes and grilled asparagus",
    price: 32.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop",
  },
  {
    id: "9",
    name: "Chicken Parmesan",
    description: "Breaded chicken breast with marinara and melted mozzarella",
    price: 19.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
  },
  {
    id: "10",
    name: "Beef Tenderloin",
    description:
      "Tender beef with red wine reduction and roasted root vegetables",
    price: 35.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
  {
    id: "11",
    name: "Seafood Paella",
    description: "Saffron rice with shrimp, mussels, and clams",
    price: 26.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1555939594-58d7cb561e1e?w=400&h=300&fit=crop",
  },
  {
    id: "12",
    name: "Lamb Chops",
    description: "Herb-crusted lamb chops with mint jelly and roasted potatoes",
    price: 29.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
  {
    id: "13",
    name: "Vegetarian Pasta",
    description: "Penne with fresh vegetables in a light olive oil sauce",
    price: 16.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1558521132-ae8b6efb77f0?w=400&h=300&fit=crop",
  },
  {
    id: "14",
    name: "Duck à l'Orange",
    description: "Roasted duck breast with orange reduction and wild rice",
    price: 31.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
  {
    id: "15",
    name: "Lobster Tail",
    description: "Grilled lobster tail with garlic butter and asparagus",
    price: 38.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1623250802795-b1a7e8b0e5be?w=400&h=300&fit=crop",
  },

  // Desserts
  {
    id: "16",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 9.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  },
  {
    id: "17",
    name: "Tiramisu",
    description: "Italian dessert with mascarpone, coffee, and cocoa",
    price: 8.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop",
  },
  {
    id: "18",
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 8.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1551632706-5cc5c028cc5d?w=400&h=300&fit=crop",
  },
  {
    id: "19",
    name: "Crème Brûlée",
    description: "Silky custard with caramelized sugar top",
    price: 9.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1470124566160-f8033f1611e5?w=400&h=300&fit=crop",
  },
  {
    id: "20",
    name: "Panna Cotta",
    description: "Smooth Italian cream dessert with raspberry sauce",
    price: 8.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
  },
  {
    id: "21",
    name: "Fruit Tart",
    description: "Crispy pastry with pastry cream and fresh berries",
    price: 10.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1535920527894-b8072deb8f12?w=400&h=300&fit=crop",
  },

  // Beverages
  {
    id: "22",
    name: "Espresso",
    description: "Rich, bold espresso shot",
    price: 3.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  },
  {
    id: "23",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    id: "24",
    name: "Iced Coffee",
    description: "Chilled coffee over ice with cream",
    price: 4.49,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop",
  },
  {
    id: "25",
    name: "Fresh Lemonade",
    description: "Homemade lemonade with fresh lemons",
    price: 3.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1583792450613-c24ca199e601?w=400&h=300&fit=crop",
  },
  {
    id: "26",
    name: "Smoothie - Berry Blast",
    description: "Mixed berries, yogurt, and honey",
    price: 6.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=400&h=300&fit=crop",
  },
  {
    id: "27",
    name: "House Wine - Red",
    description: "Full-bodied red wine by the glass",
    price: 7.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=300&fit=crop",
  },
  {
    id: "28",
    name: "House Wine - White",
    description: "Crisp white wine by the glass",
    price: 7.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=300&fit=crop",
  },
  {
    id: "29",
    name: "Craft Beer",
    description: "Local microbrewery IPA",
    price: 6.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1608270861620-7c40f7ce4b00?w=400&h=300&fit=crop",
  },
  {
    id: "30",
    name: "Bottled Water",
    description: "Sparkling or still water",
    price: 2.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1535950713f2-0f03d92fa3fe?w=400&h=300&fit=crop",
  },

  // Fast Food
  {
    id: "31",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty, cheddar, pickles, and special sauce",
    price: 9.49,
    category: "Fast Food",
    image_url:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
  },
  {
    id: "32",
    name: "Double Beef Burger",
    description: "Two beef patties with American cheese and caramelized onions",
    price: 11.99,
    category: "Fast Food",
    image_url:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
  },
  {
    id: "33",
    name: "Chicken Nuggets (10pc)",
    description: "Crispy chicken bites with dipping sauces",
    price: 7.49,
    category: "Fast Food",
    image_url:
      "https://images.unsplash.com/photo-1598124146163-231c0b39b4f4?w=400&h=300&fit=crop",
  },
  {
    id: "34",
    name: "Crispy Fries",
    description: "Golden fries with sea salt",
    price: 3.49,
    category: "Sides",
    image_url:
      "https://images.unsplash.com/photo-1550547660-1d9d8f2f9a5f?w=400&h=300&fit=crop",
  },
  {
    id: "35",
    name: "Loaded Fries",
    description: "Cheddar, bacon bits, green onion, ranch",
    price: 6.99,
    category: "Sides",
    image_url:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
  },

  // Pizza
  {
    id: "36",
    name: "Margherita Pizza",
    description: "San Marzano tomatoes, fresh mozzarella, basil",
    price: 13.99,
    category: "Pizza",
    image_url:
      "https://images.unsplash.com/photo-1541745537413-b804b0f9f9cc?w=400&h=300&fit=crop",
  },
  {
    id: "37",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni and mozzarella",
    price: 14.99,
    category: "Pizza",
    image_url:
      "https://images.unsplash.com/photo-1548365328-9f547fb095de?w=400&h=300&fit=crop",
  },
  {
    id: "38",
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, BBQ sauce, red onion, cilantro",
    price: 15.99,
    category: "Pizza",
    image_url:
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2b?w=400&h=300&fit=crop",
  },
  {
    id: "39",
    name: "Veggie Supreme Pizza",
    description: "Bell peppers, olives, onions, mushrooms, tomatoes",
    price: 14.49,
    category: "Pizza",
    image_url:
      "https://images.unsplash.com/photo-1544989164-31dc3c645987?w=400&h=300&fit=crop",
  },

  // Sandwiches
  {
    id: "40",
    name: "Club Sandwich",
    description: "Turkey, bacon, lettuce, tomato, mayo on toasted bread",
    price: 10.49,
    category: "Sandwiches",
    image_url:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
  },
  {
    id: "41",
    name: "Grilled Chicken Sandwich",
    description: "Herb grilled chicken, lettuce, tomato, aioli",
    price: 9.99,
    category: "Sandwiches",
    image_url:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop",
  },
  {
    id: "42",
    name: "Philly Cheesesteak",
    description: "Shaved steak, provolone, onions and peppers",
    price: 12.99,
    category: "Sandwiches",
    image_url:
      "https://images.unsplash.com/photo-1550547660-7f2c1c9f8a8b?w=400&h=300&fit=crop",
  },

  // Salads
  {
    id: "43",
    name: "Caesar Salad",
    description: "Romaine, parmesan, croutons, Caesar dressing",
    price: 8.99,
    category: "Salads",
    image_url:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
  },
  {
    id: "44",
    name: "Greek Salad",
    description: "Cucumber, tomato, feta, olives, red onion",
    price: 9.49,
    category: "Salads",
    image_url:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    id: "45",
    name: "Cobb Salad",
    description: "Chicken, avocado, bacon, egg, blue cheese",
    price: 11.49,
    category: "Salads",
    image_url:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
  },

  // Soups
  {
    id: "46",
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with fresh basil",
    price: 6.49,
    category: "Soups",
    image_url:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
  },
  {
    id: "47",
    name: "Chicken Noodle Soup",
    description: "Classic comfort soup with carrots and celery",
    price: 6.99,
    category: "Soups",
    image_url:
      "https://images.unsplash.com/photo-1543353071-087092ec393c?w=400&h=300&fit=crop",
  },
  {
    id: "48",
    name: "Mushroom Soup",
    description: "Creamy soup with sautéed mushrooms and herbs",
    price: 7.49,
    category: "Soups",
    image_url:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=400&h=300&fit=crop",
  },

  // Breakfast
  {
    id: "49",
    name: "Pancakes Stack",
    description: "Fluffy pancakes with maple syrup and butter",
    price: 8.49,
    category: "Breakfast",
    image_url:
      "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&h=300&fit=crop",
  },
  {
    id: "50",
    name: "Omelette Deluxe",
    description: "Three-egg omelette with cheese, ham, and veggies",
    price: 9.49,
    category: "Breakfast",
    image_url:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
  },
  {
    id: "51",
    name: "Avocado Toast",
    description: "Sourdough toast with smashed avocado and chili flakes",
    price: 7.99,
    category: "Breakfast",
    image_url:
      "https://images.unsplash.com/photo-1541516160071-4bb0c5af65b6?w=400&h=300&fit=crop",
  },

  // More Beverages
  {
    id: "52",
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 4.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
  },
  {
    id: "53",
    name: "Matcha Latte",
    description: "Ceremonial grade matcha with milk",
    price: 5.49,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=300&fit=crop",
  },
  {
    id: "54",
    name: "Fresh Orange Juice",
    description: "Cold-pressed oranges",
    price: 4.49,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=300&fit=crop",
  },

  // Sides & Extras
  {
    id: "55",
    name: "Onion Rings",
    description: "Crispy beer-battered onion rings",
    price: 4.99,
    category: "Sides",
    image_url:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
  },
  {
    id: "56",
    name: "Coleslaw",
    description: "Creamy cabbage slaw",
    price: 2.99,
    category: "Sides",
    image_url:
      "https://images.unsplash.com/photo-1568158879083-c1a9f2e3f1f4?w=400&h=300&fit=crop",
  },
  {
    id: "57",
    name: "Garlic Parmesan Wings",
    description: "Crispy wings tossed in garlic parmesan",
    price: 12.49,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
  },

  // Desserts extended
  {
    id: "58",
    name: "Brownie Sundae",
    description: "Warm brownie, vanilla ice cream, chocolate sauce",
    price: 7.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
  },
  {
    id: "59",
    name: "Apple Pie",
    description: "Classic cinnamon apple pie",
    price: 6.49,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop",
  },
  {
    id: "60",
    name: "Gelato Trio",
    description: "Three scoops of assorted gelato",
    price: 6.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
  },

  // More Mains
  {
    id: "61",
    name: "Shrimp Alfredo Pasta",
    description: "Creamy alfredo sauce with sautéed shrimp",
    price: 21.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop",
  },
  {
    id: "62",
    name: "Teriyaki Chicken Bowl",
    description: "Grilled chicken, teriyaki glaze, steamed rice",
    price: 16.99,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
  },
  {
    id: "63",
    name: "Fish and Chips",
    description: "Crispy battered fish with fries and tartar",
    price: 17.49,
    category: "Main Course",
    image_url:
      "https://images.unsplash.com/photo-1617692855027-4384c5f3df6a?w=400&h=300&fit=crop",
  },

  // Beverages extended
  {
    id: "64",
    name: "Milkshake - Vanilla",
    description: "Classic thick vanilla shake",
    price: 5.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
  },
  {
    id: "65",
    name: "Milkshake - Chocolate",
    description: "Rich chocolate milkshake",
    price: 5.99,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1542444459-db63c9f5d1dc?w=400&h=300&fit=crop",
  },
  {
    id: "66",
    name: "Iced Tea",
    description: "Freshly brewed iced tea",
    price: 3.49,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
  },

  // More Fast Food
  {
    id: "67",
    name: "Crispy Chicken Burger",
    description: "Fried chicken breast, lettuce, pickles, spicy mayo",
    price: 10.49,
    category: "Fast Food",
    image_url:
      "https://images.unsplash.com/photo-1550547660-7a2f6c2e1b8f?w=400&h=300&fit=crop",
  },
  {
    id: "68",
    name: "Veggie Burger",
    description: "Grilled veggie patty with avocado and tomato",
    price: 9.49,
    category: "Fast Food",
    image_url:
      "https://images.unsplash.com/photo-1544025162-8e9fef9f0e1f?w=400&h=300&fit=crop",
  },
  {
    id: "69",
    name: "Hot Dog",
    description: "Classic beef hot dog with mustard and ketchup",
    price: 5.49,
    category: "Fast Food",
    image_url:
      "https://images.unsplash.com/photo-1550547660-7aaf9a3a7a8f?w=400&h=300&fit=crop",
  },

  // Extras
  {
    id: "70",
    name: "Mozzarella Garlic Bread",
    description: "Cheesy garlic bread to share",
    price: 6.49,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
  },
  
  // Uzbek Dishes
  {
    id: "71",
    name: "Palov (Osh)",
    description: "Uzbek milliy taomi: guruch, sabzi, go'sht va ziravorlar",
    price: 12.99,
    category: "Uzbek",
    image_url:
      "https://images.unsplash.com/photo-1625944527947-8c3d5f7e2d4d?w=400&h=300&fit=crop",
  },
  {
    id: "72",
    name: "Lag'mon",
    description: "Qo'l bilan cho'zilgan ugra va go'shtli-sabzavotli sous",
    price: 11.49,
    category: "Uzbek",
    image_url:
      "https://images.unsplash.com/photo-1604908554027-7528ac2b4ca0?w=400&h=300&fit=crop",
  },
  {
    id: "73",
    name: "Manti",
    description: "Bug'da pishirilgan katta chuchvara, qo'y go'shti va piyoz bilan",
    price: 10.99,
    category: "Uzbek",
    image_url:
      "https://images.unsplash.com/photo-1598866549481-8b3f1d4f6b1e?w=400&h=300&fit=crop",
  },
  {
    id: "74",
    name: "Somsа",
    description: "Tandirda pishirilgan qatlamli somsa, qo'y go'shti bilan",
    price: 4.49,
    category: "Uzbek",
    image_url:
      "https://images.unsplash.com/photo-1625944789352-8b0a6979b9e1?w=400&h=300&fit=crop",
  },
  {
    id: "75",
    name: "Shurva",
    description: "Sabzavotli va go'shtli quyuq sho'rva",
    price: 7.99,
    category: "Uzbek",
    image_url:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=400&h=300&fit=crop",
  },
  {
    id: "76",
    name: "Chuchvara",
    description: "Kichik chuchvaralar sho'rvada, smetana bilan",
    price: 8.49,
    category: "Uzbek",
    image_url:
      "https://images.unsplash.com/photo-1596568359351-bf3e57f5b9e1?w=400&h=300&fit=crop",
  },

  // Turkish Dishes
  {
    id: "77",
    name: "Döner Kebab",
    description: "Yupqa non ichida doner go'shti, sabzavot va sos",
    price: 9.99,
    category: "Turkish",
    image_url:
      "https://images.unsplash.com/photo-1604908553335-1250a4b130c8?w=400&h=300&fit=crop",
  },
  {
    id: "78",
    name: "İskender Kebab",
    description: "Doner, yog'li sos, yogurt va non bo'laklari bilan",
    price: 13.49,
    category: "Turkish",
    image_url:
      "https://images.unsplash.com/photo-1601050690597-9e4d0d2972d0?w=400&h=300&fit=crop",
  },
  {
    id: "79",
    name: "Lahmacun",
    description: "Yupqa xamir ustida qiymali aralashma, limon va ko'katlar bilan",
    price: 6.99,
    category: "Turkish",
    image_url:
      "https://images.unsplash.com/photo-1617093727343-37b8085a8b22?w=400&h=300&fit=crop",
  },
  {
    id: "80",
    name: "Pide (Qayiq non)",
    description: "Turkcha pitsa: pishloq, mol go'shti yoki sabzavot bilan",
    price: 9.49,
    category: "Turkish",
    image_url:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983b17?w=400&h=300&fit=crop",
  },
  {
    id: "81",
    name: "Köfte",
    description: "Turkcha kotletlar, ziravorli va shirador",
    price: 10.49,
    category: "Turkish",
    image_url:
      "https://images.unsplash.com/photo-1550547660-7f2c1c9f8a8b?w=400&h=300&fit=crop",
  },
  {
    id: "82",
    name: "Baklava",
    description: "Yong'oq va shirin sharbati bilan qatlamli desert",
    price: 5.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1589307004173-3c95204b7f1a?w=400&h=300&fit=crop",
  },
  {
    id: "83",
    name: "Künefe",
    description: "Pishloqli shirinlik, sharbati bilan issiq holatda",
    price: 7.49,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1655476040892-d1a05f728621?w=400&h=300&fit=crop",
  },
  {
    id: "84",
    name: "Ayran",
    description: "Sovuq yogurt ichimligi, tuz bilan",
    price: 2.49,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1515542706656-c5b05c1d2e3f?w=400&h=300&fit=crop",
  },
  {
    id: "85",
    name: "Turkcha choy",
    description: "Qora choy, stakanlarda xizmat qilinadi",
    price: 1.49,
    category: "Beverages",
    image_url:
      "https://images.unsplash.com/photo-1556679343-c7306c2b4531?w=400&h=300&fit=crop",
  },

  // European Dishes
  {
    id: "86",
    name: "Beef Stroganoff",
    description: "Qovurilgan mol go'shti bo'laklari smetana sousida",
    price: 18.99,
    category: "European",
    image_url:
      "https://images.unsplash.com/photo-1543339308-43f2d1c1702b?w=400&h=300&fit=crop",
  },
  {
    id: "87",
    name: "Paella",
    description: "Ispan guruchi, dengiz mahsulotlari va ziravorlar",
    price: 19.99,
    category: "European",
    image_url:
      "https://images.unsplash.com/photo-1543351611-58f69d42e9a5?w=400&h=300&fit=crop",
  },
  {
    id: "88",
    name: "Chicken Schnitzel",
    description: "Yupqa urilgan tovuq go'shti, oltin qizarib qovurilgan",
    price: 14.49,
    category: "European",
    image_url:
      "https://images.unsplash.com/photo-1604908176203-9a2fd56a67a3?w=400&h=300&fit=crop",
  },
  {
    id: "89",
    name: "Tiramisu",
    description: "Mascarpone va kofeli namlangan pechenye qatlamlari",
    price: 6.99,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1612198185724-95f2d0f1fa89?w=400&h=300&fit=crop",
  },
  {
    id: "90",
    name: "Crème Brûlée",
    description: "Vanilli krem ustida karamel qobig'i",
    price: 7.49,
    category: "Desserts",
    image_url:
      "https://images.unsplash.com/photo-1590086782957-93c06ef9f4d0?w=400&h=300&fit=crop",
  },
];
