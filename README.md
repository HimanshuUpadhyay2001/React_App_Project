NY Times – Most Viewed Articles (React)

A React-based web application that displays the New York Times – Most Viewed Articles using the official NY Times Most Popular API.
The app follows clean architecture principles, uses modern React patterns, and includes search/filter, sortable table, pagination, and clickable article links.

---------------------------------------------------------------------------------------------------------------------------------------  
Features:-

. Fetches Most Viewed Articles from NY Times API.
. Displays articles in a sortable table format.
. Search/filter articles by title, abstract, author, or source.
. Pagination with configurable items per page.
. Table displays the following columns:
    . Title
    . Abstract
    . Type
    . Published Date
    . Byline (Author)
    . Source
    . Updated Time
    . URL (clickable link to the original article)
. Loading & error states handled gracefully.
. Responsive and readable UI.
        
------------------------------------------------------------------------------------------------------------------------------------------
 Architecture & Design Decisions
  UI Architecture Pattern

This project uses a Container / Presentational + Hooks pattern:

src/
 ├── api/                # API communication layer
 ├── hooks/              # Business logic (custom hooks)
 ├── containers/         # Smart components (data fetching)
 ├── components/         # Dumb / presentational components
 ├── pages/              # Page-level components
 ├── styles/             # Centralized styling

benefits:-

   - Separation of concerns
   - Easier testing
   - Scalable structure for future features
   - real-world React best practices.
-----------------------------------------------------------------------------------------------------------------------------------------------
 Tech Stack:-

   - React 18
   - Axios – API requests
   - Jest + React Testing Library – Unit testing
   - Cypress – End-to-end UI testing
   - ES6+ JavaScript
   - CSS (modular & reusable)


   API Configuration:-
   -  Get an API Key

    Sign up at:
     https://developer.nytimes.com/get-started

    Enable: Most Popular API

   Environment Variable Setup:-
      Create a .env file inside src/:
         REACT_APP_NYTIMES_API_KEY=your_api_key_here

-------------------------------------------------------------------------------------------------------------------------------------------------
Running the Application:-
Install dependencies
-npm install

Start the app
-npm start

App runs at:
http://localhost:3000


End-to-End Testing (Cypress)
 -npx cypress open

What Cypress Tests Cover:-

    Homepage loads successfully
    Articles are rendered from API
    Titles and links are visible
    API request is intercepted and validated.

-------------------------------------------------------------------------------------------------------------------------------------------------
 Object-Oriented & React Practices (Assessment Mapping):-

| Requirement      | How It’s Met                            |
| ---------------- | --------------------------------------- |
| OOP Principles   | Components encapsulate responsibility   |
| ES6+             | Arrow functions, destructuring, modules |
| UI Architecture  | Container + Presentational + Hooks      |
| State Management | Custom hooks (`useArticles`)            |
| Unit Tests       | Jest + RTL                              |
| UI Tests         | Cypress                                 |
| Clean Code       | Small, reusable components              |
| README           | Complete setup, testing, scripts        |

Features in Detail
1. Search / Filter
   Filter articles by title, abstract, author, or source.
   Works live as you type in the search input.
2. Sortable Table
   Click on any table header to sort ascending/descending.
   Supports sorting by all displayed columns.
3. Pagination
   Configurable items per page (default: 5).
   Navigate pages using Previous / Next buttons.
   Shows current page number and total pages.
4. Article URLs
   Clickable link in the “URL” column.
   Opens the full article in a new tab.

Styles (Highlights)
 . Table borders added for better readability.
 . Hover effect on table rows.
 . URL column styled to look like a link (Read).
 . Search input styled for usability.
 . Pagination buttons styled and disabled state handled.


