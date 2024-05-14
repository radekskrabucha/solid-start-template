import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosInstance
} from 'axios'

export const AXIOS_TIMEOUT = 20000
const AXIOS_CONFIG_DEFAULTS = {
  timeout: AXIOS_TIMEOUT,
  headers: {
    Accept: 'application/json'
  }
}

export const AXIOS_BASE_CLIENT = axios.create(AXIOS_CONFIG_DEFAULTS)
export const CONTENTFUL_CLIENT = axios.create({
  ...AXIOS_CONFIG_DEFAULTS,
  baseURL: `https://cdn.contentful.com/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master`
})

type HTTPMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'
type RequestParams<T> = {
  method: HTTPMethod
  url: string
  req: T
  config?: AxiosRequestConfig<T>
  axiosClient: ApiAxiosClient
}
type MockParams<T> = {
  shouldReject?: boolean
  mockData: T
  timeout?: number
  errorMessage?: string
}
type ApiAxiosClient = 'basic' | 'contentful'

export const request = async <TReq, TRes>(
  params: RequestParams<TReq>,
  mockParams?: MockParams<TRes>
): Promise<TRes> => {
  try {
    if (mockParams) {
      return await fetchMockData(mockParams)
    }

    const apiClient = API_CLIENTS[params.axiosClient]

    const response = await axiosFetch<TReq, TRes>(params, apiClient)

    return response.data
  } catch (error) {
    throw error
  }
}

export const fetchMockData = <T>({
  mockData,
  shouldReject = false,
  timeout = 1000,
  errorMessage
}: MockParams<T>): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        return reject(new Error(errorMessage || 'Fetch mock error'))
      }

      resolve(mockData)
    }, timeout)
  })

export const isMethodWithoutBody = (method: HTTPMethod) =>
  method === 'get' || method === 'delete'

const axiosFetch = <TReq, TRes>(
  params: RequestParams<TReq>,
  client: AxiosInstance
) => {
  const fetch = isMethodWithoutBody(params.method)
    ? client[params.method]<TReq, AxiosResponse<TRes, TReq>>(params.url, {
        params: params.req,
        ...params.config
      })
    : client[params.method]<TReq, AxiosResponse<TRes, TReq>>(
        params.url,
        params.req,
        params.config
      )

  return fetch
}

const API_CLIENTS: Record<ApiAxiosClient, AxiosInstance> = {
  basic: AXIOS_BASE_CLIENT,
  contentful: CONTENTFUL_CLIENT
}
CONTENTFUL_CLIENT.interceptors.request.use(req => {
  req = req || {}
  req.headers = req.headers || {}

  req.headers.Authorization = `Bearer ${import.meta.env.VITE_CONTENTFUL_API_KEY}`

  return req
})
