import React from 'react'
import { List, Datagrid, TextField, EditButton } from 'react-admin'
import UrlField from '../UrlField'
import ProductFilter from '../ProductFilter'

const ProductList = (props) => {
  return (
    <List filters={ProductFilter} {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="description"/>
        <TextField source="price"/>
        <UrlField source="url" />
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default ProductList