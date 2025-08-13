# MERN-ThinkBoard

**MERN-ThinkBoard** is a full-stack note-taking web application built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). This project was developed as part of my learning journey to master the MERN stack, following the tutorial by [freeCodeCamp.org](https://www.freecodecamp.org/).

## Tutorial Reference

This project is based on the YouTube tutorial:  
[Learn the MERN Stack – Full Course](https://youtu.be/F9gB5b4jgOI?si=Mso288SHwy7-7i9t) by freeCodeCamp.org

## Tech Stack

- **Frontend**: React  
- **Backend**: Node.js, Express.js(V4.18.2)  
- **Database**: MongoDB with Mongoose  
- **Tools**: Git, GitHub, Postman

## Features

- Add, edit, and delete notes  
- Persistent data storage using MongoDB  
- RESTful API integration  
- Responsive and clean UI  
- Modular and scalable code structure

## Purpose

This project was built to gain hands-on experience with full-stack development and to understand how frontend and backend technologies work together in a real-world application.

## Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-thinkboard.git
2.create .env file inside backend
3.includ the details mention below
      - MONGO_URL = ***_{create a database in https://www.mongodb.com/ and provide it URL }
      - PORT = 5001
      - UPSTASH_REDIS_REST_URL =*** {create database in https://upstash.com/ for free and include provided REST_url}
      - UPSTASH_REDIS_REST_TOKEN =***{include provided rest_token}
      - NODE_ENV = development
4. Run the command "npm run build" inside ../MERN-ThinkBoard>
5. Run the command "npm run start" inside ../MERN-ThinkBoard/backend to run the backend>
6. Run the command "npm run dev" inside ../MERN-ThinkBoard/frontend to run the backend>
6.visit http://localhost:5173
