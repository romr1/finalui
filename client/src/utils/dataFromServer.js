import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SliderColumnFilter, SelectColumnFilter, DateFilters } from "../Filters/Filters";
import download from '../images/download.png';


export function getDataFromServer(route) {

    const [finalData, setData] = useState([{}]);
    // fetch(route).then(response=>{
    //     const data=response.json()
    //     setData(data.responses);
    // })

    ///https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome
    React.useEffect(function effectFunction() {
        async function fetchData() {
            const response = await fetch(route, {headers:{ Authentication:'Access-Control-Allow-Origin'}});
            const data = await response.json();
            setData(data.responses);
        }
        fetchData().catch(err=>{
            console.log(err)
        });
    }, []);

    //getColumns(finalData)
    return finalData //list of dict
}


export function sendDataToServer(route, data_to_send){
    const [finalData, setData] = useState([{}]);
    React.useEffect(function effectFunction() {
        async function fetchData() {
            console.log(data_to_send)
            const response = await fetch(route, {
                                                method:"POST",
                                                headers:{ Authentication:'Access-Control-Allow-Origin'},
                                                body:data_to_send
                                                });
            const data = await response.json();
            console.log(data)
            setData(data.responses);
        }
        fetchData().catch(err=>{
            console.log(err)
        });
    }, []);

    //getColumns(finalData)
    return finalData //list of dict
}

function get_parse_columns_filters(next_page_route = null, image_src = null) {
    let filters_dict =
    {
        date: {
            Filter: DateFilters,
            filter: 'dateFilter'
        },
        select: {
            Filter: SelectColumnFilter,
            filter: 'includes'
        },
        slide: {
            Filter: SliderColumnFilter,
            filter: 'equals',
        },
        click_cell: {
            Cell: ({ cell }) => (
                <Link to={`${next_page_route}/${cell.value}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    {cell.value}
                </Link>
                //      <Link to={`/Home/TPage/${cell.value}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                //      {cell.value}
                //  </Link>
            )
        },
        check_box: {
            Cell: ({ cell }) => (
                <Link to={`${next_page_route}/${cell.pk}`}>
                    <input type="checkbox" />
                </Link>
                //      <Link to={`/Home/TPage/${cell.pk}`}>
                //      <input type="checkbox" />
                //  </Link>
            )
        },
        image_col: {
            Cell: ({ cell }) => ( //todo check if can to doenload and delete default filter
                <img
                    src={image_src} //src={download}
                    width="30"
                    height="30"
                />
            )
        }
    }

    return filters_dict

}

function add_filters(item, final_dict, next_page_route, image_src) {
    let parse_columns_filters = get_parse_columns_filters(next_page_route, image_src)
    if (item.includes('date')) {
        final_dict = Object.assign({}, final_dict, parse_columns_filters['date']);
    }
    if (item.includes('status')) {
        final_dict = Object.assign({}, final_dict, parse_columns_filters['select']);
    }
    if (next_page_route != null) {
        final_dict = Object.assign({}, final_dict, parse_columns_filters['click_cell']);
    }
    return final_dict
}

const foo = () => {

}

export function getColumnsWithFilters(columns_names, next_page_route, image_src) {
    let columns_arr = columns_names.map(
        (item => {
            let final_dict = {
                Header: item.charAt(0).toUpperCase() + item.slice(1), //only first letter is in lower case
                accessor: item.toLowerCase(),
            }
            final_dict = add_filters(item, final_dict, next_page_route, image_src)
            return (final_dict)
        })
    )
    // final_columns = [{
    //     Header: 'Name',
    //     columns: columns_arr
    // },

    // ]
    return columns_arr;
}


export function getColumnsfromTable(data) {
    return data.data.headers;
}

export function getRows(data) {
    return data.data.rows
}

export function generateData(data) {
    // let formatData = [];
    // let columns, rows;
    // const columns_to_delete = React.useMemo( //useMemo returns a memoized value- runs when one of its dependencies update.
    //     () => [
    //         {
    //             Header: process.env.REACT_APP_FIRST_HEADER_MAIN_TABLE,
    //             columns: [
    //                 {
    //                     Header: '',
    //                     accessor: 'checkboxcol',
    //                     show: false,
    //                     Cell: ({ cell }) => (
    //                         <Link to={`/Home/TPage/${cell.pk}`}>
    //                             <input type="checkbox" />
    //                         </Link>
    //                     )
    //                 },
    //                 {
    //                     Header: 'PK',
    //                     accessor: 'pk',
    //                     show: false,
    //                 },
    //                 {
    //                     Header: 'Type',
    //                     accessor: 'type',
    //                     show: true,
    //                 },
    //                 {
    //                     Header: 'Name',
    //                     accessor: 'name',
    //                     // Use our custom `fuzzyText` filter on this column

    //                     ////onClick={route_to_Tpage}
    //                     filter: 'fuzzyText',
    //                     Cell: ({ cell }) => (
    //                         <Link to={`/Home/TPage/${cell.value}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
    //                             {/* <button value={cell.value} >  */}
    //                             {cell.value}
    //                             {/* </button> */}
    //                         </Link>

    //                     )
    //                 },
    //             ],
    //         },
    //         {
    //             Header: process.env.REACT_APP_SECOND_HEADER_MAIN_TABLE,
    //             columns: [
    //                 {
    //                     Header: 'Version',
    //                     accessor: 'version',
    //                     Filter: SliderColumnFilter,
    //                     filter: 'equals',
    //                 },
    //                 /*  {
    //                     Header: 'Visits',
    //                     accessor: 'visits',
    //                     Filter: NumberRangeColumnFilter,
    //                     filter: 'between',
    //                   },*/
    //                 {
    //                     Header: 'Status',
    //                     accessor: 'status',
    //                     Filter: SelectColumnFilter,
    //                     filter: 'includes',

    //                     // formatter: AddButtonToCell,
    //                 },
    //                 /*  {
    //                     Header: 'Profile Progress',
    //                     accessor: 'progress',
    //                     Filter: SliderColumnFilter,
    //                     filter: filterGreaterThan,
    //                   },*/
    //                 {
    //                     Header: 'Date',
    //                     accessor: 'date',
    //                     Filter: DateFilters,
    //                     filter: 'dateFilter'

    //                 },
    //                 {
    //                     Header: 'Download',
    //                     accessor: 'download',
    //                     Cell: ({ cell }) => ( //todo check if can to doenload and delete default filter
    //                         <img
    //                             src={download}
    //                             width="30"
    //                             height="30"
    //                         />


    //                     )

    //                 }

    //             ],
    //         },
    //     ],
    //     []
    // )
    console.log("ppppp")
    console.log(data)




    // data.map(function (item) {
    //     if (Object.keys(item).length != 0) {
    //         console.log("here2")
    //         console.log(item.type.normalize() === 'table'.normalize())
    //         if (item.type.normalize() === 'table'.normalize()) {
    //             console.log("here3")
    //             columns = getColumnsfromTable(item)
    //             rows = getRows(item)
    //             //  let node=document.getElementsByName("tpage_id")
    //             // node.appendChild(<Table>columns={columns} data={rows} columns_name={columns} </Table>)
    //             // console.log(container)
    //         }
    //         // switch(item.type.normalize()){
    //         //     case 'table'.normalize():
    //         //         //table
    //         //         columns = getColumns(item) 
    //         //         //tables[row.table].append(<Row>row.data</Row>) 
    //         //         //formatData.push( <Table columns={columns} data={data_table} columns_name={columns_names} />)
    //         //         break;

    //         // }
    //     }



    // })

    //  return formatData;
}


    // useEffect(() => {
    //     fetch('/table').then(res => res.json()).then(data => {
    //       // Setting a data from api
    //     /*  setdata({
    //         name: data.Name,
    //         age: data.Age,
    //         date: data.Date,
    //         programming: data.programming,
    //     });
    //     */
    //       return data;
    //     });
    //   }, []);