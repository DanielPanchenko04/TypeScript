type Status = 'success' | 'error' | 'loading';

function PrintStatus(status: Status){
    if (status === 'success' || status === 'error' || status === 'loading'){
        console.log("Satus is" + status);
    }
    else{
        console.log("Incorrect status")
    }
}

PrintStatus("error");
 
