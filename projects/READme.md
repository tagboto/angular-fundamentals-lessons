Jan 2024

Angular web frame work used to build scalable web apps with confidence

its an enterprise solution and enterprise is great at scale

Core tenants is to try and bring web forward with them

Updates on angular are mostly non breaking so organizations can 
take advantage of security updates, stability updates etc and migrate
large applications over time.

Tooling to help you migrate at your own pace.

Scalability
- scale your application 
- scale your teams

Angular devs can get started quickly on an angular code base because
of patterns and best practices we set up in the beginning. The opinionated nature of angular makes it easier to use

Give you a lot of stuff up front. Router, Dependency Injection, HTTP

Angular templates which are part of the angular compomnent determine what is visible on screen

The local dev server for angular is v (pretty fast and modern)

angular.json is where your project configuration lives 
- builder (esbuild or others)
- translations
- low level config
- project config
- it basically tells me stuff about your project

package.json will have your dependencies
- similar to any node based project

tsconfig
- they almost made a script of themselves

-This project structure we probably won't see in a standard angular 
project. This setup instead allows us to have one set of dependencies 
and a bunch of applications in it.

Also used for things like mono repos and we may want the mon repo 
structure. Multiple independent applications but one set of dependencies

So every time you switch applications you don't have to npm i 
every singleeee time. Can just switch and go 

So i guess in this project in each example or app i.e the Hello World example there are project specific typescript project specific configuration (so thats what tsconfig is)

And the src folder is where all the magic happens. Where you find your
components, your global styles

main.ts which is like your bootstap file. It kicks of everything that 
we gonna have. You have to supply what your root component is to kick
off the entire application and then you provide an application configuration.

App config
- if you have routing and other things its like a high level overview of your project 

app.routes.ts
- if you have routes you want to define we declare them here 

And thats the structure of an angular app

It could actually be deployed we can deploy with firebase that we have a very nice intergration

Install firebase into our project
then sign in and then ng deploy and 
then this could go up into the internet
if we wanted it to?


Angular has had an interested reputation. Hard to learn and high barrier
to entry? The team done a lot of work to change that and the number
of flies has even been reduced to reduce that learning curve.

So when you ready for more files you can add them....

=----- CREATING A COMPONENT 

You build Angular apps with TypeScript, HTML and CSS
TypeScript stuff is really just JavaScript with types involved and being able to describe the objects and the data that we are working with.

At the very core of Angular is the component 
- they are the fundamental building block of any app
- 


Type Script (Components)
- Programming logic in your app 

HTML (Templates )
- This is how you define your markup in templates 

CSS (Style) 
- Styling your templates 
- they also support SASS and LESS

The good thing about Angular is your skills are directly transferable
you don't have to use a specified angular version or what not. Like JSX being weird

But now.....

HOW DO WE BUILD A COMPONENT IN ANGULAR?

you've got to import a component from the file level in angular. i.e
import {Componnent} from '@angular/core'


Then we use pattern called decorators 
- decorators allow us to take a property or class and add some behavior
to it.

The component decorator lets us take what would normally be just a typescript class and imbue it with magical powers that make it a component.
@Component({

})


Cool now this decorator takes some prpoperties
1. Because components are referenced in our html templates we have to give it a tag name which we call a selector


@Component({
    selector:'app-root',
    standalone : true,

})



2. Standalone: true 
@Component({
    selector:'app-root',
    standalone : true,

})

In angulars history we had modules which were great in theory except at scale it became a problemmmmmm

You used to need something called a module which handleed all your dependencies for your application.

So you knew a component may reference A,B & C service then you'll have a module that will organize that for you and you'd know whatever is in that module is available to these components

But then it because confusing ... was it an NgAngular module or ECMAScript module or a CommonJS module. Did it have the same behavior? Were they related (nope)

And then when you had a large app at scale there were soooo many moudles that there was a level of indirection where you couldnt be sure where things belonged anymore becoming more and more complex and so modules are optional and to do that there is a new flag called standalone:true

This means you don't use a module so what you get in the component is what you get




3. Template string

@Component({
    selector:'app-root',
    standalone : true,
    template: `<h1> Hey, Frontend Masters </h1>`
})

The template string is just a regular string but you can make it all separate into a file if you'd like. 

What are the rules?

If the template is huge? Separate into a separate.html file but for small put it in line.


3. Styles 

@Component({
    selector:'app-root',
    standalone : true,
    template: `<h1> Hey, Frontend Masters </h1>`,
    styles: `h1 {color red}`,
})

Styles is the same idea as the template string you can either make a separate file or write inline in your component. If you got a lot of styles separate them

What interesting about styles ? They are scoped in angular so they don't leak out of your component.

So you can define styles for a p tag for example that will be scoped to your component but will not leak out to the rest of your application (Oooooh this cool). And this makes your components super reuseable.\

P.s you can still use a global stylesheet

4. Component Class 

@Component({
    selector:'app-root',
    standalone : true,
    template: `<h1> Hey, Frontend Masters </h1>`,
    styles: `h1 {color red}`,
})

class AppComponent {}

if you don't have any logic it can be an empty class but you can't do 
functions .... why? We don't support function components yet.
