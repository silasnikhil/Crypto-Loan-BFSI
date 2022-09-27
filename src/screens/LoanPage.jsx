import React from "react";

const LoanPage = () => {
  const handleChange = (e) => {
    const value = e.target.value;
  };
  return (
    <div className="gradient__bg inline-block w-full min-h-screen">
      <div className="justify-center mt-24">
        <div className="w-96 mx-auto border border-gray-400 rounded-lg">
          <div className="w-full h-auto p-4 flex items-center border-b border-gray-400">
            <h1 className="w-full">Crypto Loan Application</h1>
          </div>
          <div className="w-full h-auto p-4">
            <form>
              <div className="text-black">
                <label className="text-white font-semibold font-sans">
                  Choose a crypto :
                </label>
                <select name="crypto" id="crypto" className="ml-2">
                  <option
                    className="text-black font-semibold font-sans"
                    value="BTC"
                  >
                    BTC
                  </option>
                  <option
                    className="text-black font-semibold font-sans"
                    value="ETH"
                  >
                    ETH
                  </option>
                  <option
                    className="text-black font-semibold font-sans"
                    value="ADA"
                  >
                    ADA
                  </option>
                  <option
                    className="text-black font-semibold font-sans"
                    value="BNC"
                  >
                    BNC
                  </option>
                </select>
              </div>

              <div className="mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 focus-within:text-gray-900 focus-within:border-gray-500 mt-4">
                <input
                  id="cryptoAmt"
                  type="number"
                  name="cryptoAmt"
                  className="w-full h-8 focus:outline-none mt-4 text-black font-semibold font-sans"
                  placeholder="0.1 - 10"
                  min="0.1"
                  max="1000"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 text-black">
                <label className="text-black font-semibold font-sans">
                  Eligible Loan ammount
                </label>
                <input
                  id="eligibleAmt"
                  type="number"
                  name="eligibleAmt"
                  className="text-green-500 font-semibold font-sans"
                  placeholder="Eligible Loan Ammount"
                  value="10675.232"
                  onChange={(e) => handleChange(e)}
                  readOnly
                />
              </div>

              <div className="flex mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 focus-within:border-gray-500">
                <div className="w-full focus-within:text-gray-900">
                  <label className="text-black font-semibold font-sans">
                    Enter the Required Loan Ammount
                  </label>
                  <input
                    id="cc-expiry"
                    type="text"
                    className="w-full h-8 focus:outline-none text-black font-semibold font-sans"
                    placeholder="Max Ammount - 10675.232"
                    max="10675.232"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </form>

            <button
              className="h-16 w-full rounded-sm bg-green-500 tracking-wide font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
              onClick={() => console.log("Button Clicked")}
            >
              Get Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanPage;
