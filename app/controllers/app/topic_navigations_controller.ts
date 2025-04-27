import type { HttpContext } from '@adonisjs/core/http'
import Topic from '#models/topic'

export default class TopicNavigationsController {
	async show ({ params }: HttpContext) {
		const prev = await Topic.query()
			.select('id')
			.max('id')
			.where('id', '<', params.id)
			.firstOrFail()

		const next = await Topic.query()
			.select('id')
			.min('id')
			.where('id', '>', params.id)
			.firstOrFail()
		
		return {
			prev_topic_id: prev.id,
			next_topic_id: next.id
		}
	}
}