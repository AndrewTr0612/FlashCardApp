import './Restaurant.css';

const Restaurant = () => {
  // Famous restaurants data organized by categories with images
  const restaurantsByCategory = {
    "Fast Food": [
      { name: "Burger King", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
      { name: "KFC", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" },
      { name: "Popeyes", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop" },
      { name: "Chipotle", image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=300&h=200&fit=crop" }
    ],
    "Pizza": [
      { name: "Pizza Hut", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop" },
      { name: "Domino's", image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=300&h=200&fit=crop" },
      { name: "Papa John's", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" },
      { name: "Little Caesars", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=200&fit=crop" }
    ],
    "Coffee & Breakfast": [
      { name: "Starbucks", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop" },
      { name: "Dunkin'", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop" },
      { name: "Denny's", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=300&h=200&fit=crop" },
      { name: "IHOP", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=200&fit=crop" },
      { name: "Panera Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop" }
    ],
    "Casual Dining": [
      { name: "Red Lobster", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=200&fit=crop" },
      { name: "Applebee's", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" },
      { name: "TGI Friday's", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop" },
      { name: "Outback", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop" }
    ],
    "Asian Cuisine": [
      { name: "Panda Express", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop" },
      { name: "P.F. Chang's", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop" },
      { name: "Benihana", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop" },
      { name: "Hibachi Grill", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
      { name: "Sushi Bar", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop" },
      { name: "Ramen House", image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=300&h=200&fit=crop" }
    ],
    "Premium Burgers": [
      { name: "Five Guys", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
      { name: "In-N-Out", image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=200&fit=crop" },
      { name: "Wendy's", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop" },
      { name: "Sonic Drive-In", image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=300&h=200&fit=crop" }
    ],
    "Fine Dining": [
      { name: "Ruth's Chris", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop" },
      { name: "Morton's", image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&h=200&fit=crop" },
      { name: "Cheesecake Factory", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop" },
    ],
    "International": [
      { name: "French Cafe", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" },
      { name: "Indian Cuisine", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" },
      { name: "Chinese Garden", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop" }
    ],
    "Specialty": [
      { name: "BBQ Pit", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop" },
      { name: "Smokehouse", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=200&fit=crop" },
      { name: "Steakhouse", image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&h=200&fit=crop" },
      { name: "Seafood Grill", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=200&fit=crop" },
      { name: "Food Truck", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop" },
      { name: "Local Favorite", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" }
    ]
  };

  // Render restaurant categories
  const renderRestaurantCategories = () => {
    return Object.entries(restaurantsByCategory).map(([category, restaurants], categoryIndex) => (
      <div key={categoryIndex} className="restaurant-category">
        <h4 className="category-title">{category}</h4>
        <div className="restaurants-grid">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-card">
              <img 
                src={restaurant.image} 
                alt={restaurant.name}
                className="restaurant-image"
                loading="lazy"
              />
              <div className="restaurant-info">
                <div className="restaurant-name">{restaurant.name}</div>
                <div className="restaurant-rating">⭐ {(4.0 + Math.random()).toFixed(1)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="Restaurant">
      <h3>World's Famous Restaurants Must Eat</h3>
      <p className="restaurant-description">
        Discover the best restaurants across different categories - from fast food favorites to fine dining experiences.
      </p>
      <div className="restaurant-categories">
        {renderRestaurantCategories()}
      </div>
    </div>
  )
}

export default Restaurant