import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import WatchContainer from './components/WatchContainer';
import MainContainer from './components/MainContainer';

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"watch",
          element:<WatchContainer/>
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
    <Navbar/>
    <RouterProvider router={appRouter}/>
    </Provider>
  )
}

export default App
