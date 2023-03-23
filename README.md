# !pwdg~ | Password Generator

<br/>
<br/>

## Libaries used

- No external libraries were used in this project
  <br/>
  <br/>

## Core Functionality

- Generates a randomized password with a set of parameters that are selected from the user
  <br/>
  <br/>

## An inside look

### **The query function**

#### In my code you will see this function named `query`. I've learned about proxy in javascript and it has been very interesting to me so I thought I would use it in this app, I will give a small example of how it is used in this project, take a look!

<br/>

#### 1. We pass in an `element` through the `query` function. Then we select that element with `querySelector` setting it to `el`

#### 2. We create a variable named `queryProxy` setting it to a new `Proxy`. In this proxy we pass in two parameters which are both objects

#### 3. The first object will be the `el` object that we get from `querySelector`, also know as our target

#### 4. The second parmeter is for our `set` and `get` functionality. Which is an object as well, also know as our handler.

<br/>

```
const query = (element) => {
    const el = document.querySelector(element)
    let queryProxy = new Proxy(el,{})
}

```

<br/>
<br/>

#### 3. As you can see, our `get` property has a function that passes `obj`, `prop`, and a `reciever` in the parameters

#### 4. Our `set` property has a function that passes `obj`, `prop`, and a `value` in the parameters

<br/>

```
const query = (element) => {
    const el = document.querySelector(element)
    let queryProxy = new Proxy(el,{
        get:(obj,prop,reciever)=>{},
        set:(obj,prop,value)=>{}
    })
}

```

<br/>
<br/>

#### 5. We now start adding the logic to out `get`:

 <br/>

```
const query = (element) => {
    const el = document.querySelector(element)
    let queryProxy = new Proxy(el,{
        get:(obj,prop,reciever)=>{
            if(prop === 'click'){
                obj[prop] = (event) => {
                    el.addEventListener(prop,event)
                }
            }
            return Reflect.get(obj,prop)
        },
        set:(obj,prop,value)=>{}
    })
}

```

#### 6. We are checking if `prop` === `click`

##### Example of how `prop` would equal `click`:

```
query('.box').click
```

#### 7. if `prop` === `click` is true it returns a function that we can pass a parameter of an event callback. Then add an event listener to the current element, example use:

##### Example

```
query('.box').click( (e) => console.log(e.target) )
```

#### 8. Then we return `Reflect.get(obj,prop)`, this is like property accessor stynax but as a function as stated [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get).

##### Example of how `Reflect.get(obj,prop)` would be used:

```
// if we had an object called myNewObject

const myNewObject = {
    name:"exampleName",
    type:"exampleType"
}

Reflect.get(myNewObject,'name')

//expected output => 'exampleName'

```

### Overview

- #### I didn't go over the `set` property because I didn't use it in this project but if you are curious here is link that goes in detail [MDN handler.set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)

- #### Overall I had fun creating this function to help me with my DOM manipulation in this app. I was able to learn more about how a javascript proxy is used and what it can do. I look forward to learning more about it and continue my research on the pros and cons of a javascript proxy

### This app is responsive to mobile.

[Link to live demo](https://641c05caa283f17c09d39d3e--pwdg-jimenez2society.netlify.app)

## Here is a quick look at the UI of this app:

![Screenshot of the pwdg application](./assets/pwdgScreenshot.png)
