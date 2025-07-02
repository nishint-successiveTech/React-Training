import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
        <center>
       <nav style={{ marginBottom: '10px' }}>

        <Link href="dashboard/profile">Profile</Link> |{' '}
        <Link href="dashboard/settings">Settings</Link>
      </nav>
      </center>
    
  )
}

export default page
