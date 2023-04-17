import React, { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { makeRequest } from "../../Service/ApiAxios";


const getHourMinuteSecondTime = () => {

    let date = new Date();
    const showTime = date.getHours() 
    + ':' + date.getMinutes() 
    + ":" + date.getSeconds();

    return showTime;
}

const TableRowComponent = (props: any) => {

    const [requestStatus, setRequestStatus] = useState("Pending");
    const [requestResponseType, setRequestResponseType] = useState("Pending");
    const [requestResponse, setRequestResponse] = useState("");
    const [requestStartTime, setRequestStartTime] = useState<any>(null);
    const [requestEndTime, setRequestEndTime] = useState<any>(null);

    useEffect(() => {
        setRequestStatus("Initiated");
        setRequestStartTime(getHourMinuteSecondTime())
        makeRequest(props.rowData.ipAddress, { memory: props.rowData.memoryRequested, delay: props.rowData.delayRequested })
            .then((res: any)=> {
                console.log("success case");
                console.log(res);
                setRequestEndTime(getHourMinuteSecondTime())
                setRequestStatus("Completed");
                setRequestResponseType("Success");
                setRequestResponse(res.data)
            })
            .catch((e: any) => {
                console.log("Error case");
                console.log(e);
                setRequestEndTime(getHourMinuteSecondTime())
                setRequestStatus("Failed");
                setRequestResponseType("Failed");
                setRequestResponse(e)
            })
    }, [props.rowData.memoryRequested, props.rowData.delayRequested])

    return <tr key={props.rowData.id}>
    <td>{props.rowData.id}</td>
    <td>{props.rowData.memoryRequested}</td>
    <td>{props.rowData.delayRequested}</td>
    <td>
        {requestStatus === 'Pending' && 'Pending'}
        {
            requestStatus !== 'Pending' && <ProgressBar animated={requestStatus !== 'Completed' && requestStatus !== 'Failed'} now={requestStatus === 'Completed' ? 100 : 45} variant={requestStatus === 'Initiated' ? 'info': requestStatus === 'Completed' ? 'success' : 'danger'} />
        }
    </td>
    <td>{requestResponseType === 'Pending' ? 'Pending' : requestResponse}</td>
    <td>
        <div>
            <span>Start Time: </span>
            <span>{requestStartTime}</span>
        </div>
        <div>
            <span>End Time:</span>
            <span>{requestEndTime}</span>
        </div>
    </td>
</tr>
}

export default TableRowComponent;