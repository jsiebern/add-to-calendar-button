import { Base } from './base';
import formatDate from './../helpers/format-date';

class Google implements Base {
    name = 'google'
    label = 'Google Kalender'
    icon = `<svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="m457.73 216.62c2.628 14.041 4.063 28.743 4.063 44.098 1e-3 119.96-80.314 205.28-201.59 205.28-116.02 0-210-93.977-210-210s93.977-210 210-210c56.704 0 104.08 20.867 140.44 54.73l-59.204 59.197v-0.135c-22.046-21.002-50-31.762-81.236-31.762-69.297 0-125.6 58.537-125.6 127.84 0 69.29 56.306 127.97 125.6 127.97 62.87 0 105.65-35.965 114.46-85.312h-114.46v-81.902h197.53z" fill-opacity=".65"/>
    </svg>`
    online = true

    getLink(config: AtcConfig) {
        return `<a href="${encodeURI(`https://www.google.com/calendar/render?action=TEMPLATE&text=${config.title}&dates=${formatDate(new Date(config.start * 1000))}/${formatDate(new Date(config.end * 1000))}&details=${config.description}&location=${config.location}&sprop=&sprop=name:`)}" target="_blank">${this.label}</a>`;
    }
}

export default Google;