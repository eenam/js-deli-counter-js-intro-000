var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(lineOfPeople) {
  if (lineOfPeople.length === 0) {
    return "The line is currently empty.";
  } else {
    let startSentence = "The line is currently: ";
    for (let i = 0; i < lineOfPeople.length; i++) {
      let number = i + 1;
      let name = lineOfPeople[i];
      startSentence += `${number}. ${name}, `;
    }
    return startSentence.slice(0, -2);
  }
}
