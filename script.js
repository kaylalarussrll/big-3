//function to randomly generate arrays for each of the 3, and return one of the 12 zodiacs
const returnRndmSign = () => {
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    return signs[Math.floor(Math.random() * 12)];
  }

  const returnRndmPhrase = () => {
    const phrases = ['This will bring you luck.', 
    'This will guide you down the proper path.',
    'Do not make any big decisions with money.',
    'Avoid conflicts in your life.',
    'Speak your mind in any upcoming situations that could arise.',
    'Life will be what you make it.'];
    return phrases[Math.floor(Math.random() * 6)];
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
        },
        pickFortune() {
            let fortune = returnRndmPhrase();
            console.log(`Your big 3 would like to give you this fortune: ${fortune}`);
        }
        
    }
};

//for (let sun in big3Generator) {
  //  console.log(`Your sun sign, ${sun} grants you this fortune: ${returnRndmPhrase}`);
//}

const ins1 = big3Generator(1, returnRndmSign(), returnRndmSign(), returnRndmSign());

ins1.buildMessage();
ins1.pickFortune();




