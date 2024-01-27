import styled from 'styled-components';
export const StatisticsSection = styled.section`
  margin: 15px auto;
  width: 500px;
  background-color: #eeeeee;
  padding: 100px;
`;
export const StatisticsTitle = styled.h2`
  margin: 0 auto;
  padding-block: 50px;
  display: block;
  text-transform: uppercase;
  background-color: white;
  color:black,
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  border-radius: 5px 5px 0px 0px;
`;
export const StatisticsList = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
  background-color: grey;
  border-radius: 0px 0px 10px 10px;
`;
export const ListItem = styled.li`
  display: flex;
  width: 100px;
  align-items: center;
  flex-direction: column;st
  color: white;
  padding: 20px;
  margin: 0;
`;
export const Label = styled.span`
  padding-block: 10px;
  font-size: 25px;
  color: white;
`;
export const Percentage = styled.span`
  padding-block: 10px;
  font-weight: bold;
  font-size: 30px;
  color: white;
`;
