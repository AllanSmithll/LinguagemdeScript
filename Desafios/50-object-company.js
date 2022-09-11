const companies = [{
    001: {
        name: "Amazon",
        founded: 1994,
        industry: "E-Commerce, Cloud",
        kind: "Internet Company"
    },

    002: {
        name: "Facebook",
        founded: 2004,
        industry: "Social",
        kind: "Internet Company"
    },

    003: {
        name: "Alphabet Inc.",
        founded: 2015,
        industry: "Search, Cloud, Advertising",
        kind: "Internet Company"
    }
}]

function show(companies) {
    companies = ["Amazon ................ 1994", 
    "Facebook .............. 2004", 
    "Alphabet Inc. ......... 2015"]
    return companies
}

console.log(show(companies))