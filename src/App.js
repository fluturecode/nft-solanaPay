import { useState } from 'react';
import { NFCReader }  from './components/NFCReader.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

const App = () => {
  const [nfcTag, setNfcTag] = useState(null);
  const { publicKey, connect, connected } = useWallet();

  // Initialize the Phantom and Solflare wallet adapters
  const phantomWalletAdapter = new PhantomWalletAdapter();
  const solflareWalletAdapter = new SolflareWalletAdapter();
  

  const handleTagDetected = (tag) => {
    // Store the detected NFC tag in the state.
    setNfcTag(tag);
  };

  // const [hasSpecificNFT, setHasSpecificNFT] = useState(false);


  const handleConnectWallet = async () => {
    try {
      // Add the wallet adapters to the available adapters
      connect({ wallets: [phantomWalletAdapter, solflareWalletAdapter] });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handlePayment = () => {
    // Here, you'll trigger the Solana transaction using the nfcTag data.
    // Call your Solana wallet or wallet provider to sign and send the transaction.
    // The specifics of this step will depend on your wallet integration.
  };

  return (
    <div>
      <h1>Solana Pay App</h1>
      {nfcTag ? (
        <div>
          <p>Detected NFC Tag: {nfcTag}</p>
          <button onClick={handlePayment}>Make Payment</button>
        </div>
      ) : (
        <NFCReader onTagDetected={handleTagDetected} />
      )}
    </div>
  );
};

export default App;