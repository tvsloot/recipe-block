export interface UnitOfMeasurement {
    name: string;
    abbreviation?: string;
}

export const unitsOfMeasurement: Array<UnitOfMeasurement> = [
    {
        name: 'teaspoon',
        abbreviation: 'tsp.'
    }, {
        name: 'tablespoon',
        abbreviation: 'tbsp.'
    }, {
        name: 'fluid ounce',
        abbreviation: 'fl oz'
    }, {
        name: 'gill'
    }, {
        name: 'cup',
        abbreviation: 'c'
    }, {
        name: 'pint',
        abbreviation: 'pt'
    }, {
        name: 'quart',
        abbreviation: 'qt'
    }, {
        name: 'gallon',
        abbreviation: 'gal'
    }, {
        name: 'milliliter',
        abbreviation: 'ml'
    }, {
        name: 'liter',
        abbreviation: 'l'
    }, {
        name: 'deciliter',
        abbreviation: 'dl'
    }, {
        name: 'pound',
        abbreviation: 'lb'
    }, {
        name: 'ounce',
        abbreviation: 'oz'
    }, {
        name: 'milligram',
        abbreviation: 'mg'
    }, {
        name: 'gram',
        abbreviation: 'g'
    }, {
        name: 'kilogram',
        abbreviation: 'kg'
    }, {
        name: 'millimeter',
        abbreviation: 'mm'
    }, {
        name: 'centimeter',
        abbreviation: 'cm'
    }, {
        name: 'meter',
        abbreviation: 'm'
    }, {
        name: 'inch',
        abbreviation: 'in'
    }
];
