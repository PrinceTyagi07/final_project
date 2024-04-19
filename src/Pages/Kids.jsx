import React from 'react'

const Kids = ({setChanges}) => {
  const setchange=setChanges;
  function changehandler() {
    setchange(false);
}
  return (
    <div onClick={changehandler} className='h-screen'>Kids</div>
  )
}

export default Kids