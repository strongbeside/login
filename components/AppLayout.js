import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Input, Row, Col} from 'antd'

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const AppLayout = ({children}) => {
  const [isLogIn, setIsLogin ] = useState(false);
  return (
    <>
    <Row gutter={8}>
      <Col xs={24} md={6}>
        {isLogIn ? <UserProfile setIsLogIn={setIsLogin}/> : <LoginForm setIsLogin={setIsLogin}/>}
      </Col>
      <Col xs={24} md={12}>{children}</Col>
      <Col xs={24} md={6}>
        <a href="/" target="_blank" rel="noreferrer noopener">home</a> 
      </Col>
    </Row>
    </>
  )
}

AppLayout.PropTypes = {
  children : PropTypes.node.isRequired
  // 화면에 그릘수 있는 모든게 node, React의 node임, node.js의 그 node가 아님.
};

export default AppLayout