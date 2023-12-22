import '@styles/globals.css'
import Navigation from '@components/Navigation'

export const metadata = {
    title: 'Promptopia',
    description: 'Find prompts here!',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Navigation />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout