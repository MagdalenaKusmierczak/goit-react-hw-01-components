import PropTypes from 'prop-types';
import { TransactionHistoryTable, TableHead, Type } from './Transactions.styled.jsx';

export default TransactionHistory;

function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Type>{item.type}</Type>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
