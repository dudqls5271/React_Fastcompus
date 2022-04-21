import React from 'react'
import CustomDialog from './CustomDialog'
import Dialog from './Dialog'

export default function WelcomDialog() {
  // return (
  //     <Dialog>
  //         <h1>Welcom</h1>
  //         <h5>Than you!</h5>
  //     </Dialog>
  // )
  return (
    <CustomDialog title={<button>Welcom</button>} desciption="Thanks"/>
  )
}
