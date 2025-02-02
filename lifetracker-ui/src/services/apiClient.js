import axios from "axios"

class ApiClient {
  constructor(remoteHostUrl) {
    this.token = null
    this.remoteHostUrl = remoteHostUrl || "http://localhost:3001"
    this.tokenName = "lifetracker_token"
  }

  setToken(token) {
    this.token = token
    localStorage.setItem(this.tokenName, token)
  }

  async request({ endpoint, method = 'GET', data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`
    console.debug("API Call:", endpoint, data, method)
    const params = method === "get" ? data : {}
    const headers = {
      "Content-Type": "application/json",
    }
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`
    }

    try {
      const res = await axios({ url, method, data, params, headers })
      return { data: res.data, error: null, message: null }
    } catch (error) {
      console.error("APIclient.makeRequest.error", error.response)
      if (error?.response?.status === 404) return { data: null, error: "Not found" }
      const message = error?.response?.data?.error?.message
      return { data: null, error: error?.response, message }
    }
  }

  async fetchUserFromToken(){
    return await this.request({ endpoint: `auth/me`, method: `GET`}) 
  }

  async register(creds) {
    return await this.request({ endpoint: `auth/signup`, method: `POST`, data: creds })
  }

  async login(creds) {
    return await this.request({ endpoint: `auth/login`, method: `POST`, data: creds })
  }

  async addFood(creds){
    return await this.request({ endpoint: `nutrition`, method: `POST`, data: creds }) 
  }

  async getFood(creds){
    return await this.request({ endpoint: `auth/me`, method: `GET`}) 
  }

  async logout(){
    this.setToken(null)
    localStorage.setItem(this.tokenName, "")
  }
}

export default new ApiClient('http://localhost:3001')