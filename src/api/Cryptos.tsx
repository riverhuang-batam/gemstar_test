
import { JsxElement } from 'typescript';
import {CryptoTypes} from '../types/CryptoTypes'

export type AppProps = {
  crypto: CryptoTypes
}

export default function Cryptos({crypto}: AppProps): JSX.Element {
  return (
    <div className="App">
     {crypto.name}
    </div>
  );
}


