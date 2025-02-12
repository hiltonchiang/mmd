/** @type {import('next').NextConfig} */
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const assetPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX.concat('/') : undefined
const nextConfig = {
  output,
  basePath,
  assetPrefix,
  productionBrowserSourceMaps: true,
  async headers() {
        return [
            {
                // matching all API routes
                source: "/(.*)",
                headers: [
                    // other headers omitted for brevity...
                    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
                    { key: "Cross-Origin-Embedder-Policy", value: "require-corp" }
                ]
            }
        ]
    }
}
 
export default nextConfig
