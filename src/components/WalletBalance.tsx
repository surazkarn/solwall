import { FC, useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Loader2 } from 'lucide-react';

export const WalletBalance: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      if (!publicKey) {
        setBalance(null);
        return;
      }

      try {
        setLoading(true);
        const balance = await connection.getBalance(publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      } catch (e) {
        console.error(e);
        setBalance(null);
      } finally {
        setLoading(false);
      }
    };

    getBalance();
    const interval = setInterval(getBalance, 10000);
    return () => clearInterval(interval);
  }, [connection, publicKey]);

  if (!publicKey) return null;

  return (
    <div className="flex items-center gap-2 text-lg font-medium">
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <span>{balance !== null ? `${balance.toFixed(4)} SOL` : 'Error loading balance'}</span>
      )}
    </div>
  );
};