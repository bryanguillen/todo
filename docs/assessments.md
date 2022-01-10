routes:
- login
- home

user stories - unauthenticated
- user tries to access login and gets render login
- user tries to access home, is not authenticated, and gets rerouted to login

user stories - authenticated
- user tries to access login and gets rerouted
- user tries to access home, is authenticated, and gets home page rendered

user stories - list
- user adds new item
- user marks item as complete
- user marked item as complete by mistake
- user wants to edit item, due to typo
- user wants to delete item from list, since it is no longer needed

user stories - login
- user submits correct credentials
- user submits incorrect credentials

ui - r&d: take a look at what types of design you can use, where the requirements
are that the user should see a personalized welcome message, interface for todo list,
and button to logout.  found a template we could reuse.  blue: #1c2081.
grey: #efeef6.  white: #f9fafe.

notes:
- credentials: user@test.com/password

questions - 1:
- what is the initial vision for app that i have missing?
- support for multiple lists, different pages for authenticated user (e.g. lists, account settings)

questions - 2:
- what authentication mechanism do we want to use?

questions - 3:
- for the sake of this exercise, do we want to use a backend to store the data?

components - todo list:
- form component:
  - label
  - text input
  - primary button
- nav (mobile and desktop)
  - buttons
    - icon
    - text
- todo list container
  - title
  - item
    - checkbox
    - title
    - additional options
      - edit icon
      - trash icon
- personalized welcome message

components - login:
- form component:
  - label (2x)
  - text input (2x)
  - primary button (1)
- header

technical design - steps for execution
Implement the following in order
- component development
  - form
    - primary button [x]
    - input [x]
    - label [x]
    - form [x]
  - personalized welcome message [x]
  - nav
    - mobile [x]
    - desktop [x]
    - notes: reuse from previous apps i've done
  - todo list container [x]
    - title
    - item
      - checkbox
      - title
- page development
  - putting it all together

notes:
- do not forget to add normalize.css
- best font-sizes?