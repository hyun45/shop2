import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function Layout() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <main className='mb-auto w-11/12 mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
