import './css/App.css'
import { NavLink} from 'react-router-dom'

function Header() {
  const imageurl = 'https://github.com/rakshithsantosh/realEstate/blob/main/images/logohome.png?raw=true'
  
  return (
    <div>
      <header>
      <a href="#" className="logo">
        <img src={imageurl} alt="" />
      </a>

      <ul className="navbar">
      <NavLink
        to="/"
        className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
        >
        Home
        </NavLink>
        <NavLink
        to="/aboutus"
        className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
        >
        AboutUs
        </NavLink>
      
        <NavLink
        to="/buying"
        className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
        >
        Buying
        </NavLink>
      
        <NavLink
        to="/renting"
        className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
        >
        Renting
        </NavLink>
      
        <NavLink
        to="/selling"
        className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
        >
        Selling
        </NavLink>
      
      
      </ul>
    </header>
    </div>
  )
}

export default Header
