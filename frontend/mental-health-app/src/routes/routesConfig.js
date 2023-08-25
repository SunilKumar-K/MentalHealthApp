// src/routes/routesConfig.js
import HomeScreen from '../components/HomeScreen';
import Chatbot from '../components/Chatbot';
import TherapyModules from '../components/TherapyModules';
import InteractiveExercises from '../components/InteractiveExercises';
import MoodTracker from '../components/MoodTracker';
import ProgressTracking from '../components/ProgressTracking';

const routes = [
  {
    path: '/',
    component: HomeScreen,
    exact: true,
  },
  {
    path: '/chatbot',
    component: Chatbot,
  },
  {
    path: '/therapy-modules',
    component: TherapyModules,
  },
  {
    path: '/interactive-exercises',
    component: InteractiveExercises,
  },
  {
    path: '/mood-tracker',
    component: MoodTracker,
  },
  {
    path: '/progress-tracking',
    component: ProgressTracking,
  },
  // Add more routes here
];

export default routes;
