// Exercise 1 
const allEx1Quotes = document.querySelectorAll("quotes")

function parseData() {
    const buttonForEx1 = document.querySelector(".ex1-button")
    if (!buttonForEx1.nextElementSibling.classList.contains("quotes-for-ex1")) {
        const divForPlacingTheXML = document.createElement("div")
        divForPlacingTheXML.classList.add("quotes-for-ex1")
        buttonForEx1.insertAdjacentElement("afterend", divForPlacingTheXML)
    
        allEx1Quotes.forEach((item) => {
            const author = item.querySelector("author")
            const quote = item.querySelector("quote")
    
            const elementForAuthor = document.createElement("h2")
            const elementForQuote = document.createElement("p")
    
            elementForAuthor.textContent = author.textContent
            elementForQuote.textContent = quote.textContent
    
            divForPlacingTheXML.insertAdjacentElement("beforeend", elementForAuthor)
            divForPlacingTheXML.insertAdjacentElement("beforeend", elementForQuote)
    })
}}

// Exercise 2

function loadXMLFile() {
    const XHR = new XMLHttpRequest()

    XHR.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true)

    XHR.send()

    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status == 200) {
            const divForQuotes = document.querySelector("#quotes")
            const responseTextAsString = XHR.responseText
            
            const parser = new DOMParser()
            const responseTextAsXML = parser.parseFromString(responseTextAsString, "text/xml")
            const quotes = responseTextAsXML.querySelector("quote")

            console.log(quotes);
            divForQuotes.innerHTML = responseTextAsString
        }
    }
}

// Exercise 3

function loadAndParseXML() {
    const XHR = new XMLHttpRequest()

    XHR.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true)

    XHR.send()

    const tableForQuotes = document.querySelector("#tabledata")
    const tableBody = tableForQuotes.children[0].firstElementChild
    // console.log(tableBody);

    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status == 200) {
            // parse to xml
            const responseTextAsString = XHR.responseText
            const parser = new DOMParser()
            const responseTextAsXML = parser.parseFromString(responseTextAsString, "text/xml")
            const allQuotes = responseTextAsXML.querySelectorAll("quote")
            const allAuthors = responseTextAsXML.querySelectorAll("author")
            const numberOfItems = (allAuthors.length + allQuotes.length)/2

            for (let i = 0; i < numberOfItems; i++) {
                const elementForEntry = document.createElement("tr")
                const elementForQuote = document.createElement("td")
                const elementForAuthor = document.createElement("td")

                tableBody.insertAdjacentElement("beforeend", elementForEntry)
                elementForEntry.insertAdjacentElement("afterbegin", elementForAuthor)
                elementForEntry.insertAdjacentElement("afterbegin", elementForQuote)

                elementForQuote.textContent = allQuotes[i].textContent
                elementForAuthor.textContent = allAuthors[i].textContent
            }
        }
    }
}











// Exercise 4
const ulForNews = document.querySelector("#newsfeed").firstElementChild
function loadAndParseNews(url) {
    const XHR = new XMLHttpRequest()

    XHR.open("GET", url, true)

    XHR.send()

    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status == 200) {
            const responseTextAsString = XHR.responseText
            const parser = new DOMParser()
            const responseTextAsXML = parser.parseFromString(responseTextAsString, "text/xml")
            const allNewsTitles = responseTextAsXML.querySelectorAll("title")
            const allNewsLinks = responseTextAsXML.querySelectorAll("link")

            for (let i = 0; i < allNewsTitles.length; i++) {
                const liElementForNewsTitles = document.createElement("li")
                ulForNews.insertAdjacentElement("beforeend", liElementForNewsTitles)
                const anchorTag = document.createElement("a")
                liElementForNewsTitles.insertAdjacentElement("afterbegin", anchorTag)
                anchorTag.textContent = allNewsTitles[i].textContent
                anchorTag.setAttribute("href", allNewsLinks[i].textContent)
            }
        }
    }
}
// OLD CODE


// allAuthors.forEach((item) => {
//     arrayOfQuotesAndAuthors.push(item)
// })
// allQuotes.forEach((item) => {
//     arrayOfQuotesAndAuthors.push(item)
// })
// conso
// for (item of arrayOfQuotesAndAuthors) {
//     if (item.nodeName === "quote") {
//         const elementForQuote = document.createElement("td")
//         tableBody.lastElementChild.insertAdjacentElement("afterbegin", elementForQuote)
//         elementForQuote.innerHTML = item.textContent
//     }
//     if (item.nodeName === "author") {
//         const elementForAuthor = document.createElement("td")
//         tableBody.lastElementChild.insertAdjacentElement("afterend", elementForAuthor)
//         elementForAuthor.innerHTML = item.textContent
//     }
//  }
        //     // Do if Yahoo
        //     if (url.includes("yahoo")) {

        //         console.log(url);
        //     }
        //     // Do if Iltalehti
        //     if (url.includes("iltalehti")) {

        //         console.log(url);
        //     }
        // }