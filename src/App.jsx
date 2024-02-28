import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import RegisterPage from "./components/pages/RegisterPage";
import Login from "./components/pages/Login";
import Card from "./components/shared/Card";
import { FeedbackProvider } from "./context/FeedbackContext";
import AuthProvider from "./context/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";




function App() {
  const {getItem} = useLocalStorage("x-auth-token")
  const token = getItem()
  let authInitialState = {accessToken: token ?? null}

  return (
   <AuthProvider defaultState={authInitialState}>
    <FeedbackProvider>
     <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm  />
                <FeedbackStats />
                <FeedbackList  />
              </>
            }
          />
        </Routes>
        <Card>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </Card>
      </div>
    </Router>
   </FeedbackProvider>
 
   </AuthProvider>
    )
}

export default App;
