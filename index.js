//perm the default activity to roller-skate
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun = () => {
  return "This Saturday, I want to roller-skate!";
}
//perm the default activity to go to the office
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork = () => {
  return "This Monday, I will go to the office.";
}

wrapAdjective = (flair = "*") => {
  return function(adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  }
}

let Calculator = {
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
function actionApplyer(start, arr) {
    let result = start;
    for (let i = 0; i < arr.length; i++) {
        result = arr[i](result);
    }
    return result;
    }

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    }

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
