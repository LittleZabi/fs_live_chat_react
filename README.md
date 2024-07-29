## Live Chat in React + TypeScript 

This project provides a live chat application built with React and TypeScript ⚛️ . It offers a real-time communication experience for users to interact seamlessly.

**Prerequisites:**

- **Node.js and npm:** Ensure you have Node.js installed (https://nodejs.org/en/download/package-manager). This also includes npm, the Node Package Manager.

**Installation:**

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all required dependencies and libraries. This might take a few minutes depending on your internet speed. ☕️

**Development Mode:**

1. Once the installation is complete, start the project in development mode for live editing using `npm run dev`. This will launch the application in your default browser, usually at http://localhost:3000/. 

**Backend Server Setup:**

**Important:** Ensure your backend server solution (e.g., XAMPP, custom server) is up and running. This allows the live chat functionality to connect and function properly. 

- **XAMPP users:** Start both the Apache and MySQL services within XAMPP to establish a local server environment.

**Backend Configuration:**

- The `live_chat_config.json` file within the project specifies the backend root URL. Edit this file to reflect your actual backend server address, whether it's a local URL like `http://localhost:80/live-chat` or a remote server address like `https://livechat123.com`.

**Making Changes:**

The project follows a component-based structure, allowing you to modify specific sections easily. Feel free to customize the UI and functionality to suit your preferences. 

Here's a breakdown of editing components:

- To update content in the header section, edit the `Header.tsx` file. Add or modify text within the `<header>` tag.
- Once your changes are made, save the file.
- To rebuild the application for a production-ready version, run `npm run build` in your terminal. This creates an optimized build within the `dist` folder.

**Deployment:**

**Production Build:**

The build process generates optimized files placed in the `dist` folder. These are the files you'll deploy to your server environment.

**Deployment Considerations:**

- If you're deploying to a domain name directly (e.g., `http://localhost:80/live-chat` or `https://livechat123.com/live-chat`), you'll need to adjust the path to the `assets` folder within the `index.html` file located in the `dist` folder after building.
   - The default absolute path references the root directory, which might not be ideal for domain-based deployments.
   - To fix this, change occurrences of paths like `/assets/main.js` and `/assets/style.css` to relative paths like `./assets/main.js` and `./assets/style.css`. This ensures the assets are loaded correctly.
- If you're deploying to a root directory (e.g., `http://localhost:80/` or `https://livechat123.com/`), no changes to the `index.html` file are necessary.

**Testing:**

1. Copy the entire contents of the `dist` folder to your server's root directory.
2. Alternatively, if using XAMPP, paste the files into the `htdocs` folder or a dedicated `htdocs/live-chat` folder for better organization.
3. Open your browser and navigate to the deployed URL (e.g., `http://domain.name/live-chat`). Your live chat application should be functional! ✨

**Additional Notes:**

- Feel free to contribute to this project by creating pull requests with your enhancements and bug fixes. 
- Refer to the `CONTRIBUTING.md` file (if present) for more detailed contribution guidelines.

**Happy chatting!**
