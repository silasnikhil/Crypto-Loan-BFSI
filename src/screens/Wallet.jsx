import React from "react";
import { assetData } from "../data/dummy.js";

const Wallet = () => {
  const DisplayData = assetData.map((asset) => {
    return (
      <tr key={asset.assetId}>
        <td className="text-black pl-4">{asset.assetName}</td>
        <td className="text-black pl-8">{asset.assetSymbol}</td>
        <td className="text-black pl-16">{asset.assetBalance}</td>
      </tr>
    );
  });
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
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
