import Router from './Router/Router'
import BasketContext from './Context/BasketContext'
import DataContext from './Context/DataContext'
import WishlistContext from './Context/WishlistContext'
import CompareContext from './Context/CompareContext'

function App() {
  return (
     <CompareContext>
      <WishlistContext>
            <BasketContext>
              <DataContext>
                       <Router/>
               </DataContext>
           </BasketContext>
        </WishlistContext>
     </CompareContext>
   
  )
}

export default App
