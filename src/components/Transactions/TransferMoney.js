import React, { useState } from 'react';
import { transferMoney } from '../../services/api';

const TransferMoney = () => {
  const [formData, setFormData] = useState({
    fromAccountId: '',
    toAccountId: '',
    amount: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await transferMoney(formData);
      alert(`Transaction ${data.status}: $${data.amount} transferred.`);
    } catch (error) {
      console.error('Transfer failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="From Account ID"
        value={formData.fromAccountId}
        onChange={(e) =>
          setFormData({ ...formData, fromAccountId: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="To Account ID"
        value={formData.toAccountId}
        onChange={(e) =>
          setFormData({ ...formData, toAccountId: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <button type="submit">Transfer</button>
    </form>
  );
};

export default TransferMoney;
