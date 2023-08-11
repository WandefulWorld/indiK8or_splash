import { Disclosure } from '@headlessui/react';
import logo from '../assets/biglogo.png';
// import Overview from './Overview';
// import Features from './Features';
// import Blog from './Blog';
// import Github from './Github';
// import Team from './Team';



const navigation = [
    { name: 'Overview', href: '#overview', current: true },
];

const Header = () => {
    return (
        <div className='min-h-full'>

                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <img
                                className='h-12 w-32'
                                src={logo}
                                alt='indiK8or logo'
                                />
                            </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};


export default Header;
