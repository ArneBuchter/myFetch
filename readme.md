# Information

This package is used to make it easier to interact with an API. 
it works with Fetch, with fallback to xmlhttprequests and support for backend using nodefetch.
works with or without an API key.
full CRUD with the commands: get, post, put, kill.

this package is opensource and can be forked and used by anybody

## how to install

npm install @arnebuchter/fetch

### how to use


```javascript
let myFetch = myFetch.init({
    address: "https://reqres.in/api/",
    key: "1234"
});
```

#### key is mandatory, if the API you are working with do not need a key - type 1234


```javascript
myFetch.get('users/2')
    .then(result => {
        console.log(result);
})
```

##### users/2 is an example of the resource from your chosen API

you can use get, post, put, kill 
