import React from 'react'
import { Avatar  } from 'react-native-paper'

export default function UserAvatar({label, size, ...props}) {
  return <Avatar.Text size={size} label={label} {...props} />
};
