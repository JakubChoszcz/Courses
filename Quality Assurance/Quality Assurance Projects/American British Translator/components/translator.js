const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(text, locale) {
        let translation = text;

        if (locale == 'american-to-british') {
            for (const prop in americanOnly) {
                const regExp = new RegExp(`\\b${prop}\\b`, 'i');
                translation = translation.replace(regExp, `<span class=\"highlight\">${americanOnly[prop]}</span>`);
            }

            for (const prop in americanToBritishSpelling) {
                const regExp = new RegExp(`\\b${prop}\\b`, 'i');
                translation = translation.replace(regExp, `<span class=\"highlight\">${americanToBritishSpelling[prop]}</span>`);
            }

            for (const prop in americanToBritishTitles) {
                const regExp = new RegExp(`\\b${prop}.\\b`, 'i');
                translation = translation.replace(regExp, `<span class=\"highlight\">${capitalizeFirstLetter(americanToBritishTitles[prop])}</span> `);
            }

            let time = translation.match(/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/);

            if (time) {
                translation = translation.replace(time[0], `<span class=\"highlight\">${time[0].replace(':', '.')}</span>`);
            }
        } else if (locale == 'british-to-american') {
            for (const prop in americanToBritishSpelling) {
                const regExp = new RegExp(`\\b${americanToBritishSpelling[prop]}\\b`, 'i');
                translation = translation.replace(regExp, `<span class=\"highlight\">${prop}</span>`);
            }

            for (const prop in americanToBritishTitles) {
                const regExp = new RegExp(`\\b${americanToBritishTitles[prop]}\\b`, 'i');
                translation = translation.replace(regExp, `<span class=\"highlight\">${capitalizeFirstLetter(prop)}</span>`);
            }

            for (const prop in britishOnly) {
                const regExp = new RegExp(`\\b${prop}\\b`, 'i');
                translation = translation.replace(regExp, `<span class=\"highlight\">${britishOnly[prop]}</span>`);
            }

            let time = translation.match(/([0-9]|0[0-9]|1[0-9]|2[0-3]).[0-5][0-9]/);

            if (time) {
                translation = translation.replace(time[0], `<span class=\"highlight\">${time[0].replace('.', ':')}</span>`);
            }
        }

        translation = capitalizeFirstLetter(translation);

        if (translation == text) return 'Everything looks good to me!';

        return translation;

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
    }
}

module.exports = Translator;