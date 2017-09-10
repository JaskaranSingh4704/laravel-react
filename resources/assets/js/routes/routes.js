import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/Home'
import Users from '../pages/users/Users'
import EditUser from '../pages/users/edit'
import Articles from '../pages/articles/list'
import EditArticle from '../pages/articles/EditArticle'

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: Register,
  },
  {
    path: '/users',
    exact: true,
    auth: true,
    component: Users,
  },
  {
    path: '/users/:id/edit',
    exact: true,
    auth: true,
    component: EditUser,
  },
  {
    path: '/articles',
    exact: true,
    auth: true,
    component: Articles,
  },
  {
    path: '/articles/:id/edit',
    exact: true,
    auth: true,
    component: EditArticle,
  },
]

export default routes