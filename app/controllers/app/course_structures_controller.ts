import { HttpContext } from '@adonisjs/core/http'
import Chapter from '#models/chapter'

export default class CourseStructureController {
	/**
	 * Get the structure of a chapters and topics of a course
	 */
	async show({ params }: HttpContext) {
		const chapters = await Chapter.query()
			.where('course_id', params.id)
			.orderBy('sort_order')
			.preload('topics', query => {
				query.orderBy('sort_order')
			})

		return chapters
	}
} 