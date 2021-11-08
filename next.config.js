const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { determineBuildId } = require("./nextBuildUtils")

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,

  // set the build id to the last commit id
  generateBuildId: async () => {
    const buildId = await determineBuildId()
    console.log(`> Build ID: ${buildId}`)
    return buildId
  },
  // expose the build id to the app via env variables
  webpack: (config, { webpack, buildId, isServer }) => {
    config.plugins.push(
        new webpack.DefinePlugin({ 'process.env.CONFIG_BUILD_ID': JSON.stringify(buildId) })
    )

    return config
  },
})
