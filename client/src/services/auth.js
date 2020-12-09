import api from './apiConfig.js'


export const signUp = async credentials => {
    console.log('this is for the signUp!!!!!!!', credentials)
  try {
    console.log(api)
    const resp = await api.post('/sign-up', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signInUser = async credentials => {
    console.log('this is for the signInUser', credentials)
  try {
    const resp = await api.post('/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signOut = async user => {
  try {
    await localStorage.clear()
    return true
  } catch (error) {
    throw error
  }
}

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post('/')
    return resp.data
  } catch (error) {
    throw error
  }
}
