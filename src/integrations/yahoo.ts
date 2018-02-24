import { Base } from './base';
import formatDate from './../helpers/format-date';

class Yahoo implements Base {
    name = 'yahoo'
    label = 'Yahoo Kalender'
    icon = `<svg style="enable-background:new 0 0 512 512;" width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M384.6,68.4c-11.3,0-22.5-0.8-32.6-4.4l-96,160L160,64c-10.1,3.6-20.7,4.4-32,4.4c-11.1,0-22.1-0.9-32-4.4l128,212.7V448  c10-3.5,20.8-4.4,32-4.4s22,0.9,32,4.4V277L416,64C406.1,67.4,395.7,68.4,384.6,68.4z" style="fill-opacity: 0.65;"/>
  </svg>`
    online = true

    getLink(config: AtcConfig) {
        const eventDuration = ((config.end - config.start) * 1000) / 60000;
        const yahooHourDuration = eventDuration < 600 ?
            `0${Math.floor((eventDuration / 60))}` :
            Math.floor((eventDuration / 60)).toString();

        const yahooMinuteDuration = eventDuration % 60 < 10 ?
            `0${eventDuration % 60}` :
            (eventDuration % 60).toString();

        const yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

        return `<a href="${encodeURI(`http://calendar.yahoo.com/?v=60&view=d&type=20&title=${config.title}&st=${formatDate(new Date(config.start * 1000))}&dur=${yahooEventDuration}&desc=${config.description}&in_loc=${config.location}`)}" target="_blank">${this.label}</a>`;
    }
}

export default Yahoo;