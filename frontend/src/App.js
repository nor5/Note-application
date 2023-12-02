import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import NotePage from "./pages/NotePage";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      Component: NoteListPage
    },{
      path: '/note/:id',
      Component: NotePage,
    }
  ])
  
    return (
        <div className="container dark">
          <div className="app">
            <Header />
            <RouterProvider router={router}>
            </RouterProvider>
          </div>
        </div>
    );
  }
  
  export default App;



