/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
