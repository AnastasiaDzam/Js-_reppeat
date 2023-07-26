/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(data => {
    if(data.ok) return data.json()
    return data.statusText
})
.then(console.log)
*/

const fetchData = async() => {
   console.log('Loading...')

   try {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    if (!response.ok) console.log(response.statusText)

    const data =await response.json()
    return console.log(data)
   } 
   catch (error) {
    console.log(error)
   }
   finally {
    console.log('Loaded')
   }
}