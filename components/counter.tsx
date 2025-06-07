'use client';

import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '../hooks/useTonConnect';
import { useCounterContract } from '../hooks/useContract';
import { useState } from 'react';

function App() {
  const { connected } = useTonConnect();
  const { value, id, address, addCounter } = useCounterContract();
  const [inputAmount, setInputAmount] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 1 || value > 4294967295) {
      setError('Amount must be between 1 and 4,294,967,295');
    } else {
      setError(null);
    }
    setInputAmount(value);
  };

  const handleAddCounter = () => {
    if (!connected) {
      alert('Please connect your wallet first');
      return;
    }
    if (!error && inputAmount >= 1 && inputAmount <= 4294967295) {
      addCounter(inputAmount);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 space-y-6 border border-gray-700/50">
        <div className="flex justify-end">
          <TonConnectButton />
        </div>
  
        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg">
            <h3 className="text-sm font-semibold text-gray-200">Counter Address</h3>
            <p className="text-xs text-gray-400 break-all">
              {address ? `${address.slice(0, 30)}...` : 'Loading...'}
            </p>
          </div>
  
          <div className="bg-gray-800/50 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg">
            <h3 className="text-sm font-semibold text-gray-200">Counter ID</h3>
            <p className="text-sm text-white">{id ?? 'Loading...'}</p>
          </div>
  
          <div className="bg-gray-800/50 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg">
            <h3 className="text-sm font-semibold text-gray-200">Counter Value</h3>
            <p className="text-sm text-white">{value ?? 'Loading...'}</p>
          </div>
  
          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-semibold text-gray-200">
              Add Amount
            </label>
            <input
              id="amount"
              type="number"
              value={inputAmount}
              onChange={handleAmountChange}
              min="1"
              max="4294967295"
              disabled={!connected}
              className={`w-full p-2.5 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 ${
                error ? 'border-red-400' : 'border-gray-600'
              } ${!connected ? 'bg-gray-700 cursor-not-allowed' : ''}`}
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>
  
          <button
            onClick={handleAddCounter}
            disabled={!connected || !!error}
            className={`w-full py-2.5 px-4 rounded-lg text-white font-medium transition-all duration-300 ${
              connected && !error
                ? 'bg-indigo-500 hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/40 active:scale-95'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            Add to Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;