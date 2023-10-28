import React from "react";
import { Table } from "flowbite-react";

const TableRow = ({ item }) => {
  return (
    <Table.Row className="bg-white " key={item.id || index}>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
        {item.id}
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.description}</Table.Cell>
      <Table.Cell>{item.status}</Table.Cell>
      <Table.Cell>
        <div
          className="font-medium text-cyan-600 hover:underline cursor-pointer"
          onClick={() => navigate(`view/${item.id}`)}
        >
          <p>View</p>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
