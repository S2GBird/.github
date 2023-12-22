import axios from 'axios'
import API_BASE_URL from './constants'

class ApiClient {
  constructor (remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl
  }

  // ----------------------GENERAL REQUEST HANDLING -----------------------------
  /* Purpose: To standardize the method at which axios requests are made from frontend to backend, and
    centralize the error handling so it does not need to be handled within the individual components. */

  async request ({ endpoint, method = 'GET', data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`
    const headers = {
      'Content-Type': 'application/json'
      // Future Authorization Headers will go here.
    }

    try {
      // If a request is sucessful, send back an object containing the response
      const response = await axios({ url, method, data, headers })
      return { data: response.data, error: null }
    } catch (error) {
      // If a request is unsucessful, send back an object containing the error message
      console.error({ errorResponse: error })
      const message = error?.response?.data?.error?.message
      return { data: null, error: message || String(error) }
    }
  }

  // -------------------------BACKEND HEALTH CHECK REQUESTS------------------------------
  async healthCheck () {
    return await this.request({ endpoint: '', method: 'GET' })
  }
  // -------------------------AUTHENTICATION REQUESTS------------------------------
  // commented out for now until implemented
  async login (user) {
    return await this.request({ endpoint: 'login', method: 'POST', data:{username:user.username, password:user.password} })
  }
   async register (userInfo) {
    return await this.request({ endpoint: `register`, method: `POST`,
    data:{
      fName:userInfo.fName, lName:userInfo.lName, username:userInfo.username, email:userInfo.email, password:userInfo.password } })
  }
}

export default new ApiClient(API_BASE_URL)
