require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Mike Bowman | Full Stack Developer',
    description: 'Mike Bowman',
    author: '@mikebowman_dev',
    siteUrl: 'https://mikebowman.dev',
  },
  trailingSlash: 'always',
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages/blog`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mikebowman.dev',
        short_name: 'mikebowman.dev',
        start_url: '/',
        background_color: '#f2f3f4',
        theme_color: '#a8b5a4',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-netlify`,
    'gatsby-plugin-remove-serviceworker',
  ],
};
