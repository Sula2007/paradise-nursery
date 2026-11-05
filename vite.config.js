import { defineConfig } from 'vite';
export default defineConfig({base:'./', esbuild:{jsx:'automatic'}, server:{allowedHosts:['terminal.local']}});
