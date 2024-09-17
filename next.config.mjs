/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^postgres-native$|^cloudflare:sockets$/,
      }),
    );

    return config;
  },
};

export default nextConfig;
