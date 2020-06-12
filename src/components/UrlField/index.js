import React from 'react'

export const UrlField = ({ record = {}, source }) =>
  <a href={record[source]}>
    {record[source]}
  </a>

