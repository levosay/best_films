import { GetServerSideProps } from 'next'
import { getApiV22Films } from 'api/service/films/films'
import { FilmsBlockModule } from 'modules'
import { wrapper } from 'store'
import { setFilms } from 'store/films'

const Home = () => {
	return <FilmsBlockModule />
}

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => async () => {
		try {
			const films = await getApiV22Films()
			store.dispatch(setFilms(films))
		} catch (erorr) {
			// TODO ошибку в стор
			console.log(erorr)
		}

		return { props: {} }
	})

export default Home
