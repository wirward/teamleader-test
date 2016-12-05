# teamleader-test

React-redux solution, build in a way that would allow it to grow into a large scale application in a structured/modular way.

Requirements: https://github.com/teamleadercrm/coding-test/blob/master/2-ordering.md 

Some things that are not ideal yet in this example:

- Totals for items and orders should not be stored in the store, or even returned from the api. It makes the reducers harder to maintain. Better solution would be to have the totals calculated in the container, possibly using a selector library for performance (for example: https://github.com/reactjs/reselect) 

- There can be rounding errors when calculation the prices in javascript. And the server api should ignore the prices sent by the client completed anyway when placing the order, or the client should not sent them to the api at all.

- There should be a way to get the order information with the product information from the api in 1 request. 
When the api sents them as composed/nested objects, the will need to be decomposed into a normalized flat lists (for example using https://github.com/paularmstrong/normalizr ).
Data object in redux should be as flat as possible, and the same data should only exist once in the store.

- Project was started using create-react-app ( https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html ), to allow for a more flexible build process in the future, a proper webpack.config will be needed. There is also no hot-reloading using create-react-app, yet.


## How to run

    npm install
    npm start
    
    
  
