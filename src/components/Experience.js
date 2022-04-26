import React from 'react'
import { Table } from 'reactstrap'
import '../assets/sass/experience.scss'

function Experience() {
  return (
    <div className='experience'>
        <h3>İş təcrübəsi</h3>

        <Table bordered>
  <thead>
    <tr>
      <th>
        
      </th>
      <th>
        Müəssisə adı
      </th>
      <th>
       Vəzifə
      </th>
      <th>
       Müddət
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        New Baku Hotel
      </td>
      <td>
        Ofisiant
      </td>
      <td>
        05/2019-08/2019
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Sabah Group MMC
      </td>
      <td>
        Anbardar
      </td>
      <td>
        06/2021-10/2021
      </td>
    </tr>
    
  </tbody>
</Table>
    </div>
  )
}

export default Experience