import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/store';
type Props = {}


function Header({ }: Props) {

    const { useLogin } = useSelector((state: RootState) => state.userLoginSlice)
    console.log(useLogin)
    const renderProfile = () => {
        if (useLogin) {
            return <div className='carts flex-item'>
                <NavLink className={'carts-link'} to="/profile">
                    {useLogin.email}
                </NavLink>
            </div>
        }
        return <div className='carts flex-item'>
            <NavLink className={'carts-link'} to="/login">
                Login
            </NavLink>
        </div>
    }
    return (
        <div className='header'>
            <section className='logo-header'>
                <div className='logo'>
                    <NavLink className={'logo-link'} to="">
                        <img src={require('../../assets/img/logo.png')} alt="logo" />
                    </NavLink>
                </div>
                <div className='nav-bar-search'>
                    <div className='search flex-item'>
                        <NavLink className={'search-link'} to={"/search"}>
                            <i className="fa fa-search"></i> Search
                        </NavLink>
                    </div>
                    <div className='carts flex-item'>
                        <NavLink className={'carts-link'} to="/carts">
                            <i className="fa fa-cart-plus"></i> (1)
                        </NavLink>
                    </div>
                    {renderProfile()}
                    <div className='register flex-item'>
                        <NavLink className={"carts-link"} to="/register">
                            Register
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="menu d-flex align-items-center">
                <nav className="nav-menu">
                    <NavLink className="mx-2" to="/">Home</NavLink>
                    <NavLink className="mx-2" to="">Men</NavLink>
                    <NavLink className="mx-2" to="">Woman</NavLink>
                    <NavLink className="mx-2" to="">Kid</NavLink>
                    <NavLink className="mx-2" to="">Sport</NavLink>
                </nav>
            </section>
        </div>
    )
}

export default Header