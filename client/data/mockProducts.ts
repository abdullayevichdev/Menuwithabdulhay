export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
}

export const mockProducts: Product[] = [
  // Appetizers
  {
    id: "1",
    name: "Bruschetta al Pomodoro",
    description: "Crispy bread topped with fresh tomatoes, garlic, and basil",
    price: 8.99,
    category: "Appetizers",
    image_url:
      "https://images.unsplash.com/photo-1572695157365-12ec42b04808?w=400&h=300&fit=crop",
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
];
