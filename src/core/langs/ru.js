exports = module.exports = {
    multipleOf: '{value} не кратно {multipleOf}',
    maximum: '{value} больше {maximum}',
    exclusiveMaximum: '{value} больше или равно {exclusiveMaximum}',
    minimum: '{value} меньше {minimum}',
    exclusiveMinimum: '{value} меньше или равно {exclusiveMinimum}',
    maxLength: '{value} длинее {maxLength} символов',
    minLength: '{value} короче {minLength} символов',
    pattern: '{value} не соответствует шаблону {pattern}',
    items: '{value} содержит ошибки: {errors}',
    maxItems: '{value} содержит больше {maxItems} элементов',
    minItems: '{value} содержит меньше {minItems} элементов',
    uniqueItems: '{value} содержит дубликаты: {dups}',
    contains: '{value} не соодержит элементов соответствующих: {contains}',
    maxProperties: '{value} содержит больше {maxProperties} свойств',
    minProperties: '{value} содержит меньше {minProperties} свойств',
    required: '{value} не содержит требуемые свойства: {missingProperties}',
    properties: '{value} содержит поля с ошибками: {errors}',
    patternProperties: '{value} содержит поля соответствующие {patternProperties} с ошибками: {errors}',
    additionalProperties: '{value} содержит дополнительные поля: {errors}',
    dependencies: '{value} содержит поля с зависимыми ошибками: {errors}',
    propertyNames: '{value} содержит поля не соответствующие шаблону {propertyNames}: {missmatchProperties}',
    const: '{value} не равно {const}',
    enum: '{value} не включено в перечисление [{enum}]',
    type: '{value} (тип {actualType}) не входит в список ожидаемых типов: [{expectedTypes}]',
    allOf: '{value} содержит ошибки: {errors}',
    anyOf: '{value} содержит только ошибки: {errors}',
    oneOf: '{value} соответствует более чем одной схеме: {matched}',
    not: '{value} соответсвуте НЕ-схеме {not}'
};