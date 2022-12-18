import { defineConfig } from 'orval'

export default defineConfig({
	api: {
		input: {
			target: `https://kinopoiskapiunofficial.tech/documentation/api/openapi.json`,
		},
		output: {
			schemas: 'src/api/models',
			target: 'src/api/service/api.ts',
			mode: 'tags-split',
			client: 'swr',
			override: {
				mutator: {
					path: 'src/api/mutator/custom-instance.ts',
					name: 'customInstance',
				},
			},
		},
		hooks: {
			afterAllFilesWrite: 'prettier --write',
		},
	},
})
