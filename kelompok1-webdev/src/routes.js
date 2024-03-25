import Home from './Pages/Home';
import About from './Pages/About';
import Deskripsi from './Pages/Deskripsi';
import MonAlatPg from './Pages//Datamonitor';
import Login from './components/login';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
  { path: '/datamonitoring', component: <MonAlatPg/> },
  { path: '/deskripsialat', component: <Deskripsi /> },
  { path: '/login', component: <Login /> },

];

export default routes;