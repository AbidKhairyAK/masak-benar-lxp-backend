import PracticeSingleChoiceQuestion from '#models/practice_single_choice_question'
import type { HttpContext } from '@adonisjs/core/http'

export default class SingleChoiceQuestionsController {

	// Get a list of single choice question
	//
	// TODO: user answernya ngambil dari yg paling terakhir dijawab, 
	// tapi belum tentu yg dijawab pada sesi ini,
	// bisa jadi yg dijawab pada sesi sebelumya.
	//
	async index({ params, auth }: HttpContext) {
		const topicId = params.id
		
		const questions = await PracticeSingleChoiceQuestion.query()
			.select('id', 'practice_id')
			.whereHas('practice', query => {
				query.where('topic_id', topicId)
			})
			.preload('userAnswers', query => {
				query.select('id', 'user_id', 'question_id')
					.where('user_id', auth.user!.id)
					.orderBy('updated_at', 'desc')
			})

		return questions.map(question => ({
			question_id: question.id,
			user_answer_id: question.userAnswers.length ? question.userAnswers[0]?.id : null
		}))
	}

	// Get a detail of single choice question
	async show({ params, auth }: HttpContext) {
		const questionId = params.id

		const question = await PracticeSingleChoiceQuestion.query()
			.select('id', 'practice_id', 'question')
			.where('id', questionId)
			.preload('options', query => {
				query.select('id', 'question_id', 'description')
			})
			.preload('userAnswers', query => {
				query.select('id', 'user_id', 'question_id')
					.where('user_id', auth.user!.id)
					.orderBy('updated_at', 'desc')
			})
			.firstOrFail()

		return question
	}
}