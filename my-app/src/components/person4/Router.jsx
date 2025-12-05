import { Routes, Route } from "react-router-dom";

// person 1
import Home from "../person1/Home/Home";
import Login from "../person1/Login/Login";
import Signup from "../person1/Signup/Signup";
import SideNav from "./navbar/Navbar";
import Dashboard from "../person1/Dashboard/Dashboard";
import TeacherDashboard from "../person1/Teacher-dashboard/Teacher-dashboard";
import AdminDashboard from "../person1/Admin-dashboard/Admin-dashboard";

// person 2
import CourseCatalog from "../person2/CourseCatalog/CourseCatalog";
import CourseEnrollment from "../person2/CourseEnrollment/CourseEnrollment";

// person 3
import LearningViewer from "../person3/LearningViewer/LearningViewer";
import Quizinterface from "../person3/quiz/NewQuizInterface";

// person 4
import AccountInfo from "./accountinfo/AccountInfo";
import Billing from "./billing/Billing";
import ProgressReports from "./progressreps/ProgressReps";
import Certificates from "./certificates/Certificates";
import Notifications from "./notifications/Notifications";

export default function Router({ user, userHandler, userArr, setUserArr }) {
  const Wrapper = ({ children }) => (
    <div className="h-screen flex">
      <SideNav />
      <div className="flex-1 overflow-auto p-5">{children}</div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={
          <Login
            theuser={user}
            allusers={userArr}
            handleUser={userHandler}
            handleUsers={setUserArr}
          />
        }
      />

      <Route
        path="/signup"
        element={
          <Signup
            handleUser={userHandler}
            allusers={userArr}
            handleUsers={setUserArr}
          />
        }
      />

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard theuser={user} allusers={userArr} />}
      />
      <Route
        path="/teacher-dashboard"
        element={<TeacherDashboard currentUser={user} />}
      />

      <Route
        path="/dashboard"
        element={
          <Wrapper>
            <Dashboard a_user={user} />
          </Wrapper>
        }
      />
      <Route
        path="/catalog"
        element={
          <Wrapper>
            <CourseCatalog a_user={user} />
          </Wrapper>
        }
      />
      <Route
        path="/enrollment"
        element={
          <Wrapper>
            <CourseEnrollment a_user={user} />
          </Wrapper>
        }
      />

      {/* Dynamic Learning Viewer route */}
      <Route
        path="/course/:courseId/learn"
        element={
          <Wrapper>
            <LearningViewer a_user={user} />
          </Wrapper>
        }
      />

      {/* Dynamic Quiz route */}
      <Route
        path="/course/:courseId/quiz/:lessonId"
        element={
          <Wrapper>
            <Quizinterface />
          </Wrapper>
        }
      />

      <Route
        path="/accountinfo"
        element={
          <Wrapper>
            <AccountInfo a_user={user} handleUser={userHandler} />
          </Wrapper>
        }
      />
      <Route
        path="/billing"
        element={
          <Wrapper>
            <Billing
              user_sub={user.currentSub}
              user_payments={user.billingInfo}
              handleUser={userHandler}
              orderHistory={user.orders}
            />
          </Wrapper>
        }
      />
      <Route
        path="/progressreps"
        element={
          <Wrapper>
            <ProgressReports userP={user.userProgress} />
          </Wrapper>
        }
      />
      <Route
        path="/certificates"
        element={
          <Wrapper>
            <Certificates completedCourses={user.userProgress?.courses.completed} />
          </Wrapper>
        }
      />
      <Route
        path="/notifs"
        element={
          <Wrapper>
            <Notifications />
          </Wrapper>
        }
      />
    </Routes>
  );
}
