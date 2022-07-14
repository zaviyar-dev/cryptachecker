import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "../Components/Coin";
import Refresh from "../Images/refresh.png";
import "../Components/Coin.css";

function Home() {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshPage();
  }, []);

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filterCoins);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const refreshPage = () => {
    setIsLoading(false);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      console.log(response.data);
      setIsLoading(true);
      setCoins(response.data);
    });
  };

  return (
    <>
      <div className="home-container">
        <div className="headerContainer">
          <h1>Welcome to the Crypto Checker</h1>
          <div className="buttonContainer">
            <input
              placeholder="Search for a Coin"
              type="text"
              onChange={handleSearch}
            />
            {isLoading ? <img onClick={refreshPage} src={Refresh}></img> :
              <img onClick={refreshPage} className="rotateIcon" src={Refresh}></img>}

          </div>
        </div>
        <div className="coinHomeContainer">
          {filterCoins.map((coins) => {
            return (
              <Coin
                id={coins.id}
                icon={coins.image}
                coinName={coins.name}
                coinSymbol={coins.symbol}
                price={coins.current_price}
                marketCap={coins.market_cap}
                priceChange={coins.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;