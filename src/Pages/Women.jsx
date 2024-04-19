import React from 'react'

const Women = ({setChanges}) => {
  const setchange=setChanges;
  function changehandler() {
    setchange(false);
}
  return (
    <div onClick={changehandler} className='h-screen'>Women</div>
  )
}

export default Women