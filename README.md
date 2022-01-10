# TODO App

For a live view, please click [here](https://elegant-perlman-fd3f82.netlify.app/).

## Description 

Simple TODO app implemented using Next, React, and Typescript.

It's a mock and very simplistic application that contains the following:

* `/` route:
  * Login page
  * Only 1 set of credentials work:
    * username: user@test.com 
    * password: password
* `/home` route:
  * Main page of app
  * Must be logged in to access
  * Allows user to:
    * Add new items
    * Toggle items' checked state
    * Logout via Logout Button
  * **NOTE:** The implementation is currently a mock implementation in that, if you refresh while on the home page, you will lose the data and be "logged out".  Essentially, none of the data added to the todo list persists after session.

## High Level Technical Overview

* `./components`
  * Contains the stateless components used in application
  * In here, you'll see stories; these are the stories for Storybook which help in component development
* `./pages`
  * Invokes the page components defined in components to implement application


## Building

To build locally, please run the following steps within the command line:

* `git clone https://github.com/bryg217/todo`
* `npm i`
* `npm run dev`

You could also the see the stories by running: `npm run storybook`.

## Other

* `./docs/assessment.md`
  * Brain dump for how I began assessing implementation for this mini-app
* Browsers Tested
  * Chrome
  * Firefox
  * Edge