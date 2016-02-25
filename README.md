# FreeCodeCamp Timestamp Microservice

## Running the server

    node `server.js` <port>

## Example Usage

    https://<host>:<port>/December%2015,%202015
    
        Returns:
        
        {
            "unix":    1450137600,
            "natural": "Dec 15, 2015"
        }
    
    https://<host>:<port>/1450137600
    
        Returns: 
        
        {
            "unix":    1450137600,
            "natural": "Dec 15, 2015"
        }
        
    https://<host>:<port>/asdfqwerty
    
        Returns: 
        
        {
            "unix":   null,
            "natural: null
        }
        
    

