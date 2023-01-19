import { useEffect, useState } from "react";
import axios from "axios";
import Cryptos from "./api/Cryptos";
import { CryptoTypes } from "./types/CryptoTypes";
function App() {
  const [cryptos, setCryptos] = useState<CryptoTypes[] | null>();
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10";
  useEffect(() => {
    // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10'
    axios.get(url).then((datas) => {
      console.log(datas);
      setCryptos(datas.data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {cryptos
          ? cryptos.map((crypto) => {
              return <Cryptos crypto={crypto} />;
            })
          : null}
      </header>
    </div>
  );
}

export default App;
