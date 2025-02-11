import '@/components/assets/main.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html suppressHydrationWarning>
        <body>
          <main>{children}</main>
        </body>
      </html>
    </>
  )
}
