import React from 'react'
import {
  List, Datagrid, NumberField, TextField, ReferenceField, SelectInput,
  ReferenceInput, TextInput, SimpleForm, FileInput, FileField,
  Edit, Create, Mutation
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
// const uploadFileMutation = gql`
//     mutation($file: Upload!) {
//         uploadFile(file: $file)
//     }
// `;

export const ImageprodCreate = (props) => {
  console.log(props)
  return <Create {...props}>
    <SimpleForm>
      <TextInput source="url"/>
      <FileInput source="files" accept="image/*" label="Image" placeholder={<p>Drop your image</p>}>
        <FileField source="url" title="title"/>
      </FileInput>
      <ReferenceInput source="product_id" reference="Product">
        <SelectInput optionText="id"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
}
