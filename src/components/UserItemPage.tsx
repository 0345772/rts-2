import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useHistory();


  useEffect(() => {
    fetchUser()
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (err) {
      alert(err)
    }
  }


  return (
    <div style={{ margin: "15px 45px", padding: "20px", border: "1px solid teal", boxShadow: "0 0 8px 5px lightGray " }}>

      <h3 style={{ textAlign: 'center' }}>Страничка пользователя <u style={{ color: 'red' }}>{user?.name}</u></h3>
      <div>
        <h4 style={{ color: "blue" }}>Привет, друг! Меня зовут {user?.name}</h4>
        <span>мои данные:</span><br /> <strong>{user?.name} {user?.username}</strong> <br /> email: <strong>{user?.email}</strong> <br />
        <u>Мой адрес: <br /> </u>город:  <b>{user?.address.city}</b>, <br /> улица: <b>{user?.address.street}</b> <br /> index: <b>{user?.address.zipcode}</b>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => history.push('/users')}>Список пользователей</button>
      </div>
    </div>
  );
};

export default UserItemPage;