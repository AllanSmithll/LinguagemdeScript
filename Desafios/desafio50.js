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
    return companies
        .map((company) => [company.name, company.founded])
        .map((company) => `<tr><td>${company.join('<tr><td>')} <tr><td>`)
        .join('')
}

console.log(show(companies))
