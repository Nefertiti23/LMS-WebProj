import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountInfo from './accountinfo/AccountInfo';
import Profile from './profile/Profile';
import Billing from './billing/Billing';
import ProgressReports from './progressreps/ProgressReps';

export default function Router({ user, userHandler }) {
  console.log(user.orders);
  return (
    <Routes>
      <Route path="/" element={<></>} />
      {/* <Route path="/profile" element={<Profile a_user={user} handleUser={setUser} />} /> */}
      <Route path="/accountinfo" 
      element={<AccountInfo a_user={user} 
      handleUser={userHandler}  />} />
      <Route path="/billing" 
      element={<Billing user_sub={user.currentSub} 
      user_payments={user.billingInfo} 
      handleUser={userHandler}
      orderHistory={user.orders} />} />
      <Route path="/progressreps" element={<ProgressReports userP={user.userProgress} />} />
    </Routes>
  );
}