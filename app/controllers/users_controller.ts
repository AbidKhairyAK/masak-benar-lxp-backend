import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator, updateUserValidator } from '#validators/user'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    
    const users = await User.query().paginate(page, limit)
    return users
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createUserValidator)
    const user = await User.create(data)
    return user
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    return user
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ request, params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = await request.validateUsing(updateUserValidator)
    
    await user.merge(data).save()
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return user
  }
}