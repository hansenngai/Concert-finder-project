import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
    )
  }

  const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>Name1</td>
          <td>Location1</td>
        </tr>
        <tr>
          <td>Name2</td>
          <td>Location2</td>
        </tr>
        <tr>
          <td>Name3</td>
          <td>Location3</td>
        </tr>
        <tr>
          <td>Name4</td>
          <td>Location4</td>
        </tr>
      </tbody>
    )
  }

  class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }

  export default Table