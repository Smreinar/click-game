# Click-Game
---

## Discription
In this app you will be presented by 15 super mario characters and you will have to test your memory by clicking on each character
once and only once. With each character that you click for the first time your score will go up by 1 and if you click on
a image more than once then the game will reset. Try and get all 15 characters with no double clicks! Good luck and Have Fun!

[Live App](https://github.com/Smreinar/click-game/tree/code)

---

## Installation
git clone the repo to your computer.

note: There are 2 branches on this repo. the `master` branch is for `heroku` to launch the app itself and the `code` branch for the code itself and `local-testing` 

to switch branches to `code` run this line below in terminal

> `git checkout code`

once in `code` branch run the code below

> `npm install`
> > this will will download all the dependencies from the package.json

from here you should be free to run the following command to run local
> `npm start`


---

## Technologies 
- HTML5
- Bootstrap
- Javascript
- CSS
- node.js
- - react.js

---

## Code Snippets

In the code snippet below I made use of .map() to pass each value in the array gets passed in to the card component to render the information of each card(id, name, image, clickImage Function).


![clickgame-cards-render](https://user-images.githubusercontent.com/57015344/87860067-2fa06080-c8ef-11ea-8568-eaa9e288242b.png)

Now, with the card component itself is used to take the information and format it from its parent so it renders on the page.

![clickgame-card-component](https://user-images.githubusercontent.com/57015344/87860105-860d9f00-c8ef-11ea-93d4-7465b3b0675b.png)

The Fisher-yates shuffle is something I found on wiki that took me on the right path to find the function I needed to shuffle the cards in a random order after you click on an image. the way fisher-yates shuffle algorathm works is that it will throw all the elements in a hat and then draw from that hat to create and return a new order. 

![clickgame-fisher-yates-shuffle](https://user-images.githubusercontent.com/57015344/87860106-87d76280-c8ef-11ea-9d55-809a11c6baad.png)


---

## License
    MT

---
