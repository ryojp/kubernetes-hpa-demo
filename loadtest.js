import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '1m', target: 100 },
        { duration: '1m', target: 200 },
        { duration: '3m', target: 800 },
        { duration: '1m', target: 900 },
        { duration: '2m', target: 500 },
        { duration: '2m', target: 200 },
    ]
}

export default function () {
  const res = http.get('http://localhost:8080/');
  check(res, {
    'status was 200': (r) => r.status == 200,
  })
  sleep(1);
}
