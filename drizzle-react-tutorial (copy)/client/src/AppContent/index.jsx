import React from 'react'
import { AppDispatchContext, AppStateContext } from '../AppStateProvider'

//import ..


export default function AppContent() {
  const dispatch = useContext(AppDispatchContext)
  const {
    dummy
  } = useContext(AppStateContext)

  return (
    <div
      className='section'
      style={{ }}
    >
      <h5></h5>

    </div>
  )
}