import Logo from "./logo";



const NavBar = () => {

    return (
        <div className='Navbar'>
            <Logo />
            <div className='links'>
                <button>Home</button>
                <button>Comparativas</button>
                <button>Servicios</button>
                <button>Productos</button>
                <button>About us</button>
            </div>
        </div>
    )
}

export default NavBar;