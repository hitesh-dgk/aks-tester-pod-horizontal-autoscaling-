import axios, { AxiosProgressEvent } from "axios"


export const makeRequest = (ipAddress: any, queryParams: any) => {

    console.log("provided ipAddress: ", ipAddress)
    console.log("queryParams: ", JSON.stringify(queryParams))
    const requestTimeout = (parseInt(queryParams.delay) + 3)*100000;
    console.log(`requestTimeout => ${requestTimeout}`)

    return new Promise((resolve: any, reject: any) => {
        axios.get(ipAddress, {
            params: {...queryParams},
            timeout: requestTimeout,
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                console.log("Inside onUploadProgress")
                console.log(progressEvent.progress);
            },
            onDownloadProgress(progressEvent: AxiosProgressEvent) {
                console.log("Download progress");
                console.log(progressEvent)
                
            },
            
        })
            .then((res: any) => {
                // console.log("request res: ")
                // console.log(res);
                resolve(res);
            })
            .catch((e: any) => {
                // console.log("Request Error");
                // console.log(e);
                reject(e);
            })
    })


}