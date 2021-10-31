import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import UserItem from './UserItem';
import List from './List';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const history = useHistory()
  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (err) {
      alert(err);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem onClick={(user) => history.push('/users/' + user.id)} user={user} key={user.id} />}
    />
  );
};

export default UsersPage;