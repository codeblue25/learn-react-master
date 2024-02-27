import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Loader = styled.span`
  display: block;
  text-align: center;
`;
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.1s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const SymbolImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

interface ICoinsProps {}

function Coins({}: ICoinsProps) {
  const setDartAtom = useSetRecoilState(isDarkAtom);
  const toggleTheme = () => setDartAtom((prev) => !prev);
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);
  /* const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.coinpaprika.com/v1/coins"
      );
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }); */

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
        <button onClick={toggleTheme}>Toggle Mode</button>
      </Header>

      {isLoading ? (
        <Loader>Loading .. </Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <SymbolImg
                  alt="대표 이미지"
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
