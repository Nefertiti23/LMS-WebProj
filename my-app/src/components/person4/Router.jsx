import { Routes, Route } from 'react-router-dom';
import AccountInfo from './accountinfo/AccountInfo';
import Profile from './profile/Profile';
import Billing from './billing/Billing';
import Subscriptions from './subscriptions/Subscriptions';

export default function Router({ user }) {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/profile" element={<Profile user={user} />} />
      <Route path="/accountinfo" element={<AccountInfo user={user} />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
    </Routes>
  );
}