import { PublicKey } from '@solana/web3.js';

export const isValidSolanaAddress = (address: string): boolean => {
  try {
    if (address.length !== 44) {
      return false;
    }
    new PublicKey(address);
    return true;
  } catch {
    return false;
  }
};

export const sanitizeAmount = (amount: string): number => {
  const cleanAmount = amount.trim();
  const parsedAmount = parseFloat(cleanAmount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    throw new Error('Invalid amount');
  }
  return parsedAmount;
};