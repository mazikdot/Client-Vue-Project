import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/jobs/NotFound.vue'
import Register from '../components/Register.vue'
import test from '../components/test.vue'
import My from '../views/MyData.vue'
import RegisterPage from '../views/RegisterPage.vue'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import Sickbed from '../views/Sickbed.vue'
import AddSickbed from '../views/AddSickbed.vue'
import FormDonate from '../views/FormDonate.vue'
import SickbedWant from '../views/SickbedWant.vue'
import FormWant from '../views/FormWant.vue'
import EditMyData from '../views/EditMyData.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EditMyData',
    name: 'EditMyData',
    component: EditMyData
  },
  {
    path: '/Myprofile',
    name: 'My',
    component: My
  },
  {
    path: '/SickbedWant',
    name: 'SickbedWant',
    component: SickbedWant
  },
  {
    path: '/FormWant',
    name: 'FormWant',
    component: FormWant
  },
  {
    path: '/FormDonate',
    name: 'FormDonate',
    component: FormDonate
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/Sickbed',
    name: 'Sickbed',
    component: Sickbed
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  
  {
    path: '/service',
    id: '#service'
  },
  {
    path: '/Jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/AddSickbed',
    name: 'AddSickbed',
    component: AddSickbed
  },
 
 
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },

  /// call 404 not found
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

export default router
