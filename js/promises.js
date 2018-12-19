
const wait = delay => new Promise((resolve, reject) => setTimeout(resolve, delay))

/////////////////////////////////////////////////////////////////////

const API_TOKEN = '3fdee4dc6bfb4b2b486a498e59b55693b18d162f'
const FETCH_OPTIONS = {headers: {'Authorization': `token ${API_TOKEN}`}}

// return the response after checking for errors and parsing as JSON
const fetchJson = url => fetch(url, FETCH_OPTIONS)
    .then(response => response.status == 200 ? Promise.resolve(response) : Promise.reject(response))
    .then(response => response.json())

// specify an endpoint and make a request to the github api
const fetchGithub = endpoint => fetchJson(`https://api.github.com${endpoint}`)
// hit the user events endpoint for a specific username
const fetchUserEvents = username => fetchGithub(`/users/${username}/events`)
/**
 * Return the github push events for a given username
 * 
 * Note that not all the events returned by the github api are pushes, we also
 * have ForkEvents, among others. We can look at the .type property to
 * determine this.
 */
const getPushEvents = username => fetchUserEvents(username)
    .then(events => events.filter(evt => evt.type == 'PushEvent'))
// get the date of the last commit for a given user
const getLastCommit = username => getPushEvents(username)
    .then(pushEvents => pushEvents[0])
    .then(mostRecentPush => mostRecentPush.created_at)

getLastCommit('zgulde').then(date => console.log(date))