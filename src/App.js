import './App.css'

import { BrowserRouter, useRoutes } from 'react-router-dom'

import Desktop from './Desktop'
import Mobile from './Mobile'
import Cookies from './policy/cookies'
import Privacy from './policy/privacy'
import Terms from './policy/terms'
import TermsOfUse from './policy/terms-of-use'
import WhoWeAre from './policy/who-we-are'
import HowItWorks from './how-it-works'
import Admin from './pages/Admin'


import {
  useReducer,
} from 'react'

import {
  Context,
  initialState,
} from './store/Context'

import {
  reducer,
} from './store/reducer'

function RouteElementsDesktop() {
  const routeElements = useRoutes([
    { path: '/', element: <Desktop /> },
    { path: '/policy/cookies', element: <Cookies /> },
    { path: '/policy/privacy', element: <Privacy /> },
    // { path: '/policy/terms', element: <Terms /> },
    { path: '/policy/terms-of-use', element: <TermsOfUse /> },
    { path: '/who-we-are', element: <WhoWeAre /> },
    { path: '/how-it-works', element: <HowItWorks /> },
    { path: '/admin', element: <Admin /> },
  ]);
  return routeElements
}

function RouteElementsMobile() {
  const routeElements = useRoutes([
    { path: '/', element: <Mobile /> },
    { path: '/policy/cookies', element: <Cookies /> },
    { path: '/policy/privacy', element: <Privacy /> },
    // { path: '/policy/terms', element: <Terms /> },
    { path: '/policy/terms-of-use', element: <TermsOfUse /> },
    { path: '/who-we-are', element: <WhoWeAre /> },
    { path: '/how-it-works', element: <HowItWorks /> },
    { path: '/admin', element: <Admin /> },
  ]);
  return routeElements
}

function DesktopApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  
  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <RouteElementsDesktop />
      </BrowserRouter>
    </Context.Provider>
  )
}

function MobileApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <RouteElementsMobile />
      </BrowserRouter>
    </Context.Provider>
  )
}

function App() {
  function isDesktop() {
    return 850 < window.innerWidth
  }

  return (
    <>
    {
      isDesktop() ? <DesktopApp /> : <MobileApp />
    }
    </>
  )
}

export default App
