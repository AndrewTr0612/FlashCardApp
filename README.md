# WEB102 Prework - *Sea Monster Crowdfunding*

Submitted by: **Thien An Truong**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

* [X] The introduction section explains the background of the company and how many games remain unfunded.
* [X] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [X] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [X] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [X] **Search Functionality** - Users can search for specific games by name or description
* [X] **Fixed Navigation Bar** - Smooth scrolling navigation to different sections (Welcome, Stats, Games)
* [X] **Enhanced Visual Design** - Modern card layouts with gradients, shadows, and hover animations
* [X] **Game Details Display** - Each game card shows backers count along with name, description, and image
* [X] **Professional Styling** - Improved buttons, typography, and color scheme
* [X] **Responsive Design** - Better layout that adapts to different screen sizes (4-4-3 game layout)
* [X] **Interactive Elements** - Hover effects on cards and buttons with smooth transitions
* [X] **Clear Search** - Ability to clear search results and return to all games
* [X] **No Results Handling** - Informative message when search yields no results
* [X] **Enter Key Search** - Search can be triggered by pressing Enter in the search box

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Technical Implementation

### Core Features Completed:
- **Data Management**: Successfully imported and parsed JSON game data
- **DOM Manipulation**: Dynamic game card generation and display
- **Array Methods**: Used `reduce()` for statistics, `filter()` for game filtering, `sort()` for top games
- **Template Literals**: Dynamic HTML generation with game information
- **Event Handling**: Button clicks, search input, and keyboard events
- **Destructuring & Spread**: Used to extract top 2 games from sorted array

### Statistics Calculated:
- **Total Individual Contributions**: 19,187 backers across all games
- **Total Amount Raised**: $799,853 across all games  
- **Total Games**: 11 games in the platform
- **Unfunded Games**: 7 games still seeking funding
- **Funded Games**: 4 games that met or exceeded their goals

### Top Funded Games:
1. **🥇 Zoo Tycoon: The Board Game** - $442,602 raised
2. **🥈 How to Read Minds 2 Kit** - $147,975 raised

## Notes

### Challenges Encountered:
- **Flexbox Layout**: Implementing the specific 4-4-3 game card layout required careful CSS adjustments
- **Data Filtering**: Ensuring the filter functions work correctly with different game states (funded vs unfunded)
- **Search Implementation**: Creating a robust search that works across both game names and descriptions
- **Responsive Design**: Making the layout work well on different screen sizes while maintaining the desired arrangement
- **CSS Transitions**: Implementing smooth animations without affecting performance

### Solutions Implemented:
- Used CSS Grid and Flexbox combination for responsive layout
- Implemented proper event handling for search functionality
- Created reusable functions for game display and DOM manipulation
- Added proper error handling for empty search results

## License

    Copyright 2025 Thien An Truong

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
