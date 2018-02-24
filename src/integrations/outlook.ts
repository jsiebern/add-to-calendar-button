import { Base } from './base';
import generateIcs from './../helpers/generate-ics';

class Outlook implements Base {
    name = 'outlook'
    label = 'Outlook'
    icon = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M258.296,68.79l209-30.5v183.438l-209,1.688V68.79z M467.296,441.227l-209-29.5l-0.28-153.438l209.405,0.313   L467.296,441.227z M65.608,93.04l157.656-21.438l0.063,152.063L65.765,224.54L65.608,93.04z M223.327,409.352L65.733,387.727   V256.164l157.469,1L223.327,409.352z" style="fill-opacity: 0.65;"/>
    </g>
  </svg>`
    online = false

    getLink(config: AtcConfig) {
        return generateIcs(config, this.label);
    }
}

export default Outlook;