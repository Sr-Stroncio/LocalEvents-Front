import { useEstetico } from '../providers/ProviderEstetico';
import '../css/Aside.css';

export function Aside () {

    const {AsideOpen, setAsideOpen} = useEstetico();

    console.log('ASIDE',AsideOpen);

    return (
        <>
            <h1 className='HOLA'>HOLA</h1>
        </>
    )
}

export default Aside