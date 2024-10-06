
# Blog Web Application

## Overview
This project is a simple blog web application that allows users to create, view, update, and delete blog posts. It was built using **Node.js** with the **Express.js** framework, and **EJS** templating for dynamic rendering of HTML pages. This project is a part of my journey in learning web development.

## Features
- **Create Blog Posts**: Users can add new blog posts with a title and content.
- **View Blog Posts**: All posts can be viewed on the homepage, and individual posts can be viewed on their own pages.
- **Update Blog Posts**: Users can update existing posts by editing the title and content.
- **Delete Blog Posts**: Posts can be deleted from the blog.

## Tech Stack
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web application framework for Node.js.
- **EJS (Embedded JavaScript)**: Template engine for rendering dynamic content.
- **CSS**: Basic styling for the application.
  
## Installation

### Prerequisites
- Ensure you have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).

### Steps
1. Clone the repository.
   ```bash
   git clone https://github.com/Ai31024/MyBlogPage.git
   ```
2. Navigate into the project directory.
   ```bash
   cd MyBlogPage
   ```
3. Install the dependencies.
   ```bash
   npm install
   ```
4. Start the server.
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure
```
├── views
│   ├── index.ejs        # Homepage with list of all blog posts
│   ├── new.ejs          # Form to create a new blog post
│   ├── update.ejs       # Form to update an existing post
│   ├── show.ejs         # Detailed view of a single blog post
│   ├── partials         # Contains partial views like header and footer
├── public               # Contains static files (CSS, images)
├── app.js               # Main server file
└── README.md            # Project documentation
```

## Routes
- **GET /**: Displays the homepage with a list of all blog posts.
- **GET /posts/new**: Displays a form to create a new post.
- **POST /posts/new**: Handles submission of new post data.
- **GET /posts/show/:id**: Displays a single post in detail.
- **POST /posts/update/:id**: Handles the update of a post.
- **POST /posts/delete/:id**: Deletes a specific post.

## Screenshots
*Add screenshots of your app here*

## Future Improvements
- **Database Integration**: Currently, the posts are stored in memory. A future improvement would be to integrate a database (e.g., MongoDB, PostgreSQL) for persistent storage.
- **User Authentication**: Adding authentication features to allow users to sign in and manage their own posts.
- **Styling**: Enhance the user interface with better styling and mobile responsiveness.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Credits
- This project is a part of my udemy course by [Angela Yu](https://github.com/angelabauer)
- The credit goes to [Ai31024](https://github.com/Ai31024) for most of the work.
- A little help for basic CSS styling, writing readme file and general guidance from [ChatGPT](https://chatgpt.com)

---
