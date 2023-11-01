import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout/AppLayout';
import AddForm from './components/AddForm/AddForm';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout />
    },
    {
      path : '/add',
      element : <AddForm />
    },
  ])
  
  return (
    <Provider store={store}>
  <RouterProvider router={router} />
</Provider>

  );
}

export default App;
