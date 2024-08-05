import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import { useAuth } from './contexts/AuthContext';
import { AuthContextProvider, UserAuth } from './contexts/AuthContextFirebase.jsx';
import CreateArticle from './pages/CreateArticle.jsx';
import AllQuestions from './pages/AllQuestions.jsx';
import AskQuestion from './pages/AskQuestion.jsx';
import ViewQuestion from './pages/ViewQuestions.jsx';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';


function App() {
  const { isAuthenticated } = useAuth();
  // const { isAuthenticated1 } = UserAuth();

  return (
      <>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={ !isAuthenticated ? <Signup/> : <Navigate to='/home' />} />
        <Route path='/signin' element={ !isAuthenticated ? <Signin/> : <Navigate to='/home' />} />
        {/* <Route path='/home' element={ isAuthenticated ? <Home/> : <Signin /> } /> */}
        <Route path='/home' element={ isAuthenticated ? <Home/> : <Navigate to='/signin' /> } />
        <Route path='/create-article' element={<CreateArticle />} />
        <Route path='/all-questions' element={<AllQuestions />} />
        <Route path='/all-questions/ask' element={<AskQuestion />} />
        <Route path='/all-questions/view' element={<ViewQuestion />} />
      </Routes>
      </AuthContextProvider>
      </>
  );
}

export default App;
