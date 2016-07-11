import minimal from 'minimal_api'

const api = new minimal.DefaultApi()
apiInstance.rootGet().then(function() {                                         
  console.log('API called successfully.')
}, function(error) {                                                            
  console.error(error)
})
console.log('hello')
