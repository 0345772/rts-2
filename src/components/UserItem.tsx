import { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: '10px', marginTop: "5px", border: '2px solid teal' }}>
      {user.id} {user.name} {user.username} проживает по адресу: {user.address.city}, {user.address.street}, {user.address.zipcode}
    </div>
  );
};

export default UserItem;