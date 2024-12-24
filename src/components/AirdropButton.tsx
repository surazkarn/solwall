import { FC, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import toast from 'react-hot-toast';
import { CloudRain } from 'lucide-react';

export const AirdropButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [loading, setLoading] = useState(false);

  const handleAirdrop = async () => {
    if (!publicKey) return;

    try {
      setLoading(true);
      const signature = await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL);
      await connection.confirmTransaction(signature, 'confirmed');
      toast.success('Airdrop successful!');
    } catch (error) {
      console.error(error);
      toast.error('Airdrop failed');
    } finally {
      setLoading(false);
    }
  };

  if (!publicKey) return null;

  return (
    <button
      onClick={handleAirdrop}
      disabled={loading}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
    >
      {loading ? (
        'Processing...'
      ) : (
        <>
          <CloudRain className="w-4 h-4 mr-2" />
          Request Airdrop
        </>
      )}
    </button>
  );
};