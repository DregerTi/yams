const playYamsRound = () => {

    const round = [];
    for (let i = 0; i < 5; i++) {
        round.push(Math.floor(Math.random() * 6) + 1);
    }
    return round;

}

const playYamsParty = (totalRound) => {

    const party = [];
    for (let i = 0; i < totalRound; i++) {
        party.push(playYamsRound());
    }
    return party;
}

const scoreYamsParty = (party) => {

        const scores = [];
        for (let round of party) {
            scores.push(roundScore(round));
        }
        return scores;
}

const roundScore = (round) => {

    const occurences = roundOccurences(round);
    let score = 0;

    for (let value of Object.values(occurences)) {
        if (value === 2) {

        }
        if (value === 3) {
            score = 28;
        }
        if (value === 4) {
            score = 35;
        }
        if (value === 5) {
            score = 50;
        }

    }

    if (score === 0
        && round.includes(1)
        && round.includes(2)
        && round.includes(3)
        && round.includes(4)
        && round.includes(5)) {
        score = 30;
    }

    if (score === 0) {
        while (round.length > 0) {
            score += round.shift();
        }
    }
    return score;
}

const roundOccurences = (round) => {
    const occurence = {};
    while (round.length > 0) {
        const first = round.shift();
        if (occurence[first]) {
            occurence[first] += 1;
        } else {
            occurence[first] = 1;
        }
    }

    return occurence;
}

export {playYamsRound, playYamsParty, scoreYamsParty, roundScore, roundOccurences};

