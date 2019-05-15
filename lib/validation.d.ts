interface Property {
    name: string;
    type: 'number' | 'string' | 'object' | 'array';
}
declare function validate(typeName: string, obj: any, property: Property): void;
declare function validateMultiple(typeName: string, obj: any, properties: Property[]): void;
declare function validateArray(typeName: string, arr: any): void;
export { validateMultiple, validateArray, validate };
