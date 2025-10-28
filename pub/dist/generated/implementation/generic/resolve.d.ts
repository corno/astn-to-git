import * as _et from 'exupery-core-types';
import * as unresolved$ from "../../../../interface/generated/pareto/core/unresolved";
import * as resolved$ from "../../../../interface/generated/pareto/core/resolved";
import * as i from "../../../../interface/generated/pareto/core/resolve";
export type Acyclic_Entry_Reference<T_Dictionary_Entry> = {
    readonly 'entry': T_Dictionary_Entry;
    readonly 'key': string;
};
export type Parameters<Source, V, L> = {
    'location 2 string': i.Location_to_String<Source>;
    'parameters': {
        'lookups': L;
        'values': V;
    };
};
export type Key_Value_Location_Triplet<Source, T> = {
    'key': string;
    'value': T;
    'location': Source;
};
export type Path<Source, Resolved_Element, Seed> = {
    'list': _et.Array<Resolved_Element>;
    'result': {
        'data': Seed;
    };
};
export type Resolved_Step<Resolved_Element, Seed> = {
    'element': Resolved_Element;
    'result': Seed;
};
export type Resolve_Error<Source> = {
    'location': Source;
    'type': Resolve_Error_Type;
};
export type Resolve_Error_Type = [
    'circular dependency',
    {
        'keys': _et.Array<string>;
    }
] | [
    'no such entry',
    {
        'key': string;
    }
] | ['no context lookup', null] | [
    'missing denseness entry',
    {
        'key': string;
    }
] | [
    'index out of bounds',
    {
        'up steps taken': number;
    }
] | [
    'no element found at index',
    {
        'index': number;
    }
];
export declare const abort: <Source>(location: Source, type: Resolve_Error_Type, location_to_string: i.Location_to_String<Source>) => never;
export declare const dictionary_to_lookup: <T>($: _et.Dictionary<T>, $p: null) => i.Acyclic_Lookup<T>;
export declare const get_possibly_circular_dependent_sibling_entry: <Source, T>($: i.Cyclic_Lookup<T>, $p: {
    "reference": unresolved$.Reference_To_Circular_Dependent_Sibling<Source, T>;
    "location 2 string": i.Location_to_String<Source>;
}) => resolved$.Reference_To_Circular_Dependent_Sibling<Source, T>;
export declare const push_stack: <T>($: _et.Array<T>, $p: {
    "element": T;
}) => _et.Array<T>;
export declare const get_entry_from_stack: <Source, T>($: i.Lookup_Stack<T>, $p: {
    "reference": unresolved$.Reference_To_Stacked_Dictionary_Entry<Source, T>;
    "location 2 string": i.Location_to_String<Source>;
}) => resolved$.Reference_To_Stacked_Dictionary_Entry<Source, T>;
export declare const get_entry: <Source, T>($: i.Acyclic_Lookup<T>, $p: {
    "reference": unresolved$.Reference_To_Normal_Dictionary_Entry<Source, T>;
    "location 2 string": i.Location_to_String<Source>;
}) => resolved$.Reference_To_Normal_Dictionary_Entry<Source, T>;
export declare const resolve_path: <Source, Unresolved_Element, Resolved_Element, Seed>($: unresolved$.List<Source, Unresolved_Element>, $p: {
    "seed": Seed;
    "map": ($: Unresolved_Element, current: Seed) => Resolved_Step<Resolved_Element, Seed>;
}) => Path<Source, Resolved_Element, Seed>;
export declare const resolve_dictionary: <Source, TUnresolved, TResolved>($: unresolved$.Dictionary<Source, TUnresolved>, $p: {
    "map": ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
        "possibly circular dependent siblings": i.Cyclic_Lookup<TResolved>;
    }) => TResolved;
    "location 2 string": ($: Source) => string;
}) => resolved$.Dictionary<Source, TResolved>;
export declare const resolve_dense_dictionary: <Source, TUnresolved, TResolved, TBenchmark>($: unresolved$.Dictionary<Source, TUnresolved>, $p: {
    "denseness benchmark": _et.Dictionary<TBenchmark>;
    "map": ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
        "possibly circular dependent siblings": i.Cyclic_Lookup<TResolved>;
    }) => TResolved;
    "location 2 string": ($: Source) => string;
}) => resolved$.Dictionary<Source, TResolved>;
export declare const resolve_dense_ordered_dictionary: <Source, TUnresolved, TResolved, TBenchmark>($: unresolved$.Dictionary<Source, TUnresolved>, $p: {
    "denseness benchmark": _et.Dictionary<TBenchmark>;
    "map": ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
        "possibly circular dependent siblings": i.Cyclic_Lookup<TResolved>;
        "not circular dependent siblings": i.Acyclic_Lookup<TResolved>;
    }) => TResolved;
    "location 2 string": ($: Source) => string;
}) => resolved$.Ordered_Dictionary<Source, TResolved>;
export declare const resolve_ordered_dictionary: <Source, TUnresolved, TResolved>($: unresolved$.Dictionary<Source, TUnresolved>, $p: {
    "map": ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
        "possibly circular dependent siblings": i.Cyclic_Lookup<TResolved>;
        "not circular dependent siblings": i.Acyclic_Lookup<TResolved>;
    }) => TResolved;
    "location 2 string": ($: Source) => string;
}) => resolved$.Ordered_Dictionary<Source, TResolved>;
