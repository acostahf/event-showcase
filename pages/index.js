import Events from "./components/events";
import Navbar from "./components/navbar";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import { useState } from "react";

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
  const { data: evnts } = await client.query({
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
  });
  // console.log(evnts);
  return {
    props: {
      evnts,
    },
  };
}
