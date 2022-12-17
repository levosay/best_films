/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Kinopoisk Unofficial API
 * Kinopoisk Unofficial API предоставляет доступ к данным сайта https://www.kinopoisk.ru. Для доступа вы должны получить токен, который будет доступен после регистрации на <a href="https://kinopoiskapiunofficial.tech">https://kinopoiskapiunofficial.tech</a> </br> <b>Ограничения:</b>  лимитов на общее кол-во запросов нет. Но есть на кол-во запросов в секунду. </br> Каждый пользователь имеет ограничение в <b>20 req/sec</b>. </br> <b>Некоторые</b> эндпоинты имеют свои собственные ограничения, они указаны в описании для статуса <b>429</b>. </br>
 * OpenAPI spec version: 2.0.1
 */
import type { PersonResponseSex } from './personResponseSex'
import type { PersonResponseSpouses } from './personResponseSpouses'
import type { PersonResponseFilms } from './personResponseFilms'

export interface PersonResponse {
	personId: number
	webUrl: string | null
	nameRu: string | null
	nameEn: string | null
	sex: PersonResponseSex
	posterUrl: string
	growth: string | null
	birthday: string | null
	death: string | null
	age: number | null
	birthplace: string | null
	deathplace: string | null
	hasAwards: number | null
	profession: string | null
	facts: string[]
	spouses: PersonResponseSpouses[]
	films: PersonResponseFilms[]
}
