exports = module.exports = {
    multipleOf: '{value} is not multiple of {multipleOf}',
    maximum: '{value} is bigger than {maximum}',
    exclusiveMaximum: '{value} is bigger than or equal to {exclusiveMaximum}',
    minimum: '{value} is less than {minimum}',
    exclusiveMinimum: '{value} is lesser than or equal to {exclusiveMinimum}',
    maxLength: '{value} is longer than {maxLength} characters',
    minLength: '{value} is shorter than {minLength} characters',
    pattern: '{value} is not matching pattern {pattern}',
    items: '{value} has errors: {errors}',
    maxItems: '{value} has more than {maxItems} elements',
    minItems: '{value} has less than {minItems} elements',
    uniqueItems: '{value} has duplicates: {dups}',
    contains: '{value} does not contains elements matching predicate: {contains}',
    maxProperties: '{value} has more than {maxProperties} properties',
    minProperties: '{value} has less than {minProperties} properties',
    required: '{value} has missing required properties: {missingProperties}',
    properties: '{value} has fields with errors: {errors}',
    patternProperties: '{value} has fields matching pattern {patternProperties} with errors: {errors}',
    additionalProperties: '{value} has additional fields with errors: {errors}',
    dependencies: '{value} has fields with dependent errors: {errors}',
    propertyNames: '{value} has fields not matching pattern {propertyNames}: {missmatchProperties}',
    const: '{value} is not equal to {const}',
    enum: '{value} do not belong to enum {enum}',
    type: '{value} (type {actualType}) is not of exepcted types: [{expectedTypes}]',
    allOf: '{value} has errors: {errors}',
    anyOf: '{value} has only errors: {errors}',
    oneOf: '{value} matches more than one schema at once: {matched}',
    not: '{value} matched NOT schema {not}'
};