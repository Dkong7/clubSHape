// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/https://github.com/Dkong7/clubSHape.git', // Ajusta 'tu-repositorio' al nombre de tu repositorio
  assetPrefix: '/https://github.com/Dkong7/clubSHape.git/', // Ajusta 'tu-repositorio' al nombre de tu repositorio
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
