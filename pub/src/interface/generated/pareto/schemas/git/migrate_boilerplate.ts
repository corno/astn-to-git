import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "./data_types/target"

// **** TYPES

export type _T_Command_Result = (
    $$_: _i_in._T_Command_Result,
    $$_p: null,
) => _i_out._T_Command_Result

export type _T_Git_Command = (
    $$_: _i_in._T_Git_Command,
    $$_p: null,
) => _i_out._T_Git_Command

export type _T_Safety_Level = (
    $$_: _i_in._T_Safety_Level,
    $$_p: null,
) => _i_out._T_Safety_Level

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
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Command_Result
}

export namespace _T_Git_Command {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Git_Command
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Git_Command
}

export namespace _T_Safety_Level {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Safety_Level
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Safety_Level
}

// *** ALIASES FOR NESTED TYPES

export namespace Command_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Command_Result
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Command_Result
}

export namespace Git_Command {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Git_Command
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Git_Command
}

export namespace Safety_Level {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Safety_Level
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Safety_Level
}
