const http = require("http")
const app = http.createServer((req, res)=>{
    if(req.url === "/homepage"){

        res.end("hello from homepage")

    } else if(req.url === "/about"){

        res.end("hello, you have opened the about page")

    } else if(req.url === "/contactus"){

        res.end("hello, you have opened the contact us page")
        
    } else if(req.url === "/login"){

        res.end("hello, you have opened the login page")
        
    } else if(req.url === "/fetchdata"){

        res.end("hello, you have opened the fetch data page")
        
    }else{
        res.end("Page not found, Please try again!")
    }
})
app.listen(8000)