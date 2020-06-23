import React, { useEffect, useState } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import buildGraphQLProvider from '@ra-data-prisma/dataprovider'
import CategoryIcon from '@material-ui/icons/Category'
import './App.css'
import { ProductCreate, ProductEdit, ProductList, ProductShow } from './components/Product'
import { CategoryEdit, CategoryList } from './components/Category'
import { ImageprodCreate, ImageprodEdit, ImageprodList } from './components/ImageProd'
// import buildGraphQLProvider from "./CustomDataProvider"

export const App = () => {
  const [state, setState] = useState({ dataProvider: null })
  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: 'http://localhost:3005' }
    }).then(dataProvider => {
      setState({ dataProvider })
    })
  }, [])

  const { dataProvider } = state
  if (!dataProvider) {
    return <div>Loading</div>
  }
  // const myDataProvider = {
  //   // ...dataProvider()
  //   // ,
  //   // update: (resource, params) => {
  //   //   if (resource !== 'p' || !params.data.pictures) {
  //   //     return dataProvider.update(resource, params)
  //   //   }
  //   // }
  // }

  return (
    <Admin title="Prisma e-commerce" dataProvider={dataProvider}>
      <Resource name="Product"
                list={ProductList}
                create={ProductCreate}
                edit={ProductEdit}
                show={ProductShow}
      />
      <Resource name="Category"
                list={CategoryList}
                edit={CategoryEdit}
                icon={CategoryIcon}
      />
      <Resource name="ImageProd"
                list={ImageprodList}
                edit={ImageprodEdit}
                create={ImageprodCreate}
      />
    </Admin>
  )
}
