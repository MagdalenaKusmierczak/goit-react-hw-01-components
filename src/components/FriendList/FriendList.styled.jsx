import styled from 'styled-components';

export const List = styled.ul`
  margin: 15 auto;
  padding: 0;
  list-style: none;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  padding-block: 10px;
  padding-left: 10px;
  box-shadow: 0px 3px 8px 0px rgba(66, 68, 90, 0.72);
  margin-block: 10px;
`;
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;
export const Name = styled.p`
  padding-left: 20px;
  margin-block: 0px;
`;
export const Status = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-inline: 20px;
  background-color: ${friend => (friend.status ? 'green' : 'red')};
`;
