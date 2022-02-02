import axios from 'axios'

class UserService {
  static getUsers () {
    return new Promise((resolve, reject) => {
      try {
        axios.get('http://localhost:5000/api/users').then(response => {
          resolve(
            response.data.map(user => ({
              ...user,
              id: user._id,
              createdAt: new Date(user.createdAt)
            }))
          )
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  static createUser (dataUser) {
    return new Promise((resolve, reject) => {
      try {
        axios.post('http://localhost:5000/api/users', dataUser).then(response => {
          resolve('user has been created!')
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  static deleteUser (userId) {
    return new Promise((resolve, reject) => {
      try {
        axios.delete(`http://localhost:5000/api/users/${userId}`).then(response => {
          resolve('user has been deleted!')
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default UserService
