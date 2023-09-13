import React from 'react'
import SimpleBar from 'simplebar-react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../helpers'
import Cover from "../components/userInfo/Cover"
import Main from "../components/userInfo/Main"
import { useState, useEffect } from 'react';


function UserInfo() {
  useEffect(() => {
    console.log("Working")
    //populateForms();
    //console.log(populateForms)
  });


  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
      <Cover />
      <Main />
      </ChakraProvider>
      </SimpleBar>
  )
}

export default UserInfo
