import { useState } from 'react';
import NFCReader from './NFCReader';

const App = () => {
  const [nfcTag, setNfcTag] = useState(null);

  const handleTagDetected = (tag) => {
    setNfcTag(tag);
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