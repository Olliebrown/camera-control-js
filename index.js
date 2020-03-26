import edge from 'edge-js'

const helloWorld = edge.func(`
  async (input) => { 
    return ".NET Welcomes " + input.ToString(); 
  }
`)

helloWorld('JavaScript', (error, result) => {
  if (error) throw error
  console.log(result)
})
