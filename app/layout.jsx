import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const metadata = {
    title: "Promptopia",
    description: "Discover and Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <AppRouterCacheProvider>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                        
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </AppRouterCacheProvider>
        </body>
    </html>
  )
}

export default RootLayout;