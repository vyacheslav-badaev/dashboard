export default class {
  constructor (collection) {
    this.collection = collection
  }
  findBy (params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = this.mockFindBy()
        if (response) {
          resolve(response)
        } else {
          reject(new Error('An error occured'))
        }
      }, 1000)
    })
  }
  find (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = this.mockFind()
        if (response) {
          resolve(response)
        } else {
          reject(new Error('An error occured'))
        }
      }, 1000)
    })
  }
  create (data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = data
        if (response) {
          resolve(response)
        } else {
          reject(new Error('An error occured'))
        }
      }, 1000)
    })
  }
  update (id, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = data
        if (response) {
          console.log(response)
          resolve(response)
        } else {
          reject(new Error('An error occured'))
        }
      }, 1000)
    })
  }
  delete (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = this.mockFind()
        if (response) {
          resolve(response)
        } else {
          reject(new Error('An error occured'))
        }
      }, 1000)
    })
  }
  mockFindBy () {
    return [
      {
        username: '0123456789',
        firstname: 'John',
        lastname: 'Doe'
      },
      {
        username: '1234567890',
        firstname: 'Jane',
        lastname: 'Doe'
      },
      {
        username: '2345678901',
        firstname: 'Alice',
        lastname: ''
      },
      {
        username: '3456789012',
        firstname: 'Bob',
        lastname: ''
      }
    ]
  }
  mockFind () {
    return {
      username: '0123456789',
      firstname: 'John',
      lastname: 'Doe'
    }
  }
}
