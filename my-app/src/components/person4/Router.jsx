import { Routes, Route } from 'react-router-dom';
// person 1
import Home from '../person1/Home/Home';
import Login from '../person1/Login/Login';
import SideNav from './navbar/Navbar';
import Signup from '../person1/Signup/Signup';
import Dashboard from '../person1/Dashboard/Dashboard';
import TeacherDashboard from '../person1/Teacher-dashboard/Teacher-dashboard';
import AdminDashboard from '../person1/Admin-dashboard/Admin-dashboard';
// person 2
import CourseCatalog from '../person2/CourseCatalog/CourseCatalog';
import CourseEnrollment from '../person2/CourseEnrollment/CourseEnrollment';
// person 3
import LessonViewer from '../person3/Lessonviewer/Lessonviewer';
import Quizinterface from '../person3/Quizinterface/Quizinterface';
// person 4
import AccountInfo from './accountinfo/AccountInfo';
import Billing from './billing/Billing';
import ProgressReports from './progressreps/ProgressReps';
import Certificates from './certificates/Certificates';
import Notificatins from './notifications/Notifications';

export default function Router({ user, userHandler, userArr, setUserArr }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login theuser={user} allusers={userArr} 
      handleUser={userHandler} handleUsers={setUserArr} />} />
      <Route path="/admin-dashboard" element={<AdminDashboard theuser={user} allusers={userArr} />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard currentUser={user} />} />

      <Route path="/signup" element={<Signup handleUser={userHandler} 
      allusers={userArr} 
      handleUsers={setUserArr} />} />
      <Route path="/dashboard" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <Dashboard a_user={user} />
        </div>
        </div>
      } />
        <Route path="/enrollment" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <CourseEnrollment a_user={user} />
        </div>
        </div>
        } />
        <Route path="/catalog" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <CourseCatalog a_user={user} />
        </div>
        </div>
        } />
      <Route path="/accountinfo" 
      element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <AccountInfo a_user={user} 
          handleUser={userHandler} />
        </div>
        </div>
      } />
      <Route path="/billing" 
      element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <Billing user_sub={user.currentSub} 
          user_payments={user.billingInfo} 
          handleUser={userHandler}
          orderHistory={user.orders} />
        </div>
        </div>} />
      <Route path="/progressreps" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <ProgressReports userP={user.userProgress} />
        </div>
        </div>
        } />
      <Route path="/certificates" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
        <Certificates completedCourses={user.userProgress?.courses.completed} />
        </div>
        </div>
        } />
      <Route path="/notifs" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
        <Notificatins  />
        </div>
        </div>
        } />
      <Route path="/courses" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
        <CourseCatalog  />
        </div>
        </div>
        } />
      <Route path="/quizinterface" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto p-10'>
        <Quizinterface module={{title: "the formula for gradient"}}  />
        </div>
        </div>
        } />
    </Routes>
  );
}