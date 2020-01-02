(function(root, factory) {
    
    // AMD
    if(typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    // CommonJS
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    // browser context
    } else {
        root.myFetch = factory(root.jquery);
    }
}(this, function($){
    function init(options) {
        this.APIAdress = options.address;
        this.APIKey = options.key;
        return this;
    }
    
    async function get(resource) {
        try {
            if(typeof fetch === "function") {
            let response = await fetch(this.APIAdress + resource, {
                headers: {
                    "Authorization": this.APIKey,
                    "Accept": "application/json"
                }
            });

            return await response.json();
            } else if(typeof XMLHttpRequest === "function"){
                let xhttp = new XMLHttpRequest();
                xhttp.open("get", thisAPIAdress + resource, true);
                xhttp.send();
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                        if(this.readyState == 4 && this.status == 200) {
                            resolve(JSON.parse(xhttp.responseText));
                    }
                    }
                })
            } else{
                const nodeFetch = require('node-fetch');
                let response = await nodeFetch(this.APIAdress + resource, {

                    headers: {
                        "Authorization": this.APIKey,
                        "Accept": "application/json"
                    }
                });
                return await response.json();
            }
        } catch (error) {
            throw error;
        }
       }
    
    async function post(resource, data) {
        try {
            if(typeof fetch === "function") {
            let response = await fetch(this.APIAdress + resource, {
                headers: {
                    "Authorization": this.APIKey,
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data)
            });
            return await response.json();
            } else if(typeof XMLHttpRequest === "function"){
                let xhttp = new XMLHttpRequest();
                xhttp.open("POST", this.APIAdress + resource, true);
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.setRequestHeader("authorization", this.APIKey);
                xhttp.send(JSON.stringify(data));
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                        if(this.readyState == 4 && this.status === 201) {
                            resolve(JSON.parse(xhttp.responseText))
                    }
                    }
                })
            } else {
                const nodeFetch = require('node-fetch');
                const body = { a: 1 };
 
                let response = await nodeFetch(this.APIAdress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(body)
                });
                return await response.json();
            }
        } catch (error) {
            throw error;
        }
    } 

    async function put(resource, data) {
        try {
            if(typeof fetch === "function") {
            let response = await fetch(this.APIAdress + resource, {
                headers: {
                    "Authorization": this.APIKey,
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify(data)
            });
            return await response.json();
            } else if (typeof XMLHttpRequest === "function"){
                let xhttp = new XMLHttpRequest();
                xhttp.open("PUT", this.APIAdress + resource, true);
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.setRequestHeader("authorization", this.APIKey);
                xhttp.send(JSON.stringify(data));
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                        if(this.readyState == 4 && this.status === 200) {
                            resolve(JSON.parse(xhttp.responseText))
                        }
                    }
                })
            } else {
                const nodeFetch = require('node-fetch');
                let response = await nodeFetch(this.APIAdress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                    },
                    method: "PUT",
                    body: JSON.stringify(data)
                });
                return await response.json();
            }
        } catch (error) {
            throw error;
        }
    }

    async function kill(resource, data) {
        try {
            if(typeof fetch === "function") {
                let response = await fetch(this.APIAdress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                    },
                    method: "DELETE"
            });
                return await new Promise(function(resolve, reject){
                    resolve(response.status);
                })
            }
            else if(typeof XMLHttpRequest === "function"){
                let xhttp = new XMLHttpRequest();
                xhttp.open("DELETE", this.APIAdress + resource, true);
                xhttp.send();
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                        resolve(xhttp.status);
                    }
                })
        } else {
            const nodeFetch = require('node-fetch');
            let response = await nodeFetch(this.APIAdress + resource, {
                headers: {
                    "Authorization": this.APIKey,
                },
                method: "DELETE"
        });
            return await new Promise(function(resolve, reject){
                resolve(response.status);
            })
        }
    }
         catch (error) {
            throw error;
        }
    }
    
    return {
       init,
       get,
       post,
       put,
       kill
    }  

}));