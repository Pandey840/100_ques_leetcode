var defangIPaddr = function(address) {
    let a = "";
    for(let i = 0; i<address.length; i++) {
        let char = address[i];
        if(char === ".") {
            a = a + "[.]"
        } else {
            a = a + char; 
        }
    }
    return a;
};