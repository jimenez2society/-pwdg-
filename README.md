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

### **The Password class**

#### You will find the class in the `Password.js` file. It allows all of the functionaliy to generate a randomized password

<br/>

#### 1. The `Password` instance takes two parameters `trueOptions` which needs be an array, there is no error handling on this but it won't work if it's not an array and `length` which is going to only a number.

#### 2. Then we have two interal properties, `allOptions` which is an object of the different options a user can use in their password and `errors` which is initially set to `null` until later told otherwise.

<br/>

```
class Password{
    constructor(trueOptions,length){
        this.trueOptions = trueOptions;
        this.length = length;
        this.allOptions = {
            lowers: "abcdefghijklmnopqrstuvwxyz",
            uppers: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
            numeric: "0123456789",
            specials: `~!@#$%^&*()_+=}{[]|/\\?'",.<>`,
        };
        this.errors = null;
    }
}
```

<br/>
<br/>

#### 3. With the class `Password` we have two methods `generate` and `randomize`. Let's talk about `generate`

#### 4. The `generate` method maps through all of the items in `trueOptions` as `option` and accesses the properties in `allOptions` that correspond with each `option` then calls `.join("")` on the array to turn it into one whole string.

#### 5. We the set a variable `genPassword` to and empty array for later use

#### 6. The `formError` function is used to set the `this.errors` and object with a property of `errMsg`. When this happens `this.errors` will no longer be `null`

<br/>

```
generate(){
  let trueOptionValues = this.trueOptions.map((option) => this.allOptions[option]).join("");
  let genPassword = []
  const formError = (msg) =>{
    this.errors = { errMsg: msg };
    return this.errors;
  }
}

```

<br/>
<br/>

#### 7. Now lets see the conditionals in action. These a very self explanatory if you've worked with javascript so I'm not going to go into detail but there is one thing that I want to point out.

#### 8. Notice how I can call `.isEmpty()` on the `trueOptions` this is because I set a method on `Array.prototype` to allow for arrays to allow to check itself for occupancy. Check the file `./lib/prototypes.js` for more info

#### 9. Then we just check to make sure length is less than 8 and greater than 128

#### 10. If everything passes then we set `this.errors = null` then loop until we reach the specified `length` number, pushing a random character to the `genPassword` array we set earlier with the `this.randomize` method

<br/>

```
generate(){
  let trueOptionValues = this.trueOptions.map((option) => this.allOptions[option]).join("");
  let genPassword = []
  const formError = (msg) =>{
    this.errors = { errMsg: msg };
    return this.errors;
  }
  if (this.trueOptions.isEmpty()){
        return formError("Please select at least one option");
  }
  if (this.length < 8) {
      return formError("Length should be greater than 8 and an integer");
    } else if (this.length > 128) {
      return formError("Length should be less than 128");
    } else {
      this.errors = null;
      for (let i = 0; i <= this.length - 1; i++) {
        genPassword.push(this.radomize(trueOptionValues));
      }
      return genPassword.join("");
    }


}
```

<br/>
<br/>

#### 11. The `randomize` is a simple function inside the `Password` class and is only used in the class itself.

<br/>

```
radomize(string) {
    return string.split("")[Math.floor(Math.random() * string.length)];
  }
```
<br/>

### **The query function**

#### #DISCLAIMER — This only works on one DOM element at a time because I am only using `querySelector()` and not allowing for both `querySelector()` and `querySelectorAll()`

#### In my code you will see this function named `query`. You can find how this function was built in the `DomHelper.js` file I've learned about proxy in javascript and it has been very interesting to me so I thought I would use it in this app, I will give a small example of how it is used in this project, take a look!

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

#### 5. We now start adding the logic to our `get`:

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
    return queryProxy
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

#### 9. After the logic is done we now return `queryProxy`

### Overview

- #### I didn't go over the `set` property because I didn't use it in this project but if you are curious here is link that goes in detail [MDN handler.set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)

- #### Overall I had fun creating this function to help me with my DOM manipulation in this app. I was able to learn more about how a javascript proxy is used and what it can do. I just know that there is so much more that can be done with a javascript proxy and can't wait to learn more

### This app is responsive to mobile.

[Link to live demo](https://641c05caa283f17c09d39d3e--pwdg-jimenez2society.netlify.app)

## Here is a quick look at the UI of this app:

![Screenshot of the pwdg application](./assets/pwdgScreenshot.png)

```

```
