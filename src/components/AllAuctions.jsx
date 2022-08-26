import React, { useState, useEffect } from "react";
import { Heading, Container } from "@chakra-ui/react";
import axios from "axios";
import AuctionCard from "./AuctionCard";
const AuctionList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/auction");
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <Container maxW={"7xl"} p="5">
        <Heading as="h1" color={"teal"}>
          Auctions
        </Heading>
        {loading && <div>Loading..</div>}
        {!loading && (
          <>
            {data.map((post) => (
              <AuctionCard
                bids={post.bids}
                key={post._id}
                id={post._id}
                title={post.title}
                description={post.description}
                startupName={post.startupName}
                username={post.username}
                photo={post.photo}
                status={post.status}
                askprice={post.fundingTarget}
              />
            ))}
          </>
        )}
      </Container>
    </>
  );
};

export default AuctionList;
