module.exports = {
  apps: [
    {
      name: 'kimi-pdf',
      cwd: '/home/kimi-pdf-landing',
      script: 'bash',
      args: [
        '-lc',
        'npm run build && npm run start -- --port=3000 --hostname=127.0.0.1'
      ],
      env: {
        NODE_ENV: 'production'
      },
      watch: [
        'app',
        'components',
        'pages',
        'src',
        'public',
        'package.json',
        'next.config.js',
        'next.config.mjs',
        'tailwind.config.*',
        'postcss.config.*'
      ],
      ignore_watch: [
        'node_modules',
        '.next',
        '.git',
        'logs',
        'tmp',
        '.cache'
      ],
      watch_options: {
        usePolling: false,
        followSymlinks: false,
        interval: 1000
      },
      autorestart: true,
      restart_delay: 5000,
      max_restarts: 10
    }
  ]
};
