import News from './components/News'
import Create from './components/Create'

export const routes = [
  { path: '/', redirect: '/news' },
  { path: '/news', component: News },
  { path: '/create/:type', component: Create }
  // { path: '/ranged', component: Ranged, label: 'Ranged' },
  // { path: '/head', component: Head, label: 'Head' },
  // { path: '/torso', component: Torso, label: 'Torso' },
  // { path: '/arms', component: Arms, label: 'Arms' },
  // { path: '/legs', component: Legs, label: 'Legs' },
  // { path: '/feet', component: Feet, label: 'Feet' },
]
