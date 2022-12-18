import { FunctionComponent } from 'react'
import { Icon } from 'components'
import { ButtonControl } from 'components/buttons'

export const PrevLabel: FunctionComponent = (): JSX.Element => {
	return (
		<>
			<ButtonControl
				as="button"
				theme="gray"
				startIcon={<Icon id={'arrow-right'} />}
			/>
		</>
	)
}
