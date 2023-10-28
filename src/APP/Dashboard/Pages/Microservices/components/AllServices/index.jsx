import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ServiceContext from "../../context/ServiceContext";
import dummyData from "../../data/dummyData";
import axios from "axios";

const All = () => {
  const [data, setDate] = useState(dummyData);

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

  const navigate = useNavigate();

  return (
    <ServiceContext.Provider
      value={{
        data,
        setDate,
        services,
        setServices,
      }}
    >
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>SERVICE ID</Table.HeadCell>
          <Table.HeadCell>SERVICE NAME</Table.HeadCell>
          <Table.HeadCell>DESCRIPTION</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
          <Table.HeadCell>ACTION</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {services.map((item, index) => {
            return (
              <Table.Row className="bg-white " key={item.id || index}>
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
                <Table.Cell>
                  <div
                    className="font-medium text-cyan-600 hover:underline cursor-pointer"
                    onClick={() => navigate(`view/${item?.ID || index}`)}
                  >
                    <p>View</p>
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </ServiceContext.Provider>
  );
};

export default All;
