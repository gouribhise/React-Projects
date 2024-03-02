 import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react'
import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage';
import Recipe from './pages/Recipe';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="recipe/:id" element={<Recipe />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </ChakraProvider>
     </div>
  );
}

export default App;
