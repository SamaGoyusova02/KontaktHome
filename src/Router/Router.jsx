
import { Route, Routes } from 'react-router'
import Layout from '../Layout/Layout'
import Main from '../pages/Main'
import Detail from '../Components/Detail'
import Stores from '../pages/Stores'
import CorporateSales from '../pages/CorporateSales'
import Campaigns from '../pages/Campaigns'
import AboutCompany from '../pages/AboutCompany'
import KarabakhProgram from '../pages/KarabakhProgram'
import Basket from '../pages/Basket'
import ScrollToTop from '../Components/ScrollToTop'
import Like from '../pages/Like'
import ComparePage from '../pages/ComparePage'
import BestWarranty from '../pages/BestWarranty'
import DoorClearance from '../pages/DoorClearance'
import ClimateProducts from '../pages/ClimateProducts'
import Error from '../pages/Error'

function Router() {
  return (
  <>
  <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='product/:title' element={<Detail/>}/>
        <Route path='Kampaniyalar' element={<Campaigns/>} />
        <Route path='Mağazalar' element={<Stores/>}/>
        <Route path='Korporativ satışlar' element={<CorporateSales/>}/>
        <Route path='Şirkət haqqında' element={<AboutCompany/>}/>
        <Route path='Qarabağ proqramı' element={<KarabakhProgram/>}/>
        <Route path='Səbət' element={<Basket/>}/>
        <Route path='Seçilmişlər' element={<Like/>} />
        <Route path='Compare' element={<ComparePage/>}/>
        <Route path='en-yaxsi-qiymete-zemanet' element={<BestWarranty/>}/>
        <Route path='catdirilma-ve-odeme' element={<DoorClearance/>}/>
        <Route path='kondisionerler' element={<ClimateProducts/>}/>
        <Route path='*' element={<Error/>}/>
        </Route>
    </Routes>
  </>
  )
}


export default Router
