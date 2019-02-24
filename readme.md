# How old are you?

- This is a (very) simple project designed to learn [NodeJS](https://nodejs.org).
- It's also a challenge proposed by [Rocketseat](https://rocketseat.com.br) on their [Bootcamp](https://rocketseat.com.br/bootcamp).
- Theme roughly based on [Dracula](https://draculatheme.com/)

## The Challenge

Create an app using **ExpressJS**, **Nunjucks**, **EditorConfig** and **ESLint**.

### Routes

`/`: Initial route that renders a page with a form and a unique field named `age` which represents the user age

`/check`: This route should be called when the user submit the main page form via POST method and checks wheter its higher or lower than 18. If its hight redirects the route to `major`, otherwise redirects the route to `minor` (Passing the age as a Query Param on the redirect)

`/major`: Renders a page with the following message: `You're of legal age, you're X years old.` where `X` is the user age

`/minor`: Renders a page with the following message: `You're a minor, you're X years old.` where `X` is the user age

### Middleware

There must exist a middleware which is called on the `major` and `minor` routes to check whether the age information is present on the Query Params. If the information is not available redirect the route to the main page with the form, otherwise follows the normal route.

## Bonus

This is the challenge done by the instructor: https://github.com/Rocketseat/bootcamp-nodejs-desafio-01

## Extra Work

If you change the query param on either `major` or `minor` routes to make them wrong (Eg. `minor` route with age > 18), you'll get a notice
