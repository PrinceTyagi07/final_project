import React from 'react'

const Cart = ({setChanges}) => {
    const setchange=setChanges;
  function changehandler() {
    setchange(false);
}
  return (
    <div onClick={changehandler} className='h-screen'>Cart</div>
  )
}

export default Cart