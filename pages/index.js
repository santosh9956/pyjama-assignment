import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import staticData from '../lib/staticData.json';
import TableComponent from '../components/Table';
import { useEffect, useState } from 'react';
import { Input, filter } from '@chakra-ui/react'
import PaginationComponent from '../components/Pagination';
import { debounce } from '../lib/helper';
import Header from '../components/Header';

export default function Home() {
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
  
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(staticData.length/ value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        const filteredData = staticData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
        );
        
        return filteredData.slice((current - 1) * pageSize, current * pageSize);
    };



    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><i className="fa fa-angle-double-left"></i></button>;
        }
        if (type === 'next') {
            return <button><i className="fa fa-angle-double-right"></i></button>;
        }
        return originalElement;
    }

    const inputChangeHandler = debounce((e) => setSearchQuery(e.target.value), 500);
  
    return (
      <div className={styles.container}>
          <Header />
          <div style={{paddingTop: '70px'}}>
            <Input  onChange={inputChangeHandler} my={3}  placeholder='Search........' />
          </div>
          <TableComponent data={getData(current, size)} />
          <PaginationComponent PaginationChange={PaginationChange}  total={staticData.length}  current={current}
          pageSize={size || 10} showSizeChanger={false} itemRender={PrevNextArrow} onShowSizeChange={PerPageChange}
          />
      </div>
    )
}
