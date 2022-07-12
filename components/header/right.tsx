import React from 'react'
import { IconButton, Text } from '../../customUI'
import dynamic from 'next/dynamic'

import {IconSkeleton} from '../skeleton'

const NextLink = dynamic(() => import("next/link"))
const AccountCircleRoundedIcon = dynamic(() => import('@mui/icons-material/AccountCircleRounded'), { loading: () => <IconSkeleton/> })
const LoginRoundedIcon = dynamic(() => import('@mui/icons-material/LoginRounded'), { loading: () => <IconSkeleton/> })
const LogoutRoundedIcon = dynamic(() => import('@mui/icons-material/LogoutRounded'), { loading: () => <IconSkeleton/> })

import {signOut} from 'next-auth/react'

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { selectUser } from '../../redux/slices/user'
import { setModalCart, setModalSearch } from '../../redux/slices/modal'


export default function HeaderRight({styles}) {

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  const openCart = React.useCallback(() => {
    dispatch(setModalCart(true))
  }, [])
  const openSearch = React.useCallback(() => {
    dispatch(setModalSearch(true))
  }, [])

  return (
    <div className={styles.rightContent}>
        <div className={styles.iconWithText}>
        </div>
        {
          !user.data.auth ? (
            <NextLink href="/sign" passHref>
              <div className={styles.iconWithText}>
                <IconButton><LoginRoundedIcon/></IconButton>
                <Text variant="caption" className={styles.text}>Log</Text>
              </div>
            </NextLink>
          ) : (
            <>
            <NextLink href="/account/orders" passHref>
              <div className={styles.iconWithText}>
                <IconButton><AccountCircleRoundedIcon/></IconButton>
                <Text variant="caption" className={styles.text}>Orders</Text>
              </div>
            </NextLink>
            <div className={styles.iconWithText}>
              <IconButton onClick={() => signOut()}><LogoutRoundedIcon/></IconButton>
              <Text variant="caption" className={styles.text}>SignOut</Text>
            </div>
            </>
          )
        }
      </div>
  )
}
