const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '15',
        firefox: '60',
        chrome: '64',
        safari: '11.1',
        esmodules: true,
        ie: '11',
      },
      useBuiltIns: 'usage',
      corejs: '3.0.0',
    },
  ],
];

module.exports = { presets };
