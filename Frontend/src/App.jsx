import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/shared/Navbar";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Changed `Element` to `element`
  },
  {
    path: "/login",
    element: <Login />, // Make sure this references the correct component
  },
  {
    path: "/signup",
    element: <Signup />, // Make sure this references the correct component
  },
]);

function App() {
  return (
    <>
      <Router></Router>
    
    </>
  );
}

export default App;
