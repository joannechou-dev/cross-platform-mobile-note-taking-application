### The Purpose of the Application

This application is designed to provide a simple and efficient interface to help users take and organize notes. Whether for work, study, or personal use, this application helps you capture and manage your thoughts and ideas. It supports seamless syncing across multiple devices, ensuring that your notes are accessible anytime, anywhere.

### List of Features

- **User Registration and Login:** Users can register an account and log in to create and save personal notes.
- **Note Creation:** Provides a text input feature for users to enter and save note contents.
- **Note List Display:** Displays a list of all user notes, allowing browsing and access to these notes.
- **Editing and Updating Notes:** Users can select existing notes to update their content.
- **Deleting Notes:** Offers a deletion feature, allowing users to remove notes that are no longer needed.
- **Search Functionality:** Allows users to search for specific notes using keywords.
- **Settings Functionality:** Allows users to adjust application settings, such as text size, and provides an option to delete the account.
- **Remote Syncing:** Syncs notes across multiple devices through the user's account.
- **Display of Open Source License Information:** Shows the open source components and their licenses used in the application on the About page.

### Installation of Dependencies

This application is built using `create-expo-app`, which simplifies the setup and testing of the application on both physical devices via Expo Go and virtual devices using an Android Emulator. Follow these steps to install the necessary dependencies and get started with development:

1. **Install Node.js and npm**: Ensure that you have Node.js and npm installed on your computer. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Install Expo CLI**: Expo CLI is required to develop applications with Expo. Install it globally by running the following command in your terminal:
   ```bash
   npm install -g expo-cli
   ```

3. **Clone the repository**: Clone the source code from your repository using git:
   ```bash
   git clone https://github.com/joannechou0801/IFN666-A-note-taking-application.git
   ```

4. **Navigate to the project directory**: Change to the project directory in the terminal:
   ```bash
   cd IFN666-A-note-taking-application
   ```

5. **Install dependencies**: Run the following command in the project directory to install all the required dependencies:
   ```bash
   npm install
   ```

6. **Start the development server**: Run the development server with:
   ```bash
   expo start
   ```

7. **Open the application**:
   - **Using Expo Go**: Open the Expo Go app on your iOS or Android device and scan the QR code displayed in the terminal or within the Expo developer tools in the browser.
   - **Using an Android Emulator**: Ensure your Android Emulator is set up and running, then from the Expo developer tools in the browser, click on “Run on Android device/emulator”.

These steps will get you set up with a local development environment where you can build and test the application. Make sure to keep your dependencies up to date to take advantage of the latest features and security updates from Expo and other libraries.

### Application Architecture

This note-taking application utilizes a modular and component-based architecture provided by React Native, enhancing its maintainability and scalability. Here are the key components of the architecture:

#### Frontend

- **React Native Components**: The application is built using React Native components, allowing for a seamless, native-like user experience on both Android and iOS platforms. Each screen (Home, About, Create Note, Settings) is implemented as a separate React component, promoting reusability and separation of concerns.

- **Expo Framework**: The app leverages the Expo framework, which simplifies the development process by abstracting much of the complexity involved in configuring native code. Expo provides a suite of APIs and tools used across the application for features like image picking, handling permissions, and more.

- **Navigation**: React Navigation is used to manage transitions between different screens in the app. This includes stack navigation for moving between screens in a linear fashion and tab navigation for accessing different sections of the app from the main interface.

- **State Management**: The application employs React's Context API for state management, facilitating the passing of data such as user authentication status and note content across components without resorting to prop drilling.

- **Hooks**: React Hooks are extensively utilized for managing state, handling side effects, and referencing DOM nodes, which makes the codebase cleaner and more functional.

#### Backend

- **Node.js and Express**: The backend API is constructed using Node.js and Express, managing requests for operations like user registration, note creation, editing, and deletion. This setup provides a lightweight, efficient server capable of handling asynchronous requests effectively.

- **Database**: The application uses MySQL as its database system. This choice supports the efficient handling of complex queries involving multiple tables, ensuring robust data management.

- **Authentication**: User authentication is managed using JWT (JSON Web Tokens), securing the API by ensuring that requests are authenticated and authorized before accessing sensitive data.

### How to Contribute to the Development of the Application

Contributions to this note-taking app are welcomed and appreciated. Whether you're fixing bugs, adding new features, or improving documentation, your help is valuable. Here’s how you can contribute:

1. **Fork the Repository**: Start by forking the repository on GitHub. This allows you to make changes without affecting the original project.

2. **Clone the Forked Repository**: After forking, clone the repository to your local machine to start making changes. Use the command:
   ```bash
   git clone https://github.com/joannechou0801/IFN666-A-note-taking-application.git
   ```

3. **Set Up Your Local Environment**: Follow the instructions in the README for setting up your local development environment.

4. **Create a New Branch**: Always create a new branch for your changes. This keeps the development organized and separates new features from stable code. For example:
   ```bash
   git checkout -b feature/your-new-feature-name
   ```

5. **Make Your Changes**: Implement your feature, bug fix, or documentation updates. Make sure to keep your code clean and well-commented.

6. **Commit Your Changes**: Commit your changes with a clear and detailed commit message, explaining what has been added or fixed. For example:
   ```bash
   git commit -m "Add a new sorting feature for notes"
   ```

7. **Push to GitHub**: Push your branch to GitHub:
   ```bash
   git push origin feature/your-new-feature-name
   ```

8. **Submit a Pull Request**: Go to the repository on GitHub, and you’ll see a prompt to submit a pull request. Make sure your pull request has a clear title and description.

9. **Code Review**: Once your pull request is submitted, it will be reviewed by the maintainers. Be open to feedback and be prepared to make further changes if necessary.

10. **Integration**: After the pull request is approved and tests pass, it will be merged into the main branch.

By contributing, you agree to abide by the project’s code of conduct and licensing terms.

### How to Report Issues

If you encounter problems with the application or have suggestions for improvements, please report them as follows:

1. **Check Existing Issues**: Before creating a new issue, please check the repository to avoid duplicates. If an issue already exists, you can add your comments or suggestions to the existing report.

2. **Create a New Issue**: If no existing report addresses your problem, create a new issue. Provide a descriptive title to help others understand the issue at a glance.

3. **Describe the Issue**: In the description, include detailed information:
   - **Steps to Reproduce**: List the steps to reproduce the issue.
   - **Expected Behavior**: Describe what you expected to happen.
   - **Actual Behavior**: Describe what actually happened.
   - **Screenshots**: If applicable, add screenshots to help explain your problem.
   - **Environment Details**: Include details about your environment, such as the operating system, device, app version, and any other relevant information.

4. **Submit the Issue**: Once you’ve filled out all the details, submit the issue. The maintainers will review it and respond accordingly.