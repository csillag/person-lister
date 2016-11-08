# csillag's Person Lister demo app

This is a small technology showcase app.

The live demo is available here:

https://csillag.github.io/person-lister/index.html

## Running the application locally

If you want to run in locally, you need to install [Meteor](http://meteor.com/),
and then run `make dev`.

## Deployment

Since this project is client-only, it can be deployed at any static hosting
solution. For building it that way, first install Meteor (see above),
and then run `make build`.

The resulting static build will be placed in the `docs` directory,
which you can upload to any static HTML server.
(Unfortunately, opening it using the `file://` protocol still won't work,
because of the browsers' cross origin security policies.)

## Technical details

See the `design.md` file for more details about the technology behind this project.

   * * *

**Update:** Features that I implement after the deadline live on
the [post-mortem branch](https://github.com/csillag/person-lister/tree/post-mortem), and the updated demo is available
[here](https://csillag.github.io/person-lister-post-mortem/index.html).
