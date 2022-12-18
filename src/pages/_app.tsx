import 'assets/styles/main.scss'
import type { AppProps } from 'next/app'
import { InitialProvider } from 'components'
import { MyLayout } from 'layouts'
import { wrapper } from 'store'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<InitialProvider>
			<MyLayout>
				<Component {...pageProps} />
			</MyLayout>
		</InitialProvider>
	)
}

export default wrapper.withRedux(App)
