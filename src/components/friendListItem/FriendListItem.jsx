import React from 'react';
import styled from 'styled-components';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <Item key={id} className="item">
      <Status className="status">{isOnline}</Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Item>
  ));
};

const Item = styled.li``;

const Status = styled.span``;

const Avatar = styled.img``;

const Name = styled.p``;
