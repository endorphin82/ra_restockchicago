import React from 'react'
import {
  List, Datagrid, NumberField, TextField, ReferenceField, SelectInput,
  ReferenceInput, TextInput, SimpleForm,
  Edit, Create
} from 'react-admin'
import { UrlField } from '../UrlField'

export const ImageprodList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <NumberField source="product"/>
      <UrlField source="url"/>
      <ReferenceField source="product_id" reference="Product">
        <TextField source="name"/>
      </ReferenceField>
    </Datagrid>
  </List>
)

export const ImageprodEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id"/>
      <TextInput source="product"/>
      <TextInput source="url"/>
      <ReferenceInput source="product_id" reference="Product">
        <SelectInput optionText="id"/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

export const ImageprodCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="url"/>
      <ReferenceInput source="product_id" reference="Product">
        <SelectInput optionText="id"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
)