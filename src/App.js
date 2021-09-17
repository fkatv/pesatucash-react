import React, {lazy, Suspense} from 'react'
import './App.css';
import { Grid, Box } from '@material-ui/core'
//import Pesador from './componentes/pesador.js'
//import Info from './componentes/Info.js'

const Pesador = lazy(()=>import('./componentes/pesador.js'))
const Info = lazy(()=>import('./componentes/Info.js'))

function App() {
  return (
    <div className="App">
      <Grid container className="App-header">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Suspense fallback={<div>Cargando</div>}>
            <Pesador />
          </Suspense>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Suspense fallback={<div>Cargando</div>}>
            <Info/>
          </Suspense>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
