import request from 'request-promise'

const routes = {
  uri: 'http://wordpress.fengel.com/wp-json',
  pages: '/wp/v2/pages/',
  posts: '/wp/v2/posts/?per_page=100',
  menus: '/wp-api-menus/v2/menus',
  categories: '/wp/v2/categories',
  tags: '/wp/v2/tags',
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

const fetchPosts = (taxonomy, id) => {
  const filter = taxonomy && id ? `&${taxonomy}=${id}` : ''
  const uri = `${routes.uri}${routes.posts}${filter}`
  return request({
    uri,
  })
    .then(response => JSON.parse(response))
    .catch(err => {
      console.log('Err', err)
    })
}

const fetchPostById = id => {
  const uri = `${routes.uri}${id}`
  return request({
    uri,
  })
    .then(response => JSON.parse(response))
    .catch(err => {
      console.log('Err', err)
    })
}
const fetchPostBySlug = slug => {
  const filter = slug ? `&slug=${slug}` : ''
  const uri = `${routes.uri}${routes.posts}${filter}`
  console.log(uri)
  return request({
    uri,
  })
    .then(response => JSON.parse(response))
    .catch(err => {
      console.log('Err', err)
    })
}

const fetchMenus = () => {
  return request({
    uri: routes.uri + routes.menus,
  })
    .then(response => JSON.parse(response))
    .catch(err => {
      console.log('Err', err)
    })
}

const fetchCategories = () => {
  return request({
    uri: routes.uri + routes.categories,
  })
    .then(response => JSON.parse(response))
    .catch(err => {
      console.log('Err', err)
    })
}
const fetchTags = () => {
  return request({
    uri: routes.uri + routes.tags,
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
  fetchMenus,
  fetchCategories,
  fetchTags,
  fetchPostById,
  fetchPostBySlug,
}
