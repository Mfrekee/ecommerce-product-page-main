import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
    },
    build: {
        rollupOptions: {
            external: ['/Windows.old/Users/Mfrekemfon/my codes/Front End Mentor/ecommerce-product-page-main']
        }
    }
});
