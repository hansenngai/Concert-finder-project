import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ObjectPage from './../pages/ObjectPage';


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
          <Link to="/objectpage"><td>Name1</td></Link>
          <td>Location1</td>
        </tr>
        <tr>
          <Link to="/objectpage"><td>Name2</td></Link>
          <td>Location2</td>
        </tr>
        <tr>
          <Link to="/objectpage"><td>Name3</td></Link>
          <td>Location3</td>
        </tr>
        <tr>
          <Link to="/objectpage"><td>Name4</td></Link>
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