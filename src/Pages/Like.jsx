import React from 'react'

const Like = ({setChanges}) => {
  const setchange=setChanges;
  function changehandler() {
    setchange(false);
}
  return (
    <div  onClick={changehandler} className='h-screen'>Like</div>
  )
}

export default Like