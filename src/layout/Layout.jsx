import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Aside from './Aside';
import {ProviderEstetico} from '../providers/ProviderEstetico';


export function Layout() {


    return (
        <>
            <ProviderEstetico>
                <Navbar/>
                <Aside/>
                <Outlet/>
            </ProviderEstetico>
        </>
    )
}

export default Layout