# Bromodoro

Bromodoro is a social Pomodoro app designed to enhance focus, productivity, and collaboration. Users can utilize a Pomodoro timer, track their study habits, interact with friends using emojis, and view activity leaderboards showcasing users with the most study time. This app is a collaborative project for the KnightsHack Project Launch.

## Features

- **Pomodoro Timer**: Boost productivity with the popular Pomodoro technique.
- **Social Interaction**: View friends' activity, send emojis, and encourage each other.
- **Study Habit Tracking**: Monitor your own and your friends' study habits.
- **Leaderboard**: Compete with friends by tracking study time and climbing the leaderboard.

---

## Getting Started

Follow these steps to set up the Bromodoro app for development on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node](https://nodejs.org/en/download)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/<your-github-username>/bromodoro.git
   cd bromodoro
   ```

2. **Environment Setup**:

   Create a `.env` file in the root directory and configure the necessary environment variables. Refer to `.env.example` for guidance.

3. **Start the Development Environment**:

   Use the following command to build and start the app:

   ```bash
   docker-compose up app-dev
   ```

4. **Access the Application**:

   Once the container is running, access the app in your browser at:

   ```
   http://localhost:5173
   ```

---

## Development Workflow

- **Build Changes**:
  The app automatically reloads when you save changes to the source code.

- **Stop the Application**:
  To stop the app, use:

  ```bash
  docker-compose down
  ```

- **Run Tests**:
  Ensure you have appropriate test scripts configured, then run:

  ```bash
  docker-compose exec app-dev npm test
  ```

---

## Contributing

We welcome contributions to Bromodoro! Follow these steps to contribute:

1. Fork the repository and clone your fork.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on the main repository.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, reach out to the Bromodoro team at **your-email@example.com** or create an issue in this repository.

