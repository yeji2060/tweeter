# Tweeter Project

## Project Overview
Tweeter is a full-stack, single-page web application that mimics core features of Twitter, providing a platform for users to post tweets in real time. This project emphasizes clean code, responsive design, and secure data handling, while helping students practice and enhance their front-end (HTML, CSS, JavaScript, jQuery, AJAX) and back-end (Node.js, Express) web development skills.


## Features
- **User-friendly Interface**: Displays the user's name and avatar at the top of the page for a personalized experience.
- **AJAX for Asynchronous Tweet Submission**: The app uses AJAX for submitting tweets without reloading the page, resulting in a smooth user experience.
- **Live Tweet Character Counter**: Provides instant feedback on character count using JavaScript and jQuery, ensuring tweets do not exceed 140 characters.
- **Dynamic Error Handling**: Invalid inputs such as empty tweets or exceeding the character limit trigger custom error messages displayed on the front end, improving user feedback.
- **Secure Input Handling**: Tweets with suspicious strings are safely rendered as plain text, preventing potential security risks such as XSS (Cross-Site Scripting).
- **Interactive UI**: Tweet cards feature shadow effects, and icons change color on hover, creating a polished and engaging user interface.


## Getting Started

Follow these steps to run the project locally:

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local machine.
3. Install the project dependencies using the `npm install` command.
4. Start the web server with `npm run local`. The app will be accessible at http://localhost:8080/.
5. Open your browser and visit http://localhost:8080/ to interact with the app.



## Final Product

- Homepage: A simple and clean interface with user details at the top with the responsive design. 

![](/public/images/homepage_0.gif)

![](/public/images/homepage_1.gif)


- Compose Tweet: A tweet input area with a live character counter that updates as you type and displays the real posting time for each tweet.


![](/public/images/compose_tweet.gif)


- Error Handling: Alerts for tweets exceeding the character limit or empty submissions.

![](/public/images/error_empty.gif)

![](/public/images/error_over140.gif)



- Security Measures: Suspicious input is handled securely, posting it as a safe string.


![](/public/images/security.gif)


- Interactive Design: Hover effects and shadows enhance the visual experience

![](/public/images/effect_hover.gif)

## Technologies Used

**Front-end**: HTML, CSS, JavaScript, jQuery, AJAX

**Back-end**: Node.js, Express

**Other Tools**: body-parser, Chance.js, md5

## Dependencies

Ensure you have the following dependencies installed:

- Node.js version 5.10.x or higher
- Express
- body-parser
- Chance.js
- md5

## Future Enhancements

- **User Authentication**: Allow users to sign up, log in, and maintain personal tweet histories.
- **Database Integration**: Implement a NoSQL database like MongoDB to persist tweets across sessions.
- **Like and Retweet Features**: Add functionality for users to like or retweet posts.
