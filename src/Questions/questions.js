


var questions = [
    {
        prompt: "Imagine that the interest rate on your high-yield savings account is 2% per year and inflation is 3% per year. After 1 year, how much would you be able to buy with the money in this account?\n(a) More than today\n\(b) Exactly the same\n\(c) Less than today\n(d) I don't know",
        answer: "c"
    },
    {
        prompt: "Suppose you take out a $10,000 loan that charges a 10% compounding interest rate for a period of five years. Assuming you made minimum payments, how much interest would you expect to pay over the course of five years?\n(a) Less than $1,000\n\(b) Exactly $1,000\n(c) More than $1,000\n(d) I don't know",
        answer: "c"
    },
    {
        prompt: "If interest rates fall, what will typically happen to bond prices?\n(a) They will rise\n\(b) They will stay the same\n\(c) They will fall\n(d) I don't know",
        answer: "a"
    },
    {
        prompt: "Compared to owning a single company's stock, owning a stock ETF is...\n(a) Less risky\n\(b) As risky\n\(c) More risky\n(d) I don't know",
        answer: "a"
    },
    {
        prompt: "Suppose you have $1,000 invested and earn 5% per year compounded annually. If you didn't withdraw or add any money, how many years would it take for the amount you own to double?\n(a) Less than 10 years\n\(b) Between 10 and 15 years\n\(c) More than 15 years\n(d) I don't know",
        answer: "b"
    }
];
var score = 0;

for(var i=0; i < questions.length; i++){
    var response = prompt(questions[i].prompt);
    if(response === questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("We need to get you some more knowlegde around this topic!")
    }

var peers = [
        {
            number:0,
            compare: "We have some work to do",
            begin: "Ouch"
        },
        {
            number:1,
            compare: "Below Average",
            begin: "Great Effort!"
        },
        {
            number:2,
            compare: "Average",
            begin: "Great!"
        },
        {
            number:3,
            compare: "Average",
            begin: "Great!"
        },
        {
            number:4,
            compare: "Above Average",
            begin: "Well done!"
        },
        {
            number:5,
            compare: "Above Average",
            begin: "Well Done!"
        }
    ];
    for(var i=0; i < peers.length; i++){
        var message = (peers[i].number);
        if(message === score){
        compare, begin;
        }
    } 
            alert( begin + " you've completed your financial knowledge assessment! You got " + score + "/" + questions.length + " number correct which means your financial knowledge is" + compare + "compared to your peers");

export default questions 