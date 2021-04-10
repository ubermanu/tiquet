import serverConfig from '../json-server.json'
export const backend = `http://localhost:${serverConfig.port}`

export async function fetchApi(resource) {
  const res = await fetch(`${backend}/${resource}`)
  const data = await res.json()
  if (res.ok) {
    return data
  } else {
    throw new Error(data)
  }
}
