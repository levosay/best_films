import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import { ButtonControl, Container, Icon, Title } from 'components'
import { useOrientation, useScrollBlock } from 'hooks'
import { AnimeConfigs, MountAnimation } from 'utils/animations'
import { Menu, Author } from './components'
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
				<Author />
				<MenuBurger>
					<ButtonControl
						startIcon={<Icon id={openMenu ? 'cross' : 'menu'} />}
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
