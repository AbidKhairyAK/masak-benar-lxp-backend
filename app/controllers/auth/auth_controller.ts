import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  /**
   * Register a new user
   */
  async register({ request }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)
    const token = await User.accessTokens.create(user)

    return { token, user }
  }

  /**
   * Login user and generate token
   */
  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    
    // This will throw if credentials are invalid
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return { token, user }
  }

  /**
   * Get authenticated user profile
   */
  async me({ auth }: HttpContext) {
    const user = auth.user
    return user
  }

  /**
   * Logout user by revoking token
   */
  async logout({ auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
    return response.ok({ message: 'Logged out successfully' })
  }
} 