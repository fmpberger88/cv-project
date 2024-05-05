import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    rootDir: '__tests__',
    testMatch: '**/*.test.jsx',
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './__tests__/setup.js',
    }
})