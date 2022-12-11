import { UseTransitionProps } from 'react-spring'

const opacity: UseTransitionProps = {
	from: { opacity: 0 },
	enter: { opacity: 1 },
	leave: { opacity: 0 },
}

const opacityWithoutLeave: UseTransitionProps = {
	from: { opacity: 0 },
	enter: { opacity: 1 },
}

const opacitySlideDown: UseTransitionProps = {
	from: { opacity: 0, top: -200 },
	enter: { opacity: 1, top: -1 },
	leave: { opacity: 0 },
}

const opacitySlideDownMenu: UseTransitionProps = {
	from: { opacity: 0, top: -200 },
	enter: { opacity: 1, top: 104 },
	leave: { opacity: 0, top: -200 },
}

export const AnimeConfigs = {
	opacity,
	opacityWithoutLeave,
	opacitySlideDown,
	opacitySlideDownMenu,
}
