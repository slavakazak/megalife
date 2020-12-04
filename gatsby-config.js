module.exports = {
  siteMetadata: {
    title: 'MegaLife - Обучающий IQ-Центр',
    description: 'Детский развивающий центр',
    keywords: 'детский, развивающий',
    siteUrl: 'https://megalife-tasks.netlify.app',
    author: {
      name: 'Vadzim Mashnitski',
      url: 'https://t.me/vadikmash',
      email: 'vadikmash@gmail.com'
    }
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://megalife-tasks.netlify.app'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
