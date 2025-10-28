import * as _i_in from "../../core/astn_source";
import * as _i_out from "./data_types/target";
import * as _i_vd from "./value_deserializers";
export type _T_Command_Result = ($$_: _i_in._T_Value, $$_p: {
    readonly 'value deserializers': _i_vd._T_Value_Deserializers;
}) => _i_out._T_Command_Result;
export type _T_Git_Command = ($$_: _i_in._T_Value, $$_p: {
    readonly 'value deserializers': _i_vd._T_Value_Deserializers;
}) => _i_out._T_Git_Command;
export type _T_Safety_Level = ($$_: _i_in._T_Value, $$_p: {
    readonly 'value deserializers': _i_vd._T_Value_Deserializers;
}) => _i_out._T_Safety_Level;
export type Command_Result = _T_Command_Result;
export type Git_Command = _T_Git_Command;
export type Safety_Level = _T_Safety_Level;
export declare namespace _T_Command_Result {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Value;
    namespace PARAMS {
        namespace value_deserializers {
        }
        type value_deserializers = _i_vd._T_Value_Deserializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Command_Result;
}
export declare namespace _T_Git_Command {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Value;
    namespace PARAMS {
        namespace value_deserializers {
        }
        type value_deserializers = _i_vd._T_Value_Deserializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Git_Command;
}
export declare namespace _T_Safety_Level {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Value;
    namespace PARAMS {
        namespace value_deserializers {
        }
        type value_deserializers = _i_vd._T_Value_Deserializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Safety_Level;
}
export declare namespace Command_Result {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Value;
    namespace PARAMS {
        namespace value_deserializers {
        }
        type value_deserializers = _i_vd._T_Value_Deserializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Command_Result;
}
export declare namespace Git_Command {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Value;
    namespace PARAMS {
        namespace value_deserializers {
        }
        type value_deserializers = _i_vd._T_Value_Deserializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Git_Command;
}
export declare namespace Safety_Level {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Value;
    namespace PARAMS {
        namespace value_deserializers {
        }
        type value_deserializers = _i_vd._T_Value_Deserializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Safety_Level;
}
