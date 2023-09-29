import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';

const TableComponent = (props) => {
    const {data} = props;
    
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>INSTRUMENT</Th>
            <Th>SYMBOL</Th>
            <Th>EXPIRY_DT</Th>
            <Th>STRIKE_PR</Th>
            <Th>OPTION_TYP</Th>
            <Th>OPEN</Th>
            <Th>HIGH</Th>
            <Th>LOW</Th>
            <Th>CLOSE</Th>
            <Th>SETTLE_PR</Th>
            <Th>CONTRACTS</Th>
            <Th>VAL_INLAKH</Th>
            <Th>OPEN_INT</Th>
            <Th>CHG_IN_OI</Th>
            <Th>TIMESTAMP</Th>
          </Tr>
        </Thead>
        <tbody>
          {data?.length > 0 && data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.INSTRUMENT}</Td>
              <Td>{item.SYMBOL}</Td>
              <Td>{item.EXPIRY_DT}</Td>
              <Td>{item.STRIKE_PR}</Td>
              <Td>{item.OPTION_TYP}</Td>
              <Td>{item.OPEN}</Td>
              <Td>{item.HIGH}</Td>
              <Td>{item.LOW}</Td>
              <Td>{item.CLOSE}</Td>
              <Td>{item.SETTLE_PR}</Td>
              <Td>{item.CONTRACTS}</Td>
              <Td>{item.VAL_INLAKH}</Td>
              <Td>{item.OPEN_INT}</Td>
              <Td>{item.CHG_IN_OI}</Td>
              <Td>{item.TIMESTAMP}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
