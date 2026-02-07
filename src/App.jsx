import { RouterProvider } from 'react-router';
import routes from './routes/routes';

const App = () => {
  return (
    <RouterProvider router={routes}/>
  );
};

export default App;