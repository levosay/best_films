import Link from 'next/link'
import { useAppSelector, userStore } from 'store'
const Home = () => {
	const { user } = useAppSelector(userStore)

	return (
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
	)
}

export default Home
