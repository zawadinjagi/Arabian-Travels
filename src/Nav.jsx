
function Navbar() {
      return(

            <section className="flex">
    
                <a href="#Home" className="logo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNqqsJwrsjKvnxp3W7jkDNEfXH5we4TMjRqjPEFSOZWxpABbDD2hCE6_Lejhu7ZAu5fY&usqp=CAU"
                        alt="sushi"/>
                        </a>
    
                <nav className="navbar" id="navbar">
                    <ul>
                        <li><a  href="#home">home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#menu">menu</a></li>
    
                        <li><a href="#popular">popular</a></li>
                        <li><a href="#gallery">gallery</a></li>
                        <li><a href="#order">order</a></li>
                    </ul>
                </nav>
    
            </section>
      );
}

export default Navbar;