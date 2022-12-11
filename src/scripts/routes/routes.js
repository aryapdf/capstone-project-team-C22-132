import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import MenuAndRecipe from '../views/pages/menu-and-recipe';
import AboutUs from '../views/pages/about-us';
import Search from '../views/pages/search';
import '../utils/search-function';

const routes = {
  '/': Home,
  '/home': Home,
  '/recipe': MenuAndRecipe,
  '/about-us': AboutUs,
  '/detail/:key': Detail,
  '/search?q=ayam': Search,
};

export default routes;
