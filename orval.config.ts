import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: {
      // target: './swagger.yaml',
      target: `https://dev.contipromo.notamedia.ru/swagger/swagger/swagger.yaml`,
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
