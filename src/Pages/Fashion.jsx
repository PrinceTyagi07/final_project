import React from 'react'

const Fashion = ({setChanges}) => {
  const setchange=setChanges;
  function changehandler() {
    setchange(false);
}
  return (
    <div onClick={changehandler} className='h-screen'>Fashion</div>
  )
}

export default Fashion