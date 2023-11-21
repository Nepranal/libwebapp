import React from "react";
import JsonData from "./data.json";
import Head from "next/head"

export default function table() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.date}</td>
      </tr>
    );
  });

  return (
    <>
    <Head>
        <title>HKU LibraryRobot | About</title>
        <meta name = "keywords" content='ninjas'/>
    </Head>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
    </>
  );
}
