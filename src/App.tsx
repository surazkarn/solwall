import { WalletContextProvider } from './components/WalletProvider';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { WalletBalance } from './components/WalletBalance';
import { TransactionForm } from './components/TransactionForm';
import { AirdropButton } from './components/AirdropButton';
import { NewsFeed } from './components/NewsFeed';
import { Toaster } from 'react-hot-toast';
import { Wallet, Newspaper, Github } from 'lucide-react';

function App() {
  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
        <Toaster position="top-right" />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Solana Wallet</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/surazkarn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <span className="text-sm">surazkarn</span>
                <Github className="h-5 w-5" />
              </a>
              <WalletMultiButton className="!bg-indigo-600 hover:!bg-indigo-700" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
                <WalletBalance />
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Send SOL</h2>
                  <AirdropButton />
                </div>
                <TransactionForm />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Newspaper className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Latest Web3 News</h2>
                </div>
                <NewsFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WalletContextProvider>
  );
}

export default App;