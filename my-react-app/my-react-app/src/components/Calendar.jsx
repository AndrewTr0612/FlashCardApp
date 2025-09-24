import './Calendar.css';

const Calendar = () => {
  // Sample restaurant data for each day
  const restaurantsByDay = {
    1: ["McDonald's", "Burger King"],
    2: ["Pizza Hut", "Domino's"],
    3: ["KFC", "Popeyes"],
    4: ["Subway", "Jimmy John's"],
    5: ["Taco Bell", "Chipotle"],
    6: ["Starbucks", "Dunkin'"],
    7: ["Olive Garden", "Red Lobster"],
    8: ["Applebee's", "TGI Friday's"],
    9: ["Chili's", "Outback"],
    10: ["Panda Express", "P.F. Chang's"],
    11: ["Five Guys", "In-N-Out"],
    12: ["Wendy's", "Arby's"],
    13: ["Denny's", "IHOP"],
    14: ["Texas Roadhouse", "LongHorn"],
    15: ["Buffalo Wild Wings", "Hooters"],
    16: ["Panera Bread", "Corner Bakery"],
    17: ["Sonic Drive-In", "Dairy Queen"],
    18: ["Carl's Jr.", "Hardee's"],
    19: ["White Castle", "Krystal"],
    20: ["Cheesecake Factory", "Maggiano's"],
    21: ["Ruth's Chris", "Morton's"],
    22: ["Benihana", "Hibachi Grill"],
    23: ["Sushi Bar", "Ramen House"],
    24: ["Italian Bistro", "French Cafe"],
    25: ["Steakhouse", "Seafood Grill"],
    26: ["Mexican Cantina", "Thai Palace"],
    27: ["Indian Cuisine", "Chinese Garden"],
    28: ["BBQ Pit", "Smokehouse"],
    29: ["Breakfast Diner", "Brunch Spot"],
    30: ["Food Truck", "Local Favorite"]
  };

  // Generate calendar days (simplified 30-day month)
  const renderCalendarDays = () => {
    const days = [];
    for (let day = 1; day <= 30; day++) {
      const restaurants = restaurantsByDay[day] || [];
      days.push(
        <div key={day} className="calendar-day">
          <div className="day-number">{day}</div>
          <div className="restaurants-list">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="restaurant-item">
                {restaurant}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="Calendar">
      <h3>Famous Restaurants Calendar</h3>
      <div className="calendar-grid">
        <div className="weekdays">
          <div className="weekday">Sun</div>
          <div className="weekday">Mon</div>
          <div className="weekday">Tue</div>
          <div className="weekday">Wed</div>
          <div className="weekday">Thu</div>
          <div className="weekday">Fri</div>
          <div className="weekday">Sat</div>
        </div>
        <div className="calendar-days">
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  )
}

export default Calendar