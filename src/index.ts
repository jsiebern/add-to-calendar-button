import classes from './styles';

import { Base } from './integrations/base';
import * as Integrations from './integrations';

const AtcButton = (config: AtcConfig, containerId: string) => {
    const integrations = Object.keys(Integrations);

    const targetElement = document.getElementById(containerId);
    if (targetElement != null) {
        const title = targetElement.getAttribute('data-title') || 'In den Kalender';

        targetElement.classList.add(classes.outer);
        targetElement.innerHTML = `
            <div class="${classes.button}">
                <svg class="${classes.buttonIcon}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                    <g id="Layer_2">
                        <rect y="17" width="18" height="1"/>
                        <rect y="2" width="18" height="1"/>
                        <rect y="6" width="18" height="1"/>
                        <rect y="2" width="1" height="16"/>
                        <rect x="17" y="2" width="1" height="16"/>
                        <rect x="4" y="0" width="1" height="5"/>
                        <rect x="13" y="0" width="1" height="5"/>
                    </g>
                </svg>
                ${title.trim()}
                <div class="${classes.dropContainer}">
                    <ul class="${classes.list}">
                        ${integrations.map(i => {
                const Integration: Base = new Integrations[i];
                return `
                                <li class="${classes.listItem}">
                                    ${Integration.icon}
                                    ${Integration.getLink(config).replace('</a>', Integration.online ? `&nbsp;<em class="${classes.em}">(online)</em></a>` : '</a>')}
                                </li>
                            `;
            }).join('\n')}
                    </ul>
                </div>
            </div>
        `;
        const trigger = targetElement.querySelector(`.${classes.button}`);
        const drop = targetElement.querySelector(`.${classes.dropContainer}`);
        const items = targetElement.querySelectorAll('li');
        if (trigger != null && drop != null) {
            document.addEventListener('click', () => {
                if (drop.classList.contains(classes.visible)) {
                    drop.classList.remove(classes.visible);
                }
            });
            trigger.addEventListener('click', (event) => {
                event.stopPropagation();
                drop.classList.toggle(classes.visible);
            });
            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
        }
    }
};

(() => {
    const containers = document.querySelectorAll<HTMLDivElement>('.atc-button');
    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        if (!container.id) {
            container.id = `atc-${i}`;
        }
        const config: AtcConfig = {
            start: 0,
            end: 0,
            timezone: '',
            title: '',
            description: '',
            location: '',
        };
        const keys = Object.keys(config);
        keys.forEach(k => {
            const configElement = container.querySelector(`span.${k}`);
            if (configElement != null) {
                config[k] = configElement.textContent;
            }
        });
        AtcButton(config, container.id);
    }
})();