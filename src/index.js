import _ from 'lodash/fp'

export * from './conversion'
export * from './function'
export * from './array'
export * from './object'

// Math
// ----
export const greaterThanOne = _.lt(1)

// String
// ------
export const wrap = (pre, post, content) => (pre || '') + content + (post || pre || '')
export const quote = _.partial(wrap, ['"', '"'])
export const parens = _.partial(wrap, ['(', ')'])

// Collection
// ----------
export const flowMap = (...fns) => _.map(_.flow(...fns))

// Algebras
// --------
// Map for any recursive algebraic data structure
// defaults in multidimensional arrays
export const rmap = _.curry((fn, obj, map = _.map, is = _.isArray) =>
    map(e => is(e) ? rmap(fn, fn(e), map, is) : e, obj))
export const rmapValues = _.curry((fn, obj) => rmap(fn, obj, _.mapValues, _.isPlainObject))

// Misc
// ----
export const testRegex = regex => regex.test.bind(regex)
