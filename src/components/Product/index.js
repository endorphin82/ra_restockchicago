import React from 'react'
import {
  SimpleForm,
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  NumberField,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  Edit, ReferenceField,
  ArrayInput,
  SimpleFormIterator
} from 'react-admin'
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
    <TextInput label="Search" source="q" alwaysOn/>
    <ReferenceInput label="Category" source="category_id" reference="Category" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
)

export const ProductList = (props) => {
  return (
    // <List filters={ProductFilter} {...props}>
    <List filters={<ProductFilter />} {...props}>

      {/*  <TextField source="images" />*/}
      {/*    /!*<EditButton/>*!/*/}
      {/*</Datagrid>*/}

      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="description"/>
        <TextField source="price"/>
        <TextField source="icon"/>
        <UrlField source="url"/>
        <NumberField source="category"/>
        <ReferenceField source="category_id" reference="Category">
          <TextField source="name"/>
        </ReferenceField>
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
        <NumberInput source="category"/>
        <TextInput source="url"/>
        <TextInput source="description"/>
        <TextInput source="icon"/>
        <ReferenceInput source="category_id" reference="Category">
          <SelectInput optionText="name"/>
        </ReferenceInput>
        <NumberInput source="price"/>
        <TextInput source="images" label="ids images"/>

        <ArrayInput source="images">
          <SimpleFormIterator>
            {/*<ReferenceInput reference="ImageProd">*/}
            <TextInput source="images.url"/>
            {/*</ReferenceInput>*/}
          </SimpleFormIterator>
        </ArrayInput>


        {/*<ArrayInput source="images">*/}
        {/*  <SimpleFormIterator>*/}
        {/*    <TextInput source="url" reference="images"/>*/}
        {/*  </SimpleFormIterator>*/}
        {/*</ArrayInput>*/}

      </SimpleForm>
    </Edit>
  )
}

export const ProductCreate = props => (
  <Create title="Create a product" {...props}>
    <SimpleForm>
      <TextInput source="id" disabled/>
      <TextInput source="name"/>
      {/*<NumberInput source="category"/>*/}
      <TextInput source="url"/>
      <TextInput source="icon"/>
      <TextInput source="description"/>
      <ReferenceInput source="category_id" reference="Category">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <NumberInput source="price"/>
      {/*<TextInput source="images" label="ids images"/>*/}

      {/*<ArrayInput source="images">*/}
      {/*  <SimpleFormIterator>*/}
      {/*    <TextInput source="images.url"/>*/}
      {/*  </SimpleFormIterator>*/}
      {/*</ArrayInput>*/}

    </SimpleForm>
  </Create>
)
