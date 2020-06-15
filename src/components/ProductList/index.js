import React from 'react'
import { List, Datagrid, TextField, EditButton } from 'react-admin'
// import { UrlField } from '../UrlField'
import { ProductFilter } from '../ProductFilter'

export const ProductList = (props) => {
  return (
    // <List filters={ProductFilter} {...props}>
    <List {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="description"/>
        {/*<TextField source="price"/>*/}
        {/*<UrlField source="url"/>*/}
        <EditButton/>
      </Datagrid>
    </List>
  )
}
