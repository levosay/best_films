import { FunctionComponent } from 'react'
import { colors } from 'utils/constants'

import { IPreloaderProps } from './Preloader.d'

export const CirclePreloader: FunctionComponent<
	Pick<IPreloaderProps, 'strokeWidth' | 'height' | 'width'>
> = ({ strokeWidth = 50, height = 100, width = 100 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			height={height}
			width={width}
			x="0"
			y="0"
			viewBox="0 0 600 600"
		>
			<defs>
				<linearGradient id="Gradient1" gradientTransform="rotate(90)">
					<stop offset="0%" stopColor={colors.primaryDark} />
					<stop offset="100%" stopColor={colors.primaryLight} />
				</linearGradient>
				<linearGradient id="Gradient2" gradientTransform="rotate(90)">
					<stop offset="0%" stopColor={colors.primaryLight} stopOpacity="0" />
					<stop offset="90%" stopColor={colors.primaryLight} />
				</linearGradient>
				<pattern
					id="Pattern"
					x="0"
					y="0"
					width="600"
					height="600"
					patternUnits="userSpaceOnUse"
				>
					<g transform="rotate(0, 300, 300)">
						<rect
							shapeRendering="crispEdges"
							x="0"
							y="0"
							width="300"
							height="600"
							fill="url(#Gradient1)"
						/>
						<rect
							shapeRendering="crispEdges"
							x="300"
							y="0"
							width="300"
							height="600"
							fill="url(#Gradient2)"
						/>
					</g>
				</pattern>
			</defs>
			<path
				style={{
					stroke: 'url(#Pattern)',
				}}
				fill="transparent"
				transform="rotate(105, 300, 300)"
				strokeWidth={strokeWidth}
				d="M 364 58 A 250 250 0 1 1 235 58"
			/>
			<animateTransform
				from="0 0 0"
				to="360 0 0"
				attributeName="transform"
				type="rotate"
				repeatCount="indefinite"
				dur="1300ms"
			/>
		</svg>
	)
}
