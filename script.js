//function to randomly generate arrays for each of the 3, and return one of the 12 zodiacs
const returnRndmSign = () => {
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    return signs[Math.floor(Math.random() * 12)];
  }

//object creation to store multitude of arrays
const big3Generator = (number, sun, moon, rising) => {
    return {
        number: number,
        sun: sun,
        moon: moon,
        rising: rising,

        buildMessage() {
            console.log(`Your sun sign is ${sun}, which is your identity. Your moon sign is ${moon}, which is your feelings and emotions. Your rising sign is ${rising}, which reflects physical appearance.`)
        }
    }
}




const ins1 = big3Generator(1, returnRndmSign(), returnRndmSign(), returnRndmSign());

ins1.buildMessage();






