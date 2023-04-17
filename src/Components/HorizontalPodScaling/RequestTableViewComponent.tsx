import React, { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';
import TableRowComponent from "./TableRowComponent";

const randomIntFromInterval = (min: number, max: number) => { // min and max included 
    // return Math.floor(Math.random() * (max - min + 1) + min)
    let difference = max - min;
    console.log("difference: ", difference)
    // generate random number 
    let rand = Math.random();
    console.log("1 rand: ", rand)

    // multiply with difference 
    rand = Math.floor( rand * difference);
    console.log("2 rand: ", rand)

    // add with min value 
    rand = rand + min;
    console.log("3 rand: ", rand)

    return rand;
}

const RequestTableViewComponent = (props: any) => {

    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        console.log("RequestTableViewComponent useEffect");
        console.log(props)
        if (props.testContext?.noOfRequest) {
            console.log("----")
            let newTableData: any[] = [];
            for (let i = 1; i <= props.testContext.noOfRequest; i++) {
                let tableRowObject = {
                    id: i,
                    ipAddress: props.testContext.ipAddress,
                    memoryRequested: randomIntFromInterval(parseInt(props.testContext.minMemory), parseInt(props.testContext.maxMemory)),
                    delayRequested: randomIntFromInterval(parseInt(props.testContext.minDelay), parseInt(props.testContext.maxDelay)),
                }
                newTableData.push(tableRowObject)
            }
            setTableData(newTableData)
        }
    }, [props.testContext, props.requestContext])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style={{ width: '120px' }}>Request Ref Id</th>
                    <th style={{ width: '120px' }}>Memory</th>
                    <th style={{ width: '120px' }}>Delay</th>
                    <th style={{ width: '250px' }}>Request Status</th>
                    <th>Request Response</th>
                    <th>Request Track</th>
                </tr>
            </thead>
            {
                tableData.length > 0  &&
                <tbody>
                    {tableData.map((rowData: any, index: any) => {
                        return <TableRowComponent key={rowData.id} rowData={rowData}/>
                    })}
                    
                </tbody>
            }
        </Table>
    );

}

export default RequestTableViewComponent;