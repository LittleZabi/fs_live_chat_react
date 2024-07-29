# Live Chat Application

Welcome to the Live Chat application, a project built using React and TypeScript. This guide will walk you through setting up the project on your local machine, running it in development mode, configuring the backend server, making changes to the code, and deploying it to a server.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/). Make sure `npm` (Node Package Manager) is installed alongside it.

## Installation

1. **Clone the Repository**: Start by cloning this repository to your local machine.
   ```bash
   git clone https://github.com/LittleZabi/fs_live_chat_react.git
   ```

2. **Install Dependencies**: Navigate to the project folder and install all necessary dependencies using npm.
   ```bash
   cd live-chat
   npm install
   ```

## Running in Development Mode

To start the project in development mode, execute the following command in your terminal:
```bash
npm run dev
```

This will start a development server and you can view the application in your browser.

## Backend Server Configuration

Ensure your backend server is running. This project uses a PHP and SQL-based backend server. You can use XAMPP or any similar tool to start both the PHP and SQL servers.

1. **Start XAMPP**: Open XAMPP and start the Apache and MySQL servers.

2. **Configure Backend URL**: Update the backend URL in the `live_chat_config.json` file located in the project directory. Set it to your backend root URL, such as `http://localhost:80/live-chat` or `https://livechat123.com`.

## Making Changes

If you want to make changes to the project, follow these steps:

1. **Edit Code**: Open the desired component file, for example, `Header.tsx` to edit the header section. Make your changes and save the file.

2. **Build the Project**: After making changes, build the project using the following command:
   ```bash
   npm run build
   ```

   The built files will be located in the `dist` folder.

## Deployment

### Adjust Asset Paths

If you are serving your project from a subdirectory (e.g., `http://localhost:80/live-chat/` or `http://live-chat123.com/live-chat`), you need to update the asset paths in the `index.html` file located in the `dist` folder.

Change the paths from absolute to relative:
- From `/assets/main.js` to `./assets/main.js`
- From `/assets/style.css` to `./assets/style.css`

If you are serving from the root domain (e.g., `http://localhost:80/` or `http://live-chat123.com/`), no changes are needed.

### Upload Built Files

1. **Copy Built Files**: After building, upload the contents of the `dist` folder to your server's root directory or to the `htdocs/live-chat` folder if you are using XAMPP.

2. **Access the Application**: Open your browser and navigate to the application using the appropriate URL, such as `http://localhost:80/live-chat` or `http://live-chat123.com/live-chat`.

## Testing

To ensure everything is working correctly, test the application by accessing it in your browser. Verify that the chat functionalities work as expected and that the application is properly connected to the backend.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance.
