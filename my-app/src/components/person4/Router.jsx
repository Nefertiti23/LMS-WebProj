import { Routes, Route } from 'react-router-dom';
import AccountInfo from './accountinfo/AccountInfo';
import Profile from './profile/Profile';
import Billing from './billing/billing';

export default function Router({ user }) {
  return (
    <Routes>
      <Route path="/profile" element={<Profile user={user} />} />
      <Route path="/accountinfo" element={<AccountInfo user={user} />} />
      <Route path="/billing" element={<Billing />} />
    </Routes>
  );
}