/**
 * Flow of handling client requests in a Node.js server:
 *
 * 1. Client sends a request to the server.
 * 2. The server receives the request and places it in the Event Queue.
 * 3. The Event Loop processes requests from the queue in FIFO (First-In-First-Out) order.
 * 4. Each request can be of two types:
 *      a) Non-blocking (Asynchronous)
 *      b) Blocking (Synchronous)
 *
 * 5. For asynchronous requests:
 *      - They are handled directly by the Event Loop without blocking.
 *      - Once processed, a response is sent back to the client.
 *
 * 6. For synchronous (blocking) requests:
 *      - They are delegated to the Thread Pool (managed by libuv).
 *      - The Thread Pool assigns the request to an available thread.
 *      - Once processing is complete, the result is returned to the Event Loop,
 *        which then sends the response to the client.
 *
 * 7. By default, the Thread Pool has 4 threads.
 *    - This can be increased (up to the number of CPU cores or more)
 *      depending on the machine’s hardware and configuration.
 */
