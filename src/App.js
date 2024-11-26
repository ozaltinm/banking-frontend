import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AccountList from './components/Accounts/AccountList';
import CreateAccount from './components/Accounts/CreateAccount';
import UpdateAccount from './components/Accounts/UpdateAccount';
import TransactionList from './components/Transactions/TransactionList';
import TransferMoney from './components/Transactions/TransferMoney';

const App = () => (
  <AuthProvider> {}
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accounts" element={<AccountList />} />
        <Route path="/accounts/create" element={<CreateAccount />} />
        <Route path="/accounts/update/:accountId" element={<UpdateAccount />} />
        <Route path="/transactions/:accountId" element={<TransactionList />} />
        <Route path="/transfer" element={<TransferMoney />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
