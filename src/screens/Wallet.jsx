import React, { useEffect, useState } from "react";
import { assetData } from "../data/dummy.js";
import cryptoService from "../service/cryptoService.js";

const Wallet = () => {
  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await cryptoService.getWalletData();
        setWallet(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // const DisplayData = wallet.map((asset) => {
  //   return (
  //     <tr key={asset.assetId}>
  //       <td className="text-black pl-4">{asset.assetName}</td>
  //       <td className="text-black pl-8">{asset.assetSymbol}</td>
  //       <td className="text-black pl-16">{asset.assetBalance}</td>
  //     </tr>
  //   );
  // });

  if (!loading) {
    return (
      <div className="bg-gray-100 inline-block w-full min-h-screen pl-8 pr-8">
        <div className="container mx-auto my-10 overflow-auto">
          <div className="h-12">
            <button
              onClick={() => console.log("Button")}
              className="rounded bg-blue-500 text-white px-6 py-2 font-semibold"
            >
              Portfolio
            </button>
          </div>
          <div className="flex shadow border-b mt-16">
            <table className="min-w-full" key={assetData.assetId}>
              <thead className="border-b bg-blue-400">
                <tr>
                  <th className="text-left text-white font-semibold uppercase tracking-wider py-3 px-6">
                    Assets
                  </th>
                  <th className="text-left font-semibold text-white uppercase tracking-wider py-3 px-6">
                    Symbol
                  </th>
                  <th className="text-left font-semibold text-white uppercase tracking-wider py-3 px-6">
                    Total Balance
                  </th>
                </tr>
              </thead>
              {!loading && (
                <tbody>
                  {wallet.map((wallet) => (
                    <tr key={wallet.assetId}>
                      <td className="text-black pl-4">{wallet.assetName}</td>
                      <td className="text-black pl-8">{wallet.assetSymbol}</td>
                      <td className="text-black pl-16">
                        {wallet.assetBalance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Wallet;
