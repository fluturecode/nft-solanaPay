import { useEffect, useState } from 'react';
import { NFC }  from 'react-nfc';

export const NFCReader = ({ onTagDetected }) => {
  const [isNFCSupported, setNFCSupported] = useState(true);

  useEffect(() => {
    if (!NFC.isSupported()) {
      setNFCSupported(false);
    }
  }, []);

  const handleNfcDetection = (tag) => {
    // Pass the detected NFC tag to the parent component.
    onTagDetected(tag);
  }

  return (
    <div>
    {isNFCSupported ? (
      <NFC onTagDetected={handleNfcDetection}>
        {(status) => <p>Status: {status}</p>}
      </NFC>
    ) : (
      <p>NFC is not supported on this device.</p>
    )}
  </div>
  )
}