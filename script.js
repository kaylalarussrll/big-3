//function to randomly generate arrays for each of the 3, and return one of the 12 zodiacs
const returnRndmSign = () => {
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    return signs[Math.floor(Math.random() * 12)];
  }

//object creation to store multitude of arrays
const big3Generator = (number, sun, moon, rising) => {
    return {
        number:number,
        sun: sun,
        moon: moon,
        rising: rising,
    }
}

let phrases = {
    'p1' : 'You will have good luck',
    'p2' : 'You will have bad luck',
    'p3' : 'You will come into a great fortune',
    'p4' : 'Watch out when dealing with money',
    'p5' : 'Do not trust easily in this time',
    'p6' : 'Now is not the time for drastic change',
    'p7' : 'Reconnect with old loved ones or friends',
    'p8' : 'Gain perspective before moving forward',
    'p9' : 'You will find what you are looking for'

};


const ins1 = big3Generator(1, returnRndmSign(), returnRndmSign(), returnRndmSign());

//console.log(ins1);

