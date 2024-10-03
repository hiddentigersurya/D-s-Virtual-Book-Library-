
# 📚 Virtual Book Library

A **React.js** project that allows users to browse a list of books, view detailed information about each book, and manage their personal library. Users can add and remove books from their library and search books by title, author, or genre. The app also features pop-up notifications for actions such as adding and removing books from the library.

## 🌟 Features
- **Book List**: Browse a list of books with title, author, genre, rating, and cover images.
- **Book Details**: View detailed information about each book including description and publication year.
- **Add to Library**: Add books to a personal library from the Book List or Book Details page.
- **Remove from Library**: Remove books from the personal library.
- **Search**: Filter books by title, author, or genre.
- **Responsive Design**: Fully responsive layout that works across devices (mobile, tablet, desktop).
- **Notifications**: Pop-up notifications (toasts) when books are added or removed from the library.
- **Back Navigation**: Easily navigate back from the Book Details page.
- **Persistent Library**: Library updates across all views in real-time.

## 🚀 Live Demo
[Link to Demo] (Optional if hosted)

## 🛠️ Installation & Setup

Follow the steps below to set up and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/virtual-book-library.git
   cd virtual-book-library
   ```

2. **Install Dependencies**
   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   After installing the dependencies, start the development server:
   ```bash
   npm start
   ```

4. **Open in Browser**
   Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.



## 📂 Project Structure

```bash
src/
│
├── components/           # Reusable components like BookCard, BookList, SearchBar
|   |__ BookCard.css
│   ├── BookCard.js       # Individual book card component
│   ├── BookList.js       # Renders list of books
│   └── SearchBar.js      # Search input component
│
├── context/              # Context API for state management
│   └── BookContext.js    # Manages books, personal library, and state actions
│
├── pages/                # Main pages for routing
│   ├── HomePage.js       # Main book listing page
|   |__ BookDetailsPage.js
│   ├── BookDetailsPage.js # Detailed view of individual book
│   └── MyLibraryPage.js  # Page displaying books in user's library
│
├── data.js               # JSON data with list of books
├── App.js                # Main application component with routing
├── index.js              # Entry point to the React application
├── index.css             # Custom styles and layout
```

## 📚 JSON Data

The library uses static JSON data for the books:

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "rating": 4.7,
    "description": "A novel set in the Jazz Age...",
    "publication_year": 1925,
    "image": "https://example.com/images/great-gatsby.jpg"
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "rating": 4.8,
    "description": "A timeless novel of a child’s moral awakening...",
    "publication_year": 1960,
    "image": "https://example.com/images/to-kill-a-mockingbird.jpg"
  },
  ...
]
```

## 🔧 Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **React Router**: For navigation between pages.
- **Context API**: For global state management across the app.
- **React Toastify**: For displaying pop-up notifications.
- **Bootstrap**: For responsive layout and design.
- **HTML5** and **CSS3**: For structuring and styling the application.

## 📋 Key Features Implemented

1. **Routing**: Navigation between Home, Book Details, and My Library pages using `react-router-dom`.
2. **State Management**: Handled using React's `useState` and `useContext` hooks for seamless global state sharing (Context API).
3. **Reusable Components**: Modular components like `BookCard`, `BookList`, and `SearchBar` for a cleaner and maintainable codebase.
4. **Notifications**: Popup messages (toasts) that provide feedback when users add or remove books from their library.
5. **Error Handling**: Graceful handling of empty libraries or failed searches with user-friendly messages.

## 🔄 Future Enhancements

- **Local Storage**: Persist user’s personal library even after refreshing the page.
- **API Integration**: Connect to a real backend or public API to fetch book data dynamically.
- **User Authentication**: Allow users to sign in and manage their library across devices.
- **Ratings and Reviews**: Allow users to rate and review books in their library.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/virtual-book-library/issues).

1. Fork the project
2. Create a new feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add a new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request


---
