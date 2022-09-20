import React from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";

import { Table } from './Table';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

class ToolBoxItem extends React.Component {
    render() {
        return (
            <div
                className="toolbox__items__item"
                onClick={this.props.onTakeItem.bind(undefined, this.props.item)}
            >
                {this.props.item.i}
            </div>
        );
    }
}
class ToolBox extends React.Component {
    render() {
        return (
            <div className="toolbox">
                <div className="toolbox__items">
                    {this.props.items.map(item => (
                        <ToolBoxItem
                            key={item.i}
                            item={item}
                            onTakeItem={this.props.onTakeItem}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default class ToolboxLayout extends React.Component {

    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        onLayoutChange: function () { },
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        initialLayout: generateLayout()
    };

    state = {
        currentBreakpoint: "lg",
        compactType: "vertical",
        mounted: false,
        layouts: { lg: this.props.initialLayout },
        toolbox: { lg: [] }
    };

    componentDidMount() {
        this.setState({ mounted: true });
    }

    generateDOM() {
        return _.map(this.state.layouts[this.state.currentBreakpoint], l => {
            return (
                <div key={l.i} className={l.static ? "static" : ""}>
                    <div className="hide-button" onClick={this.onPutItem.bind(this, l)}>
                        &times;
                    </div>
                    {l.static ? (
                        <span
                            className="text"
                            title="This item is static and cannot be removed or resized."
                        >
                            Static - {l.i}
                        </span>
                    ) : (
                        <Table columns={[
                            {
                                Header: process.env.REACT_APP_FIRST_HEADER_MAIN_TABLE,
                                columns: [
                                    {
                                        Header: 'PK',
                                        accessor: 'pk',
                                        show: false,
                                    },
                                    {
                                        Header: 'Type',
                                        accessor: 'type',
                                        show: true,
                                    },
                                ],
                            },

                        ]
                        } data={{ 'bla': 'hg' }} />
                        // todo here need to insert the table
                    )}
                </div>
            );
        });
    }

    onBreakpointChange = breakpoint => {
        this.setState(prevState => ({
            currentBreakpoint: breakpoint,
            toolbox: {
                ...prevState.toolbox,
                [breakpoint]:
                    prevState.toolbox[breakpoint] ||
                    prevState.toolbox[prevState.currentBreakpoint] ||
                    []
            }
        }));
    };

    onCompactTypeChange = () => {
        const { compactType: oldCompactType } = this.state;
        const compactType =
            oldCompactType === "horizontal"
                ? "vertical"
                : oldCompactType === "vertical"
                    ? null
                    : "horizontal";
        this.setState({ compactType });
    };

    onTakeItem = item => {
        this.setState(prevState => ({
            toolbox: {
                ...prevState.toolbox,
                [prevState.currentBreakpoint]: prevState.toolbox[
                    prevState.currentBreakpoint
                ].filter(({ i }) => i !== item.i)
            },
            layouts: {
                ...prevState.layouts,
                [prevState.currentBreakpoint]: [
                    ...prevState.layouts[prevState.currentBreakpoint],
                    item
                ]
            }
        }));
    };

    onPutItem = item => {
        this.setState(prevState => {
            return {
                toolbox: {
                    ...prevState.toolbox,
                    [prevState.currentBreakpoint]: [
                        ...(prevState.toolbox[prevState.currentBreakpoint] || []),
                        item
                    ]
                },
                layouts: {
                    ...prevState.layouts,
                    [prevState.currentBreakpoint]: prevState.layouts[
                        prevState.currentBreakpoint
                    ].filter(({ i }) => i !== item.i)
                }
            };
        });
    };

    onLayoutChange = (layout, layouts) => {
        this.props.onLayoutChange(layout, layouts);
        this.setState({ layouts });
    };

    onNewLayout = () => {
        this.setState({
            layouts: { lg: generateLayout() }
        });
    };

    render() {
        return (
            <div>
                <ToolBox
                    items={this.state.toolbox[this.state.currentBreakpoint] || []}
                    onTakeItem={this.onTakeItem}
                />

                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={this.state.layouts}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    // WidthProvider option
                    measureBeforeMount={false}
                    // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                    // and set `measureBeforeMount={true}`.
                    useCSSTransforms={this.state.mounted}
                    compactType={this.state.compactType}
                    preventCollision={!this.state.compactType}
                >
                    {this.generateDOM()}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

function generateLayout() {
    return _.map(_.range(0, 25), function (item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: (_.random(0, 5) * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}





// import React from "react";
// import { Responsive as ResponsiveGridLayout } from "react-grid-layout";


// const layouts = {
//     lg: [
//         { h: 2, w: 2, x: 0, y: 0 },
//         { h: 2, w: 2, x: 1, y: 0 },
//         { h: 2, w: 2, x: 2, y: 0 },
//         { h: 2, w: 2, x: 3, y: 0 }
//     ],
//     sm: [
//         { h: 2, w: 2, x: 0, y: 0 },
//         { h: 2, w: 2, x: 1, y: 0 },
//         { h: 2, w: 2, x: 2, y: 0 },
//         { h: 2, w: 2, x: 3, y: 0 }
//     ],
//     md: [
//         { h: 2, w: 2, x: 0, y: 0 },
//         { h: 2, w: 2, x: 1, y: 0 },
//         { h: 2, w: 2, x: 2, y: 0 },
//         { h: 2, w: 2, x: 3, y: 0 }
//     ],
//     xs: [
//         { h: 2, w: 2, x: 0, y: 0 },
//         { h: 2, w: 2, x: 0, y: 1 },
//         { h: 2, w: 2, x: 0, y: 2 },
//         { h: 2, w: 2, x: 0, y: 3 }
//     ],
//     xxs: [
//         { h: 2, w: 2, x: 0, y: 0 },
//         { h: 2, w: 2, x: 0, y: 1 },
//         { h: 2, w: 2, x: 0, y: 2 },
//         { h: 2, w: 2, x: 0, y: 3 }
//     ]
// };

// export const RGridLayout = () => (
//     <ResponsiveGridLayout>
//         className="layout"
//         layouts={layouts}
//         breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//         cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
//     </ResponsiveGridLayout>
// )




// // import React from "react";
// // import _ from "lodash";
// // import RGL, { WidthProvider } from "react-grid-layout";

// // //https://www.npmjs.com/package/react-grid-layout

// // const ReactGridLayout = WidthProvider(RGL);

// // export default class BasicLayout extends React.PureComponent {
// //     static defaultProps = {
// //         className: "layout",
// //         items: 20,
// //         rowHeight: 30,
// //         onLayoutChange: function () { },
// //         cols: 12
// //     };

// //     constructor(props) {
// //         super(props);

// //         const layout = this.generateLayout();
// //         this.state = { layout };
// //     }

// //     generateDOM() {
// //         return _.map(_.range(this.props.items), function (i) {
// //             return (
// //                 <div key={i}>
// //                     <span className="text">{i}</span>
// //                 </div>
// //             );
// //         });
// //     }

// //     generateLayout() {
// //         const p = this.props;
// //         return _.map(new Array(p.items), function (item, i) {
// //             const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
// //             return {
// //                 x: (i * 2) % 12,
// //                 y: Math.floor(i / 6) * y,
// //                 w: 2,
// //                 h: y,
// //                 i: i.toString()
// //             };
// //         });
// //     }

// //     onLayoutChange(layout) {
// //         this.props.onLayoutChange(layout);
// //     }

// //     render() {
// //         return (
// //             <ReactGridLayout
// //                 layout={this.state.layout}
// //                 onLayoutChange={this.onLayoutChange}
// //                 {...this.props}
// //             >
// //                 {this.generateDOM()}
// //             </ReactGridLayout>
// //         );
// //     }
// // }

