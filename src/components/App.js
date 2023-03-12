import { Navigate, Route, Routes } from 'react-router';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import AddBook from './AddBook';
import HomePage from './HomePage';
import ModifyBook from './ModifyBook';
import Profile from './Profile';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import StartPage from './StartPage';
import ViewBook from './ViewBook';

// const Container = styled.div`
  
// `;

function App() {
  return(
    <Routes>
        <Route path="/" element = {<StartPage />}></Route>
        <Route path="/home" element = {<HomePage />}></Route>
        <Route path="/signup" element = {<SignupPage />}></Route>
        <Route path="/signin" element = {<SigninPage />}></Route>
        <Route path="/addbook" element = {<AddBook />}></Route>
        <Route path="/viewbook" element = {<ViewBook />}></Route>
        <Route path="/modifybook" element = {<ModifyBook />}></Route>
        <Route path="/profile" element = {<Profile />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        
    </Routes>
  )
}

export default App;
