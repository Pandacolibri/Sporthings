import { NavBar } from "../componentes/NavBar";
import { ItemList } from "../componentes/ItemList";
import Footer from '../componentes/Footer';


export default function Productos() {
    return (
        <div>
            <header >
                
                <NavBar />
            </header>
            <body>
                <div className='m-6'>
                    <ItemList />
                </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}