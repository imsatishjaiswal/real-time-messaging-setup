import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import http from "http";

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello from worker " + process.pid);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
