import logo from './logo.svg';
import './App.css';
import { Grid, Box } from '@material-ui/core'
import Pesador from './componentes/pesador.js'
import Info from './componentes/Info.js'

function App() {
  return (
    <div className="App">
      <Grid container className="App-header">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Pesador />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Info/>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default App;
