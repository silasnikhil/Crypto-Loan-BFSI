import axios from "axios";

const BASE_URL = "http://localhost:8081/api/v1/wallet";

class cryptoService {
  getWalletData() {
    let data = axios.get(BASE_URL);
    console.log(data);
    return data;
  }

  getLoan(wallet) {
    return axios.put(BASE_URL, wallet);
  }
}

export default new cryptoService();
