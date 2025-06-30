import ThemedComponent from '@/components/Assignment2/ThemedComponent'
import { ThemeContext, ThemeProvider } from '@/context/ThemeContext'
import React from 'react'

const page = () => {
  return (
    <div>
        <center>
      <ThemeProvider>
        <ThemedComponent/>
      </ThemeProvider>
      </center>
    </div>
  )
}

export default page
