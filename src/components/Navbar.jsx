import '../App.css';
import { FaCartShopping } from "react-icons/fa6";

function Navbar(){
    let count = 20;
    return (
        <div>
			<ul className="nav">
				<li className="nav-item slam-left"><a href="#">Tecnopiezas</a></li>
				<li className="nav-item"><a href="#">Inicio</a></li>
				<li className="nav-item"><a href="#">Productos</a></li>
				<li className="nav-item"><a href="#">Ofertas</a></li>
				<li className="nav-item"><a href="#">Arma tu pc</a></li>
				<li className="nav-item"><a className="contact" href="#">Contactanos</a></li>
				<li className="nav-item cart">
                    <FaCartShopping />
                    <span className='countItems'>{count}</span>
                </li>
			</ul>
		</div>
    );
}

export default Navbar