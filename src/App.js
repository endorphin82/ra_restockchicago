import React, { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import useDataProvider from './lib/useDataProvider'
// import buildGraphQLProvider from '@ra-data-prisma/dataprovider'
// import jsonServerProvider from 'ra-data-json-server'

// import './App.css';
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  const dataProvider = useDataProvider()

  return (
    <Admin dataProvider={dataProvider}>
      {/*<Resource name="categories" list={CategoryList}/>*/}
      {/*<Resource name="products" list={ProductList}/>*/}
    </Admin>
  )
}

export default App
