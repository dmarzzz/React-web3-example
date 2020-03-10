import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const ethereum = window.ethereum; 

  // useEffect(() => {
    
  //   if (window.ethereum) {
  //     window.web3 = new Web3(ethereum);
  //     try {
  //         // Request account access if needed
  //         await ethereum.enable();
  //         // Acccounts now exposed
  //         console.log('hello');
  //     } catch (error) {
  //         // User denied account access...
  //     }
  //   }
  // })  
  //https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8


  const [addr, setAddr] = useState('');

  if(ethereum){
    ethereum.on('accountsChanged', function(accounts){
      setAddr(accounts[0])
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Ethereum Address: {addr}
        </p>
        
      </header>
    </div>
  );
}

export default App;
