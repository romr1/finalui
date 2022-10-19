import React , { useState } from "react";
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import { GlobalFilter, DefaultColumnFilter, fuzzyTextFilterFn, IndeterminateCheckbox } from "../Filters/Filters";
import "../Styles/Table.css"
import "../Styles/GlobalStyle.css"
// import TableFooter from "./TableFooter";
// import GridLayout from "react-grid-layout";
// import Card from "@material-ui/core/Card";
//import BasicLayout from './GridLayout';



// {allColumns.map(column => (
//   <div key={column.id} class="column" >
//       {/* this is change the span of first column */}
//       <input type="checkbox" {...column.getToggleHiddenProps()} />
//       {column.id}
//   </div>
// ))}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// Our table component

export function Table({ columns, data, id_t, isRigth }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      //date filter
      dateFilter: (rows, id, filterValue) => {
        return rows = rows.filter(row => {
          return new Date(row.values.date) >= filterValue[0] && new Date(row.values.date) <= filterValue[1];
        });
      },
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )


  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    state,
    visibleColumns,
    getToggleHideAllColumnsProps,
    preGlobalFilteredRows,
    setGlobalFilter,
    // slice,
    // range
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      // page,
      // num,
    },
    useFilters, // useFilters!
    useGlobalFilter // useGlobalFilter!
  )

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  // const firstPageRows = rows.slice(0, 10)


  // const [page, setPage] = useState(1);
  // const num=10;
  // const { slice, range } = useTable({rows,page,num})

  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  //   { i: "b", x: 2, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 }
  // ];
  return (
    // <Card id="table_card" class="table_card">
    <React.Fragment>

      <table id={"table" + id_t} {...getTableProps()}>
        {/* class="center" */}
        <thead>
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <div id="toggle_columns">
                {/* <div id="toggle_columns" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}> */}
                <div class="row" >
                  <div class="column">
                    <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
                    All
                  </div>

                 
                  <br />
                </div>
              </div>
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>

          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <input type="checkbox" {...column.getToggleHiddenProps()} />
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}

        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>

      </table>
      {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
      <br />

    </React.Fragment >
    // </Card>
  )
}
