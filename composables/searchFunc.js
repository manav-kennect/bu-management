export function searchFunc(searchText,searchKeys,searchArray) {
    console.log("SEARCH STARTED")
    if (searchText.length === 0) {
     let filteredArray = searchArray;
      return filteredArray;
    }
    else {
     let filteredArray = []
      const searchValArray = searchText.split(" ")
      // console.log(searchValArray)
      searchKeys.map(item => {
        searchValArray.map(searchparam => {
          if (filteredArray.length != 0) {
            if (searchparam) {
              const filterdata = get_Arr_Of_ObjectByValue(filteredArray, item, searchparam)
              if (filterdata.length !== 0) {
                filteredArray = filterdata
              }
            }
          }
          else {
            if (searchparam) {
              const filterdata = get_Arr_Of_ObjectByValue(searchArray, item, searchparam)
              console.log("FIRST")
              if (filterdata.length !== 0) {
                filteredArray = filterdata
              }
              console.log(filteredArray,"INSIDE PINIA FILTERSES LIST")
            }
          }

        })

      })
      return filteredArray;
    }
}

export function get_Arr_Of_ObjectByValue(arr, key, value) {
    let result = []
    let pattern = new RegExp(`^${value}`, "i")
    arr.map(obj=>{
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            if (prop === key) {
              const match = pattern.test(String(obj[prop]))
              if(match){
              result.push(obj)
              }
            } 
          }
        }})
    
        return result
  }
