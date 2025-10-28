import * as _pt from 'exupery-core-types';
export type _T_Derived_Reference<M_Source, T_Type> = null;
export type _T_Dictionary<M_Source, T_D> = {
    readonly 'dictionary': _pt.Dictionary<{
        readonly 'entry': T_D;
        readonly 'location': M_Source;
    }>;
    readonly 'location': M_Source;
};
export type _T_List<M_Source, T_L> = {
    readonly 'list': _pt.Array<{
        readonly 'element': T_L;
        readonly 'location': M_Source;
    }>;
    readonly 'location': M_Source;
};
export type _T_Ordered_Dictionary<M_Source, T_D> = {
    readonly 'dictionary': _pt.Dictionary<{
        readonly 'entry': T_D;
        readonly 'location': M_Source;
    }>;
    readonly 'location': M_Source;
};
export type _T_Reference_To_Circular_Dependent_Sibling<M_Source, T_Dictionary_Entry> = {
    readonly 'key': string;
    readonly 'location': M_Source;
};
export type _T_Reference_To_Normal_Dictionary_Entry<M_Source, T_Dictionary_Entry> = {
    readonly 'key': string;
    readonly 'location': M_Source;
};
export type _T_Reference_To_Stacked_Dictionary_Entry<M_Source, T_Dictionary_Entry> = {
    readonly 'key': string;
    readonly 'location': M_Source;
};
export type _T_State_Group<M_Source, T_SG> = {
    readonly 'location': M_Source;
    readonly 'state group': T_SG;
};
export type Derived_Reference<M_Source, T_Type> = _T_Derived_Reference<M_Source, T_Type>;
export type Dictionary<M_Source, T_D> = _T_Dictionary<M_Source, T_D>;
export type List<M_Source, T_L> = _T_List<M_Source, T_L>;
export type Ordered_Dictionary<M_Source, T_D> = _T_Ordered_Dictionary<M_Source, T_D>;
export type Reference_To_Circular_Dependent_Sibling<M_Source, T_Dictionary_Entry> = _T_Reference_To_Circular_Dependent_Sibling<M_Source, T_Dictionary_Entry>;
export type Reference_To_Normal_Dictionary_Entry<M_Source, T_Dictionary_Entry> = _T_Reference_To_Normal_Dictionary_Entry<M_Source, T_Dictionary_Entry>;
export type Reference_To_Stacked_Dictionary_Entry<M_Source, T_Dictionary_Entry> = _T_Reference_To_Stacked_Dictionary_Entry<M_Source, T_Dictionary_Entry>;
export type State_Group<M_Source, T_SG> = _T_State_Group<M_Source, T_SG>;
export declare namespace _T_Dictionary {
    namespace dictionary {
        namespace D {
            type entry<M_Source, T_D> = T_D;
            type location<M_Source, T_D> = M_Source;
        }
        type D<M_Source, T_D> = {
            readonly 'entry': T_D;
            readonly 'location': M_Source;
        };
    }
    type dictionary<M_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D;
        readonly 'location': M_Source;
    }>;
    type location<M_Source, T_D> = M_Source;
}
export declare namespace _T_List {
    namespace list {
        namespace L {
            type element<M_Source, T_L> = T_L;
            type location<M_Source, T_L> = M_Source;
        }
        type L<M_Source, T_L> = {
            readonly 'element': T_L;
            readonly 'location': M_Source;
        };
    }
    type list<M_Source, T_L> = _pt.Array<{
        readonly 'element': T_L;
        readonly 'location': M_Source;
    }>;
    type location<M_Source, T_L> = M_Source;
}
export declare namespace _T_Ordered_Dictionary {
    namespace dictionary {
        namespace D {
            type entry<M_Source, T_D> = T_D;
            type location<M_Source, T_D> = M_Source;
        }
        type D<M_Source, T_D> = {
            readonly 'entry': T_D;
            readonly 'location': M_Source;
        };
    }
    type dictionary<M_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D;
        readonly 'location': M_Source;
    }>;
    type location<M_Source, T_D> = M_Source;
}
export declare namespace _T_Reference_To_Circular_Dependent_Sibling {
    type key<M_Source, T_Dictionary_Entry> = string;
    type location<M_Source, T_Dictionary_Entry> = M_Source;
}
export declare namespace _T_Reference_To_Normal_Dictionary_Entry {
    type key<M_Source, T_Dictionary_Entry> = string;
    type location<M_Source, T_Dictionary_Entry> = M_Source;
}
export declare namespace _T_Reference_To_Stacked_Dictionary_Entry {
    type key<M_Source, T_Dictionary_Entry> = string;
    type location<M_Source, T_Dictionary_Entry> = M_Source;
}
export declare namespace _T_State_Group {
    type location<M_Source, T_SG> = M_Source;
    type state_group<M_Source, T_SG> = T_SG;
}
export declare namespace Dictionary {
    namespace dictionary {
        namespace D {
            type entry<M_Source, T_D> = T_D;
            type location<M_Source, T_D> = M_Source;
        }
        type D<M_Source, T_D> = {
            readonly 'entry': T_D;
            readonly 'location': M_Source;
        };
    }
    type dictionary<M_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D;
        readonly 'location': M_Source;
    }>;
    type location<M_Source, T_D> = M_Source;
}
export declare namespace List {
    namespace list {
        namespace L {
            type element<M_Source, T_L> = T_L;
            type location<M_Source, T_L> = M_Source;
        }
        type L<M_Source, T_L> = {
            readonly 'element': T_L;
            readonly 'location': M_Source;
        };
    }
    type list<M_Source, T_L> = _pt.Array<{
        readonly 'element': T_L;
        readonly 'location': M_Source;
    }>;
    type location<M_Source, T_L> = M_Source;
}
export declare namespace Ordered_Dictionary {
    namespace dictionary {
        namespace D {
            type entry<M_Source, T_D> = T_D;
            type location<M_Source, T_D> = M_Source;
        }
        type D<M_Source, T_D> = {
            readonly 'entry': T_D;
            readonly 'location': M_Source;
        };
    }
    type dictionary<M_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D;
        readonly 'location': M_Source;
    }>;
    type location<M_Source, T_D> = M_Source;
}
export declare namespace Reference_To_Circular_Dependent_Sibling {
    type key<M_Source, T_Dictionary_Entry> = string;
    type location<M_Source, T_Dictionary_Entry> = M_Source;
}
export declare namespace Reference_To_Normal_Dictionary_Entry {
    type key<M_Source, T_Dictionary_Entry> = string;
    type location<M_Source, T_Dictionary_Entry> = M_Source;
}
export declare namespace Reference_To_Stacked_Dictionary_Entry {
    type key<M_Source, T_Dictionary_Entry> = string;
    type location<M_Source, T_Dictionary_Entry> = M_Source;
}
export declare namespace State_Group {
    type location<M_Source, T_SG> = M_Source;
    type state_group<M_Source, T_SG> = T_SG;
}
