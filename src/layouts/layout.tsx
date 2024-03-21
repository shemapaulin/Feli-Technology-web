
import { Outlet } from 'react-router';
import { Header, Footer } from '@/layouts';

const Layout = () => {
  return (
  <>
    <Header/>
    <main className='w-full pt-[0px] xl:max-w-screen-2xl xl:m-auto'>
      <Outlet/>
    </main>
    <Footer />
  </>
  )
}

export default Layout;
