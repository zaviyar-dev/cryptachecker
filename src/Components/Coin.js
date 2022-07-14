import React from "react";
import "../Components/Coin.css";
import { useHistory } from "react-router-dom";

const Coin = ({
  icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
  id,
}) => {
  let history = useHistory();
  return (
    <div className="coinContainer">
      <div className="coinCard">
        <div className="coinIcon">
          <img src={icon} alt={coinName} />
        </div>
        <div className="coinDetails">
          <div className="coinName">
            <h3>Name:</h3>&nbsp;<p>{coinName}</p>
          </div>
          <div className="coinSymbol">
            <h3>Symbol:</h3>&nbsp;<p>{coinSymbol}</p>
          </div>
          <div className="coinPrice">
            <h3>Price:</h3>&nbsp;{priceChange < 0 ? (
              <p className="priceChange red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="priceChange green">{priceChange.toFixed(2)}%</p>
            )}
          </div>
          <div className="priceChange">
            <h3>Change Rate:</h3>&nbsp;<p>{priceChange.toFixed(2)}</p>
          </div>
          <button
            onClick={() => {
              history.push(`/CoinPage/${id}`);
            }}
          >
            More Info
          </button>
        </div>
      </div>


      {/* <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            <img src={icon} />
            <h1 className="coinName">{coinName}</h1>
            <p className="coinSymbol">{coinSymbol}</p>
            <p className="coinPrice">$ {price.toFixed(2)}</p>
            {priceChange < 0 ? (
              <p className="priceChange red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="priceChange green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coinVolume">$ {marketCap.toLocaleString()}</p>
            <button
              onClick={() => {
                history.push(`/CoinPage/${id}`);
              }}
            >
              More Info
            </button>
          </div>
        </div>
      </div> */}
    </div >
  );
};

export default Coin;
