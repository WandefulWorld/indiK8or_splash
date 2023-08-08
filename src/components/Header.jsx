import { Disclosure } from '@headlessui/react';
import logo from '../assets/logo.png';


const navigation = [
    { name: 'Overview', href: '#', current: true },
    { name: 'Features', href: '#', current: false },
    { name: 'Github', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Team', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const Header = () => {
    return (
        <div className='min-h-full'>
            <Disclosure as='nav' className='bg-gray-700'>
                {({ open }) => (
                <>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <img
                                className='h-8 w-8'
                                src={logo}
                                alt='indiK8or logo'
                                />
                            </div>
                            <div className='hidden md:block font-serif'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                {navigation.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    >
                                    {item.name}
                                    </a>
                                ))}
                                </div>
                            </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>

                        </div>
                    </div>

                    <Disclosure.Panel className='md:hidden'>
                        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                            {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as='a'
                                href={item.href}
                                className={classNames(
                                item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>
        </div>
    );
};

export default Header;
