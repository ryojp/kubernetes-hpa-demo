import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '1m', target: 30 },
        { duration: '1m', target: 100 },
        { duration: '3m', target: 200 },
        { duration: '1m', target: 300 },
        { duration: '2m', target: 100 },
        { duration: '2m', target: 20 },
    ]
}

export default function () {
  const url = __ENV.URL || 'http://localhost:8080/';
  const res = http.get(url);
  check(res, {
    'status was 200': (r) => r.status == 200,
  })
  sleep(1);
}
