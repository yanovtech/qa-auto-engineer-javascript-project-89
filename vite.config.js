import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const cssMock = {
  name: 'css-mock',
  transform(code, id) {
    if (id.endsWith('.css')) {
      return {
        code: '',
        map: null,
      };
    }
  },
};

export default defineConfig({
  plugins: [react(), cssMock],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'lcov'],
    },
  },
});
