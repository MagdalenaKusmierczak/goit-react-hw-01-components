import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin: 15px auto;
  width: 900px;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 0px 3px 8px 0px rgba(66, 68, 90, 0.72);
  & td {
    text-align: center;
    padding-block: 15px;
    border: 1px solid #eeeeee;
  }
  & tr:nth-child(even) {
    background-color: #eeeeee;
  }
`;

export const TableHead = styled.thead`
  border-radius: 5px;
  background-color: #16c2f7;
  text-align: center;
  padding-block: 20px;
  color: white;
  font-size: 17px;
  outline: #16c2f7;
  & th {
    width: 300px;
    padding: 20px;
    text-transform: uppercase;
  }
`;
export const Type = styled.td`
  text-transform: capitalize;
`;
