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