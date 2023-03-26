import Home from '../pages/home/Home'
import Detail from '../pages/detail/Detail'
import Login from '../pages/login/Login'
import Profile from '../pages/profile/Profile'
import Register from '../pages/register/Register'

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/:id', component: Detail},
    {path: '/login', component: Login},
    {path: '/profile', component: Profile},
    {path: '/register', component: Register, layout: Register},
]