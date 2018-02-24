import { Base } from './base';
import formatDate from './../helpers/format-date';

class OutlookOnline implements Base {
    name = 'outlook_online'
    label = 'Outlook'
    icon = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M258.296,68.79l209-30.5v183.438l-209,1.688V68.79z M467.296,441.227l-209-29.5l-0.28-153.438l209.405,0.313   L467.296,441.227z M65.608,93.04l157.656-21.438l0.063,152.063L65.765,224.54L65.608,93.04z M223.327,409.352L65.733,387.727   V256.164l157.469,1L223.327,409.352z" style="fill-opacity: 0.65;"/>
        </g>
      </svg>`
    online = true

    getLink(config: AtcConfig) {
        return `<a href="${encodeURI(`https://outlook.live.com/owa/?path=/calendar/action/compose&startdt=${formatDate(new Date(config.start * 1000))}&enddt=${formatDate(new Date(config.end * 1000))}&subject=${config.title}&body=${config.description}&location=${config.location}`)}&allday=" target="_blank">${this.label}</a>`;
    }
}

export default OutlookOnline;