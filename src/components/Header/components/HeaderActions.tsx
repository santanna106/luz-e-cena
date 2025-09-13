import React from 'react'
import Button from '../../Button'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const HeaderActions = () => {
  return (
    <div>
        <Button variant="icon">
            <HiOutlineShoppingCart/>
        </Button>
    </div>
  )
}

export default HeaderActions