// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*', saying = 'You are') {
    return function(type = 'a hard worker') {
        return `${saying} ${flair}${type}${flair}!`;
    }
}

wrapAdjective('||')('a dedicated programmer')

const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }, 
    multiply: function(a, b) {
        return a * b;
    }, 
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(start, finish) {
    for (let i = 0; i < finish.length; i++) {
        start = finish[i](start);
    }
    return start;
}