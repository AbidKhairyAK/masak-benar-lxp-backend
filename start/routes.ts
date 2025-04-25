/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/', () => {
  return { hello: 'world' }
})

router.resource('users', '#controllers/users_controller').apiOnly()
router.resource('courses', '#controllers/courses_controller').apiOnly()

router.group(() => {
  // Public routes
  router.post('/register', '#controllers/auth_controller.register')
  router.post('/login', '#controllers/auth_controller.login')

  // Protected routes
  router.group(() => {
    router.get('/me', '#controllers/auth_controller.me')
    router.post('/logout', '#controllers/auth_controller.logout')
  }).use(middleware.auth())
}).prefix('/auth')