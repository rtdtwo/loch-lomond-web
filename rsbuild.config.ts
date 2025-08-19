import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  
  // HTML template configuration
  html: {
    template: './public/index.html',
    title: 'Rishabh Tatiraju - Financial Software Engineer | Portfolio',
    meta: {
      viewport: 'width=device-width, initial-scale=1.0',
      description: 'Financial Software Associate at Galatea Associates LLC. Specializing in algorithmic trading systems, financial applications, and high-performance software solutions.',
      keywords: 'financial software engineer, algorithmic trading, fintech, software development, Galatea Associates, portfolio, Rishabh Tatiraju',
      author: 'Rishabh Tatiraju',
      robots: 'index, follow',
      'theme-color': '#0d6efd',
      'msapplication-TileColor': '#0d6efd',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Rishabh Tatiraju'
    }
  },
  
  // Performance optimizations
  performance: {
    chunkSplit: {
      strategy: 'split-by-module',
      forceSplitting: {
        vendor: /[\\/]node_modules[\\/]/,
        bootstrap: /[\\/]node_modules[\\/]bootstrap[\\/]/,
        react: /[\\/]node_modules[\\/]react[\\/]/,
        motion: /[\\/]node_modules[\\/]motion[\\/]/
      }
    }
  },
  
  // Output configuration
  output: {
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css',
      media: '[name].[contenthash:8].[ext]'
    }
  },
  
  // Development server
  server: {
    port: 3000,
    open: true
  },
  
  // Build optimization
  tools: {
    bundlerChain: (chain) => {
      // Optimize bundle splitting
      chain.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'initial'
          }
        }
      });
    }
  }
});
