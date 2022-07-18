import { createRouter, createWebHistory } from 'vue-router'


import HeaderMenu from './components/HeaderMenu';
import HeroBG from './components/HeroBG';
import InfoSection from './components/InfoSection';
import ProductList from './pages/Products/ProductList';
import NotFound from './pages/NotFound';
import FooterSection from './components/FooterSection';


const router = createRouter({
    history: createWebHistory(),
    routes: [
     { path: '/', componen: HeaderMenu, HeroBG, InfoSection,ProductList,  FooterSection },
     { path: '/:notFound(.*)', component: NotFound}

    ],
});

export default router;