# 0.6: New note in Single page app diagram
In single page applications with jQuery/ajax the browser sends a GET request to the server.
At the first time the server send back a HTML page result. On the page is also a <form> but no action.
Instead there is a <script> ajax.post part which handle the update. After the user filled a note the ajax
sends a ajax POST request. Instead of a HTML the server just sends back JSON. In the code is PUT and success function.

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant CDN as CDN / Web Server
    participant API as Backend API
    participant DB as Database

    U->>B: Open app URL
    B->>CDN: GET https://studies.cs.helsinki.fi/exampleapp/spa with Request HTML, CSS, JS
    CDN-->>B: HTML with return SPA assets
    B->>CDN: ajax POST request with new note in the box
    CDN->>B: JSON data resuölt instead of HTML
    Note right of CDN: Just partial update with JSON data

    B->>B: Run JavaScript (start SPA)

    B->>API: Request data
    API->>DB: Query data
    DB-->>API: Results
    API-->>B: JSON response
