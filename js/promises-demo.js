/**
 * Promises Review 
 * 
 * 1. what does asynchronous mean?
 * 2. what is a promise?
 * 3. what is a fetch?
 * 4. demo: abstract error checking and json parsing
 *    1. "bare" fetch with hardcoded url + error checking and json functions
 *    2. Review control flow, add console.logs
 *    3. abstract error checking and json parsing
 *    4. abstract url
 *    5. es6 refactor
 */

const API_TOKEN = '3fdee4dc6bfb4b2b486a498e59b55693b18d162f';

const fetchOptions = {
    headers: {'Authorization': `token ${API_TOKEN}`}
}

function checkResponseForErrors(response) {
    console.group('checkResponseForErrors')
    console.log(response)
    console.groupEnd()
    if (response.status !== 200) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
}

function parseResponseAsJson(response) {
    console.group('parseResponseAsJson')
    console.log(response)
    console.groupEnd()
    const jsonResponse = response.json();
    return jsonResponse;
}

function getSecondElement(data) {
    console.group('getSecondElement')
    console.log(data)
    console.groupEnd()
    return data[1];
}

function getId(githubApiObject) {
    console.group('getId')
    console.log(githubApiObject)
    console.groupEnd()
    return githubApiObject.id;
}

function logData(data) {
    console.group('logData')
    console.log(data);
    console.groupEnd();
}

fetch('https://api.github.com/users/zgulde/events', fetchOptions)
    .then(checkResponseForErrors)
    .then(parseResponseAsJson)
    .then(getSecondElement)
    .then(getId)
    .then(logData);

console.log('When will you see this?')

















// function makeFetchRequestAndReturnJson(url) {
//     const fetchPromise = fetch(url)
//     const jsonPromise = fetchPromise.then(response => response.json())
//     return jsonPromise
// }

// function checkResponseForErrors(response) {
//     if (response.status == 200) {
//         return Promise.resolve(response)
//     } else {
//         return Promise.reject(response)
//     }
// }

// function parseResponseAsJson(response) {
//     return response.json()
// }


// fetch('https://api.github.com/users/zgulde/events')
//     .then(checkResponseForErrors)
//     .then(parseResponseAsJson)
//     .then(function(data) {
//         console.log(data)
//         /* use data to do some DOM manipulation */
//         /* show an alert to a user */
//     })

// console.log('When do we see this?')














// const url = 'api.github.com/...'

// function myFetchRequest(url) {
//     return fetch(url)
//         .then(githubUser)
//         .then(json)
// }

// myFetchRequest('api.github.com/whatever').then(response => /* .. */)
// myFetchRequest('api.github.com/something-else').then(response => /* .. */)

// function makeFetchRequestAndReturnJson(url) {
//     return fetch(url).then(response => response.json())
// }

// makeFetchRequestAndReturnJson('api.github.com')
//     .then(response => console.log(response))
