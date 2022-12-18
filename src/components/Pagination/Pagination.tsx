import { FunctionComponent } from 'react'
import { BreakLabel, NextLabel, PrevLabel } from './components'
import { IPaginationProps } from './Pagination.d'
import { PaginationStyled, PaginationWrapper } from './styled'

export const Pagination: FunctionComponent<IPaginationProps> = (
	props
): JSX.Element => {
	return (
		<PaginationStyled>
			<PaginationWrapper
				breakLabel={<BreakLabel />}
				nextLabel={<NextLabel />}
				previousLabel={<PrevLabel />}
				{...props}
			/>
		</PaginationStyled>
	)
}
