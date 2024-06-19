<h1>📚Bookstore Application📚</h1>
<p>BookStore is a beginner level mern application that provides users with a seamless experience for exploring and purchasing books. The application offers both light and dark modes to enhance user experience and is designed to ensure that only authenticated users can access the complete range of features, including viewing all the books and adding books to their cart.</p>
<h2>Features</h2>
<ul>
<li> User Authentication: Only authenticated users can view detailed information about books and add them to their cart.</li>
<li> Responsive Design: The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.</li>
<li>Light and Dark Modes: Users can switch between light and dark themes for a comfortable reading experience.</li>
<li>Add to Cart: Select books and add them to your cart for purchase.</li>
<li>Book Categories: Browse books across various categories including Science Fiction, Literature, Romance, and more.</li>
<li>Sticky Navbar: The navbar remains accessible at the top of the screen for easy navigation.</li>
<li>Free Books: Access a selection of free books available for all users.</li>
</ul>

## TechStack
  ## Frontend 
   <ul>
     <li>React vite</li>
     <li>Tailwind css</li>
     <li>DaisyUI</li>
   </ul>
   
   ## Backend
   <ul>
     <li>Nodejs</li>
     <li>Express</li>
     <li>Mongoose</li>
     <li>Database:Mongodb</li>
   </ul>

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

```bash
https://github.com/Shreya-Joshi23/BookStore-Application---MERN.git
```
2. Navigate to the server directory
  ```bash
  cd server
  ```
3. Create a .env file and add the following environment variables:
  ```bash
  port=4000
  mongoUri="mongodb+srv://<yourusername>:<tourpassword>@cluster0.i8qwwzn.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=Cluster0"
  ACCESS_SECRET_TOKEN="Your secret token"
  ```
4. Install dependencies using npm:
  ```bash
  npm install
  ```
5. Navigate to the client directory
   ```bash
   cd client
   ```
6. Create a .env file and add the following environment variables:
  ```bash
  VITE_REACT_SERVICE_ID='Your emailjs serviceId'
  VITE_REACT_TEMPLATE_ID='Your emailjs templateId'
  VITE_REACT_API_KEY='Your emailjs Key'
  ```
7. Run npm install to install dependencies for the client
  ```bash
  npm install
  ```

## Usage
1. Start the server: npm run server (inside the server directory)
   ```bash
   npm run server
   ```
3. Start the client: npm run dev (inside the client directory)
   ```bash
   npm run dev
   ```

The application should now be running at http://localhost:5173.

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request.
   

