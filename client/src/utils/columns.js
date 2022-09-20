export function get_columns_with_filters(){
    return  [
      {
        Header: 'Name',
        columns: [
        {
            Header: 'PK',
            accessor: 'pk',
          },
          {
            Header: 'Type',
            accessor: 'type',
          },
          {
            Header: 'Name',
            accessor: 'name',
            // Use our custom `fuzzyText` filter on this column
            filter: 'fuzzyText',
            Cell: ({ cell }) => (
              <button value={cell.value} onClick={handleClickGroup}>
                {cell.value}
              </button>
            )
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Version',
            accessor: 'age',
            Filter: SliderColumnFilter,
            filter: 'equals',
          },
        /*  {
            Header: 'Visits',
            accessor: 'visits',
            Filter: NumberRangeColumnFilter,
            filter: 'between',
          },*/
          {
            Header: 'Status',
            accessor: 'status',
            Filter: SelectColumnFilter,
            filter: 'includes',
            
           // formatter: AddButtonToCell,
          },
        /*  {
            Header: 'Profile Progress',
            accessor: 'progress',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },*/
          {
            Header: 'Date',
            accessor: 'date',
            Filter: DateFilters,
            filter: 'dateFilter'
          },
          
        ],
      },
    ]
}

