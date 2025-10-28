import * as _et from 'exupery-core-types';
export type _T_Document = _T_Value;
export type _T_Value = readonly ['dictionary', _et.Dictionary<_T_Value>] | readonly ['list', _et.Array<_T_Value>] | readonly ['nothing', null] | readonly [
    'optional',
    readonly ['not set', null] | readonly ['set', _T_Value]
] | readonly [
    'state',
    {
        readonly 'state': string;
        readonly 'value': _T_Value;
    }
] | readonly [
    'text',
    {
        readonly 'delimiter': readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
        readonly 'value': string;
    }
] | readonly ['verbose group', _et.Dictionary<_T_Value>];
export type Document = _T_Document;
export type Value = _T_Value;
export declare namespace _T_Document {
}
export declare namespace _T_Value {
    namespace SG {
        namespace concise_group {
            namespace L {
            }
            type L = _T_Value;
        }
        type concise_group = _et.Array<_T_Value>;
        namespace dictionary {
            namespace D {
            }
            type D = _T_Value;
        }
        type dictionary = _et.Dictionary<_T_Value>;
        namespace list {
            namespace L {
            }
            type L = _T_Value;
        }
        type list = _et.Array<_T_Value>;
        type nothing = null;
        namespace optional {
            namespace SG {
                type not_set = null;
                namespace _set {
                }
                type _set = _T_Value;
            }
            type SG = readonly ['not set', null] | readonly ['set', _T_Value];
        }
        type optional = readonly ['not set', null] | readonly ['set', _T_Value];
        namespace state {
            type state = string;
            namespace value {
            }
            type value = _T_Value;
        }
        type state = {
            readonly 'state': string;
            readonly 'value': _T_Value;
        };
        namespace text {
            namespace delimiter {
                namespace SG {
                    type backtick = null;
                    type none = null;
                    type quote = null;
                }
                type SG = readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            }
            type delimiter = readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            type value = string;
        }
        type text = {
            readonly 'delimiter': readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            readonly 'value': string;
        };
        namespace verbose_group {
            namespace D {
            }
            type D = _T_Value;
        }
        type verbose_group = _et.Dictionary<_T_Value>;
    }
    type SG = readonly ['concise group', _et.Array<_T_Value>] | readonly ['dictionary', _et.Dictionary<_T_Value>] | readonly ['list', _et.Array<_T_Value>] | readonly ['nothing', null] | readonly [
        'optional',
        readonly ['not set', null] | readonly ['set', _T_Value]
    ] | readonly [
        'state',
        {
            readonly 'state': string;
            readonly 'value': _T_Value;
        }
    ] | readonly [
        'text',
        {
            readonly 'delimiter': readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            readonly 'value': string;
        }
    ] | readonly ['verbose group', _et.Dictionary<_T_Value>];
}
export declare namespace Document {
}
export declare namespace Value {
    namespace SG {
        namespace concise_group {
            namespace L {
            }
            type L = _T_Value;
        }
        type concise_group = _et.Array<_T_Value>;
        namespace dictionary {
            namespace D {
            }
            type D = _T_Value;
        }
        type dictionary = _et.Dictionary<_T_Value>;
        namespace list {
            namespace L {
            }
            type L = _T_Value;
        }
        type list = _et.Array<_T_Value>;
        type nothing = null;
        namespace optional {
            namespace SG {
                type not_set = null;
                namespace _set {
                }
                type _set = _T_Value;
            }
            type SG = readonly ['not set', null] | readonly ['set', _T_Value];
        }
        type optional = readonly ['not set', null] | readonly ['set', _T_Value];
        namespace state {
            type state = string;
            namespace value {
            }
            type value = _T_Value;
        }
        type state = {
            readonly 'state': string;
            readonly 'value': _T_Value;
        };
        namespace text {
            namespace delimiter {
                namespace SG {
                    type backtick = null;
                    type none = null;
                    type quote = null;
                }
                type SG = readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            }
            type delimiter = readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            type value = string;
        }
        type text = {
            readonly 'delimiter': readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            readonly 'value': string;
        };
        namespace verbose_group {
            namespace D {
            }
            type D = _T_Value;
        }
        type verbose_group = _et.Dictionary<_T_Value>;
    }
    type SG = readonly ['concise group', _et.Array<_T_Value>] | readonly ['dictionary', _et.Dictionary<_T_Value>] | readonly ['list', _et.Array<_T_Value>] | readonly ['nothing', null] | readonly [
        'optional',
        readonly ['not set', null] | readonly ['set', _T_Value]
    ] | readonly [
        'state',
        {
            readonly 'state': string;
            readonly 'value': _T_Value;
        }
    ] | readonly [
        'text',
        {
            readonly 'delimiter': readonly ['backtick', null] | readonly ['none', null] | readonly ['quote', null];
            readonly 'value': string;
        }
    ] | readonly ['verbose group', _et.Dictionary<_T_Value>];
}
