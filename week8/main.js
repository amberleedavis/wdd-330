/*
fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(person => {
        console.log(person.name);
        console.log(person['name']);
            document.querySelector('main').innerHTML +=
                `<h1>${person.name}</h1>
                <h2>Films</h2>
                <ul></ul>`;

            person.films.forEach(
                film => {
                    document.querySelector('ul').innerHTML +=
                        `<li><a href="${film}"></li>`;
                }
            )
    });
*/

fetch('https://swapi.dev/api/people/?page=2')
    .then(response => response.json())
    .then(people => {
        people.results.forEach(
            person => {
                document.querySelector('main').innerHTML +=
                `<h2>${person.name}</h2>`
                console.log(person);
            }
        )

    });