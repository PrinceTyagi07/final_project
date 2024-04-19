import React from 'react'

const Beauty = ({setChanges}) => {
  const setchange=setChanges;
  function changehandler() {
    setchange(false);
}
  return (
    <div onClick={changehandler} className='h-screen'>Beauty</div>
  )
}

export default Beauty