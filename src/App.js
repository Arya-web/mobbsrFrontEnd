import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Login, Landing, Landingg, ChangePass, UpdateUser, ForgotPassword } from './components'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          />
          <Route
            path="/landingg"
            element={
              <>
                <Landingg />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/change_pass"
            element={
              <>
                <ChangePass />
              </>
            }
          />
          <Route
            path="/update_user"
            element={
              <>
                <UpdateUser />
              </>
            }
          />
          <Route
            path="/forgot_password"
            element={
              <>
                <ForgotPassword />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
