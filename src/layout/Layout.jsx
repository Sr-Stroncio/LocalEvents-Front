import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Aside from './Aside';
import DivGlobal from './DivGlobal';
import {ProviderEstetico} from '../providers/ProviderEstetico';


export function Layout() {


    return (
        <>
            <ProviderEstetico>
                <Navbar/>
                <Aside/>
                <DivGlobal>
                    <Outlet/>
                </DivGlobal>
            </ProviderEstetico>
        </>
    )
}

export default Layout