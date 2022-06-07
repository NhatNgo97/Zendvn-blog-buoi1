import {Routes, Route} from 'react-router-dom';
import {HomePage, LoginPage ,SearchPage, DetailPage} from '../Pages/index';

function Main() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element = {<LoginPage />} />
      <Route path = '/search' element = {<SearchPage />} />
      <Route path = '/detail' element = {<DetailPage />} />
    </Routes>
  )
}

export default Main;