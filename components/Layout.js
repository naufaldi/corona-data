import React, { Component } from 'react'
import Headers from './Header'
import Footers from './Footer'
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import theme from "../style/theme";

export default class AppLayout extends Component {
  render() {
    return (
     <>
       <ThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={css`
            body {
              background-color: #f7fafc;
            }
            
            body.dark-mode {
              background-color: #171923;
            }
          `}
        />
        <Headers/>
        <Box
        px="2rem"
        paddingTop="7rem"
        >
        {this.props.children}
        </Box>
     <Footers/>
      </ThemeProvider>

     </>
    )
  }
}
