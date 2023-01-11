import SearchIcon from './SearchIcon'
import WriteIcon from './WriteIcon'
import logosmall from '../images/logosmall.svg'
import MainButton from './MainButton'

export default function SlimNav () {
    return (
        <div className="main-nav d-flex justify-content-between align-items-center py-2">
            <div>
                <div className='d-flex'>
                    <img src={logosmall} alt="" className='me-3'></img>
                    <form className='position-relative'>
                        <input type="text" className='form-control search-input' placeholder='Search Medium'/>
                        <button className='btn search-button'>
                            <SearchIcon />
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <ul className='d-flex align-items-center slim-nav-menu'>
                    <li>
                        <a href='' className='slim-nav-link'>
                        <WriteIcon />
                        Write
                    </a>
                    </li>
                    <li>
                        <MainButton>Sign Up</MainButton>
                    </li>
                    <li>
                        <a href='' className='slim-nav-link'>
                        Sign in
                    </a>
                    </li>
                    <li>
                        <div>
                        <div className="dropdown text-end">
                            <a href className="d-block link-dark text-decoration-none dropdown-toggle" aria-expanded="false">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpinecone.academy.mongolia%2F&psig=AOvVaw2V00e2NOS5ZkcTOQWQ8Rqq&ust=1673512695745000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCN2N-Ov_wCFQAAAAAdAAAAABAQ" alt="" width="32" height="32" className="rounded-circle  bg-white" />
                            </a>
                        </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}