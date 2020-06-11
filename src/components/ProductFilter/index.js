import React from 'react'
import { Filter, ReferenceInput, SelectInput, TextInput, List } from 'react-admin'

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    <ReferenceInput label="Category" source="category_id" reference="Category" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
)

export default ProductFilter