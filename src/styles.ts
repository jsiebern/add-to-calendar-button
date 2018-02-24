import jss from 'jss';
// @ts-ignore
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
    outer: {
        position: 'relative',
    },
    button: {
        boxSizing: 'border-box',
        display: 'inline-block',
        zoom: 1,
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif',
        color: '#000!important',
        fontWeight: 300,
        lineHeight: '100%!important',
        backgroundColor: '#fff',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        fontSize: 15,
        textDecoration: 'none',
        padding: '13px 12px 12px 43px',
        borderRadius: 3,
        cursor: 'pointer',
        fontSmoothing: 'antialiased!important',
        textShadow: '1px 1px 1px rgba(0,0,0,0.004)',
        '&:hover': {
            border: '1px solid #aab9d4',
            color: '#000',
            fontSize: 15,
            textDecoration: 'none',
        },
    },
    buttonIcon: {
        position: 'absolute',
        maxWidth: 18,
        maxHeight: 18,
        left: 12,
        top: 10,
    },
    list: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    listItem: {
        lineHeight: '100%',
        background: '#fff',
        textDecoration: 'none',
        fontSize: 14,
        color: '#333',
        padding: '9px 10px 9px 40px',
        position: 'relative',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        '& svg': {
            position: 'absolute',
            maxHeight: 18,
            maxWidth: 18,
            left: 12,
            top: 6,
        },
        '&:hover': {
            backgroundColor: '#f4f4f4',
            color: '#000',
            textDecoration: 'none',
            fontSize: 14,
        },
        '& a': {
            textDecoration: 'none',
            display: 'block',
            whiteSpace: 'nowrap',
            color: '#333',
        },
        '& a:hover': {
            textDecoration: 'none',
            color: '#333',
        },
    },
    dropContainer: {
        top: 42,
        left: 0,
        position: 'absolute',
        zIndex: 99999,
        padding: '6px 0px',
        background: '#fff',
        textAlign: 'left',
        display: 'none',
        borderRadius: 3,
        marginTop: -2,
        marginLeft: -1,
        borderTop: '1px solid #c8c8c8',
        borderRight: '1px solid #bebebe',
        borderBottom: '1px solid #a8a8a8',
        borderLeft: '1px solid #bebebe',
        boxShadow: '1px 3px 6px rgba(0,0,0,0.15)',
    },
    visible: {
        display: 'block!important',
    },
    em: {
        fontSize: '12px!important',
        color: '#999!important',
    },
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;