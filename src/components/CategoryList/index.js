import React from 'react'
import { List, Datagrid, TextField, EditButton } from 'react-admin'
// import {UrlField} from '../UrlField'

export const CategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="parent"/>
        {/*<UrlField source="url" />*/}
        <EditButton />
      </Datagrid>
    </List>
  )
}
