import { Link,Outlet } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedIn, UserButton } from "@clerk/clerk-react";
//import {QueryClient,QueryClientProvider} from '@tanstack/react-query';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Initializes a new QueryClient instance to manage React Query caching and data fetching
//const queryClient = new QueryClient()
//<QueryClientProvider client={queryClient}>
//</QueryClientProvider>

const RootLayout = () => {

  return (

    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      
        <div className='rootLayout'>
          <header>
            <Link to="/" className="logo">
              <img src="/logo.png" alt="" />
              <span> MELLER AI</span>
            </Link>
            <div className= "user">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet/>
          </main>
        </div>
      
    </ClerkProvider>
  );
};
export default RootLayout;