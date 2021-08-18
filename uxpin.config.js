/* eslint-disable sort-keys */
module.exports = {
    components: {
      categories: [
        {
            name: 'General',
            include: [
                'src/components/Api/Api.js'
            ]
        }
      ],
      webpackConfig: './webpack.uxpin.config.js',
    },
    name: 'Api-component',
  };