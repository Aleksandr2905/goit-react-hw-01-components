import React from 'react';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id}>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
