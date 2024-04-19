import React from 'react'

const Men = ({setChanges}) => {
  const setchange = setChanges;
  function changehandler() {
    setchange(false);
  }
  return (
    <div onClick={changehandler} className='h-screen'>Men</div>
  )
}

export default Men