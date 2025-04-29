/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutoSwagger from "adonis-autoswagger";
import swagger from "#config/swagger";
import { middleware } from '#start/kernel'

router.get('/', () => ({ hello: 'world' }))

// === PUBLIC ROUTES ===
router.get('/courses', '#controllers/app/courses_controller.index')
router.get('/courses/:id', '#controllers/app/courses_controller.show')
router.get('/courses/:id/structure', '#controllers/app/course_structures_controller.show')
router.get('/topics/:id/navigation', '#controllers/app/topic_navigations_controller.show')
router.get('/topics/:id/content', '#controllers/app/topics_controller.show')
router.get('/topics/:id/single_choice/questions', '#controllers/app/single_choice_questions_controller.index')
router.get('/single_choice/questions/:id', '#controllers/app/single_choice_questions_controller.show').use(middleware.auth())


// === ADMIN ROUTES ===
router.group(() => {
  router.resource('users', '#controllers/admin/users_controller').apiOnly()
  router.resource('courses', '#controllers/admin/courses_controller').apiOnly()
}).prefix('/admin').as('admin').use(middleware.auth())


// === AUTH ROUTES ===
router.group(() => {
  router.post('/register', '#controllers/auth/auth_controller.register').as('')
  router.post('/login', '#controllers/auth/auth_controller.login')

  router.get('/me', '#controllers/auth/auth_controller.me').use(middleware.auth())
  router.post('/logout', '#controllers/auth/auth_controller.logout').use(middleware.auth())
}).prefix('/auth')


// === SWAGGER ROUTES

// returns swagger in YAML
router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

// Renders Swagger-UI and passes YAML-output of /swagger
router.get("/docs", async () => {
  // return AutoSwagger.default.ui("/swagger", swagger);
  // return AutoSwagger.default.scalar("/swagger"); // to use Scalar instead. If you want, you can pass proxy url as second argument here.
  return AutoSwagger.default.rapidoc("/swagger", "view"); // to use RapiDoc instead (pass "view" default, or "read" to change the render-style)
});