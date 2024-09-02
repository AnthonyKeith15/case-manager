# Case Viewer & Chat Room Application

This repository contains a web application that integrates two key features: a **Case Viewer** and a **Chat Room**. The Case Viewer allows users to browse through different cases, view details about each case, and see information about persons of interest. The Chat Room feature enables real-time communication between users, with messages displayed alongside usernames.

## Features

1. **Case Viewer:**
    - Displays a list of cases, each with a unique case number.
    - Users can click on a "Details" button to view more information about the case in a modal window.
    - Case data is loaded from a JSON file on the server, simulating a database retrieval.
    
2. **Chat Room:**
    - Allows users to enter a username before joining the chat.
    - Users can send messages in real-time, which are broadcast to all connected users.
    - Chat history is retained and displayed to newly connected users.

## Technologies Used

- **Node.js**: JavaScript runtime used for the server.
- **Express.js**: Web framework for Node.js to handle routing and serve files.
- **Socket.IO**: Enables real-time, bidirectional communication between web clients and servers.
- **HTML/CSS/JavaScript**: Front-end technologies used for the user interface.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Git installed for cloning the repository.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AnthonyKeith15/case-manager.git
   cd case-manager
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Ensure the `cases.json` file is present:**
    - The `cases.json` file containing the case data is already included in the repository. You do not need to create it yourself.

4. **Run the application:**

   ```bash
   node server.js
   ```

### Usage

1. Open your web browser and navigate to `http://localhost:3000`.

2. **Case Viewer:**
    - You will see a list of cases. Click on "Details" to view more information about each case.

3. **Chat Room:**
    - Enter your username to join the chat room.
    - Type your message and click "Send" to chat with other users in real-time.
    - To simulate multiple users, open a second browser window or tab and navigate to `http://localhost:3000`. Enter a different username and start chatting. You will see messages appear in real-time across both browser windows.

### Project Structure

- **server.js**: The main server file that handles routing, serves the front-end, and manages WebSocket connections for the chat.
- **index.html**: The front-end HTML file that includes the structure for both the case viewer and chat room.
- **cases.json**: The JSON file that contains case data. This file is included in the repository and simulates a database for this project.
