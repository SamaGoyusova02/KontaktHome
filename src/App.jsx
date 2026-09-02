import React from 'react'
import Router from './Router/Router'
import BasketContext from './Context/BasketContext'
import DataContext from './Context/DataContext'
import { WishlistProvider } from './Context/WishlistContext'
import { CompareProvider } from './Context/CompareContext'

function App() {
  return (
    <CompareProvider>
         <WishlistProvider>
            <BasketContext>
              <DataContext>
                       <Router/>
               </DataContext>
           </BasketContext>
       </WishlistProvider>
    </CompareProvider>
   
    
     
   
  
  )
}

export default App
