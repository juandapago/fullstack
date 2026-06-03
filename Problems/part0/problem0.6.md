sequenceDiagram
    participant browser
    participant server 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    active server
    server->>browser: HTML document
    deactive server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    active server
    server->>browser: the css file
    deactive server

    browser->>server:  GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    active server
    server->>browser: the JavaScript file
    deactive server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    active server
    server->>browser: the json file
    deactive server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    active server
    server->>browser: 201 Created
    deactive server

