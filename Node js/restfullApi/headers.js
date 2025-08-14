// ---------------------------------------------------------
// HTTP Headers – Detailed Notes
// ---------------------------------------------------------

// 1. Introduction
// - HTTP Headers are key-value pairs sent along with every HTTP request and response.
// - They provide additional metadata about the request or response.
// - They are not the main content, but extra information about:
//   - Where it came from
//   - Where it’s going
//   - What kind of content it contains
//   - Size, encoding, authentication, etc.

// ---------------------------------------------------------

// 2. Analogy (Mail Example)
// - Sending a physical letter:
//   - Envelope exterior → contains address, sender, weight (metadata).
//   - Letter inside → actual message (main content).
// - In HTTP:
//   - Headers = Envelope metadata.
//   - Body = Actual content (HTML, JSON, images, etc.).

// ---------------------------------------------------------

// 3. Technical Definition
// - HTTP headers are part of both request and response.
// - They are metadata associated with the HTTP message.
// - Purpose: Provide information about the body, connection, authentication, etc.

// ---------------------------------------------------------

// 4. Examples of Real Headers

// 4.1 In Browser (YouTube example)
// - Opening youtube.com and checking Network tab in Developer Tools shows:
//   - Request Headers:
//     - Accept: preferred content type (e.g., text/html)
//     - Accept-Language: language preference
//     - Cache-Control, Cookies, Referer
//     - User-Agent: device & browser info
//   - Response Headers:
//     - Content-Type: type of response data (e.g., application/json)
//     - Expires, Permissions-Policy, etc.

// 4.2 In Postman (Local API example)
// - Request Headers:
//     - User-Agent: identifies client app (e.g., Postman)
//     - Accept: acceptable formats (e.g., JSON, HTML)
//     - Connection, Accept-Encoding
// - Response Headers:
//     - X-Powered-By: framework info (e.g., Express)
//     - Content-Type: JSON, HTML, etc.
//     - Content-Length: size of response body
//     - Custom headers (user-defined).

// ---------------------------------------------------------

// 5. Custom Headers
// - Developers can set their own headers in both requests and responses.
// - Good practice:
//   - Prefix custom headers with X- (e.g., X-My-Name: Piyush Garg) to indicate they are non-standard.
//   - Helps distinguish from built-in headers like Content-Type.

// Example: Setting a custom header in Node.js
res.setHeader("X-My-Name", "Rock");

// ---------------------------------------------------------

// 6. Built-in vs. Custom Headers
// - Built-in headers: predefined by HTTP standards (e.g., Content-Type, User-Agent, Authorization).
// - Custom headers: created for application-specific purposes (e.g., X-Auth-Token).
// - Reference list of all built-in headers is available online.

// ---------------------------------------------------------

// 7. Why Headers Are Important
// - Control behavior between client and server.
// - Allow:
//   - Localization (via Accept-Language)
//   - Authentication (Authorization)
//   - Content negotiation (Accept, Content-Type)
//   - Caching (Cache-Control, ETag)
//   - Security settings (Content-Security-Policy)

// ---------------------------------------------------------

// 8. Practical Use Cases
// - Authentication & Authorization:
//     - Store tokens (e.g., JWT) in Authorization header.
// - Content Negotiation:
//     - Servers send different formats based on Accept header.
// - Middleware Behavior:
//     - Middleware parses request body based on Content-Type:
//         - If Content-Type: application/json → parse as JSON.
//         - If Content-Type: application/x-www-form-urlencoded → parse accordingly.

// ---------------------------------------------------------

// 9. Best Practices
// - Prefix custom headers with X-.
// - Use standard headers when possible.
// - Avoid sending sensitive data unnecessarily.
// - Be consistent with casing (Title-Case convention).

// ---------------------------------------------------------

// 10. Summary Checklist
// 1. What are headers?
//    Metadata for HTTP requests & responses.
// 2. How to read headers?
//    - Browser DevTools → Network tab
//    - Postman → Headers tab
// 3. How to set custom headers?
//    - In server code using setHeader
//    - Prefix with X-
// 4. Built-in vs Custom: Know which are standard.
// 5. Headers control data flow:
//    - Content type
//    - Encoding
//    - Authentication
//    - Caching

// ---------------------------------------------------------
