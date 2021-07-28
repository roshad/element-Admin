import request from '@/utils/request'

export function getChart() {
  return request({
    url: '/chart',
    method: 'get'
  })
}
