import React, {useCallback } from 'react'
import { Card, Button, Avatar} from 'antd'

const UserProfile = ({setIsLogin}) => {

  const onLogOut = useCallback(() => {
    setIsLogIn(false)
  },[])

  return (
    <Card
    actions={[
      <div key="goodMark">좋아요<br/>0</div>,
      <div key="following">팔로잉<br/>0</div>,
      <div key="follower">팔로워<br/>0</div>,
    ]}
    >
      <Card.Meta
      avatar={<Avatar>H</Avatar>}
      title="myHome"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile