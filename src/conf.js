export const getOptions = (token = '') => {
    return {
      method: "GET",
      cache: "no-cache",
      credentials: "same-origin",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
    }
}

export const deleteOptions = (token = '', body = {}) => {
  return {
    method: "DELETE",
    cache: "no-cache",
    credentials: "same-origin",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "Accept" : "application/json"
    },
    body: body
  }
}