import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils/AuthProvider";
import PrivateRoute from "./utils/PrivateRouter";
import LoginPage from "./pages/login/Login";
import RootLayout from "./pages/root/root";
import QuestionPage from "./pages/question/Question"

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
          <Route path="/" element={<LoginPage />}></Route>
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
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;