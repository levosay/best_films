/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Kinopoisk Unofficial API
 * Kinopoisk Unofficial API предоставляет доступ к данным сайта https://www.kinopoisk.ru. Для доступа вы должны получить токен, который будет доступен после регистрации на <a href="https://kinopoiskapiunofficial.tech">https://kinopoiskapiunofficial.tech</a> </br> <b>Ограничения:</b>  лимитов на общее кол-во запросов нет. Но есть на кол-во запросов в секунду. </br> Каждый пользователь имеет ограничение в <b>20 req/sec</b>. </br> <b>Некоторые</b> эндпоинты имеют свои собственные ограничения, они указаны в описании для статуса <b>429</b>. </br>
 * OpenAPI spec version: 2.0.1
 */
import useSwr from 'swr'
import type { SWRConfiguration, Key } from 'swr'
import type {
	Film,
	SeasonResponse,
	FactResponse,
	DistributionResponse,
	BoxOfficeResponse,
	AwardResponse,
	VideoResponse,
	RelatedFilmResponse,
	ImageResponse,
	GetApiV22FilmsIdImagesParams,
	ReviewResponse,
	GetApiV22FilmsIdReviewsParams,
	FilmTopResponse,
	GetApiV22FilmsTopParams,
	PremiereResponse,
	GetApiV22FilmsPremieresParams,
	FiltersResponse,
	FilmSearchByFiltersResponse,
	GetApiV22FilmsParams,
	FilmSequelsAndPrequelsResponse,
	FilmSearchResponse,
	GetApiV21FilmsSearchByKeywordParams,
	DigitalReleaseResponse,
	GetApiV21FilmsReleasesParams,
} from '../../models'
import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

/**
 * Данный эндпоинт возвращает базовые данные о фильме. Поле <b>lastSync</b> показывает дату последнего обновления данных.
 * @summary получить данные о фильме по kinopoisk id
 */
export const getApiV22FilmsId = (id: number) => {
	return customInstance<Film>({ url: `/api/v2.2/films/${id}`, method: 'get' })
}

export const getGetApiV22FilmsIdKey = (id: number) => [`/api/v2.2/films/${id}`]

export type GetApiV22FilmsIdQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsId>>
>
export type GetApiV22FilmsIdQueryError = ErrorType<void>

export const useGetApiV22FilmsId = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsId>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdKey(id) : null))
	const swrFn = () => getApiV22FilmsId(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает данные о сезонах для сериала.
 * @summary получить данные о сезонах для сериала по kinopoisk film id
 */
export const getApiV22FilmsIdSeasons = (id: number) => {
	return customInstance<SeasonResponse>({
		url: `/api/v2.2/films/${id}/seasons`,
		method: 'get',
	})
}

export const getGetApiV22FilmsIdSeasonsKey = (id: number) => [
	`/api/v2.2/films/${id}/seasons`,
]

export type GetApiV22FilmsIdSeasonsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdSeasons>>
>
export type GetApiV22FilmsIdSeasonsQueryError = ErrorType<void>

export const useGetApiV22FilmsIdSeasons = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdSeasons>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdSeasonsKey(id) : null))
	const swrFn = () => getApiV22FilmsIdSeasons(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает список фактов и ошибок в фильме. <br> type - <b>FACT</b>, обозначает интересный факт о фильме. <br> type - <b>BLOOPER</b>, обозначает ошибку в фильме.
 * @summary получить данные о фактах и ошибках в фильме по kinopoisk film id
 */
export const getApiV22FilmsIdFacts = (id: number) => {
	return customInstance<FactResponse>({
		url: `/api/v2.2/films/${id}/facts`,
		method: 'get',
	})
}

export const getGetApiV22FilmsIdFactsKey = (id: number) => [
	`/api/v2.2/films/${id}/facts`,
]

export type GetApiV22FilmsIdFactsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdFacts>>
>
export type GetApiV22FilmsIdFactsQueryError = ErrorType<void>

export const useGetApiV22FilmsIdFacts = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdFacts>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdFactsKey(id) : null))
	const swrFn = () => getApiV22FilmsIdFacts(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает данные о прокате в разных странах.
 * @summary получить данные о прокате фильма по kinopoisk film id
 */
export const getApiV22FilmsIdDistributions = (id: number) => {
	return customInstance<DistributionResponse>({
		url: `/api/v2.2/films/${id}/distributions`,
		method: 'get',
	})
}

export const getGetApiV22FilmsIdDistributionsKey = (id: number) => [
	`/api/v2.2/films/${id}/distributions`,
]

export type GetApiV22FilmsIdDistributionsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdDistributions>>
>
export type GetApiV22FilmsIdDistributionsQueryError = ErrorType<void>

export const useGetApiV22FilmsIdDistributions = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdDistributions>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdDistributionsKey(id) : null))
	const swrFn = () => getApiV22FilmsIdDistributions(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает данные о бюджете и сборах.
 * @summary получить данные о бюджете и сборах фильма по kinopoisk film id
 */
export const getApiV22FilmsIdBoxOffice = (id: number) => {
	return customInstance<BoxOfficeResponse>({
		url: `/api/v2.2/films/${id}/box_office`,
		method: 'get',
	})
}

export const getGetApiV22FilmsIdBoxOfficeKey = (id: number) => [
	`/api/v2.2/films/${id}/box_office`,
]

export type GetApiV22FilmsIdBoxOfficeQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdBoxOffice>>
>
export type GetApiV22FilmsIdBoxOfficeQueryError = ErrorType<void>

export const useGetApiV22FilmsIdBoxOffice = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdBoxOffice>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdBoxOfficeKey(id) : null))
	const swrFn = () => getApiV22FilmsIdBoxOffice(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает данные о наградах и премиях фильма.
 * @summary получить данные о наградах фильма по kinopoisk film id
 */
export const getApiV22FilmsIdAwards = (id: number) => {
	return customInstance<AwardResponse>({
		url: `/api/v2.2/films/${id}/awards`,
		method: 'get',
	})
}

export const getGetApiV22FilmsIdAwardsKey = (id: number) => [
	`/api/v2.2/films/${id}/awards`,
]

export type GetApiV22FilmsIdAwardsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdAwards>>
>
export type GetApiV22FilmsIdAwardsQueryError = ErrorType<void>

export const useGetApiV22FilmsIdAwards = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdAwards>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdAwardsKey(id) : null))
	const swrFn = () => getApiV22FilmsIdAwards(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает трейлеры,тизеры,видео для фильма по kinopoisk film id. В данный момент доступно два site:  <br/> <ul><li>YOUTUBE - в этом случае <b>url</b> это просто ссылка на youtube видео.</li><li>KINOPOISK_WIDGET - в этом случае <b>url</b> это ссылка на кинопоиск виджет. Например https://widgets.kinopoisk.ru/discovery/trailer/123573?onlyPlayer=1&autoplay=1&cover=1. Если вы хотите вставить этот виджет на вашу страницу, вы можете сделать следующее:  <br/><br/>&lt;script src=&quot;https://unpkg.com/@ungap/custom-elements-builtin&quot;&gt;&lt;/script&gt;<br/>&lt;script type=&quot;module&quot; src=&quot;https://unpkg.com/x-frame-bypass&quot;&gt;&lt;/script&gt;<br/>&lt;iframe is=&quot;x-frame-bypass&quot; src=&quot;https://widgets.kinopoisk.ru/discovery/trailer/167560?onlyPlayer=1&amp;autoplay=1&amp;cover=1&quot; width=&quot;500&quot; height=&quot;500&quot;&gt;&lt;/iframe&gt;</li></ul>
 * @summary получить трейлеры,тизеры,видео для фильма по kinopoisk film id
 */
export const getApiV22FilmsIdVideos = (id: number) => {
	return customInstance<VideoResponse>({
		url: `/api/v2.2/films/${id}/videos`,
		method: 'get',
	})
}

export const getGetApiV22FilmsIdVideosKey = (id: number) => [
	`/api/v2.2/films/${id}/videos`,
]

export type GetApiV22FilmsIdVideosQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdVideos>>
>
export type GetApiV22FilmsIdVideosQueryError = ErrorType<void>

export const useGetApiV22FilmsIdVideos = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdVideos>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdVideosKey(id) : null))
	const swrFn = () => getApiV22FilmsIdVideos(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * @summary получить список похожих фильмов по kinopoisk film id
 */
export const getApiV22FilmsIdSimilars = (id: number) => {
	return customInstance<RelatedFilmResponse>({
		url: `/api/v2.2/films/${id}/similars`,
		method: 'get',
	})
}

export const getGetApiV22FilmsIdSimilarsKey = (id: number) => [
	`/api/v2.2/films/${id}/similars`,
]

export type GetApiV22FilmsIdSimilarsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdSimilars>>
>
export type GetApiV22FilmsIdSimilarsQueryError = ErrorType<void>

export const useGetApiV22FilmsIdSimilars = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdSimilars>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdSimilarsKey(id) : null))
	const swrFn = () => getApiV22FilmsIdSimilars(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает изображения связанные с фильмом с пагинацией. Каждая страница содержит <b>не более чем 20 фильмов</b>.</br> Доступные изображения:</br> <ul> <li>STILL - кадры</li> <li>SHOOTING - изображения со съемок</li> <li>POSTER - постеры</li> <li>FAN_ART - фан-арты</li> <li>PROMO - промо</li> <li>CONCEPT - концепт-арты</li> <li>WALLPAPER - обои</li> <li>COVER - обложки</li> <li>SCREENSHOT - скриншоты</li> </ul>
 * @summary получить изображения(кадры, постеры, фан-арты, обои и т.д.) связанные с фильмом по kinopoisk film id
 */
export const getApiV22FilmsIdImages = (
	id: number,
	params?: GetApiV22FilmsIdImagesParams
) => {
	return customInstance<ImageResponse>({
		url: `/api/v2.2/films/${id}/images`,
		method: 'get',
		params,
	})
}

export const getGetApiV22FilmsIdImagesKey = (
	id: number,
	params?: GetApiV22FilmsIdImagesParams
) => [`/api/v2.2/films/${id}/images`, ...(params ? [params] : [])]

export type GetApiV22FilmsIdImagesQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdImages>>
>
export type GetApiV22FilmsIdImagesQueryError = ErrorType<void>

export const useGetApiV22FilmsIdImages = <TError = ErrorType<void>>(
	id: number,
	params?: GetApiV22FilmsIdImagesParams,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdImages>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdImagesKey(id, params) : null))
	const swrFn = () => getApiV22FilmsIdImages(id, params)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Возвращает список рецензии зрителей с пагинацией. Каждая страница содержит не более чем 20 рецензий.
 * @summary получить список рецензии зрителей по kinopoisk film id
 */
export const getApiV22FilmsIdReviews = (
	id: number,
	params?: GetApiV22FilmsIdReviewsParams
) => {
	return customInstance<ReviewResponse>({
		url: `/api/v2.2/films/${id}/reviews`,
		method: 'get',
		params,
	})
}

export const getGetApiV22FilmsIdReviewsKey = (
	id: number,
	params?: GetApiV22FilmsIdReviewsParams
) => [`/api/v2.2/films/${id}/reviews`, ...(params ? [params] : [])]

export type GetApiV22FilmsIdReviewsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsIdReviews>>
>
export type GetApiV22FilmsIdReviewsQueryError = ErrorType<void>

export const useGetApiV22FilmsIdReviews = <TError = ErrorType<void>>(
	id: number,
	params?: GetApiV22FilmsIdReviewsParams,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsIdReviews>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsIdReviewsKey(id, params) : null))
	const swrFn = () => getApiV22FilmsIdReviews(id, params)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Возвращает список фильмов с пагинацией. Каждая страница содержит не более чем 20 фильмов.
 * @summary получить список фильмов из различных топов или коллекций. Например https://www.kinopoisk.ru/top/lists/58/
 */
export const getApiV22FilmsTop = (params?: GetApiV22FilmsTopParams) => {
	return customInstance<FilmTopResponse>({
		url: `/api/v2.2/films/top`,
		method: 'get',
		params,
	})
}

export const getGetApiV22FilmsTopKey = (params?: GetApiV22FilmsTopParams) => [
	`/api/v2.2/films/top`,
	...(params ? [params] : []),
]

export type GetApiV22FilmsTopQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsTop>>
>
export type GetApiV22FilmsTopQueryError = ErrorType<void>

export const useGetApiV22FilmsTop = <TError = ErrorType<void>>(
	params?: GetApiV22FilmsTopParams,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsTop>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsTopKey(params) : null))
	const swrFn = () => getApiV22FilmsTop(params)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает список кинопремьер. Например https://www.kinopoisk.ru/premiere/
 * @summary получить список кинопремьер
 */
export const getApiV22FilmsPremieres = (
	params: GetApiV22FilmsPremieresParams
) => {
	return customInstance<PremiereResponse>({
		url: `/api/v2.2/films/premieres`,
		method: 'get',
		params,
	})
}

export const getGetApiV22FilmsPremieresKey = (
	params: GetApiV22FilmsPremieresParams
) => [`/api/v2.2/films/premieres`, ...(params ? [params] : [])]

export type GetApiV22FilmsPremieresQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsPremieres>>
>
export type GetApiV22FilmsPremieresQueryError = ErrorType<void>

export const useGetApiV22FilmsPremieres = <TError = ErrorType<void>>(
	params: GetApiV22FilmsPremieresParams,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22FilmsPremieres>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsPremieresKey(params) : null))
	const swrFn = () => getApiV22FilmsPremieres(params)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Возвращает список id стран и жанров, которые могут быть использованы в /api/v2.2/films
 * @summary получить id стран и жанров для использования в /api/v2.2/films
 */
export const getApiV22FilmsFilters = () => {
	return customInstance<FiltersResponse>({
		url: `/api/v2.2/films/filters`,
		method: 'get',
	})
}

export const getGetApiV22FilmsFiltersKey = () => [`/api/v2.2/films/filters`]

export type GetApiV22FilmsFiltersQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22FilmsFilters>>
>
export type GetApiV22FilmsFiltersQueryError = ErrorType<void>

export const useGetApiV22FilmsFilters = <TError = ErrorType<void>>(options?: {
	swr?: SWRConfiguration<
		Awaited<ReturnType<typeof getApiV22FilmsFilters>>,
		TError
	> & { swrKey?: Key; enabled?: boolean }
}) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsFiltersKey() : null))
	const swrFn = () => getApiV22FilmsFilters()

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Возвращает список фильмов с пагинацией. Каждая страница содержит не более чем 20 фильмов. Данный эндпоинт не возращает более 400 фильмов. <i>Используй /api/v2.2/films/filters чтобы получить id стран и жанров.</i>
 * @summary получить список фильмов по различным фильтрам
 */
export const getApiV22Films = (params?: GetApiV22FilmsParams) => {
	return customInstance<FilmSearchByFiltersResponse>({
		url: `/api/v2.2/films`,
		method: 'get',
		params,
	})
}

export const getGetApiV22FilmsKey = (params?: GetApiV22FilmsParams) => [
	`/api/v2.2/films`,
	...(params ? [params] : []),
]

export type GetApiV22FilmsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV22Films>>
>
export type GetApiV22FilmsQueryError = ErrorType<void>

export const useGetApiV22Films = <TError = ErrorType<void>>(
	params?: GetApiV22FilmsParams,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV22Films>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV22FilmsKey(params) : null))
	const swrFn = () => getApiV22Films(params)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * tbd
 * @summary получить сиквелы и приквелы для фильма по kinopoisk film id
 */
export const getApiV21FilmsIdSequelsAndPrequels = (id: number) => {
	return customInstance<FilmSequelsAndPrequelsResponse[]>({
		url: `/api/v2.1/films/${id}/sequels_and_prequels`,
		method: 'get',
	})
}

export const getGetApiV21FilmsIdSequelsAndPrequelsKey = (id: number) => [
	`/api/v2.1/films/${id}/sequels_and_prequels`,
]

export type GetApiV21FilmsIdSequelsAndPrequelsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV21FilmsIdSequelsAndPrequels>>
>
export type GetApiV21FilmsIdSequelsAndPrequelsQueryError = ErrorType<void>

export const useGetApiV21FilmsIdSequelsAndPrequels = <TError = ErrorType<void>>(
	id: number,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV21FilmsIdSequelsAndPrequels>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false && !!id
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV21FilmsIdSequelsAndPrequelsKey(id) : null))
	const swrFn = () => getApiV21FilmsIdSequelsAndPrequels(id)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Возвращает список фильмов с пагинацией. Каждая страница содержит не более чем 20 фильмов.
 * @summary получить список фильмов по ключевым словам
 */
export const getApiV21FilmsSearchByKeyword = (
	params: GetApiV21FilmsSearchByKeywordParams
) => {
	return customInstance<FilmSearchResponse>({
		url: `/api/v2.1/films/search-by-keyword`,
		method: 'get',
		params,
	})
}

export const getGetApiV21FilmsSearchByKeywordKey = (
	params: GetApiV21FilmsSearchByKeywordParams
) => [`/api/v2.1/films/search-by-keyword`, ...(params ? [params] : [])]

export type GetApiV21FilmsSearchByKeywordQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV21FilmsSearchByKeyword>>
>
export type GetApiV21FilmsSearchByKeywordQueryError = ErrorType<void>

export const useGetApiV21FilmsSearchByKeyword = <TError = ErrorType<void>>(
	params: GetApiV21FilmsSearchByKeywordParams,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV21FilmsSearchByKeyword>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV21FilmsSearchByKeywordKey(params) : null))
	const swrFn = () => getApiV21FilmsSearchByKeyword(params)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}

/**
 * Данный эндпоинт возвращает список цифровых релизов. Например https://www.kinopoisk.ru/comingsoon/digital/
 * @summary получить список цифровых релизов
 */
export const getApiV21FilmsReleases = (
	params: GetApiV21FilmsReleasesParams
) => {
	return customInstance<DigitalReleaseResponse>({
		url: `/api/v2.1/films/releases`,
		method: 'get',
		params,
	})
}

export const getGetApiV21FilmsReleasesKey = (
	params: GetApiV21FilmsReleasesParams
) => [`/api/v2.1/films/releases`, ...(params ? [params] : [])]

export type GetApiV21FilmsReleasesQueryResult = NonNullable<
	Awaited<ReturnType<typeof getApiV21FilmsReleases>>
>
export type GetApiV21FilmsReleasesQueryError = ErrorType<void>

export const useGetApiV21FilmsReleases = <TError = ErrorType<void>>(
	params: GetApiV21FilmsReleasesParams,
	options?: {
		swr?: SWRConfiguration<
			Awaited<ReturnType<typeof getApiV21FilmsReleases>>,
			TError
		> & { swrKey?: Key; enabled?: boolean }
	}
) => {
	const { swr: swrOptions } = options ?? {}

	const isEnabled = swrOptions?.enabled !== false
	const swrKey =
		swrOptions?.swrKey ??
		(() => (isEnabled ? getGetApiV21FilmsReleasesKey(params) : null))
	const swrFn = () => getApiV21FilmsReleases(params)

	const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
		swrKey,
		swrFn,
		swrOptions
	)

	return {
		swrKey,
		...query,
	}
}