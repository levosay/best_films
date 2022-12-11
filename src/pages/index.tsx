import { useAppSelector, userStore } from 'store'

const Home = () => {
	const { user } = useAppSelector(userStore)

	return (
		<div>
			<p>имя: {user?.name}</p>
			<p>почта: {user?.email}</p>
		</div>
	)
}

export default Home
