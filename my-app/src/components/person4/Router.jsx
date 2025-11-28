import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountInfo from './accountinfo/AccountInfo';
import Profile from './profile/Profile';
import Billing from './billing/Billing';
import ProgressReports from './progressreps/ProgressReps';
import Certificates from './certificates/Certificates';
import Notificatins from './notifications/Notifications';
import Home from '../person1/Home/Home';
import Login from '../person1/Login/Login';
import SideNav from './navbar/Navbar';
import Signup from '../person1/Signup/Signup';
import Dashboard from '../person1/Dashboard/Dashboard';

export default function Router({ user, userHandler }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <Dashboard a_user={user} />
        </div>
        </div>
      } />
      <Route path="/profile" element={
        <div className='h-screen flex'>
        <SideNav />
        <div className='flex-1 overflow-auto'>
          <Profile a_user={user} />
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
        <Certificates completedCourses={user.userProgress.courses.completed} />
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
    </Routes>
  );
}