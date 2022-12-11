import 'assets/styles/main.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { InitialProvider } from 'components'
import { MyLayout } from 'layouts'
import { store } from 'store'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<InitialProvider>
				<MyLayout>
					<Component {...pageProps} />
				</MyLayout>
			</InitialProvider>
		</Provider>
	)
}
