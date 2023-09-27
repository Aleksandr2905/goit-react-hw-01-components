import React from 'react';
import { FriendListItem } from 'components/friendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (<FriendListItem friends={friends} />
    )
 };