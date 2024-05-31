import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { api } from '../Core/config'
import useGlobal from '../Core/global'
const Anlytics = () => {
  const [data, setData] = useState([])
  const addToast = useGlobal(state => state.addToast)
  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'start_year', headerName: 'start_year', flex: 1 },
    { field: 'end_year', headerName: 'end_year', flex: 1 },
    { field: 'intensity', headerName: 'intensity', flex: 1 },
    { field: 'topic', headerName: 'topic', flex: 1 },
    { field: 'region', headerName: 'region', flex: 1 },
    { field: 'pestle', headerName: 'pestle', flex: 1 },
    { field: 'source', headerName: 'source', flex: 1 },
    { field: 'likelihood', headerName: 'likelihood', flex: 1 },
    { field: 'sector', headerName: 'sector', flex: 1 },
    { field: 'insight', headerName: 'insight', flex: 1 },
    { field: 'impact', headerName: 'impact', flex: 1 },
    { field: 'added', headerName: 'added', flex: 1 },
    { field: 'published', headerName: 'published', flex: 1 },
    { field: 'country', headerName: 'country', flex: 1 },
    { field: 'relevance', headerName: 'relevance', flex: 1 },
    { field: 'url', headerName: 'url', flex: 1 }
  ]
  const getData = async () => {
    try {
      const res = await api.get('/statsics')
      setData(res.data)
    } catch (err) {
      addToast(err.message, 'failure')
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='h-auto bg-main-gray flex min-h-screen w-full px-4 py-5'>
      <div className='w-full '>
        <h1 className='text-[30px]'>Anlytics</h1>
        <p className='font-light text-dark-three text-sm'>
          Here is the anlytics about the data.
        </p>
        ,
        <Box
          style={{ height: '70vh', width: '100%', marginTop: 6 }}
          sx={{
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'rgba(46,93,244,0.3606617647058824)'
            },
            '& .MuiDataGrid-toolbarContainer': {
              backgroundColor: 'rgba(46,93,244,0.3606617647058824)'
            }
          }}
        >
          <DataGrid
            checkboxSelection
            rows={data}
            columns={columns}
            components={{
              Toolbar: GridToolbar
            }}
          />
        </Box>
      </div>
    </div>
  )
}

export default Anlytics
