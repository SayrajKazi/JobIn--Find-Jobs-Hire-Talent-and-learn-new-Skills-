import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create, Homepage, Signin } from "./pages"
import { AuthContextProvider } from './AuthContext';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import Chat from "./Chat";


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/signin' element={<Signin />} />
          <Route
          path="/Home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
          />
   
          <Route path="/employer/dashboard" element={ <Protected><Dashboard /></Protected>}/>
          <Route path="/employer/create" element={<Protected><Create /></Protected>}/>
      
          <Route path="/employee/feed" element={<Protected><Feed /></Protected>}/>
          <Route path="/employee/Chat" element={<Protected><Chat /></Protected>}/>
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
