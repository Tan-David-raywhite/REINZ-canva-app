import styles from '../../styles/tokens.css';
/** 
 * A scale that defines the size of spacing values, such as margins and padding.
 * The values ensure that interface elements conform to a grid of 8px squares, leading to visual harmony and consistency.
 * Each value is known as a *unit*, which is abbreviated to *u*.
 * For example, 1 unit (1u) is equal to 8px, whereas 1.5 units (1.5u) is equal to 12px.
 */ export const unitSpaces = [
    '0',
    '0.5u',
    '1u',
    '1.5u',
    '2u',
    '3u',
    '4u',
    '6u',
    '8u',
    '12u'
];
export const baseUnit = parseInt(styles.baseUnit, 10) || 8;
