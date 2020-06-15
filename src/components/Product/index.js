import React, { useDebugValue } from 'react'
import {
  SimpleForm,
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  Edit
} from 'react-admin'
// import { UrlField } from '../UrlField'

export const ProductFilter = (props) => (
  <Filter {...props}>
    {/*<TextInput label="Search" source="q" alwaysOn/>*/}
    <ReferenceInput label="Category" source="category_id" reference="Category" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
)

export const ProductList = (props) => {
  return (
    // <List filters={ProductFilter} {...props}>
    <List {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="description"/>
        <TextField source="price"/>
        {/*<UrlField source="url"/>*/}
        <EditButton/>
      </Datagrid>
    </List>
  )
}

export const ProductEdit = (props) => {
  // Костыль https://github.com/panter/ra-data-prisma/issues/19
  return <Edit title="Edit product" {...{ ...props, id: +props.id } }>
    <SimpleForm>
      <TextInput disabled source="id"/>
      <TextInput source="name"/>
      <TextInput source="description"/>

      <ReferenceInput source="category.id" reference="Category">
        <SelectInput optionText="name"/>
      </ReferenceInput>

    </SimpleForm>
  </Edit>
}

export const ProductCreate = props => (
  <Create title="Create a product" {...props}>
    <SimpleForm>
      <TextInput source="name"/>
      <TextInput source="description"/>
      <TextInput source="price"/>
    </SimpleForm>
  </Create>
)
