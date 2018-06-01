import request from 'request-promise'

const routes = {
    uri: 'http://fengel.com/wp-json',
    pages: '/wp/v2/pages/',
    posts: '/wp/v2/posts/',
    menus: '/menus/v1/menus',
}

const fetchRoot = () => {
    return request({
            uri: routes.uri,
        })
        .then(response => JSON.parse(response))
        .catch(err => {
            console.log('Err', err)
        })
}

const fetchPages = () => {
    return request({
            uri: routes.uri + routes.pages,
        })
        .then(response => JSON.parse(response))
        .catch(err => {
            console.log('Err', err)
        })
}

const fetchPosts = () => {
    return request({
            uri: routes.uri + routes.posts,
        })
        .then(response => JSON.parse(response))
        .catch(err => {
            console.log('Err', err)
        })
}

const fetchMenus = () => {
    return request({
            uri: routes.uri + routes.posts,
        })
        .then(response => JSON.parse(response))
        .catch(err => {
            console.log('Err', err)
        })
}

export {
    fetchRoot,
    fetchPages,
    fetchPosts,
    fetchMenus
}