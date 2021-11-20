//TASK 01

const statement = 'create table author (id number, name string, age number, city string, state string, country string)'


function task1() {
   const regex = /create table ([a-z]+) \((.+)\)/

   const result = statement.match(regex)

   let tableName = result[1]
   let columns = result[2]
   columns = columns.split(", ")

   document.getElementById("task1").textContent = JSON.stringify(tableName, undefined, 2)
   document.getElementById("task11").textContent = JSON.stringify(columns, undefined, 2)
}

//Task 02
function teste() {

   let database = {}

   let table = statement.split(" ")[2]
   let rows = statement.split("(")[1].split(")")[0].split(",")
   let obj = {}
   rows.forEach(r => {
      obj[r.trim().split(" ")[0]] = r.trim().split(" ")[1]
   })


   database['tables'] = {
      [table]: {
         "columns": obj,
         "data": []
      }
   }

   document.getElementById("result").textContent = JSON.stringify(database, undefined, 2)
   console.log(JSON.stringify(database))

}


function teste1() {
   const database = new Database()
   const result = database.execute("create table author (id number, name string, age number, city string, state string, country string)");
   document.getElementById("result1").textContent = JSON.stringify(result, undefined, 2)
}


//Task 03
class Database {

   createTable(query) {
      let db = {}

      let table = query.split(" ")[2]
      let columns = query.split("(")[1].split(")")[0].split(",")
      let obj = {}
      columns.forEach(r => {
         obj[r.trim().split(" ")[0]] = r.trim().split(" ")[1]
      })
      db['tables'] = {
         [table]: {
            "columns": obj,
            "data": []
         }
      }
      return db
   }

   execute(query) {
      return this.createTable(query)
   }
}

