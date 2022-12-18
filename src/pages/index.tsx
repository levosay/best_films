import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { getApiV22Films } from 'api/service/films/films'
import { UseFilms } from 'hooks'
import { useAppSelector, userStore, wrapper } from 'store'
import { setFilms } from 'store/films'
const Home = () => {
	const { user } = useAppSelector(userStore)
	const { films } = UseFilms()

	return (
		<>
			{isGlobalLoad === 'pending' && <div>ЗАГРУЗКА</div>}

			<div>
				<div>
					<Link href="/signup">рега</Link>
				</div>

				<div>
					<Link href="/signin">вход</Link>
				</div>
				<p>имя: {user?.name}</p>
				<p>почта: {user?.email}</p>
			</div>
		</>
	)
}

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => async () => {
		try {
			const films = await getApiV22Films()
			store.dispatch(setFilms(films))
		} catch (erorr) {
			console.log(erorr)
		}

		return { props: {} }
	})

export default Home
