import React, { useState } from "react";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from 'match-sorter'
import { useAsyncDebounce } from 'react-table'
import DatePickerCalendar from "./DatePicker";
import { AiOutlineSync, } from "react-icons/ai";
import "../Styles/GlobalStyle.css"


export function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}


// Define a default UI for filtering
export function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {

  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// Define a default UI for filtering
export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}


// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
export function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  )
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
export function NumberRangeColumnFilter({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <input
        value={filterValue[0] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
        }}
        placeholder={`Min (${min})`}
        style={{
          width: '70px',
          marginRight: '0.5rem',
        }}
      />
      to
      <input
        value={filterValue[1] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
        }}
        placeholder={`Max (${max})`}
        style={{
          width: '70px',
          marginLeft: '0.5rem',
        }}
      />
    </div>
  )
}



// Define a custom filter filter function!
export function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'








export const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return <input type="checkbox" ref={resolvedRef} {...rest} />
  }
)



export const DateFilters = (props) => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // attached to onChange event listener of Global filter input box
  const onChange = useAsyncDebounce(value => {
    props.setGlobalFilter(value || undefined)
  }, 200)

  //called when a user selects filter start-date 
  const handleStartDate = (date) => {
    setStartDate(date);
  }

  //called when a user selects filter end-date 
  const handleEndDate = (date) => {
    setEndDate(date);
  }

  // Auto Rest All Filters
  const autoResetFilter = () => {
    setStartDate(null);
    setEndDate(null);
    props.dispatch({ type: "resetFilters" });
    var radios = document.querySelectorAll('input[name="category-Filters"]');
    for (let i of radios) {
      if (i.checked) {
        i.checked = false;
        break
      }
    }
  }

  // Filter table by selected start-date and end-date
  const handleFilterByDate = () => {
    let filters_rows=[]
    if (startDate && endDate) {
      let column_date_name=props.column.Header.toLowerCase()
      


      for(const row of props.data){
        let row_date=new Date(row[column_date_name])
        if(row_date>=startDate && row_date<=endDate){
          filters_rows.push(row)
          //this is true row
         // props.setFilter(props.column.Header.toLowerCase(), [row]);
        }
      }
      //props.setFilter(props.column.Header.toLowerCase(), [startDate, endDate]);
    }
    return filters_rows
  }

  // Handles all calls to filter the table <-- attached to onClick event of "apply filter button" -->
  const applyFilter = () => {
    if (startDate && endDate) {
      return handleFilterByDate();
    }
    if (!startDate && endDate || startDate && !endDate) {
      window.alert("Please Make sure you select start-date and end-date");
    }
  }
  return (
    <div className="filterParameters" id="filterParameters">
      <div className="datePickerWrapper">
        <div className="Datepicker-grid-container">
          <div className="top">
            <div className="top">From:
              <div className="datePickerLabel">
                  {startDate ? startDate.toLocaleDateString("fr-CA") : null}
              </div>
              < DatePickerCalendar handleDateChange={handleStartDate} date={startDate} />
            </div>
            {/* <div className="verticalLine"></div> */}
            <div className="top">To:<div className="datePickerLabel">{endDate ? endDate.toLocaleDateString("fr-CA") : null}</div>
              < DatePickerCalendar handleDateChange={handleEndDate} date={endDate} />
            </div>
          </div>

        </div>
      </div>
      <div className="top2">
        <div className="resetFilter" onClick={autoResetFilter} ><span>Reset</span>
          <AiOutlineSync className="resetFilter_icon" />
        </div>
        <div className="apply-filter">
          <button onClick={applyFilter} className="applyFilter-btn" id="applyFilter-btn"> Search </button>
        </div>
      </div>
    </div>


  )
}
