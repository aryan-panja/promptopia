import '@styles/globals.css'
import Navigation from '@components/Navigation'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Promptopia',
    description: 'Find prompts here!',
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Navigation />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout