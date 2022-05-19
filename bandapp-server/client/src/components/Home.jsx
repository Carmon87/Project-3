import React from 'react';
import ListOfUsers from './ListOfUsers';
import FriendList from './FriendList';
import { useSelector } from 'react-redux';
import { storedUser } from '../features/auth/authSlice';
import { getUserList } from '../services/userApi';

// <<<<<<< HEAD
const Home = (props) => {
  const userData = useSelector(storedUser);
  console.log('userdata in home: ', userData);

  getUserList();
  // =======
  // const Home = (props) => {

  //   // getUserList()
  // >>>>>>> origin/socketio

  return (
    <div>
      {/* <<<<<<< HEAD */}
      {userData.currentUser.friendList.length ? (
        <FriendList />
      ) : (
        <h1>Find people to play music with!</h1>
      )}

      <ListOfUsers setChatId={props.setChatId} />
      {/* =======
    <ListOfUsers setChatId={props.setChatId}/>
>>>>>>> origin/socketio */}
    </div>
  );
};

export default Home;
