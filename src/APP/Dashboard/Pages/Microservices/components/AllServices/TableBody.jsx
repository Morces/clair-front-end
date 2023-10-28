import React, { useState, useContext } from "react";
import { Table } from "flowbite-react";
import TableRow from "./TableRow";
import ServiceContext from "../../context/ServiceContext";

const TableBody = () => {
  const { data } = useContext(ServiceContext);
  return (
    <Table.Body className="divide-y">
      {data.map((item, index) => {
        <TableRow item={item} key={item.id || index} />;
      })}
    </Table.Body>
  );
};

export default TableBody;
