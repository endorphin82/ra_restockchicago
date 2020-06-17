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
  SimpleFormIterator,
  SimpleShowLayout,
  Show,
  Link
} from 'react-admin'
import get from 'lodash/get'
import { UrlField } from '../UrlField'
import Button from '@material-ui/core/Button'

const CreateRelatedImageProdButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/ImageProd/create',
      state: { record: { product_id: record.id } }
    }}
  >
    Write a image for that product
  </Button>
)
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
    <List filters={<ProductFilter/>} {...props}>

      {/*  <TextField source="images" />*/}
      {/*    /!*<EditButton/>*!/*/}
      {/*</Datagrid>*/}

      <Datagrid rowClick="show">
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

        {/*<ReferenceField source="images">*/}
        {/*  <TextField source="url"/>*/}
        {/*</ReferenceField>*/}

        <EditButton/>
      </Datagrid>
    </List>
  )
}

export const ProductEdit = (props) => {
  return (
    <Edit title="Edit product" {...props}>
      <SimpleForm>
        <TextInput disabled source="id"/>
        <TextInput source="name"/>
        <NumberInput source="category"/>
        <TextInput source="url"/>
        <TextInput source="description"/>
        <TextInput source="icon"/>
        <ReferenceInput source="category.id" reference="Category">
          <SelectInput optionText="name" source="id"/>
        </ReferenceInput>
        <NumberInput source="price"/>
        <TextInput source="images" label="ids images"/>

        {/*<ArrayInput source="images">*/}
        {/*  <SimpleFormIterator>*/}
        {/*    /!*<ReferenceInput reference="ImageProd">*!/*/}
        {/*    <TextInput optionText="images.url"/>*/}
        {/*    /!*</ReferenceInput>*!/*/}
        {/*  </SimpleFormIterator>*/}
        {/*</ArrayInput>*/}


        {/*<ArrayInput source="images">*/}
        {/*  <SimpleFormIterator>*/}
        {/*    <TextInput source="url" reference="images"/>*/}
        {/*  </SimpleFormIterator>*/}
        {/*</ArrayInput>*/}
        <CreateRelatedImageProdButton/>

      </SimpleForm>
    </Edit>
  )
}

export const ProductShow = (props) => {
  return (
    <Show title="View product" {...props}>
      <SimpleShowLayout>
        <TextField disabled source="id"/>
        <TextField source="name"/>
        <NumberField source="category"/>
        <TextField source="url"/>
        <TextField source="description"/>
        <TextField source="icon"/>
        <ReferenceField source="category_id" reference="Category">
          <TextField optionText="name"/>
        </ReferenceField>
        <NumberField source="price"/>
        <TextField resource="images" label="ids images"/>

        {/*<ArrayInput source="images">*/}
        {/*  <SimpleFormIterator>*/}
        {/*    /!*<ReferenceInput reference="ImageProd">*!/*/}
        {/*    <TextInput optionText="images.url"/>*/}
        {/*    /!*</ReferenceInput>*!/*/}
        {/*  </SimpleFormIterator>*/}
        {/*</ArrayInput>*/}


        {/*<ArrayInput source="images">*/}
        {/*  <SimpleFormIterator>*/}
        {/*    <TextInput source="url" reference="images"/>*/}
        {/*  </SimpleFormIterator>*/}
        {/*</ArrayInput>*/}

      </SimpleShowLayout>
    </Show>
  )
}

export const ProductCreate = props => (
  <Create title="Create a product" {...props}>
    <SimpleForm>
      <TextInput source="name"/>
      {/*<NumberInput source="category"/>*/}
      <TextInput source="url"/>
      <TextInput source="icon"/>
      <TextInput source="description"/>
      <ReferenceInput source="category.id" reference="Category">
        <SelectInput optionText="name" source="id"/>
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
