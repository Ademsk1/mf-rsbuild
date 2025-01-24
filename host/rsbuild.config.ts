import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

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
        provider: `provider@http://localhost:3001/remoteEntry.js`,
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