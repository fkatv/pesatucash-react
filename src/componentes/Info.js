import React from 'react'
import { Box } from '@material-ui/core'

const Info = (props) => {

  return (
    <Box p={4} style={{textAlign:'left'}} className="App-header2">
    <h3>1. Pese sus monedas en la balanza</h3>
    <h3>2. Si la balanza está descalibrada o tiene un recipiente,
    ingrese el peso excedente en TARA</h3>
    <h3>3. Ingrese peso y el valor de la moneda</h3>
    <h3></h3>
    </Box>
  )
}

export default Info
