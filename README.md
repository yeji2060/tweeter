# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5

## Final Product

- You will see your name and the avatar at the top of the web page.

![](/public/images/Screenshot_homepage.png)


- You can type a tweet here and post(Within 140 characters). As you type the tweet in the textbox, it will count the character and shows the count at the same time. 

![](/public/images/Screenshot_compose%20tweet.png)


- If it exceeds 140 characters or you tried to post empty tweet, a corresponding error message will pop up.

![](/public/images/Screenshot_error_0.png)

![](/public/images/Screenshot_error_1.png)



- If the user try to type some suspicous string into textbox, it will just take it as string and post it for the security.

![](/public/images/Screenshot_security.png)


- Each tweets would show shadow behind it self, and the color of the icon would be changed when the mouse is on them. 

![](/public/images/Screenshot_shadow.png)

