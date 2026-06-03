sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    active server
    server->>browser: 302 Found
    deactive server 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    active server 
    server->>browser: HTML document
    deactive server 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    active server 
    server->>browser: the css file
    deactive server 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    active server 
    server->>browser: the JavaScript file 
    deactive server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    active server
    sever->>browser: the json file 
    deactive server 
    