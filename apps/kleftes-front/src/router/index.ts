import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Assurez-vous que le chemin est correct
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // le composant qui sera affiché pour la route d'accueil
  },
  {
    path: '/about', // Exemple d'une autre route
    name: 'about',
    component: AboutView, // Chargement dynamique du composant
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
