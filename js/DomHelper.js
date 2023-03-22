const query = (element) => {
  //setting el to get an element that is passed through the parameter of query
  let el = document.querySelector(element);

  //   creates a proxy with the selected element as the target
  let proxy = new Proxy(el, {
    get: (obj, prop, value) => {
      switch (prop) {
        // getting a property with the name of "click" returns a function. we can pass a callback function in the parameter of this returned function to allow a click event
        case "click":
          obj[prop] = (event) => {
            el.addEventListener(prop, event);
          };
          break;
        case "addText":
          // getting a property with the name of "addText" returns a function. we can then pass some data to add to the current element
          obj[prop] = (data) => {
            el.innerText = data;
          };
          break;
        case "preventDefault":
          // getting a property with the name of "preventDefault" returns a function. Mainly for a form, this function adds a submit event listenter to the current element and prevents the default
          obj[prop] = () => {
            el.addEventListener("submit", (e) => {
              e.preventDefault();
            });
          };
          break;

        case "getValue":
          // getting a property with the name of "getValue" returns a function. Mainly for a inputs, this function returns the value of a selected input element
          obj[prop] = () => {
            return el.value;
          };
          break;
        case "isChecked":
          // getting a property with the name of "isChecked" returns a function. Mainly for a checkboxes, this function returns the checked value of a selected checkbox
          obj[prop] = () => {
            return el.checked;
          };
          break;
        case "unCheck":
          // getting a property with the name of "unCheck" returns a function. Mainly for a checkboxes, this function sets the checked property on the current element to false
          obj[prop] = () => {
            el.checked = false;
          };
          break;
        case "setValue": {
          // getting a property with the name of "setValue" returns a function. Mainly for inputs, this function sets the value on the current input element
          obj[prop] = (value) => {
            el.value = value;
          };
        }

        default:
          // return target
          return obj[prop];
      }
      return obj[prop];
    },
  });
  //   return the whole proxy
  return proxy;
};
export { query };
