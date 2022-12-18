import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import styled from 'styled-components'
import { ButtonStyled } from 'components/buttons/ButtonControl/styled'
import { IconStyled } from 'components/Icon/styled'
import { breakpoints, colors, Transition } from 'utils/constants'

export const PaginationStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const PaginationWrapper = styled(
	ReactPaginate
).attrs<ReactPaginateProps>({
	activeClassName: 'active',
	nextClassName: 'next-btn',
	nextLinkClassName: 'next-btn__link',
	previousClassName: 'prev-btn',
	previousLinkClassName: 'prev-btn__link',
	breakClassName: 'break-item',
	breakLinkClassName: 'break-link',
	pageClassName: 'page-item',
	pageLinkClassName: 'page-link',
})`
	display: flex;
	align-items: center;

	@media ${breakpoints.mobileMax} {
		width: 100%;
	}

	.prev-btn {
		transform: rotate(180deg);
	}

	.prev-btn,
	.next-btn {
		${ButtonStyled} {
			width: 48px;
			height: 48px;
			padding: 12px;

			${IconStyled} {
				margin: 0;
			}
		}

		&.disabled {
			display: none;
		}
	}

	.prev-btn {
		margin-right: calc(24px - 12px);

		&.disabled + .page-item {
			margin-left: 0;
		}

		@media ${breakpoints.mobileMax} {
			margin-right: 4px;
		}
	}

	.next-btn {
		margin-left: calc(24px - 12px);

		@media ${breakpoints.tabletMax} {
			margin-left: auto;
		}
	}

	.page-item,
	.break-item {
		font-size: 14px;
		line-height: 20px;
		font-weight: 500;
		border-radius: 99px;
		transition: color ${Transition.ms200};
		cursor: pointer;
	}

	.page-item {
		width: 48px;
		height: 48px;
		color: ${colors.black};
		background-color: ${colors.grey};
		margin-left: 4px;
		margin-right: 4px;

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}

		&:hover {
			color: ${colors.primaryDark};
			background-color: ${colors.greyDark};
		}

		&.active {
			color: ${colors.white};
			background-color: ${colors.greyDark};
		}

		@media ${breakpoints.tabletMax} {
			margin-left: 4px;
			margin-right: 4px;
		}
	}

	.break-item {
		color: ${colors.greyDark};
		margin: 0 10px;
	}

	.page-link,
	.break-link {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.page-link,
	.break-link,
	.prev-btn__link,
	.next-btn__link {
		&:focus {
			outline: none;
		}
	}
`
