let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote:"The best way to find yourself is to lose youreself in the service of others,",
    person: 'mahatma Gathi'

},{
    quote: "if you want to live a happy life tie it to a goal, not people or things",
    person: 'Albert Eistein'
},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    console.log (person)
})

