import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    const [nav, setnav] = useState(true)
    const onLogOut =()=>{
        localStorage.removeItem('token')
        window.location.reload()
    }
    return (

        <>
            {/* background */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            {/* main */}
            <header className="bg-[#c4b5fd]/50 h-20 absolute w-full z-10">
                {/* navbar */}
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1 items-center ">
                        <div className='cursor-pointer mr-6' onClick={() => { setnav(!nav) }}>
                            <i className="fa-solid fa-bars fa-lg"></i>
                        </div>
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="text-2xl">Task Mangaer</span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
                        <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">About us</Link>
                    
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {!localStorage.getItem('token') ? <div>
                            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 mx-3">Log in <span aria-hidden="true"></span></Link>
                            <Link to="/signup" className="text-sm font-semibold leading-6 text-gray-900 mx-3">Sign up <span aria-hidden="true"></span></Link>
                        </div> : <button onClick={onLogOut} className="text-sm font-semibold leading-6 text-gray-900 mx-3">Log out</button>}
                    </div>
                </nav>

                {/* sidebar */}
                <div className={nav ? 'hidden' : ''} role="dialog" aria-modal="true">
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="text-2xl">Task Mangaer</span>
                            </Link>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => { setnav(!nav) }}>
                                <i className="fa-solid fa-xmark fa-lg absolute right-10 top-10 cursor-pointer"></i>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                                    <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About us</Link>
                                </div>
                                <div className="py-6">
                                    {!localStorage.getItem('token') ? <div>
                                        <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
                                        <Link to="/signup" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Sign up</Link>
                                    </div> : <button onClick={onLogOut} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100">Log out</button>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar