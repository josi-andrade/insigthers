function teste()
{

let string = 'create table author (id number, name string, age number, city string, state string, country string)'


let tableName = string.slice(13,19)
let columns = string.split("(")[1].split(",")
columns[columns.length-1] = columns[columns.length-1].replace(')', '')

for (let i=0; i < columns.length; i++) {
   columns[i] = columns[i].trim()    
}

console.log(tableName)
console.log(columns)

}