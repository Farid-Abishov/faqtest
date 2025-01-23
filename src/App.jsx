import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils/AuthProvider";
import PrivateRoute from "./utils/PrivateRouter";
import LoginPage from "./pages/login/Login";
import RootLayout from "./pages/root/root";
import QuestionPage from "./pages/question/Question"
import FrQuestionsPage from "./pages/frquestions/FrQuestions";
import QuestionCategoryPage from "./pages/questionCategory/QuestionCategory";
import UserCategoryPage from './pages/usersCategory/UserCategory'
import QuizPage from './pages/Quiz/Quiz'
import TagPage from './pages/Tags/Tags'
import UserPage from "./pages/users/User";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />, // Əsas səhifə açıldıqda LoginPage görünsün
//   },
//   {
//     path: "",
//     element: <RootLayout />,
//     children: [
//       { path: "questions", element: <QuestionPage /> },
//       { path: "questionscategory", element: <QuestionCategoryPage /> },
//       { path: "users", element: <UserPage /> },
//       { path: "userscategory", element: <UserCategoryPage /> },
//       { path: "quiz", element: <QuizPage /> },
//       { path: "tag", element: <TagPage /> },
//     ],
//   },
//   { path: "/frquestions", element: <FrQuestionsPage /> },
// ]);
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route
              path="/frquestions"
              element={
                <PrivateRoute>
                  <FrQuestionsPage />
                </PrivateRoute>
              }
            ></Route>
          <Route element={<RootLayout />}>
            <Route
              path="/questions"
              element={
                <PrivateRoute>
                  <QuestionPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            ></Route>
           
            <Route
              path="/questionscategory"
              element={
                <PrivateRoute>
                   <QuestionCategoryPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/userscategory"
              element={
                <PrivateRoute>
                   <UserCategoryPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/quiz"
              element={
                <PrivateRoute>
                   <QuizPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/tag"
              element={
                <PrivateRoute>
                   <TagPage />
                </PrivateRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;