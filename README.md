# Portfolio Gallery

A small React app that shows my web programming projects as cards and lets
you filter them by technology. Built for Week 11 of my web programming course.

## Components

- `App` keeps the chosen technology in state (`useState`) and passes the matching projects down
- `FilterBar` shows one button per technology, built from the project data
- `ProjectList` renders the array of projects as cards, or a message if none match
- `ProjectCard` shows the title, description, tech stack, GitHub link and demo link

## Run it locally

Install the packages with `npm install`, then start the app with `npm start`.

## Live site

https://ps8023724-sys.github.io/portfolio-gallery/
