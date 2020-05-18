import React from 'react';

interface Props { render: any, children: any }

export default (props: Props) => {

  if(props.render) {
    return props.children
  } else {
    return null
  }
}