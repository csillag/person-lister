# Developer documentation

This document explains some of the design decisions behind this project,
the used components, etc.

This information is *not required* if only want to deploy/run the app;
this is indented for developers who intend to reuse / modify the code.

## Major components / technologies

### UI framework

I have built the UI using [React](https://facebook.github.io/react/),
which is currently my favorite UI framework. I have also used Angular
(for a bit more than two years), but I find the concepts of React
more elegant and more intuitive. (Also, in React there is a smaller
number of core concepts, which makes it easier to really *get it right*,
as opposed to Angular.)

### Language

Where possible, I prefer to use [TypeScript](https://www.typescriptlang.org/)
on top of JavaScript. Usually I don't stray too far from ECMAScript 6; the
feature of TypeScript that I use the most is type annotations and interfaces,
which gives me a nice and comfortable level of type safety -- which means that
most of the things I overlook during developments are pointed out in
compile-time warnings, as opposed to runtime exceptions.

Hopefully, anyone who has ever used strongly typed languages would appreciate
the difference.

### Application behavior state management

The application UI is composed of Components. The components are cleanly
separated into two groups: there are the *presentational components*
(which only contain pure UI code, with no state management or behavior)
and *container components*, which contain all behavior and logic.

The current version the application logic is implemented using
[Redux](http://redux.js.org/). One might argue that this is an overkill;
ie. one could easily get the behavior "right" using more simple tools.
That is undoubtedly true, but I wanted to build this demo app using the
tools that I would use for a normal-sized app, and for such an app,
I find the benefits of using Redux a huge win. (Having all the logic
contained in pure, functions that are easy to test, using Redux's
time-traveling debugger, etc.)

Anyway, since the presentational and the container components are clearly
separated, one could easily replace the application logic with any other
solution (local state management in the React components, MobX, or any
other kind of FLUX or MVC solution.

### UI styling

I didn't put too much effort into styling the app.
I used [Bootstrap](http://getbootstrap.com/) for the basics,
via it's existing [React-Bootstrap](https://react-bootstrap.github.io/)
integration. (One could also use vanilla Bootstrap; I just like the more
compact HTML syntax allowed by React-Bootstrap a better match to the rest
of the React source.)

As for the app-specific small adjustments, I used a simple CSS file.
(I know about, and have used Sass, Less and CSS-Modules, but I didn't
feel like adding any of them into this project, since the UI is so simple.)

### Application framework and boilerplate code

Currently, this app doesn't have (or need) any server-side functionality.
Nevertheless, I used Meteor to build it. Generally, I find Meteor
the finest full-stack framework currently available. In integrates most
of the bits and pieces that one needs to build a full-fledged application,
and one can easily extend it into whatever direction needed.

In the current app, I haven't used any Meteor-specific features or Meteor
API calls at all, which means that there is no vendor lock-in at all.
One could easily rebuild the application without Meteor, using a custom
Webpack configuration, probably without any source change in the application
code itself, except perhaps the main entry point.

The reason I used Meteor is because it provides a very comfortable
development environment out of the box, and I already had a template project
set up, with all the pieces of technology that I like to use, all configured
together. So I just went with that.

Still, the application can be deployed as a purely client-side application,
without any kind of server support.

### Visualization tool

For creating the graph, I used
[Chartist.js](http://gionkunz.github.io/chartist-js/) (via it's
[React](http://fraserxu.me/react-chartist/) and
[Meteor](https://github.com/mfpierre/meteor-chartist-js) integrations),
and [ZingChart](https://www.zingchart.com/).

### Building and deployment

Since we don't use any backend functionality, we can simply deploy the
app using a static HTML hosting solution, without running any kind of server
code.

To prepare the application for deployment, I use
[Meteor Build Client](https://github.com/frozeman/meteor-build-client),
which allows just that. The resulting static build is stored in the `docs`
directory, which is used to power the (free)
[GitHub Pages](https://pages.github.com/) installation of the app,
available here:

https://csillag.github.io/person-lister/index.html

