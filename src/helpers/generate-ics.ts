import formatDate from './../helpers/format-date';

export default function (config: AtcConfig, label: string) {
    return `
        <a href="${encodeURI(`data:text/calendar;charset=utf8,${[
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `URL:${document.URL}`,
            `DTSTART:${formatDate(new Date(config.start * 1000))}`,
            `DTEND:${formatDate(new Date(config.end * 1000))}`,
            `SUMMARY:${config.title}`,
            `DESCRIPTION:${config.description}`,
            `LOCATION:${config.location}`,
            'END:VEVENT',
            'END:VCALENDAR',
        ].join('\n')}`)}" download="${config.title}.ics">${label}</a>
    `;
};