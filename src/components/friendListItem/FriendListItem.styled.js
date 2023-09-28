import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 300px;
  gap: 12px;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border: solid 1px black;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 10px 20px;
`;

export const Status = styled.span`
  display: block;
  margin-left: 1.625rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.children ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  font-size: 24px;
`;
