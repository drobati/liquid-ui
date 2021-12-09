import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    controls: {
      presetColors: [
        { color: '#FA8072', title: 'Salmon' },
        { color: '#F0E68C', title: 'Khaki' },
        { color: '#DA70D6', title: 'Violet' },
        { color: '#90EE90', title: 'LightGreen' },
      ],
    },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
