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
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>

        {
        cryptos
          ? cryptos.map((crypto) => {
              return <Cryptos crypto={crypto} />;
            })
          : null
          }
    </div>
  );
}

export default App;
