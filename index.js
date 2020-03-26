import edge from 'edge-js'
import path from 'path'

const helloWorld = edge.func(`
  async (input) => { 
    return ".NET Welcomes " + input.ToString(); 
  }
`)

const add7 = edge.func(path.join(__dirname, 'add7.cs'))

helloWorld('JavaScript', (error, result) => {
  if (error) throw error
  console.log(result)
})

add7(14, (err, res) => {
  if (err) { throw err }
  console.log(`14 + 7 = ${res}`)
})
