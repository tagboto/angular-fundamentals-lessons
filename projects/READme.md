# Angular Fundamentals Lessons

Jan 2024
## What is Angular 
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

## Internal Project Structure 
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

## Creating a component

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


## Dynamic Values in Components
We now have static data but we can do better?

for example an app saying 
```bash
Hello User
```
it feels pretty sucky and not personalized right? So how do we combat this?


In our component class we can define class properties

e.g
@Component({....})
export class WelcomeComponent{
    userName = 'codingChamp';
}

but why don't we see any types here?
nice feature of TypeScript

Type script can infer 'coding champ' is a string. Type inference so i don't have to explicity declare that. It can't infer all types but for primitives it got this.

And if your type signatures are set up properly from functions that returns things it'll be able to do type inference.

But how do we link our user name to our template 

{{}} - string interpolation 

inside double curly brackets we can put an expression 

so now 02-displaying-dynamic data

## Component Composition

A single component is called a block

Leveraging the power of multiple components or blocks is where the power resides

The first step to combining these blocks together is called component composition.

Lets say we have a dashboard and we want to use someone else's user info component this is how we stitch them together

import {UserInfoComponent} from './user-info.component';
@Component({
    selector: 'app-dashboard';
    template: `
        <section>
            <p>Welcome back</p>
            <app-user-info />
        </section>
    `,
    imports: [UserInfoComponent]
})
export class DashboardComponent {}

the first thing we do is bring in the imports using the imports property in the component decorator 

we imported at the top? which we would normally do in modules but like another way to do it is manually with this imports array (imports: [UserInfoComponent])

So we first file level import so its available to the file and then we tell the component that its a dependency.

Then you can reference it in your template using the selector for the page in this case (<app-user-info />)

So essentially when you want to reference a different component to your template you need to:

1. Import it into the file (import {UserInfoComponent} from './user-info.component';)

2. Add it as a dependency to the component through the imports array (imports: [UserInfoComponent])

3. Use a selector for that component to reference it (<app-user-info />)


Ok doing the component composition exercise and trying to breakdown this command

ng generate component userinfo --project 03-component-composition

- ng is from angular like ang for the angular CLI
- generate is a command (a self command)
    - its not the only command ng has e.g there is ng serve that starts a server
    - it can generate components, services, interfaces files etc? Can it generate tests?? We must see....
    - documentation has the full scope of what the CLI can do

- now name of the component we want to generate in this case is user info

- we have flag --project? why? because its a multi project workspace so I have to explicitly say if I do generate I want to put it in a project in this workspace. 

- and then I say the project I want it under....

he configured the angular project to be scaffolded in a way not to get a bunch of extra stuff. If I do this on my own.
- get tests by default
- separate CSS by default
- separate HTML by default
- goes into own file by default


## Template Conditionals
How do we make a decision in our component? This means conditional logic. How do we conditionally display something. Well we apparently have something like control flow using @if syntax (no more *ngIf)

<section>
    //user.isLoggedIn
    <p>Please Login</p>
    //!user.isLoggedIn
    <p>Welcome Back</p>
</section>

intended behavior we can see from this code snippet is that we'd like to see one or the other. If user is logged in we see Welcome Back else we see please login 

So using control flow here is what we do in angular
<section>
    @if(user.isLoggedIn){
    <p>Please Login</p>
    }@else{
    <p>Welcome Back</p>
    }
</section>

very declarative style. and they also support @else if. They used to use directives which is what ngIf and things were.... and it gave us the capability to tag an element and say ngif this thing then that other thing.

Built in so external dependencies!! wooohoooo

Go to 04-control-flow-if




## Template Loops
<article>
    <p>{{cart[0].price}}</p>
    <p>{{cart[1].price}}</p>
    <p>{{cart[2].price}}</p>
</article>

whats the issue with this piece of code. What feedback would you give me ? Use a loop ! How do I do this with a loop?

Again control flow with @!!! Instead of directives like ngFor. Coolio.

So heres the syntax

<article>
    @for(item of cart; track item.id){
        <p>{{item.price}}</p>
    }
</article>

1. @for thats part of control flow
2. item of cart. Individual item of a collection
3. track item.id? this helps us to be hyper efficient with rendering (REACTish)

What if the list is empty? Well there is an empty tag.
<article>
    @for(item of cart; track item.id){
        <p>{{item.price}}</p>
    } @empty{
        <p> Your cart is empty</p>
    }
</article>

Yayyyy so if its empty it shows something else instead 



## Properties, Events & Outputs
Now event binding and property binding very important parts of angular components. Why?

Maybe you want to have an attribute or property on an element and you want to have a dynamic value..

Property binding in Angular enables you to set values for properties of elements in your templates

So lets say you want to dynamically set disabled or enabled based on something else in your component.

Or you want to set the number of rows for a text area based on a number. Sometin like that 

Lets look at the disabled and enabled example

@Component(){
    template:`
        <button type = "button" [disabled]= "isDisabled">
            Submit
        </button>
    `
}
export class AppComponent{
    isDisabled = false
}

First thing you do is you find the property that you want to have a dynamic value and you add square brackets around there. So disabled is a property in html but we want it to be dynamic so instead of normal disabled= i do [disabled]=

That means whatever is on the right hand side of the equal side is going to link go the isDisabled variable I set up in my AppComponent ! Yayyyy those values are now bound together.

Essentially I now have the power to programatically adjust values in my template now on elements.

Oh there is a sibling tool you can use with property binding? And that is...... EVENT BINDING

Event handling in Angular enables you to respond to events in your templates 

Some events:
mouseover, click, or custom events.

Lets look at an example with Events

@Component(){
    template:`
        <button type = "button" (click)= "handleClick()">
            Save Progress 
        </button>
    `
}
export class AppComponent{
    handleClick(){...}
}

Take the name of the event and cover it with parantheses to let angular know you are binding to it.
And then on the right hand side we have the function but with parentheses and it links to some value in our class!!

Customizing components with @Input
This answers the question what happens if you have data in another part of your project/application that you want to share with a component.

You do that with inputs. You can customize data with an input and you can share data with a component with a input 


Send info into a component (like props)
Inputs in angular are like props.


Lets look at an example
@Component({
    selector: 'app-cmp',
    template: `<app-user-card [userData]= "user"/>`,
    imports: [UserCardComponent],
})

export class AppComponent{
    user: User = {name: 'Ashley', bio: 'Cool developer',};
}

We have an object which is of type user and it has some info.
App user has an input called user data and it accepts a value of type user.

But we need the square brackets. Why? They make the right hand side be an expression and not a string

lets look inside app user card
@Component({
    selector: 'app-user-card',
    template: `
        <section>
            <p>{{userData.name}}</p><p>{{userData.bio}}</p>
        </section>
    `,
})

export class AppComponent{
    @Input() userData : User = {...} //default user data
}

Here we can see we have a decorator called input that allows the input to be set from outside the component.

If inputs are to get inputs into the component what if you need to tell another part of your application that something happened in your component when they go the other way?


@Output - they send information from a child component to a parent via custom events 

We send data out using an event! Let see an example

@Component({
    template: `
        <button class= "btn" (click)="addItem()">
           Add Item
        </button>
    `,
})

export class ProductListComponent{
    @Output() addItemEvent = new EventEmitter<string>();
    addItem() {this.addItemEvent.emit(':D');}
}


Now lets see where we are using the output event we emitted 

@Component({
    template: `
        <app-child (addItemEvent)="addItem($event)" />
    `,
    imports: [ChildComponent]
})

export class AppComponent{
    items: string[] = [];
    addItem(item: string){this.items.push(item);}
}

1. we are binding to that event name because its an output. (addItemEvent)

2. Then handle the event its custom: addItem($event)

 


## Inputs and Outputs

Inputs let us send information into a component and outputs are ways to send events out of the components 

but both are about communication. So lets go to 06-inputs-and-outputs

## Interactivity with Outputs
done 06-inputs-and-outputs

## Binding Outputs
done 06-inputs-and-outputs

## Routing

Angular has a built in complete router
@angular/ router 
it is so built in that we are adding view transitions to the router

We also have fancy view transitions now !!

Ok lets loook at example in our routes.ts file

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: 'details',
        compponent: DetailsComponent
    }
]

exporting routes properties from this file. We have a path and a component.

Those key value pairs of the route and component are the base of every route we have there are more route stuff like are you authorized to even access this (routeguard). 

How do you use the router thooooo

Well in the component template prorperty i need to put <router-outlet /> and you import the RouterModule

see here:

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <router-outlet />
    `
    styles: '',
    imports: [RouterModule]
})

export classs AppComponent

so we route to components. So not necessarily pages but we can use <router-outlet /> for diff components on the same page e.g nav bar or footer.                   

hmmm so now how we do in app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes)]
    }

what this is saying for an application level provide routing and use these routes with your router. the routes comes from your app.routes which is the key-val pair of path and component. 

07-routing-basics


## Dynamic Routes and Router Link
Now you can make a multi page app that can display and interact with components.

can do dynamic data in components and display multi page app.

routing in angular is choosing which component to display on the page that has a router outlet in it.

We showed how to route if we went to the default route what about the rest of it ?

How do you make links? 
actual clickable links that i can click through on my page : 
- routerLink

@Component({
    template: `
        <a routerLink="/details">Details</a>
        <router-outlet />
    `
    standalone: true,
    imports: [RouterOutlet, RouterLink]
})

router link is a special attribute in angular called a directive.
a directive adds behaviour to an HTML element for example, or to a component 

but how do you create dynamic routes 

e.g /details/1

goo to app.routes

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: 'details/:id',
        compponent: DetailsComponent
    }
]

:id is a placeholder so a dynamic value will be available there once someone navigates to this route and i can even get access to this placeholder or id.

How??

@Component({....})
export class DetailsComponent{
    productId = -1 //dest for route info

    @Input()
    set id(value:number){
        this.productId = value;
    }
}

angular can use input to receive data from a url 

but to take advantage of this feature you have to use component input binding.

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes),
                    withComponentInputBinding()]
    }

so now 08-routing-recap

## Dynamic Routing Exercise

so now 08-routing-recap

## Forms Overview
How do you gather user input 

A tale of two systems for our forms

1. Template driven forms
    - src of truth is the template
    - quick to setup and use 
    - best for small one time use forms (login)
    - more config for testing

2. Reactive Forms 
    - data model bind to your form
    - define model, define validations
        everything is programatic and then you go back to the representation in the template
    - supports typing
    - reusable: can share models
    - more robust testing config


Start with template driven forms

<form name= "loginForm">
    <label for="username"> Username: </label>
    <input type="text" />

    <label for="password"> Password: </label>
    <input type="password" />

    <button type= "submit"> Login </button>
</form>

Make your forms better by adding labels and controls 

What are the labels for ? Accessibility 

So that was just a normal form

This is a template driven form to use it we use ngModel

[()] - banana in a box
     - represents two way dataflow
     - property binding and event binding

<form name= "loginForm">
    <label for="username"> Username: </label>
    <input type="text" [(ngModel)]="username"/>

    <label for="password"> Password: </label>
    <input type="password" [(ngModel)]="password" />

    <button type= "submit"> Login </button>
</form>

Now in the component you need to import forms module. We call it template driven forms because just looking at the component apart from the import you'd have no idea it had anything to do with forms. You can see more accurately in template. Hence the name template driven forms!

@Component({
    imports: [FormsModule],
    templateUrl: 'app.component.html',
})
export class AppComponent {
    username = "";
    password = "",
}
    
## Template Driven Forms
09-template-driven-forms


## Reactive Forms

Before we anything with reactive forms we must define our model programatically

@Component({
    imports: [ReactiveFormsModule],
    templateUrl: 'app.component.html',
})

export class AppComponent{
    loginForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
    });
}

login form - name of our model
FormGroup - represents a group of form controls 

Now here is our form

First combine from to form group and tell it whats the data model 
<form name= "loginForm" [formGroup] = "loginForm"
    (ngSubmit)= "handleSubmit()">
    <label for="username"> Username: </label>
    <input type="text" formControlName="username" /> 

    <label for="password"> Password: </label>
    <input type="password" formControlName="password" />

    <button type= "submit"> Login </button>
</form>

so lets update our component

@Component({
    imports: [ReactiveFormsModule],
    templateUrl: 'app.component.html',
})

export class AppComponent{
    loginForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
    });

    handleSubmit(){
        this.loginWithCredentials(this.loginForm.value);
    }
}

10-reactive-forms


## Dependency Injection (DI)
Special about angular is dependency injection and dependency injection is a design pattern it wasn't created by Angular

Dependency Injection (DI) is a design pattern and mechanism for creating and delivering some parts of an app to other parts of an app that require them.

create instances
make them available

To make something injectable we have to use our decorators once again which angular relies on.

Because without our decorator this is just a regular typescript class. 

import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root', // this means its available at
                        // the top or root of your app
                        // available to entire app
})

export class CarService{...} 

How do we make it available to our app tho ? Inject

import {inject} from '@angular/core';
@Component({...})
export class AppComponent{
    carService = inject(CarService);

}

You can also inject and then do your constructor too

export class AppComponent{
    carService = inject(CarService);
    cars: string[]

    constructor(){
        this.carService.getCars();
    }
}

11-depenendency-injection

Can use NGONINIT and make it async

safest place to make api calls


## Signals
App Optimizations 

Familiar with other ideas 

Angular Signals

Angular has an idea called change detection so in all the applications never did a single set state.

It used to update using Zones. 

But now we use signals 

Three reactive primitives
- signal
- computed
- effect

Three functions 

1. Signal 
    - a value that can tell Angular when it changes
    - capable of notifying its context of future changes in its value 
    
Here is how you do it. 

@Component({
    template: `<p> {{lastName()}}, {{firstName()}}</p>`

})

export class AppComponent{
    firstName = signal('Jessica');
    lastName = signal('Wesley');
}

You use the function rest at the reactive primitives.

The single returns a smart function that can notify and subscibe to things.


2. Computed 
    - Derive new value when one of the dependent signals change
    - computed lets you have an updated signal value based on other signal values much like value of shopping cart is dependent on other items in cart. 

a less complex example is here adding to our other code and thats full name. If the first name changes full name changes. If the last name changes full name changes either way full name changes.

@Component({
    template: `<p> {{lastName()}}, {{firstName()}}</p>`

})

export class AppComponent{
    firstName = signal('Jessica');
    lastName = signal('Wesley');
    fullName = computed(()=> `${firstName()} ${lastName()}`)
}

From a performance point of view this is great because we only update when something changes so we do memoization and caching. 

3. Effect
    - and effect is a side effectful operation which reads the value of zero or more signals.
    - You can decide to do some behaviour if any of the signals change


Here is a good example again building off our other examples.

@Component({
    template: `<p> {{ fullName() }}</p>`

})

export class AppComponent{
    firstName = signal('Simona');
    lastName = signal('Cotin');
    fullName = computed(()=> `${firstName()} ${lastName()}`)
    effect(()=>console.log('Updated: '+ lastName()))
}

So good for debugging. 

## Deferrable Views
This is a way for us to do lazy loading but what is lazy loading

Lazy loading helps keep initial bundle sizes smaller.

meaning what gets shipped to the clients is smaller and that size matters because you may have clients that may be on a device that has low bandwidth.

Normally you do lazy loading maybe don't ship this page etc and you do it in some config file of some kind. Well nowwwwww. We can say don't ship these parts of certain components until something meaningful happens.

Now check this out. I want to load recommended movies template only if someone interacts with the trigger

<button #trigger>Load Recommend Movies</button>

@defer(on interaction(trigger)){
    <recommended-movies />
}@loading{
    <p> Loading </p>
}@error{
    <p>Ooops, sorry</p>
}@placeholder{
    <img src="placeholder-image.png">
}

trigger is a template variable in angular 


but what if I wanna do custom tins like i want to make my own triggers 

<button (click)="count = count +1">
Add one
</button>

@defer (when count > 5){
    <recommended-movies />
}
@placeholder{
    Count is {{ count }}
}

Ther are a whole bunch of robust powerful triggers

- on idle 
- on immediate
- on timer(...)
- on viewport(...)
- on interaction(...)
- on hover(...)

Deferable views and prefetching
- difference between lazy loading and prefetching and displaying 
- lazy loading you just say ok when its time to load it load it and then display
- or you can say start getting it but I'll not ready for you to show it yet

e.g 

@defer(on interaction(trigger);
        prefetch on idle){
            <recommended-movies />
        }
@defer(on interaction(trigger);
        prefetch when count > 5){
            <recommended-movies />
        }

13-deferrable-views

## Wrapping Up

CLI can do a lot of stuff.
- Create apps
- create resources like components, services and more
- launch local dev servers
- so much more ..

What next 
- angular.dev for documentation and tutorials
- KLM uses angular app, Cisco
- Stay connected
- Angular CDK - unstyled.
- Angular Material - styled 

Pipes still supported. 

input transform vs pipe
- input transform - send data to a component 
- specify function called a transform that says whatever format this comes in i want you to apply this function to it and give me a different output right out of there
- reason use input transform vs pipe a pipe can also transform on data but you use pipes in templates the input isn't in the template 
- inputs bound before get to template
- solve similar problems, different use cases

Pipe
{{salary | currency}}

Nest with Angular

Future - server story 
- reactivity 
- incremental rendering 
- space going in general 

angular.dev
component driven architecture

Yayyy 3 hours in like 6 weeks 