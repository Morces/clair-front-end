import React, { useState, useEffect } from "react";
import summaryData from "./summaryData";
import { Table } from "flowbite-react";
import axios from "axios";

const Recent = () => {
  const [data, setData] = useState(summaryData);

  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  async function getServices() {
    try {
      const response = await axios.get(
        "https://clair-ms.onrender.com/Api/microservices/read/owner/1"
      );
      setServices(response?.data?.Microservices);
    } catch (error) {
      console.error("Error while fetching services:", error);
    }
  }

  return (
    <div className="p-5 bg-white">
      <div className="flex justify-between mb-5 p-6">
        <div className="flex flex-col gap-3 ">
          <h1 className="font-bold text-3xl">Last Operations</h1>
          <h3 className="font-medium">{services.length} operations</h3>
        </div>
        <div className="flex justify-center gap-x-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl">12</h1>
            <h3 className="font-medium">complete</h3>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl">4</h1>
            <h3 className="font-medium">in progress</h3>
          </div>
        </div>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>SERVICE ID</Table.HeadCell>
          <Table.HeadCell>NAME</Table.HeadCell>
          <Table.HeadCell>DESCRIPTION</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {services.map((item, index) => {
            return (
              <Table.Row className="bg-white " key={item.ID || index}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                  {item.ID}
                </Table.Cell>
                <Table.Cell>{item.Name}</Table.Cell>
                <Table.Cell>{item.Description}</Table.Cell>
                <Table.Cell>
                  {item.Status === "1"
                    ? "Good"
                    : item.Status === "2"
                    ? "Failed"
                    : item.Status === "3"
                    ? "Cancelled"
                    : ""}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Recent;
