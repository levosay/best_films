import Link from 'next/link'
import { FunctionComponent, useMemo, useState } from 'react'
import { ButtonControl, Container, Icon, Title } from 'components'
import { useOrientation, useScrollBlock } from 'hooks'
import { AnimeConfigs, MountAnimation } from 'utils/animations'
import { Menu } from './components'
import { IHeaderProps } from './Header.d'
import {
	HeaderStyled,
	Logo,
	LogoImage,
	MenuAnimation,
	MenuBurger,
	Wrapper,
} from './styled'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
	const [openMenu, setOpenMenu] = useState(false)
	const burgerIcon = useMemo(() => (openMenu ? 'cross' : 'menu'), [openMenu])

	const toggleMenu = () => {
		setOpenMenu((prev) => !prev)
	}

	const closeMenu = () => {
		setOpenMenu(false)
	}

	useScrollBlock(openMenu)
	useOrientation(closeMenu)

	return (
		<Wrapper>
			<HeaderStyled isActive={openMenu}>
				<Link href="/">
					<Logo>
						<LogoImage
							src="/images/logo/logo.png"
							alt="Best Films"
							width={56}
							height={56}
						/>
						<Title size={36} text="Best Films" uppercase />
					</Logo>
				</Link>
				<Menu />
				<MenuBurger>
					<ButtonControl
						startIcon={<Icon id={burgerIcon} />}
						onClick={toggleMenu}
					/>
				</MenuBurger>
			</HeaderStyled>
			<MountAnimation
				flag={openMenu}
				config={AnimeConfigs.opacitySlideDownMenu}
				Component={MenuAnimation}
			>
				<Container>
					<Menu mobile />
				</Container>
			</MountAnimation>
		</Wrapper>
	)
}
