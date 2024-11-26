import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateAccount } from '../../services/api';

const UpdateAccount = () => {
  const { accountId } = useParams();
  const [formData, setFormData] = useState({ name: '', balance: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAccount(accountId, formData);
      alert('Account updated successfully');
    } catch (error) {
      console.error('Failed to update account', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Updated Account Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Updated Balance"
        value={formData.balance}
        onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
      />
      <button type="submit">Update Account</button>
    </form>
  );
};

export default UpdateAccount;
