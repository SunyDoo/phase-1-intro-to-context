function createEmployeeRecord(array){
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return(employee) 
}

function createEmployeeRecords(array){
    let newArr=[]
    for(let item of array){
      newArr.push(createEmployeeRecord(item))              
    }
    return newArr       
} 

function createTimeInEvent(employee, stamp){
    let timeIn= {
        type:"TimeIn",
        hour: parseInt(stamp.split(' ')[1]),
        date: stamp.split(' ')[0]
    }
    employee.timeInEvents.push(timeIn)
    return employee
}

function createTimeOutEvent(employee, stamp){
    let timeOut= {
        type:"TimeOut",
        hour: parseInt(stamp.split(' ')[1]),
        date: stamp.split(' ')[0]
    }
    employee.timeOutEvents.push(timeOut)
    return employee
}

function hoursWorkedOnDate(employee, string){    
    if (employee.timeInEvents[0].date == string){
        let timeIn = employee.timeInEvents[0].hour
        let timeOut = employee.timeOutEvents[0].hour
        let hours= (timeOut-timeIn)/100    
        return hours 
    }       
}

function wagesEarnedOnDate(employee, string){    
    return hoursWorkedOnDate(employee, string)*employee.payPerHour       
}

function allWagesFor(employee){   
    for (let i = 0; i < employee.timeInEvents.length; i++) {
        let totalWage = 0 
        totalWage += wagesEarnedOnDate(employee, employee.timeInEvents[i].date);        
        return totalWage
    }    
}

function calculatePayroll(array){
    for (let i = 0; i < array.length; i++){
        const wage = allWagesFor(i)
        let totalPayroll = 0
        totalPayroll+= wage
        return totalPayroll
    }
}
 
  

