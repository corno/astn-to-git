import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Command_Result = (
    $$_: _i_in._T_Command_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Git_Command = (
    $$_: _i_in._T_Git_Command,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Safety_Level = (
    $$_: _i_in._T_Safety_Level,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Command_Result = _T_Command_Result

export type Git_Command = _T_Git_Command

export type Safety_Level = _T_Safety_Level

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Command_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Command_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Git_Command {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Git_Command
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Safety_Level {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Safety_Level
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Command_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Command_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Git_Command {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Git_Command
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Safety_Level {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Safety_Level
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
