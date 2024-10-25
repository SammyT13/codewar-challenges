// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const domainName = url => url.replace(/(?:https?:\/\/)?(?:www\.)?/, "").split(".")[0]

// FYI: if you want to include the '.com' portion you can change '.split(".")' to '.split("/")


console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com" ))
console.log(domainName("https://www.cnet.com" ))
console.log(domainName("https://youtube.com"))
console.log(domainName("www.xakep.ru"))
