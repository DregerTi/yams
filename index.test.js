const {roundScore} = require("./index");

describe("ymas round score", () => {
    it.each([
        {round: [1,1,1,2,4], score: 28},
    ])('should return score ', ({round, score}) => {
        expect(roundScore(round)).toBe(score);
    });
})