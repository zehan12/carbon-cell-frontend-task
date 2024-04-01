interface WallDetailCard {
  currentAccount: string;
}

export const WalletDetailCard = ({ currentAccount }: WallDetailCard) => {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="flex flex-row items-center justify-between px-4 py-4">
        <div className="hidden lg:flex md:flex  mr-4">
          <span className="items-center px-4 py-4 m-auto bg-green-200 rounded-full hover:bg-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="items-center w-8 h-8 m-auto text-green-500 hover:text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 pl-1">
          <div className="text-xl font-medium text-gray-600">
            Wallet connected with account
          </div>
          <div className="text-sm text-gray-400 sm:text-base">
            {currentAccount}
          </div>
        </div>
      </div>
    </div>
  );
};
