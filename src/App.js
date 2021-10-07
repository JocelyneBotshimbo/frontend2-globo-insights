import React, {useState} from 'react';
import './styles/App.css';
import { Box, Typography, Container, Button, Paper, Icon } from '@material-ui/core/';
import { grey } from '@material-ui/core/colors';

function App() {
  const [name,setName] = useState('Olá, Jocelyne!') ;
  const[email, setEmail] = useState('jocelyne.botshimbo@g.globo')
  
  return (
  
  <div>
    <Container maxWidth="sm" >
        
       <Paper square elevation="outlined" component={Box} >
         <Icon>signal_cellular_alt</Icon>
         <Icon>wifi</Icon>
         <Icon>bluetooth</Icon>
         <Icon>battery_full</Icon>
         <Icon  style={{color:"#ED4D77"}}>add</Icon>
       

         <div className="App">
           <div className="upper-container" textAlign="center" >
             <div className="image-container" textAlign="center" >
              
             <img src="../images/Jocelyne.jpg" alt="jocelyne" height="100px" width="100px"/>
             <img src="../images/logomarca.png" alt="logotipo" height="100px" width="100px"/>
             <img src="../images/wallpaper.png" alt="fundo" height="100px" width="100px"/>
             </div>
           </div>

           <div className="lower-container">
             <h5> {name} </h5>
             <h5> {email} </h5>

           </div>

         </div>

       <Box textAlign="center"  width={500} boxShadow={1} p={2} component="section"  >
          <Typography variant="h4" style={{color:"#ED4D77"}}>Feed de Insights</Typography>
          <Typography variant="subtitle1">
             Flamengo consegue boa vitória fora de casa na estréia
                          da Copa Libertadores 2021
           </Typography>
           
        </Box>

    <Box textAlign="center"  width={500} boxShadow={1} p={2} component="section"  >
      <Typography className="subtitle1">
        Primeira partida de um grupo difícil exigiu que o time
         carioca virasse o placar em dois momentos do jogo
      </Typography>
      <Button variant="contained" color="secondary" >TEMPORADA</Button>
    </Box>

    <Box textAlign="center"  width={500} boxShadow={1} p={2} component="section"  >
      <Typography className="subtitle1">
         Flamengo não conseguia vencer um time na
          Argentina há mais de 40 anos
      </Typography>
      <Button variant="contained" color="secondary" >HISTÓRICO</Button>
    </Box>

    <Box textAlign="center"  width={500} boxShadow={1} p={2} component="section"  >
      <Typography className="subtitle1">
      Arrascaeta fez a diferença e garantiu a vitória para o 
                 time rubro-negro
      </Typography>
      <Button variant="contained" color="secondary" >JOGADOR</Button>
    </Box>

    <Box textAlign="center" pt={5} width={500} boxShadow={1} p={2} component="section"  >
      <Typography className="subtitle1">
      Mesmo com falhas defensivas defensivas recorrentes, o 
        time de Rogério Ceni conseguiu resolver o jogo 
        através das boas atuações de jogadores do 
        meio para frente. Diego, Gerson e Arrascaeta
        fizeram boa partida e Gabigol, mais uma vez,
        converteu uma cobrança de penalti com 
        bastante segurança . Apesar do erro no
        primeiro gol do time Argentino, Arão conseguiu 
        marcar e jogar bem
      </Typography>
      <Button variant="contained" color="secondary">
        MELHOR PARTIDA
      </Button>
    </Box>



       </Paper>
     

    </Container>
    
  </div>
    
  )
}

export default App