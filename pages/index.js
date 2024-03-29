import Events from "./../components/events";
import Navbar from "./../components/navbar";
import { gql } from "@apollo/client";
import client from "../apolloClient";
// import { useState } from "react";

export default function home({ evnts }) {
  // console.log(evnts);
  return (
    <div>
      <Navbar />
      <Events {...evnts} />
    </div>
  );
}

export async function getStaticProps() {
  const data = "";
  const { data: evnts } = await client
    .query({
      query: gql`
        query {
          events {
            id
            what
            where
            when
          }
        }
      `,
    })
    .catch((err) => {
      return { data: "There was an error!" };
    });
  // console.log(evnts);
  return {
    props: {
      evnts,
    },
  };
}
