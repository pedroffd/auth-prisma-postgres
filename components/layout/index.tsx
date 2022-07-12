import React from 'react'
import dynamic from 'next/dynamic'

import {Container, NoSsr} from '../../customUI'

const Header = dynamic(() => import('../header'))
const SnackbarAlert = dynamic(() => import("../snackbar"))

interface iLayout {
  children: React.ReactNode,
  title?: string
}

export default function Layout({children, title}:iLayout) {      

  return (
    <>
    <Header />
    <Container maxWidth="lg">
      {children}
    </Container>

    <NoSsr>
      <SnackbarAlert/>
    </NoSsr>
    </>
  )
}
