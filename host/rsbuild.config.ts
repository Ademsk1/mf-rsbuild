import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const PROVIDER = process.env.PROVIDER || 'provider';
const PROVIDER_PORT = PROVIDER === 'provider' ? '3001' : '3002';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  server: {
    port: 3000,
  },
  moduleFederation: {
    options: {
      name: 'host',
      remotes: {
        provider: `provider@http://localhost:${PROVIDER_PORT}/remoteEntry.js`,
      },
      shared: {
        react: { 
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true
        },
        'react-dom': { 
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true
        }
      }
    }
  }
}); 