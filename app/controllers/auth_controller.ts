import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  /**
   * Register a new user
   */
  async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)
    const token = await User.accessTokens.create(user)

    return response.created({
      user: user.serialize(),
      token: token.value,
      type: 'bearer'
    })
  }

  /**
   * Login user and generate token
   */
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    
    // This will throw if credentials are invalid
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.ok({
      user: user.serialize(),
      token: token.value,
      type: 'bearer'
    })
  }

  /**
   * Get authenticated user profile
   */
  async me({ auth, response }: HttpContext) {
    const user = auth.user!
    return response.ok(user.serialize())
  }

  /**
   * Logout user by revoking token
   */
  async logout({ auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
    return response.ok({ message: 'Logged out successfully' })
  }
} 