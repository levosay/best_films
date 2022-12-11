import { useRouter } from 'next/router'
// import { useMemo } from 'react'

export const UseActiveLink = (href: string) => {
	const { asPath } = useRouter()
	// const active = useMemo(() => asPath.includes(href), [href])
	const active = asPath === href

	return {
		active,
	}
}
