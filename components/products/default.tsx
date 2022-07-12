import React from 'react'
import {Button, Paper} from '../../customUI'
import styles from '../../styles/productcard.module.sass'
import { useAppDispatch } from '../../redux/hooks'
import { addToCart } from '../../redux/slices/cart'
import { setSnackbar } from '../../redux/slices/modal'

export default function ProductCard (data) {

  const dispatch = useAppDispatch()
  const onAddToCart = () => {
    dispatch(addToCart(data))
    dispatch(setSnackbar({ 
      severity: "success", 
      show: true, 
      message: `${data.title} Has Been Added to Your Cart`
    }))
  }

    return (
    <Paper className={styles.card}>
        <Button fullWidth variant="text" onClick={onAddToCart}>Add to Cart</Button>
      </Paper>
    )
}