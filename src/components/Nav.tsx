const Nav = () => {
    return (
        <nav className="fixed w-full bg-bg_color flex items-center justify-between py-6 px-10 border-b border-gray">
            <div className="text-2xl font-bold">Binboff</div>
            <ul className="flex items-center gap-40 text-sm font-medium [&>*]:cursor-pointer">
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className="font-bold border border-gray-300 py-3 px-8 rounded-full">Sign Up</button>
        </nav>
    )
}

export default Nav;