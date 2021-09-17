import React, {useState} from 'react'
import { Grid, Box, TextField,Button, Link } from '@material-ui/core'
import calculator from '../utils/calculator.js'

const Pesador = (props) => {
  const [tara, setTara] = useState()
  const [peso, setPeso] = useState()
  const [total, setTotal] = useState(0);
  const [monedaFocus, setMonedaFocus] = useState(0)
  const [resultado_count, setRCount] = useState("")
  const monedas_label = ['$10','$50','$100','$500']

  const calcular = () => {
    if (peso <= 15000) {
      const data = calculator(tara? tara:0, peso, monedaFocus);
      if (data) {
        const txt = data[0]
        const valor = data[1]
        setTotal(valor)
        setRCount(txt)
      }
    } else {
      alert("Máximo 15 kilos (15000 grs.)")
    }
  }

  return (
    <Grid container className="App-header">
      <Box p={2}>
        <h3>Pesa tu Cash </h3>
        <TextField
            variant="outlined"
            margin="normal"
            autoCapitalize="off"
            value={tara}
            onChange={(e)=>setTara(e.target.value)}
            spellCheck="false"
            required
            fullWidth
            label={"Tara"}
          />
          <TextField
              variant="outlined"
              margin="normal"
              autoCapitalize="off"
              value={peso}
              onChange={(e)=>setPeso(e.target.value)}
              spellCheck="false"
              required
              fullWidth
              label={"Peso"}
            />

          <h3>Moneda</h3>

          <Box m={2}>
            {monedas_label.map((item, i) => (
              <Button key={i} onClick={() => setMonedaFocus(i)}
              variant={monedaFocus === i ? "contained": "outlined"}
              color={monedaFocus === i ? "primary":"none"}
              style={{color:monedaFocus === i ? 'yellow' : "rgba(0,0,0,0.6)",
                      fontWeight: "bold"}}
              >{item}</Button>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={()=>calcular()}
          > Calcular
          </Button>

          <h3>${total}</h3>
          <h4>{resultado_count}</h4>
          <h5> <Link href="https://www.github.com/fkatv" target="_blank" rel="noopener">
          Fkatv 2021 </Link> </h5>
      </Box>
    </Grid>
  )
}

export default Pesador
