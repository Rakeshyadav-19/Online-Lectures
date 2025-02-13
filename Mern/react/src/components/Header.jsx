// A component file name must start with capital letter.

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-5 px-6 bg-emerald-500 text-white">
                
                <div className="text-3xl flex gap-12">
                    <h2>
                        RAX
                    </h2>
                    <input className="rounded-2xl w-60 px-2 text-emerald-300" type="text" />
                </div>

                <div className="flex gap-9 items-center">
                    {/* When usaing this the page reloads */}
                    {/* <a className="text-2xl" href="/">Home</a>
                    <a className="text-2xl" href="/about">About</a>
                    <a className="text-2xl" href="/contact">Contact</a>
                    <a className="text-2xl">More</a> */}

                    {/*  */}
                    <Link className="text-2xl" to='/'>Home</Link>
                    <Link className="text-2xl" to='/about'>About</Link>
                    <Link className="text-2xl" to='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;