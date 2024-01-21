# personal-website

### Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Dependencies](#dependencies)

---

## Project Overview

This personal website is designed to showcase my skills, projects, and personal information in an organized and visually appealing manner. Written with react and javasccript, this ensures a dynamic and responsive user interface, while Node.js powers the backend for handling server-side functionalities. The overall template
for this site was forked from <https://github.com/shloksomani/react-portfolio>.

---

## Features

- **Home:** Display an interesting design and basic information.
- **About Me:** Display details about my personal life and interests.
- **Career History:** Display my working history, skills and achievements.
- **Projects:** Display my personal coding projects.
- **Contact Form:** Allow visitors to reach out to me easily, without exposing my email.

---

## Installation

Follow these steps to set up the project locally:

Run the following commands:

## Usage

### Development

To start developement on this project follow the commands below. They will have you clone the repo, install the neccessary node modules,
and start the development server.

```bash
git clone \<repo-link\>
cd \<git hub repo\>
npm install
cd web-app
npm start
```

When the server is up and running, visit <http://localhost:3000> to view your website.

### Production

Build the React app and start the production server:

```bash
cd client
npm run build
cd ../server
npm start
```

## Folder Structure

- **src:** Where the source code for the application is stored.
  - **components:** React components for each section of the website.
  - **img:** Where the images used throughout the website are stored.
- **public**  Stores the files that need to be publicly available, such as images, fonts, and other static files.

## Dependencies

- React: Frontend library for building user interfaces.
- Node.js: JavaScript runtime for building scalable server-side applications.
- Other packages can be found in the package.json file.
