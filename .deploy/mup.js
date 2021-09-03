module.exports = {
  servers: {
    one: {
      host: 'yusra.devgent.net',
      username: 'root',
      password: '6hc8URpsvb'
    }
  },

  app: {
    name: 'wynn-pirs',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },


    env: {
      ROOT_URL: 'https://pirs-wynn.devgent.net',
      MONGO_URL: 'mongodb://mongodb/wynneG?retryWrites=false',
      //MONGO_OPLOG_URL: 'mongodb://mongodb/local',
      PORT: 2665
    },

    docker: {
      networks: [
        'mongo'
      ],
      // abernix/meteord:node-12-base works with Meteor 1.9 - 1.10
      // If you are using a different version of Meteor,
      // refer to the docs for the correct image to use.
      image: 'abernix/meteord:node-14-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  // mongo: {
  //   version: '3.4.1',
  //   servers: {
  //     one: {}
  //   }
  // },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
