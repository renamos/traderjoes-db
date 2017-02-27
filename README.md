# Trader Joe's DB

Live view: http://traderjoes-db.surge.sh/

###A User-Powered Trader Joe's Database

I'm currently working part-time at Trader Joe's and there's an inside joke that I became familiar with very early on. The joke goes something like this: if a customer asks about their favorite product, it's probably discontinued. This project seeks to address this lack of up to date product info by empowering the customer so that they can keep track of their favorite products for themselves.

Currently, the app displays only dummy data, but my vision for it is a completely user-powered database where TJ's enthusiasts can add new products and update the status of existing products.

####Some features I'm particularly proud of:

- Search: Because of React's incredibly fast performance, the search feature on the main page is lightning quick. So quick that I had to add some type of feedback so that the user knows that their search is actually working. Also notice that the text changes from "products" to "product" if only one item matches your search...it's the little things.

- Redux: This is the second project where I've used Redux to handle asynchronus actions and I'm absolutely loving it. [Here's a link to my first go with Redux](http://everyday-ramos.surge.sh). While I only used Redux in this project for async code, I want to try to use it more to improve app performance.

- A project evolved: This app began as my "server side" project for my portfolio, but it quickly became a full-stack app that could actually be useful. So instead of creating a RESTful API with a simple front-end, I decided to challenge myself and create an app with a more complicated stack (enter React-Redux & Node) and I'm so thankful I did. While the project needs polishing (see below), I'm really glad I decided to use more challenging technologies because I feel I have a tighter grasp on how to actually use them. I could have just used jQuery because it's familiar, but I'm thankful I didn't and instead chose a the more challenging route.

####Some Features I'd like to add

- Create a user: This is an obvious one, but can be quickly remedied. In order for the app to be fully functional, this needs to happen. Right now, in order to add a product, you need to login to an existing user (try "rene@me.net" and "password")

- Allow users to update product status: Another really useful feature that would allow for a better user experience.
 

