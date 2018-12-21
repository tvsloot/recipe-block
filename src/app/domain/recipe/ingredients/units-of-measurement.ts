export interface UnitOfMeasurement {
    name: string;
    abbreviation?: string;
}

export interface UnitsOfMeasurement {
    type: string;
    units: Array<UnitOfMeasurement>;
}

export const unitsOfMeasurement: Array<UnitsOfMeasurement> = [
    {
        type: 'Volume',
        units: [
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
            }
        ]
    }, {
        type: 'Mass & Weight',
        units: [
            {
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
            }
        ]
    }, {
        type: 'Length',
        units: [
            {
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
        ]
    }
];
