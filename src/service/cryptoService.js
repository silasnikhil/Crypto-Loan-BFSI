import axios from "axios";

const BASE_URL = "http://localhost:8081/api/v1/wallet";

class cryptoService {
  getWalletData() {
    let data = axios.get(BASE_URL);
    console.log(data);
    return data;
  }
}

export default new cryptoService();
