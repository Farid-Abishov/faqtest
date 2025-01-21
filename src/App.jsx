import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login/Login'
import FrQuestionsPage from './pages/frquestions/FrQuestions'
import QuestionPage from './pages/question/Question'
import RootLayout from './pages/root/root'
import UserPage from './pages/users/User'
import QuestionCategoryPage from './pages/questionCategory/QuestionCategory'
import UserCategoryPage from './pages/usersCategory/UserCategory'
import QuizPage from './pages/Quiz/Quiz'
import TagPage from './pages/Tags/Tags'
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />, // Əsas səhifə açıldıqda LoginPage görünsün
  },
  {
    path: "",
    element: <RootLayout />, 
    children: [
      { path: "questions", element: <QuestionPage /> },
      { path: "questionscategory", element: <QuestionCategoryPage /> },
      { path: "users", element: <UserPage /> },
      { path: "userscategory", element: <UserCategoryPage /> },
      { path: "quiz", element: <QuizPage /> },
      { path: "tag", element: <TagPage /> },
    ],
  },
  { path: "/frquestions", element: <FrQuestionsPage /> },
]);
function App() {
  return (
     <RouterProvider router={router}/>
  )
}

export default App
