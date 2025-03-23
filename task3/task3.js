function PrintStatus(status) {
    if (status === 'success' || status === 'error' || status === 'loading') {
        console.log("Satus is " + status);
    }
    else {
        console.log("Incorrect status");
    }
}
PrintStatus("incorect");
 
