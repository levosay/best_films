import Link from 'next/link'
import { FunctionComponent, PropsWithChildren, useMemo } from 'react'
import { protocolLinkCheck } from 'utils/helpers'
import { TButtonProps } from './Button.d'
import { ButtonStyled, ButtonTitle } from './styled'

export const ButtonControl: FunctionComponent<
	PropsWithChildren<TButtonProps>
> = ({
	theme = 'primary',
	fontWeight = 500,
	title,
	startIcon,
	endIcon,
	fullWidth,
	noFilled,
	children,
	...props
}): JSX.Element => {
	const buttonInner = useMemo(
		() => (
			<>
				{startIcon && startIcon}
				{title && <ButtonTitle fontWeight={fontWeight}>{title}</ButtonTitle>}
				{children}
				{endIcon && endIcon}
			</>
		),
		[children, endIcon, fontWeight, startIcon, title]
	)

	if (props.as === 'a') {
		const { as, href, onClick, ...nextLinkProps } = props
		const externalHref = protocolLinkCheck(href)

		if (externalHref) {
			return (
				<ButtonStyled
					fullWidth={fullWidth}
					theme={theme}
					noFilled={noFilled}
					{...props}
				>
					{buttonInner}
				</ButtonStyled>
			)
		}

		return (
			<Link href={href} passHref {...nextLinkProps}>
				<ButtonStyled
					as={as}
					fullWidth={fullWidth}
					noFilled={noFilled}
					onClick={onClick}
				>
					{buttonInner}
				</ButtonStyled>
			</Link>
		)
	}

	return (
		<ButtonStyled
			fullWidth={fullWidth}
			theme={theme}
			noFilled={noFilled}
			{...props}
		>
			{buttonInner}
		</ButtonStyled>
	)
}
