const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('about', '/about')
routes.add('services', '/services')
routes.add('contact', '/contact')
// routes.add('post', '/blog/:slug')
