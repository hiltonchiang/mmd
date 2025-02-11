/** @type {import('next').NextConfig} */
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined

const nextConfig = {
  output: 'export',
  productionBrowserSourceMaps: true,
    }
}
 
export default nextConfig
