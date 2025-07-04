export const metadata = {
  title: 'Melektron',
  description: 'Kvantni hram večnog kapitala',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', backgroundColor: '#000', color: '#0f0' }}>
        {children}
      </body>
    </html>
  )
}