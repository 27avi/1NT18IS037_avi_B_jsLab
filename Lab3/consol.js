let fetchData= function(data) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    console.log(`fetching data`);
                    resolve({
                                name: 'Avi Singh',
                                dept: 'ISE',
                                usn: 37
                    })
            }, 3000)
    })
}
let parseData= function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`parsing ....`);
            let parseData= `parsed out - 
                ${data.name},
                ${data.usn},
                ${data.dept},`;
            resolve({
                pars: parseData
            })
        }, 3000)
    })
}

let printData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log(data.pars);
                console.log('Success')
        }, 2000)
    })
}
fetchData().then(parseData).then(printData);
