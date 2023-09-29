import React from 'react';
import { FriendListItem } from 'components/friendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </>
  );
};
