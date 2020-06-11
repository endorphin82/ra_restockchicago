// import buildGraphQLProvider from '@ra-data-prisma/dataprovider'
import { useEffect, useState } from 'react'
// import buildOpenCrudProvider from 'ra-data-prisma2'
import buildGraphQLProvider  from 'ra-data-graphql'

export default () => {
  const [dataProvider, setDataProvider] = useState()

  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: 'http://localhost:3005' } as any
    }).then((p: any) => {
      console.log('+++')
      setDataProvider(() => p)
    })
  }, [])
  return dataProvider
}