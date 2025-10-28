import * as _i_in from "./data_types/source";
import * as _i_out from "../../core/astn_target";
import * as _i_vs from "./value_serializers";
export type _T_Command_Result = ($$_: _i_in._T_Command_Result, $$_p: {
    readonly 'value serializers': _i_vs._T_Value_Serializers;
}) => _i_out._T_Value;
export type _T_Git_Command = ($$_: _i_in._T_Git_Command, $$_p: {
    readonly 'value serializers': _i_vs._T_Value_Serializers;
}) => _i_out._T_Value;
export type _T_Safety_Level = ($$_: _i_in._T_Safety_Level, $$_p: {
    readonly 'value serializers': _i_vs._T_Value_Serializers;
}) => _i_out._T_Value;
export type Command_Result = _T_Command_Result;
export type Git_Command = _T_Git_Command;
export type Safety_Level = _T_Safety_Level;
export declare namespace _T_Command_Result {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Command_Result;
    namespace PARAMS {
        namespace value_serializers {
        }
        type value_serializers = _i_vs._T_Value_Serializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Value;
}
export declare namespace _T_Git_Command {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Git_Command;
    namespace PARAMS {
        namespace value_serializers {
        }
        type value_serializers = _i_vs._T_Value_Serializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Value;
}
export declare namespace _T_Safety_Level {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Safety_Level;
    namespace PARAMS {
        namespace value_serializers {
        }
        type value_serializers = _i_vs._T_Value_Serializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Value;
}
export declare namespace Command_Result {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Command_Result;
    namespace PARAMS {
        namespace value_serializers {
        }
        type value_serializers = _i_vs._T_Value_Serializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Value;
}
export declare namespace Git_Command {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Git_Command;
    namespace PARAMS {
        namespace value_serializers {
        }
        type value_serializers = _i_vs._T_Value_Serializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Value;
}
export declare namespace Safety_Level {
    namespace CONTEXT {
    }
    type CONTEXT = _i_in._T_Safety_Level;
    namespace PARAMS {
        namespace value_serializers {
        }
        type value_serializers = _i_vs._T_Value_Serializers;
    }
    namespace RESULT {
    }
    type RESULT = _i_out._T_Value;
}
