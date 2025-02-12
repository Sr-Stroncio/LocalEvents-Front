import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Aside from './Aside';


export function Layout() {



    return (
        <>
            <Navbar/>
            <Aside/>
            <Outlet/>
        </>
    )
}

export default Layout