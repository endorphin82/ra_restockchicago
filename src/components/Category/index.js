import React from 'react'
import { List, Datagrid, TextField, EditButton, TextInput, SimpleForm, Edit } from 'react-admin'
import {UrlField} from '../UrlField'

export const CategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid>

        <TextField source="id" />
        <TextField source="name" />
        <TextField source="parent" />
        <UrlField source="url" />
        <TextField source="description" />
        <TextField source="products" label="ids products"/>
        <TextField source="icon" />
        <TextField source="images" />
        <EditButton />
      </Datagrid>
    </List>
  )
}

export const CategoryEdit = props => (
  <Edit title="Edit category" {...{ ...props, id: +props.id }}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="parent" />
      <TextInput source="url" />
      <TextInput source="description" />
      <TextInput source="products" />
      <TextInput source="icon" />
      <TextInput source="images" />
    </SimpleForm>
  </Edit>
);