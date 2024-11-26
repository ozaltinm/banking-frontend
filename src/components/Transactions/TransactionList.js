import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactionHistory } from '../../services/api';

const TransactionList = () => {
  const { accountId } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getTransactionHistory(accountId);
        setTransactions(data);
      } catch (error) {
        console.error('Failed to fetch transactions', error);
      }
    };

    fetchTransactions();
  }, [accountId]);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.transactionId}>
            <strong>Status:</strong> {transaction.status} <br />
            <strong>Amount:</strong> ${transaction.amount} <br />
            <strong>Date:</strong> {new Date(transaction.transactionDate).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
