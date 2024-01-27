import styled from 'styled-components';

export const ProfilWrapper = styled.div`
  margin: 15 auto;
  width: 300px;
  background-color: #eeeeee;
  padding: 100px;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid #e3e3e3;
  border-radius: 10px 10px 0px 0px;
`;
export const Avatar = styled.img`
  margin-block: 20px;
  width: 150px;
  height: auto;
  border: 1px solid #e3e3e3;
  border-radius: 50%;
`;
export const Name = styled.p`
  margin-block: 5px;
  font-size: 25px;
  font-weight: bold;
  color: black;
`;
export const Tag = styled.p`
  margin-block: 5px;
  font-size: 18px;
  color: #bdb9b9;
`;
export const Location = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #bdb9b9;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  color: #bdb9b9;
  background-color: #f3f6f4;
  border: 2px solid #e3e3e3;
  border-top: 0px;
  list-style: none;
  margin: 0;
  padding: 0px;
  border-radius: 0px 0px 10px 10px;
`;
export const StatsListItem = styled.li`
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  color: #bdb9b9;
  border: 1px solid #e3e3e3;
`;
export const StatsListLabel = styled.span`
  display: block;
  width: 100%;
  padding-block: 18px;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #e3e3e3;
`;
export const StatsListQuantity = styled.span`
 padding-block: 18px;
  font-size: 20px;
  color: black;'
  font-weight: bold;
`;
