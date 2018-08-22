const path = require('path')

module.exports = {
  routes: [
    {
      path: '/',
      component: path.resolve('./src/components/Home/Home.js'),
    },
    {
      path: '/blog',
      component: path.resolve('./src/components/Blog/Blog.js'),
    },
    {
      path: '/resume',
      component: path.resolve('./src/components/Resume/Resume.js'),
    },
    {
      path: '/projects',
      component: path.resolve('./src/components/Projects/Projects.js'),
    },
  ]
}
