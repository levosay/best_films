/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['kinopoiskapiunofficial.tech'],
	},
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
