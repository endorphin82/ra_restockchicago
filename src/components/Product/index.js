import React, { useDebugValue } from 'react'
import {
  SimpleForm,
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  NumberField,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  Edit, ReferenceField,
  ArrayInput,
  SimpleFormIterator
} from 'react-admin'
import { BrandLinkField } from '../../prisma-ecommerce/src/components/refFields'
import get from 'lodash/get'
import { UrlField } from '../UrlField'

const getIdPath = (source) => {
  const splitSource = source.split('.')

  if (splitSource.length === 1) {
    return splitSource
  }

  splitSource[splitSource.length - 1] = 'id'

  return splitSource.join('.')
}

export const CategoryLinkField = ({ source, record }) => (
  <a href={`Category/${get(record, getIdPath(source))}`}>{get(record, source)}</a>
)

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
    // Костыль https://github.com/panter/ra-data-prisma/issues/19
    <List {...{ ...props, id: +props.id }}>

      {/*<Datagrid rowClick="edit">*/}
      {/*  <TextField source="id" />*/}
      {/*  <TextField source="name" />*/}
      {/*  <NumberField source="category" />*/}
      {/*  <UrlField source="url" />*/}
      {/*  <TextField source="description" />*/}
      {/*  <TextField source="icon" />*/}
      {/*  <NumberField source="price" />*/}
      {/*  <TextField source="images" />*/}
      {/*    /!*<EditButton/>*!/*/}
      {/*</Datagrid>*/}

      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="description"/>
        <TextField source="price"/>
        <TextField source="category"/>
        {/*<ReferenceField source="category_id" reference="Category">*/}
        {/*  <TextField source="name" />*/}
        {/*</ReferenceField>*/}

        {/*<UrlField source="url"/>*/}
        <EditButton/>
      </Datagrid>
    </List>
  )
}

export const ProductEdit = (props) => {
  return (
    // Костыль https://github.com/panter/ra-data-prisma/issues/19
    <Edit title="Edit product" {...{ ...props, id: +props.id }}>
      <SimpleForm>
        <TextInput disabled source="id"/>
        <TextInput source="name"/>
        <TextInput source="description"/>

        <ReferenceInput source="category.id" reference="Category">
          <SelectInput optionText="name"/>
        </ReferenceInput>
        <ArrayInput source="images">
          <SimpleFormIterator>
            <TextInput source="url" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  )
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
