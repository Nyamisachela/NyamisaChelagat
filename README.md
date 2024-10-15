
# Nyamisa Chelagat's Portfolio Project

![License](https://img.shields.io/badge/license-MIT-brightgreen)

## Overview

This repository contains my portfolio project developed as part of the Webstack specialization at ALX. This project serves as a comprehensive showcase of my skills in both front-end and back-end development, highlighting my proficiency with modern web technologies.

## Project Details

- **Project Name:** Portfolio Project
- **Team Members:** Nyamisa Chelagat (Myself)

## Purpose

The purpose of this portfolio project is to:

- Summarize my entire backend specialization journey at ALX.
- Serve as a showcase for potential employers and collaborators.
- Highlight my creativity and technical skills in web development.

## Project Concept

The project involves creating a personal portfolio website that includes:

### Front-End Features

- **Animated Introduction:** A dynamic introduction featuring my name, presented with typing animation.
- **Navigation Buttons:**
  - **About:** A section containing a paragraph about me, my projects, inspirations, and interests.
  - **Projects:** Links to various projects I have completed.
  - **Contact:** A display of my phone number and email address.
- **Featured Projects:** A prominent button in the middle of the page leading to a scrollable section showcasing my current projects with animated thumbnails.
- **Social Media Links:** A footer section containing links to my social media profiles including Twitter, LinkedIn, and Medium.

### Back-End Features

- **API Development:** A RESTful API built with Node.js and Express.js that handles the following functionalities:
  - Fetching project data from the MongoDB database.
  - Allowing users to submit contact inquiries through a form.
  - Storing and retrieving messages in the database.
- **Database Integration:** MongoDB is used for storing user data and project information, enabling dynamic content on the front end.

## Technologies Used

- **Front-End:**
  - React
  - Tailwind CSS
  - Framer Motion
- **Back-End:**
  - Node.js
  - Express.js
  - MongoDB

## Project Structure

The project is structured as follows:

```
NyamisaChelaga/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── tailwind.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── projects.js
│   │   └── contact.js
│   ├── models/
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

### Front-End

1. **Navigate to the Front-End Directory:**
   ```bash
   cd frontend
   ```

2. **Clone the Repository:**
   ```bash
   git clone <https://github.com/Nyamisachela/NyamisaChelagat.git>
   cd frontend
   ```

3. **Install Front-End Dependencies:**
   ```bash
   npm install
   ```

4. **Build CSS with Tailwind:**
   ```bash
   npm run build:css
   ```

5. **Start the Front-End Development Server:**
   ```bash
   npm start
   ```

### Back-End

1. **Navigate to the Back-End Directory:**
   ```bash
   cd backend
   ```

2. **Install Back-End Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the Back-End Server:**
   ```bash
   node server.js
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the ALX community for the support and resources provided during this specialization.
- Special thanks to my Kelvin Mukaria, Kyenpya Gutap, the amazing Kumbi team and ALX mentors for their guidance.

## Contact

- **Email:** [nyamisachelagat@gmail.com]

