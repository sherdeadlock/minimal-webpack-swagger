import minimal from 'minimal_api'

document.addEventListener('DOMContentLoaded', (evt) => {
  const api = new minimal.DefaultApi()
  api.rootGet().then((err, data, res) {
    console.log('API called successfully.')
    console.log(err, data)
  }, function(error) {
    console.error(error)
  })
  console.log('hello')
})
