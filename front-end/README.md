# ContentCal Frontend Challenge

## Our Stack

We are currently working with...

- [Angular 10+](https://angular.io/)
- [Typescript](https://www.typescriptlang.org/)
- [NX](https://nx.dev/) Workspace
- [NGXS](https://www.ngxs.io/) State Manager
- [Jest](https://jestjs.io/) for Unit Testing
- [Cypress](https://www.cypress.io/) for E2E testing
- [Storybook](https://storybook.js.org/) as a rapid development tool and component library
- SCSS - We currently support the latest 2 versions of Edge, Chrome, Firefox and Safari

## What we're looking for

- A stylish solution with unit test coverage
- Clean, concise code
- an appreciation of design

## Run the project

1. Run `npm install`
2. Run `npm start`
3. Enter `http://localhost:4200`

### Running unit tests

- Run `npm run affected:test` to execute the unit tests via Jest on affected files only.
- Run `npm run affected:test --all` to execute the unit tests via Jest on entire project.

### Running linters

- Run `npm run affected:lint` to execute linter on affected files only.
- Run `npm run affected:lint --all` to execute linter on entire project.

## Challange

The Front-end challenge is to improve an idea board where you can create, view, update and delete ideas.
There is a starter app built using NX or you can choose you use your own boilerplate.

![idea-board](https://user-images.githubusercontent.com/8656036/112143530-47478b80-8bd8-11eb-9747-1ce0814fc942.png)

### Challange 1:

Oops, seems like you can access our idea list even if you are not logged in just by entering `http://localhost:4200/ideas`.
This module should be accessed only by logged-in users. Could you please protect it somehow?

_Tip_: State will hold information about logged-in user. You can find `isAuthenticated` selector in `libs/core/src/lib/_states/auth.state.ts` that you can use.

### Challange 2:

One of our clients have hundreds or thousends of great ideas. Printing so long list of idea have very bad inpact on Angular performance.
Could you please take a look on `IdeasListingComponent` (`apps/idea-board/src/app/ideas/ideas-list/_components/ideas-listing`) and check
if we can easly optimalise this component performance?

### Challange 3:

The dark mode is a must-have of all fancy apps those days, let's add it to our app.

_Tip_: All the logic is already there. You can start overriding styling in `apps/idea-board/src/styles/themes/_dark.scss`. Feel free to choose
your own color scheme but if you do not have an idea for your own you can use those colors:

| Description                                               |  Color  |
| --------------------------------------------------------- | :-----: |
| App background                                            | #2f3337 |
| Component bg color (cards, login box, top navigation etc) | #3f4346 |
| Border color                                              | #828587 |
| Dark border color (eg idea card hover border color)       | #bbbbbb |
| Text color:                                               | #ffffff |
| Lighter text color (eg input placeholders):               | #bbbbbb |

### Challange 4:

Some say it's a feature - not a bug as good ideas should never be deleted, but it seems that you cannot remove idea from our Ideas board.
Could you please take a look what's going on?

_Tip_: You will find the 'Delete' button if you go to edit mode for a particular idea. If you can't figure out where to start just open Dev tools and click
that button.

### Challange 5:

We want to add some sorting/filtering functionality to the ideas board. Designs are not ready yet, but we can start working on some helper functions. Could you please
finish all utilities function defined here `apps/idea-board/src/app/ideas/_utilities/ideas.utilities.ts` and add Unit Test for them?
