import React, { useState } from 'react';
import { createAccount } from '../../services/api';

const CreateAccount = () => {
  const [formData, setFormData] = useState({ name: '', balance: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAccount(formData);
      alert('Account created successfully');
    } catch (error) {
      console.error('Failed to create account', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Account Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Initial Balance"
        value={formData.balance}
        onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccount;
