import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Command_Result = {
    readonly 'affected areas': _i_core._T_List<null, string>
    readonly 'command line': string
    readonly 'requires force push': boolean
    readonly 'safety level': string
}

export type _T_Git_Command = _i_core._T_State_Group<null, 
    | readonly ['change', _i_core._T_State_Group<null, 
        | readonly ['configuration', _i_core._T_State_Group<null, 
            | readonly ['config set', {
                readonly 'global': boolean
                readonly 'key': string
                readonly 'local': boolean
                readonly 'system': boolean
                readonly 'value': string
            }]
            | readonly ['config unset', {
                readonly 'global': boolean
                readonly 'key': string
                readonly 'local': boolean
                readonly 'system': boolean
            }]
        >]
        | readonly ['index', _i_core._T_State_Group<null, 
            | readonly ['add', {
                readonly 'all': boolean
                readonly 'files': _i_core._T_List<null, string>
                readonly 'patch': boolean
                readonly 'update': boolean
            }]
            | readonly ['reset files', {
                readonly 'files': _i_core._T_List<null, string>
            }]
            | readonly ['restore staged', {
                readonly 'files': _i_core._T_List<null, string>
            }]
            | readonly ['rm', {
                readonly 'cached': boolean
                readonly 'files': _i_core._T_List<null, string>
                readonly 'force': boolean
            }]
        >]
        | readonly ['local repo', _i_core._T_State_Group<null, 
            | readonly ['append', _i_core._T_State_Group<null, 
                | readonly ['branch create', {
                    readonly 'name': string
                    readonly 'start point': _pt.Optional_Value<string>
                }]
                | readonly ['cherry pick', {
                    readonly 'commits': _i_core._T_List<null, string>
                    readonly 'mainline': _pt.Optional_Value<number>
                    readonly 'no commit': boolean
                }]
                | readonly ['commit', {
                    readonly 'all': boolean
                    readonly 'amend': boolean
                    readonly 'message': string
                    readonly 'no verify': boolean
                    readonly 'signoff': boolean
                }]
                | readonly ['merge', {
                    readonly 'branch': string
                    readonly 'ff only': boolean
                    readonly 'message': _pt.Optional_Value<string>
                    readonly 'no commit': boolean
                    readonly 'no ff': boolean
                }]
                | readonly ['pull rebase private', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['revert', {
                    readonly 'commits': _i_core._T_List<null, string>
                    readonly 'mainline': _pt.Optional_Value<number>
                    readonly 'no commit': boolean
                }]
                | readonly ['tag create', {
                    readonly 'annotated': boolean
                    readonly 'commit': _pt.Optional_Value<string>
                    readonly 'message': _pt.Optional_Value<string>
                    readonly 'name': string
                }]
            >]
            | readonly ['destroy', _i_core._T_State_Group<null, 
                | readonly ['branch delete', {
                    readonly 'force': boolean
                    readonly 'name': string
                }]
                | readonly ['commit amend', {
                    readonly 'all': boolean
                    readonly 'message': _pt.Optional_Value<string>
                    readonly 'no edit': boolean
                }]
                | readonly ['filter repo', {
                    readonly 'force': boolean
                    readonly 'invert paths': boolean
                    readonly 'path': _pt.Optional_Value<string>
                }]
                | readonly ['gc', {
                    readonly 'aggressive': boolean
                    readonly 'prune': _pt.Optional_Value<string>
                }]
                | readonly ['rebase', {
                    readonly 'interactive': boolean
                    readonly 'onto': string
                    readonly 'preserve merges': boolean
                    readonly 'strategy': _pt.Optional_Value<string>
                }]
                | readonly ['reset', {
                    readonly 'mode': _i_core._T_State_Group<null, 
                        | readonly ['hard', null]
                        | readonly ['mixed', null]
                        | readonly ['soft', null]
                    >
                    readonly 'target': string
                }]
                | readonly ['tag delete', {
                    readonly 'name': string
                }]
                | readonly ['tag force', {
                    readonly 'commit': _pt.Optional_Value<string>
                    readonly 'message': _pt.Optional_Value<string>
                    readonly 'name': string
                }]
            >]
        >]
        | readonly ['remote repo', _i_core._T_State_Group<null, 
            | readonly ['clone', {
                readonly 'branch': _pt.Optional_Value<string>
                readonly 'depth': _pt.Optional_Value<number>
                readonly 'directory': _pt.Optional_Value<string>
                readonly 'recursive': boolean
                readonly 'url': string
            }]
            | readonly ['fetch', {
                readonly 'all': boolean
                readonly 'branch': _pt.Optional_Value<string>
                readonly 'prune': boolean
                readonly 'remote': _pt.Optional_Value<string>
            }]
            | readonly ['pull', {
                readonly 'branch': _pt.Optional_Value<string>
                readonly 'ff only': boolean
                readonly 'no rebase': boolean
                readonly 'rebase': boolean
                readonly 'remote': _pt.Optional_Value<string>
            }]
            | readonly ['push', {
                readonly 'branch': _pt.Optional_Value<string>
                readonly 'delete': _pt.Optional_Value<string>
                readonly 'force': boolean
                readonly 'force with lease': boolean
                readonly 'remote': _pt.Optional_Value<string>
                readonly 'set upstream': boolean
                readonly 'tags': boolean
            }]
            | readonly ['remote add', {
                readonly 'name': string
                readonly 'url': string
            }]
            | readonly ['remote remove', {
                readonly 'name': string
            }]
        >]
        | readonly ['stash', _i_core._T_State_Group<null, 
            | readonly ['apply', {
                readonly 'index': boolean
                readonly 'stash': _pt.Optional_Value<string>
            }]
            | readonly ['clear', null]
            | readonly ['drop', {
                readonly 'stash': _pt.Optional_Value<string>
            }]
            | readonly ['pop', {
                readonly 'index': boolean
                readonly 'stash': _pt.Optional_Value<string>
            }]
            | readonly ['push', {
                readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                readonly 'include untracked': boolean
                readonly 'keep index': boolean
                readonly 'message': _pt.Optional_Value<string>
            }]
        >]
        | readonly ['workspace', _i_core._T_State_Group<null, 
            | readonly ['checkout file', {
                readonly 'files': _i_core._T_List<null, string>
                readonly 'force': boolean
            }]
            | readonly ['clean', {
                readonly 'directories': boolean
                readonly 'dry run': boolean
                readonly 'force': boolean
                readonly 'ignored': boolean
            }]
            | readonly ['restore', {
                readonly 'files': _i_core._T_List<null, string>
                readonly 'source': _pt.Optional_Value<string>
                readonly 'worktree': boolean
            }]
        >]
    >]
    | readonly ['view', _i_core._T_State_Group<null, 
        | readonly ['configuration', _i_core._T_State_Group<null, 
            | readonly ['config', {
                readonly 'global': boolean
                readonly 'key': _pt.Optional_Value<string>
                readonly 'list': boolean
                readonly 'local': boolean
                readonly 'system': boolean
            }]
        >]
        | readonly ['index', _i_core._T_State_Group<null, 
            | readonly ['diff cached', {
                readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                readonly 'name only': boolean
                readonly 'stat': boolean
            }]
            | readonly ['status', {
                readonly 'porcelain': _pt.Optional_Value<string>
                readonly 'short': boolean
            }]
        >]
        | readonly ['local repo', _i_core._T_State_Group<null, 
            | readonly ['branch', {
                readonly 'all': boolean
                readonly 'remote': boolean
                readonly 'verbose': boolean
            }]
            | readonly ['log', {
                readonly 'all': boolean
                readonly 'author': _pt.Optional_Value<string>
                readonly 'graph': boolean
                readonly 'grep': _pt.Optional_Value<string>
                readonly 'max count': _pt.Optional_Value<number>
                readonly 'oneline': boolean
                readonly 'since': _pt.Optional_Value<string>
                readonly 'until': _pt.Optional_Value<string>
            }]
            | readonly ['reflog', {
                readonly 'branch': _pt.Optional_Value<string>
                readonly 'oneline': boolean
            }]
            | readonly ['tag', {
                readonly 'list': _pt.Optional_Value<string>
            }]
        >]
        | readonly ['remote repo', _i_core._T_State_Group<null, 
            | readonly ['fetch dry run', {
                readonly 'all': boolean
                readonly 'remote': _pt.Optional_Value<string>
            }]
            | readonly ['ls remote', {
                readonly 'heads': boolean
                readonly 'remote': _pt.Optional_Value<string>
                readonly 'tags': boolean
            }]
            | readonly ['remote', {
                readonly 'verbose': boolean
            }]
        >]
        | readonly ['stash', _i_core._T_State_Group<null, 
            | readonly ['list', {
                readonly 'oneline': boolean
            }]
            | readonly ['show', {
                readonly 'patch': boolean
                readonly 'stash': _pt.Optional_Value<string>
            }]
        >]
        | readonly ['workspace', _i_core._T_State_Group<null, 
            | readonly ['diff', {
                readonly 'cached': boolean
                readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                readonly 'name only': boolean
                readonly 'stat': boolean
            }]
            | readonly ['show', {
                readonly 'commit': _pt.Optional_Value<string>
                readonly 'name only': boolean
                readonly 'stat': boolean
            }]
            | readonly ['status', {
                readonly 'branch': boolean
                readonly 'porcelain': _pt.Optional_Value<string>
                readonly 'short': boolean
                readonly 'show stash': boolean
            }]
        >]
    >]
>

export type _T_Safety_Level = _i_core._T_State_Group<null, 
    | readonly ['destructive', {
        readonly 'areas affected': _i_core._T_List<null, string>
        readonly 'description': string
        readonly 'warning': string
    }]
    | readonly ['risky', {
        readonly 'areas affected': _i_core._T_List<null, string>
        readonly 'description': string
    }]
    | readonly ['safe', {
        readonly 'description': string
    }]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Command_Result = _T_Command_Result

export type Git_Command = _T_Git_Command

export type Safety_Level = _T_Safety_Level

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Command_Result {
    
    export namespace affected_areas {
        export type L = string
    }
    export type affected_areas = _i_core._T_List<null, string>
    export type command_line = string
    export type requires_force_push = boolean
    export type safety_level = string
}

export namespace _T_Git_Command {
    
    export namespace SG {
        
        export namespace change {
            
            export namespace SG {
                
                export namespace configuration {
                    
                    export namespace SG {
                        
                        export namespace config_set {
                            export type global = boolean
                            export type key = string
                            export type local = boolean
                            export type system = boolean
                            export type value = string
                        }
                        export type config_set = {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                            readonly 'value': string
                        }
                        
                        export namespace config_unset {
                            export type global = boolean
                            export type key = string
                            export type local = boolean
                            export type system = boolean
                        }
                        export type config_unset = {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['config set', {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                            readonly 'value': string
                        }]
                        | readonly ['config unset', {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }]
                }
                export type configuration = _i_core._T_State_Group<null, 
                    | readonly ['config set', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                        readonly 'value': string
                    }]
                    | readonly ['config unset', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >
                
                export namespace index {
                    
                    export namespace SG {
                        
                        export namespace add {
                            export type all = boolean
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            export type patch = boolean
                            export type update = boolean
                        }
                        export type add = {
                            readonly 'all': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'patch': boolean
                            readonly 'update': boolean
                        }
                        
                        export namespace reset_files {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                        }
                        export type reset_files = {
                            readonly 'files': _i_core._T_List<null, string>
                        }
                        
                        export namespace restore_staged {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                        }
                        export type restore_staged = {
                            readonly 'files': _i_core._T_List<null, string>
                        }
                        
                        export namespace rm {
                            export type cached = boolean
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            export type force = boolean
                        }
                        export type rm = {
                            readonly 'cached': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['add', {
                            readonly 'all': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'patch': boolean
                            readonly 'update': boolean
                        }]
                        | readonly ['reset files', {
                            readonly 'files': _i_core._T_List<null, string>
                        }]
                        | readonly ['restore staged', {
                            readonly 'files': _i_core._T_List<null, string>
                        }]
                        | readonly ['rm', {
                            readonly 'cached': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }]
                }
                export type index = _i_core._T_State_Group<null, 
                    | readonly ['add', {
                        readonly 'all': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'patch': boolean
                        readonly 'update': boolean
                    }]
                    | readonly ['reset files', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['restore staged', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['rm', {
                        readonly 'cached': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                >
                
                export namespace local_repo {
                    
                    export namespace SG {
                        
                        export namespace append {
                            
                            export namespace SG {
                                
                                export namespace branch_create {
                                    export type name = string
                                    
                                    export namespace start_point {
                                        export type O = string
                                    }
                                    export type start_point = _pt.Optional_Value<string>
                                }
                                export type branch_create = {
                                    readonly 'name': string
                                    readonly 'start point': _pt.Optional_Value<string>
                                }
                                
                                export namespace cherry_pick {
                                    
                                    export namespace commits {
                                        export type L = string
                                    }
                                    export type commits = _i_core._T_List<null, string>
                                    
                                    export namespace mainline {
                                        export type O = number
                                    }
                                    export type mainline = _pt.Optional_Value<number>
                                    export type no_commit = boolean
                                }
                                export type cherry_pick = {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }
                                
                                export namespace commit {
                                    export type all = boolean
                                    export type amend = boolean
                                    export type message = string
                                    export type no_verify = boolean
                                    export type signoff = boolean
                                }
                                export type commit = {
                                    readonly 'all': boolean
                                    readonly 'amend': boolean
                                    readonly 'message': string
                                    readonly 'no verify': boolean
                                    readonly 'signoff': boolean
                                }
                                
                                export namespace merge {
                                    export type branch = string
                                    export type ff_only = boolean
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type no_commit = boolean
                                    export type no_ff = boolean
                                }
                                export type merge = {
                                    readonly 'branch': string
                                    readonly 'ff only': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no commit': boolean
                                    readonly 'no ff': boolean
                                }
                                
                                export namespace pull_rebase_private {
                                    
                                    export namespace branch {
                                        export type O = string
                                    }
                                    export type branch = _pt.Optional_Value<string>
                                    
                                    export namespace remote {
                                        export type O = string
                                    }
                                    export type remote = _pt.Optional_Value<string>
                                }
                                export type pull_rebase_private = {
                                    readonly 'branch': _pt.Optional_Value<string>
                                    readonly 'remote': _pt.Optional_Value<string>
                                }
                                
                                export namespace revert {
                                    
                                    export namespace commits {
                                        export type L = string
                                    }
                                    export type commits = _i_core._T_List<null, string>
                                    
                                    export namespace mainline {
                                        export type O = number
                                    }
                                    export type mainline = _pt.Optional_Value<number>
                                    export type no_commit = boolean
                                }
                                export type revert = {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }
                                
                                export namespace tag_create {
                                    export type annotated = boolean
                                    
                                    export namespace commit {
                                        export type O = string
                                    }
                                    export type commit = _pt.Optional_Value<string>
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type name = string
                                }
                                export type tag_create = {
                                    readonly 'annotated': boolean
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }
                            }
                            export type SG = 
                                | readonly ['branch create', {
                                    readonly 'name': string
                                    readonly 'start point': _pt.Optional_Value<string>
                                }]
                                | readonly ['cherry pick', {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }]
                                | readonly ['commit', {
                                    readonly 'all': boolean
                                    readonly 'amend': boolean
                                    readonly 'message': string
                                    readonly 'no verify': boolean
                                    readonly 'signoff': boolean
                                }]
                                | readonly ['merge', {
                                    readonly 'branch': string
                                    readonly 'ff only': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no commit': boolean
                                    readonly 'no ff': boolean
                                }]
                                | readonly ['pull rebase private', {
                                    readonly 'branch': _pt.Optional_Value<string>
                                    readonly 'remote': _pt.Optional_Value<string>
                                }]
                                | readonly ['revert', {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }]
                                | readonly ['tag create', {
                                    readonly 'annotated': boolean
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }]
                        }
                        export type append = _i_core._T_State_Group<null, 
                            | readonly ['branch create', {
                                readonly 'name': string
                                readonly 'start point': _pt.Optional_Value<string>
                            }]
                            | readonly ['cherry pick', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['commit', {
                                readonly 'all': boolean
                                readonly 'amend': boolean
                                readonly 'message': string
                                readonly 'no verify': boolean
                                readonly 'signoff': boolean
                            }]
                            | readonly ['merge', {
                                readonly 'branch': string
                                readonly 'ff only': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no commit': boolean
                                readonly 'no ff': boolean
                            }]
                            | readonly ['pull rebase private', {
                                readonly 'branch': _pt.Optional_Value<string>
                                readonly 'remote': _pt.Optional_Value<string>
                            }]
                            | readonly ['revert', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['tag create', {
                                readonly 'annotated': boolean
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >
                        
                        export namespace destroy {
                            
                            export namespace SG {
                                
                                export namespace branch_delete {
                                    export type force = boolean
                                    export type name = string
                                }
                                export type branch_delete = {
                                    readonly 'force': boolean
                                    readonly 'name': string
                                }
                                
                                export namespace commit_amend {
                                    export type all = boolean
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type no_edit = boolean
                                }
                                export type commit_amend = {
                                    readonly 'all': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no edit': boolean
                                }
                                
                                export namespace filter_repo {
                                    export type force = boolean
                                    export type invert_paths = boolean
                                    
                                    export namespace path {
                                        export type O = string
                                    }
                                    export type path = _pt.Optional_Value<string>
                                }
                                export type filter_repo = {
                                    readonly 'force': boolean
                                    readonly 'invert paths': boolean
                                    readonly 'path': _pt.Optional_Value<string>
                                }
                                
                                export namespace gc {
                                    export type aggressive = boolean
                                    
                                    export namespace prune {
                                        export type O = string
                                    }
                                    export type prune = _pt.Optional_Value<string>
                                }
                                export type gc = {
                                    readonly 'aggressive': boolean
                                    readonly 'prune': _pt.Optional_Value<string>
                                }
                                
                                export namespace rebase {
                                    export type interactive = boolean
                                    export type onto = string
                                    export type preserve_merges = boolean
                                    
                                    export namespace strategy {
                                        export type O = string
                                    }
                                    export type strategy = _pt.Optional_Value<string>
                                }
                                export type rebase = {
                                    readonly 'interactive': boolean
                                    readonly 'onto': string
                                    readonly 'preserve merges': boolean
                                    readonly 'strategy': _pt.Optional_Value<string>
                                }
                                
                                export namespace reset {
                                    
                                    export namespace mode {
                                        
                                        export namespace SG {
                                            
                                            export namespace hard {
                                            }
                                            export type hard = null
                                            
                                            export namespace mixed {
                                            }
                                            export type mixed = null
                                            
                                            export namespace soft {
                                            }
                                            export type soft = null
                                        }
                                        export type SG = 
                                            | readonly ['hard', null]
                                            | readonly ['mixed', null]
                                            | readonly ['soft', null]
                                    }
                                    export type mode = _i_core._T_State_Group<null, 
                                        | readonly ['hard', null]
                                        | readonly ['mixed', null]
                                        | readonly ['soft', null]
                                    >
                                    export type target = string
                                }
                                export type reset = {
                                    readonly 'mode': _i_core._T_State_Group<null, 
                                        | readonly ['hard', null]
                                        | readonly ['mixed', null]
                                        | readonly ['soft', null]
                                    >
                                    readonly 'target': string
                                }
                                
                                export namespace tag_delete {
                                    export type name = string
                                }
                                export type tag_delete = {
                                    readonly 'name': string
                                }
                                
                                export namespace tag_force {
                                    
                                    export namespace commit {
                                        export type O = string
                                    }
                                    export type commit = _pt.Optional_Value<string>
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type name = string
                                }
                                export type tag_force = {
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }
                            }
                            export type SG = 
                                | readonly ['branch delete', {
                                    readonly 'force': boolean
                                    readonly 'name': string
                                }]
                                | readonly ['commit amend', {
                                    readonly 'all': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no edit': boolean
                                }]
                                | readonly ['filter repo', {
                                    readonly 'force': boolean
                                    readonly 'invert paths': boolean
                                    readonly 'path': _pt.Optional_Value<string>
                                }]
                                | readonly ['gc', {
                                    readonly 'aggressive': boolean
                                    readonly 'prune': _pt.Optional_Value<string>
                                }]
                                | readonly ['rebase', {
                                    readonly 'interactive': boolean
                                    readonly 'onto': string
                                    readonly 'preserve merges': boolean
                                    readonly 'strategy': _pt.Optional_Value<string>
                                }]
                                | readonly ['reset', {
                                    readonly 'mode': _i_core._T_State_Group<null, 
                                        | readonly ['hard', null]
                                        | readonly ['mixed', null]
                                        | readonly ['soft', null]
                                    >
                                    readonly 'target': string
                                }]
                                | readonly ['tag delete', {
                                    readonly 'name': string
                                }]
                                | readonly ['tag force', {
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }]
                        }
                        export type destroy = _i_core._T_State_Group<null, 
                            | readonly ['branch delete', {
                                readonly 'force': boolean
                                readonly 'name': string
                            }]
                            | readonly ['commit amend', {
                                readonly 'all': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no edit': boolean
                            }]
                            | readonly ['filter repo', {
                                readonly 'force': boolean
                                readonly 'invert paths': boolean
                                readonly 'path': _pt.Optional_Value<string>
                            }]
                            | readonly ['gc', {
                                readonly 'aggressive': boolean
                                readonly 'prune': _pt.Optional_Value<string>
                            }]
                            | readonly ['rebase', {
                                readonly 'interactive': boolean
                                readonly 'onto': string
                                readonly 'preserve merges': boolean
                                readonly 'strategy': _pt.Optional_Value<string>
                            }]
                            | readonly ['reset', {
                                readonly 'mode': _i_core._T_State_Group<null, 
                                    | readonly ['hard', null]
                                    | readonly ['mixed', null]
                                    | readonly ['soft', null]
                                >
                                readonly 'target': string
                            }]
                            | readonly ['tag delete', {
                                readonly 'name': string
                            }]
                            | readonly ['tag force', {
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >
                    }
                    export type SG = 
                        | readonly ['append', _i_core._T_State_Group<null, 
                            | readonly ['branch create', {
                                readonly 'name': string
                                readonly 'start point': _pt.Optional_Value<string>
                            }]
                            | readonly ['cherry pick', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['commit', {
                                readonly 'all': boolean
                                readonly 'amend': boolean
                                readonly 'message': string
                                readonly 'no verify': boolean
                                readonly 'signoff': boolean
                            }]
                            | readonly ['merge', {
                                readonly 'branch': string
                                readonly 'ff only': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no commit': boolean
                                readonly 'no ff': boolean
                            }]
                            | readonly ['pull rebase private', {
                                readonly 'branch': _pt.Optional_Value<string>
                                readonly 'remote': _pt.Optional_Value<string>
                            }]
                            | readonly ['revert', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['tag create', {
                                readonly 'annotated': boolean
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >]
                        | readonly ['destroy', _i_core._T_State_Group<null, 
                            | readonly ['branch delete', {
                                readonly 'force': boolean
                                readonly 'name': string
                            }]
                            | readonly ['commit amend', {
                                readonly 'all': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no edit': boolean
                            }]
                            | readonly ['filter repo', {
                                readonly 'force': boolean
                                readonly 'invert paths': boolean
                                readonly 'path': _pt.Optional_Value<string>
                            }]
                            | readonly ['gc', {
                                readonly 'aggressive': boolean
                                readonly 'prune': _pt.Optional_Value<string>
                            }]
                            | readonly ['rebase', {
                                readonly 'interactive': boolean
                                readonly 'onto': string
                                readonly 'preserve merges': boolean
                                readonly 'strategy': _pt.Optional_Value<string>
                            }]
                            | readonly ['reset', {
                                readonly 'mode': _i_core._T_State_Group<null, 
                                    | readonly ['hard', null]
                                    | readonly ['mixed', null]
                                    | readonly ['soft', null]
                                >
                                readonly 'target': string
                            }]
                            | readonly ['tag delete', {
                                readonly 'name': string
                            }]
                            | readonly ['tag force', {
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >]
                }
                export type local_repo = _i_core._T_State_Group<null, 
                    | readonly ['append', _i_core._T_State_Group<null, 
                        | readonly ['branch create', {
                            readonly 'name': string
                            readonly 'start point': _pt.Optional_Value<string>
                        }]
                        | readonly ['cherry pick', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['commit', {
                            readonly 'all': boolean
                            readonly 'amend': boolean
                            readonly 'message': string
                            readonly 'no verify': boolean
                            readonly 'signoff': boolean
                        }]
                        | readonly ['merge', {
                            readonly 'branch': string
                            readonly 'ff only': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no commit': boolean
                            readonly 'no ff': boolean
                        }]
                        | readonly ['pull rebase private', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['revert', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['tag create', {
                            readonly 'annotated': boolean
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                    | readonly ['destroy', _i_core._T_State_Group<null, 
                        | readonly ['branch delete', {
                            readonly 'force': boolean
                            readonly 'name': string
                        }]
                        | readonly ['commit amend', {
                            readonly 'all': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no edit': boolean
                        }]
                        | readonly ['filter repo', {
                            readonly 'force': boolean
                            readonly 'invert paths': boolean
                            readonly 'path': _pt.Optional_Value<string>
                        }]
                        | readonly ['gc', {
                            readonly 'aggressive': boolean
                            readonly 'prune': _pt.Optional_Value<string>
                        }]
                        | readonly ['rebase', {
                            readonly 'interactive': boolean
                            readonly 'onto': string
                            readonly 'preserve merges': boolean
                            readonly 'strategy': _pt.Optional_Value<string>
                        }]
                        | readonly ['reset', {
                            readonly 'mode': _i_core._T_State_Group<null, 
                                | readonly ['hard', null]
                                | readonly ['mixed', null]
                                | readonly ['soft', null]
                            >
                            readonly 'target': string
                        }]
                        | readonly ['tag delete', {
                            readonly 'name': string
                        }]
                        | readonly ['tag force', {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                >
                
                export namespace remote_repo {
                    
                    export namespace SG {
                        
                        export namespace clone {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            
                            export namespace depth {
                                export type O = number
                            }
                            export type depth = _pt.Optional_Value<number>
                            
                            export namespace directory {
                                export type O = string
                            }
                            export type directory = _pt.Optional_Value<string>
                            export type recursive = boolean
                            export type url = string
                        }
                        export type clone = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'depth': _pt.Optional_Value<number>
                            readonly 'directory': _pt.Optional_Value<string>
                            readonly 'recursive': boolean
                            readonly 'url': string
                        }
                        
                        export namespace fetch {
                            export type all = boolean
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            export type prune = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                        }
                        export type fetch = {
                            readonly 'all': boolean
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'prune': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }
                        
                        export namespace pull {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            export type ff_only = boolean
                            export type no_rebase = boolean
                            export type rebase = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                        }
                        export type pull = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'ff only': boolean
                            readonly 'no rebase': boolean
                            readonly 'rebase': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }
                        
                        export namespace push {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            
                            export namespace _delete {
                                export type O = string
                            }
                            export type _delete = _pt.Optional_Value<string>
                            export type force = boolean
                            export type force_with_lease = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                            export type set_upstream = boolean
                            export type tags = boolean
                        }
                        export type push = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'delete': _pt.Optional_Value<string>
                            readonly 'force': boolean
                            readonly 'force with lease': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'set upstream': boolean
                            readonly 'tags': boolean
                        }
                        
                        export namespace remote_add {
                            export type name = string
                            export type url = string
                        }
                        export type remote_add = {
                            readonly 'name': string
                            readonly 'url': string
                        }
                        
                        export namespace remote_remove {
                            export type name = string
                        }
                        export type remote_remove = {
                            readonly 'name': string
                        }
                    }
                    export type SG = 
                        | readonly ['clone', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'depth': _pt.Optional_Value<number>
                            readonly 'directory': _pt.Optional_Value<string>
                            readonly 'recursive': boolean
                            readonly 'url': string
                        }]
                        | readonly ['fetch', {
                            readonly 'all': boolean
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'prune': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['pull', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'ff only': boolean
                            readonly 'no rebase': boolean
                            readonly 'rebase': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['push', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'delete': _pt.Optional_Value<string>
                            readonly 'force': boolean
                            readonly 'force with lease': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'set upstream': boolean
                            readonly 'tags': boolean
                        }]
                        | readonly ['remote add', {
                            readonly 'name': string
                            readonly 'url': string
                        }]
                        | readonly ['remote remove', {
                            readonly 'name': string
                        }]
                }
                export type remote_repo = _i_core._T_State_Group<null, 
                    | readonly ['clone', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'depth': _pt.Optional_Value<number>
                        readonly 'directory': _pt.Optional_Value<string>
                        readonly 'recursive': boolean
                        readonly 'url': string
                    }]
                    | readonly ['fetch', {
                        readonly 'all': boolean
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'prune': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['pull', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'ff only': boolean
                        readonly 'no rebase': boolean
                        readonly 'rebase': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'delete': _pt.Optional_Value<string>
                        readonly 'force': boolean
                        readonly 'force with lease': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'set upstream': boolean
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote add', {
                        readonly 'name': string
                        readonly 'url': string
                    }]
                    | readonly ['remote remove', {
                        readonly 'name': string
                    }]
                >
                
                export namespace stash {
                    
                    export namespace SG {
                        
                        export namespace apply {
                            export type index = boolean
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type apply = {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                        
                        export namespace clear {
                        }
                        export type clear = null
                        
                        export namespace drop {
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type drop = {
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                        
                        export namespace pop {
                            export type index = boolean
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type pop = {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                        
                        export namespace push {
                            
                            export namespace files {
                                
                                export namespace O {
                                    export type L = string
                                }
                                export type O = _i_core._T_List<null, string>
                            }
                            export type files = _pt.Optional_Value<_i_core._T_List<null, string>>
                            export type include_untracked = boolean
                            export type keep_index = boolean
                            
                            export namespace message {
                                export type O = string
                            }
                            export type message = _pt.Optional_Value<string>
                        }
                        export type push = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'include untracked': boolean
                            readonly 'keep index': boolean
                            readonly 'message': _pt.Optional_Value<string>
                        }
                    }
                    export type SG = 
                        | readonly ['apply', {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                        | readonly ['clear', null]
                        | readonly ['drop', {
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                        | readonly ['pop', {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                        | readonly ['push', {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'include untracked': boolean
                            readonly 'keep index': boolean
                            readonly 'message': _pt.Optional_Value<string>
                        }]
                }
                export type stash = _i_core._T_State_Group<null, 
                    | readonly ['apply', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['clear', null]
                    | readonly ['drop', {
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['pop', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'include untracked': boolean
                        readonly 'keep index': boolean
                        readonly 'message': _pt.Optional_Value<string>
                    }]
                >
                
                export namespace workspace {
                    
                    export namespace SG {
                        
                        export namespace checkout_file {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            export type force = boolean
                        }
                        export type checkout_file = {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }
                        
                        export namespace clean {
                            export type directories = boolean
                            export type dry_run = boolean
                            export type force = boolean
                            export type ignored = boolean
                        }
                        export type clean = {
                            readonly 'directories': boolean
                            readonly 'dry run': boolean
                            readonly 'force': boolean
                            readonly 'ignored': boolean
                        }
                        
                        export namespace restore {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            
                            export namespace source {
                                export type O = string
                            }
                            export type source = _pt.Optional_Value<string>
                            export type worktree = boolean
                        }
                        export type restore = {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'source': _pt.Optional_Value<string>
                            readonly 'worktree': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['checkout file', {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }]
                        | readonly ['clean', {
                            readonly 'directories': boolean
                            readonly 'dry run': boolean
                            readonly 'force': boolean
                            readonly 'ignored': boolean
                        }]
                        | readonly ['restore', {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'source': _pt.Optional_Value<string>
                            readonly 'worktree': boolean
                        }]
                }
                export type workspace = _i_core._T_State_Group<null, 
                    | readonly ['checkout file', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                    | readonly ['clean', {
                        readonly 'directories': boolean
                        readonly 'dry run': boolean
                        readonly 'force': boolean
                        readonly 'ignored': boolean
                    }]
                    | readonly ['restore', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'source': _pt.Optional_Value<string>
                        readonly 'worktree': boolean
                    }]
                >
            }
            export type SG = 
                | readonly ['configuration', _i_core._T_State_Group<null, 
                    | readonly ['config set', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                        readonly 'value': string
                    }]
                    | readonly ['config unset', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >]
                | readonly ['index', _i_core._T_State_Group<null, 
                    | readonly ['add', {
                        readonly 'all': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'patch': boolean
                        readonly 'update': boolean
                    }]
                    | readonly ['reset files', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['restore staged', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['rm', {
                        readonly 'cached': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                >]
                | readonly ['local repo', _i_core._T_State_Group<null, 
                    | readonly ['append', _i_core._T_State_Group<null, 
                        | readonly ['branch create', {
                            readonly 'name': string
                            readonly 'start point': _pt.Optional_Value<string>
                        }]
                        | readonly ['cherry pick', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['commit', {
                            readonly 'all': boolean
                            readonly 'amend': boolean
                            readonly 'message': string
                            readonly 'no verify': boolean
                            readonly 'signoff': boolean
                        }]
                        | readonly ['merge', {
                            readonly 'branch': string
                            readonly 'ff only': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no commit': boolean
                            readonly 'no ff': boolean
                        }]
                        | readonly ['pull rebase private', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['revert', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['tag create', {
                            readonly 'annotated': boolean
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                    | readonly ['destroy', _i_core._T_State_Group<null, 
                        | readonly ['branch delete', {
                            readonly 'force': boolean
                            readonly 'name': string
                        }]
                        | readonly ['commit amend', {
                            readonly 'all': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no edit': boolean
                        }]
                        | readonly ['filter repo', {
                            readonly 'force': boolean
                            readonly 'invert paths': boolean
                            readonly 'path': _pt.Optional_Value<string>
                        }]
                        | readonly ['gc', {
                            readonly 'aggressive': boolean
                            readonly 'prune': _pt.Optional_Value<string>
                        }]
                        | readonly ['rebase', {
                            readonly 'interactive': boolean
                            readonly 'onto': string
                            readonly 'preserve merges': boolean
                            readonly 'strategy': _pt.Optional_Value<string>
                        }]
                        | readonly ['reset', {
                            readonly 'mode': _i_core._T_State_Group<null, 
                                | readonly ['hard', null]
                                | readonly ['mixed', null]
                                | readonly ['soft', null]
                            >
                            readonly 'target': string
                        }]
                        | readonly ['tag delete', {
                            readonly 'name': string
                        }]
                        | readonly ['tag force', {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                >]
                | readonly ['remote repo', _i_core._T_State_Group<null, 
                    | readonly ['clone', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'depth': _pt.Optional_Value<number>
                        readonly 'directory': _pt.Optional_Value<string>
                        readonly 'recursive': boolean
                        readonly 'url': string
                    }]
                    | readonly ['fetch', {
                        readonly 'all': boolean
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'prune': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['pull', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'ff only': boolean
                        readonly 'no rebase': boolean
                        readonly 'rebase': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'delete': _pt.Optional_Value<string>
                        readonly 'force': boolean
                        readonly 'force with lease': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'set upstream': boolean
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote add', {
                        readonly 'name': string
                        readonly 'url': string
                    }]
                    | readonly ['remote remove', {
                        readonly 'name': string
                    }]
                >]
                | readonly ['stash', _i_core._T_State_Group<null, 
                    | readonly ['apply', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['clear', null]
                    | readonly ['drop', {
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['pop', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'include untracked': boolean
                        readonly 'keep index': boolean
                        readonly 'message': _pt.Optional_Value<string>
                    }]
                >]
                | readonly ['workspace', _i_core._T_State_Group<null, 
                    | readonly ['checkout file', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                    | readonly ['clean', {
                        readonly 'directories': boolean
                        readonly 'dry run': boolean
                        readonly 'force': boolean
                        readonly 'ignored': boolean
                    }]
                    | readonly ['restore', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'source': _pt.Optional_Value<string>
                        readonly 'worktree': boolean
                    }]
                >]
        }
        export type change = _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config set', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                    readonly 'value': string
                }]
                | readonly ['config unset', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['add', {
                    readonly 'all': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'patch': boolean
                    readonly 'update': boolean
                }]
                | readonly ['reset files', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['restore staged', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['rm', {
                    readonly 'cached': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['append', _i_core._T_State_Group<null, 
                    | readonly ['branch create', {
                        readonly 'name': string
                        readonly 'start point': _pt.Optional_Value<string>
                    }]
                    | readonly ['cherry pick', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['commit', {
                        readonly 'all': boolean
                        readonly 'amend': boolean
                        readonly 'message': string
                        readonly 'no verify': boolean
                        readonly 'signoff': boolean
                    }]
                    | readonly ['merge', {
                        readonly 'branch': string
                        readonly 'ff only': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no commit': boolean
                        readonly 'no ff': boolean
                    }]
                    | readonly ['pull rebase private', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['revert', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['tag create', {
                        readonly 'annotated': boolean
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
                | readonly ['destroy', _i_core._T_State_Group<null, 
                    | readonly ['branch delete', {
                        readonly 'force': boolean
                        readonly 'name': string
                    }]
                    | readonly ['commit amend', {
                        readonly 'all': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no edit': boolean
                    }]
                    | readonly ['filter repo', {
                        readonly 'force': boolean
                        readonly 'invert paths': boolean
                        readonly 'path': _pt.Optional_Value<string>
                    }]
                    | readonly ['gc', {
                        readonly 'aggressive': boolean
                        readonly 'prune': _pt.Optional_Value<string>
                    }]
                    | readonly ['rebase', {
                        readonly 'interactive': boolean
                        readonly 'onto': string
                        readonly 'preserve merges': boolean
                        readonly 'strategy': _pt.Optional_Value<string>
                    }]
                    | readonly ['reset', {
                        readonly 'mode': _i_core._T_State_Group<null, 
                            | readonly ['hard', null]
                            | readonly ['mixed', null]
                            | readonly ['soft', null]
                        >
                        readonly 'target': string
                    }]
                    | readonly ['tag delete', {
                        readonly 'name': string
                    }]
                    | readonly ['tag force', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['clone', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'depth': _pt.Optional_Value<number>
                    readonly 'directory': _pt.Optional_Value<string>
                    readonly 'recursive': boolean
                    readonly 'url': string
                }]
                | readonly ['fetch', {
                    readonly 'all': boolean
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'prune': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['pull', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'ff only': boolean
                    readonly 'no rebase': boolean
                    readonly 'rebase': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'delete': _pt.Optional_Value<string>
                    readonly 'force': boolean
                    readonly 'force with lease': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'set upstream': boolean
                    readonly 'tags': boolean
                }]
                | readonly ['remote add', {
                    readonly 'name': string
                    readonly 'url': string
                }]
                | readonly ['remote remove', {
                    readonly 'name': string
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['apply', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['clear', null]
                | readonly ['drop', {
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['pop', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'include untracked': boolean
                    readonly 'keep index': boolean
                    readonly 'message': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['checkout file', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
                | readonly ['clean', {
                    readonly 'directories': boolean
                    readonly 'dry run': boolean
                    readonly 'force': boolean
                    readonly 'ignored': boolean
                }]
                | readonly ['restore', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'source': _pt.Optional_Value<string>
                    readonly 'worktree': boolean
                }]
            >]
        >
        
        export namespace view {
            
            export namespace SG {
                
                export namespace configuration {
                    
                    export namespace SG {
                        
                        export namespace config {
                            export type global = boolean
                            
                            export namespace key {
                                export type O = string
                            }
                            export type key = _pt.Optional_Value<string>
                            export type list = boolean
                            export type local = boolean
                            export type system = boolean
                        }
                        export type config = {
                            readonly 'global': boolean
                            readonly 'key': _pt.Optional_Value<string>
                            readonly 'list': boolean
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['config', {
                            readonly 'global': boolean
                            readonly 'key': _pt.Optional_Value<string>
                            readonly 'list': boolean
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }]
                }
                export type configuration = _i_core._T_State_Group<null, 
                    | readonly ['config', {
                        readonly 'global': boolean
                        readonly 'key': _pt.Optional_Value<string>
                        readonly 'list': boolean
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >
                
                export namespace index {
                    
                    export namespace SG {
                        
                        export namespace diff_cached {
                            
                            export namespace files {
                                
                                export namespace O {
                                    export type L = string
                                }
                                export type O = _i_core._T_List<null, string>
                            }
                            export type files = _pt.Optional_Value<_i_core._T_List<null, string>>
                            export type name_only = boolean
                            export type stat = boolean
                        }
                        export type diff_cached = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }
                        
                        export namespace status {
                            
                            export namespace porcelain {
                                export type O = string
                            }
                            export type porcelain = _pt.Optional_Value<string>
                            export type short = boolean
                        }
                        export type status = {
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['diff cached', {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }]
                        | readonly ['status', {
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                        }]
                }
                export type index = _i_core._T_State_Group<null, 
                    | readonly ['diff cached', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                    }]
                >
                
                export namespace local_repo {
                    
                    export namespace SG {
                        
                        export namespace branch {
                            export type all = boolean
                            export type remote = boolean
                            export type verbose = boolean
                        }
                        export type branch = {
                            readonly 'all': boolean
                            readonly 'remote': boolean
                            readonly 'verbose': boolean
                        }
                        
                        export namespace log {
                            export type all = boolean
                            
                            export namespace author {
                                export type O = string
                            }
                            export type author = _pt.Optional_Value<string>
                            export type graph = boolean
                            
                            export namespace grep {
                                export type O = string
                            }
                            export type grep = _pt.Optional_Value<string>
                            
                            export namespace max_count {
                                export type O = number
                            }
                            export type max_count = _pt.Optional_Value<number>
                            export type oneline = boolean
                            
                            export namespace since {
                                export type O = string
                            }
                            export type since = _pt.Optional_Value<string>
                            
                            export namespace until {
                                export type O = string
                            }
                            export type until = _pt.Optional_Value<string>
                        }
                        export type log = {
                            readonly 'all': boolean
                            readonly 'author': _pt.Optional_Value<string>
                            readonly 'graph': boolean
                            readonly 'grep': _pt.Optional_Value<string>
                            readonly 'max count': _pt.Optional_Value<number>
                            readonly 'oneline': boolean
                            readonly 'since': _pt.Optional_Value<string>
                            readonly 'until': _pt.Optional_Value<string>
                        }
                        
                        export namespace reflog {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            export type oneline = boolean
                        }
                        export type reflog = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'oneline': boolean
                        }
                        
                        export namespace tag {
                            
                            export namespace list {
                                export type O = string
                            }
                            export type list = _pt.Optional_Value<string>
                        }
                        export type tag = {
                            readonly 'list': _pt.Optional_Value<string>
                        }
                    }
                    export type SG = 
                        | readonly ['branch', {
                            readonly 'all': boolean
                            readonly 'remote': boolean
                            readonly 'verbose': boolean
                        }]
                        | readonly ['log', {
                            readonly 'all': boolean
                            readonly 'author': _pt.Optional_Value<string>
                            readonly 'graph': boolean
                            readonly 'grep': _pt.Optional_Value<string>
                            readonly 'max count': _pt.Optional_Value<number>
                            readonly 'oneline': boolean
                            readonly 'since': _pt.Optional_Value<string>
                            readonly 'until': _pt.Optional_Value<string>
                        }]
                        | readonly ['reflog', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'oneline': boolean
                        }]
                        | readonly ['tag', {
                            readonly 'list': _pt.Optional_Value<string>
                        }]
                }
                export type local_repo = _i_core._T_State_Group<null, 
                    | readonly ['branch', {
                        readonly 'all': boolean
                        readonly 'remote': boolean
                        readonly 'verbose': boolean
                    }]
                    | readonly ['log', {
                        readonly 'all': boolean
                        readonly 'author': _pt.Optional_Value<string>
                        readonly 'graph': boolean
                        readonly 'grep': _pt.Optional_Value<string>
                        readonly 'max count': _pt.Optional_Value<number>
                        readonly 'oneline': boolean
                        readonly 'since': _pt.Optional_Value<string>
                        readonly 'until': _pt.Optional_Value<string>
                    }]
                    | readonly ['reflog', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'oneline': boolean
                    }]
                    | readonly ['tag', {
                        readonly 'list': _pt.Optional_Value<string>
                    }]
                >
                
                export namespace remote_repo {
                    
                    export namespace SG {
                        
                        export namespace fetch_dry_run {
                            export type all = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                        }
                        export type fetch_dry_run = {
                            readonly 'all': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }
                        
                        export namespace ls_remote {
                            export type heads = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                            export type tags = boolean
                        }
                        export type ls_remote = {
                            readonly 'heads': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'tags': boolean
                        }
                        
                        export namespace remote {
                            export type verbose = boolean
                        }
                        export type remote = {
                            readonly 'verbose': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['fetch dry run', {
                            readonly 'all': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['ls remote', {
                            readonly 'heads': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'tags': boolean
                        }]
                        | readonly ['remote', {
                            readonly 'verbose': boolean
                        }]
                }
                export type remote_repo = _i_core._T_State_Group<null, 
                    | readonly ['fetch dry run', {
                        readonly 'all': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['ls remote', {
                        readonly 'heads': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote', {
                        readonly 'verbose': boolean
                    }]
                >
                
                export namespace stash {
                    
                    export namespace SG {
                        
                        export namespace list {
                            export type oneline = boolean
                        }
                        export type list = {
                            readonly 'oneline': boolean
                        }
                        
                        export namespace show {
                            export type patch = boolean
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type show = {
                            readonly 'patch': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                    }
                    export type SG = 
                        | readonly ['list', {
                            readonly 'oneline': boolean
                        }]
                        | readonly ['show', {
                            readonly 'patch': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                }
                export type stash = _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'oneline': boolean
                    }]
                    | readonly ['show', {
                        readonly 'patch': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                >
                
                export namespace workspace {
                    
                    export namespace SG {
                        
                        export namespace diff {
                            export type cached = boolean
                            
                            export namespace files {
                                
                                export namespace O {
                                    export type L = string
                                }
                                export type O = _i_core._T_List<null, string>
                            }
                            export type files = _pt.Optional_Value<_i_core._T_List<null, string>>
                            export type name_only = boolean
                            export type stat = boolean
                        }
                        export type diff = {
                            readonly 'cached': boolean
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }
                        
                        export namespace show {
                            
                            export namespace commit {
                                export type O = string
                            }
                            export type commit = _pt.Optional_Value<string>
                            export type name_only = boolean
                            export type stat = boolean
                        }
                        export type show = {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }
                        
                        export namespace status {
                            export type branch = boolean
                            
                            export namespace porcelain {
                                export type O = string
                            }
                            export type porcelain = _pt.Optional_Value<string>
                            export type short = boolean
                            export type show_stash = boolean
                        }
                        export type status = {
                            readonly 'branch': boolean
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                            readonly 'show stash': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['diff', {
                            readonly 'cached': boolean
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }]
                        | readonly ['show', {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }]
                        | readonly ['status', {
                            readonly 'branch': boolean
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                            readonly 'show stash': boolean
                        }]
                }
                export type workspace = _i_core._T_State_Group<null, 
                    | readonly ['diff', {
                        readonly 'cached': boolean
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['show', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'branch': boolean
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                        readonly 'show stash': boolean
                    }]
                >
            }
            export type SG = 
                | readonly ['configuration', _i_core._T_State_Group<null, 
                    | readonly ['config', {
                        readonly 'global': boolean
                        readonly 'key': _pt.Optional_Value<string>
                        readonly 'list': boolean
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >]
                | readonly ['index', _i_core._T_State_Group<null, 
                    | readonly ['diff cached', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                    }]
                >]
                | readonly ['local repo', _i_core._T_State_Group<null, 
                    | readonly ['branch', {
                        readonly 'all': boolean
                        readonly 'remote': boolean
                        readonly 'verbose': boolean
                    }]
                    | readonly ['log', {
                        readonly 'all': boolean
                        readonly 'author': _pt.Optional_Value<string>
                        readonly 'graph': boolean
                        readonly 'grep': _pt.Optional_Value<string>
                        readonly 'max count': _pt.Optional_Value<number>
                        readonly 'oneline': boolean
                        readonly 'since': _pt.Optional_Value<string>
                        readonly 'until': _pt.Optional_Value<string>
                    }]
                    | readonly ['reflog', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'oneline': boolean
                    }]
                    | readonly ['tag', {
                        readonly 'list': _pt.Optional_Value<string>
                    }]
                >]
                | readonly ['remote repo', _i_core._T_State_Group<null, 
                    | readonly ['fetch dry run', {
                        readonly 'all': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['ls remote', {
                        readonly 'heads': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote', {
                        readonly 'verbose': boolean
                    }]
                >]
                | readonly ['stash', _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'oneline': boolean
                    }]
                    | readonly ['show', {
                        readonly 'patch': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                >]
                | readonly ['workspace', _i_core._T_State_Group<null, 
                    | readonly ['diff', {
                        readonly 'cached': boolean
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['show', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'branch': boolean
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                        readonly 'show stash': boolean
                    }]
                >]
        }
        export type view = _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config', {
                    readonly 'global': boolean
                    readonly 'key': _pt.Optional_Value<string>
                    readonly 'list': boolean
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['diff cached', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['branch', {
                    readonly 'all': boolean
                    readonly 'remote': boolean
                    readonly 'verbose': boolean
                }]
                | readonly ['log', {
                    readonly 'all': boolean
                    readonly 'author': _pt.Optional_Value<string>
                    readonly 'graph': boolean
                    readonly 'grep': _pt.Optional_Value<string>
                    readonly 'max count': _pt.Optional_Value<number>
                    readonly 'oneline': boolean
                    readonly 'since': _pt.Optional_Value<string>
                    readonly 'until': _pt.Optional_Value<string>
                }]
                | readonly ['reflog', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'oneline': boolean
                }]
                | readonly ['tag', {
                    readonly 'list': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['fetch dry run', {
                    readonly 'all': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['ls remote', {
                    readonly 'heads': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'tags': boolean
                }]
                | readonly ['remote', {
                    readonly 'verbose': boolean
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly 'oneline': boolean
                }]
                | readonly ['show', {
                    readonly 'patch': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['diff', {
                    readonly 'cached': boolean
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['show', {
                    readonly 'commit': _pt.Optional_Value<string>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'branch': boolean
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                    readonly 'show stash': boolean
                }]
            >]
        >
    }
    export type SG = 
        | readonly ['change', _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config set', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                    readonly 'value': string
                }]
                | readonly ['config unset', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['add', {
                    readonly 'all': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'patch': boolean
                    readonly 'update': boolean
                }]
                | readonly ['reset files', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['restore staged', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['rm', {
                    readonly 'cached': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['append', _i_core._T_State_Group<null, 
                    | readonly ['branch create', {
                        readonly 'name': string
                        readonly 'start point': _pt.Optional_Value<string>
                    }]
                    | readonly ['cherry pick', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['commit', {
                        readonly 'all': boolean
                        readonly 'amend': boolean
                        readonly 'message': string
                        readonly 'no verify': boolean
                        readonly 'signoff': boolean
                    }]
                    | readonly ['merge', {
                        readonly 'branch': string
                        readonly 'ff only': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no commit': boolean
                        readonly 'no ff': boolean
                    }]
                    | readonly ['pull rebase private', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['revert', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['tag create', {
                        readonly 'annotated': boolean
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
                | readonly ['destroy', _i_core._T_State_Group<null, 
                    | readonly ['branch delete', {
                        readonly 'force': boolean
                        readonly 'name': string
                    }]
                    | readonly ['commit amend', {
                        readonly 'all': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no edit': boolean
                    }]
                    | readonly ['filter repo', {
                        readonly 'force': boolean
                        readonly 'invert paths': boolean
                        readonly 'path': _pt.Optional_Value<string>
                    }]
                    | readonly ['gc', {
                        readonly 'aggressive': boolean
                        readonly 'prune': _pt.Optional_Value<string>
                    }]
                    | readonly ['rebase', {
                        readonly 'interactive': boolean
                        readonly 'onto': string
                        readonly 'preserve merges': boolean
                        readonly 'strategy': _pt.Optional_Value<string>
                    }]
                    | readonly ['reset', {
                        readonly 'mode': _i_core._T_State_Group<null, 
                            | readonly ['hard', null]
                            | readonly ['mixed', null]
                            | readonly ['soft', null]
                        >
                        readonly 'target': string
                    }]
                    | readonly ['tag delete', {
                        readonly 'name': string
                    }]
                    | readonly ['tag force', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['clone', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'depth': _pt.Optional_Value<number>
                    readonly 'directory': _pt.Optional_Value<string>
                    readonly 'recursive': boolean
                    readonly 'url': string
                }]
                | readonly ['fetch', {
                    readonly 'all': boolean
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'prune': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['pull', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'ff only': boolean
                    readonly 'no rebase': boolean
                    readonly 'rebase': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'delete': _pt.Optional_Value<string>
                    readonly 'force': boolean
                    readonly 'force with lease': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'set upstream': boolean
                    readonly 'tags': boolean
                }]
                | readonly ['remote add', {
                    readonly 'name': string
                    readonly 'url': string
                }]
                | readonly ['remote remove', {
                    readonly 'name': string
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['apply', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['clear', null]
                | readonly ['drop', {
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['pop', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'include untracked': boolean
                    readonly 'keep index': boolean
                    readonly 'message': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['checkout file', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
                | readonly ['clean', {
                    readonly 'directories': boolean
                    readonly 'dry run': boolean
                    readonly 'force': boolean
                    readonly 'ignored': boolean
                }]
                | readonly ['restore', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'source': _pt.Optional_Value<string>
                    readonly 'worktree': boolean
                }]
            >]
        >]
        | readonly ['view', _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config', {
                    readonly 'global': boolean
                    readonly 'key': _pt.Optional_Value<string>
                    readonly 'list': boolean
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['diff cached', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['branch', {
                    readonly 'all': boolean
                    readonly 'remote': boolean
                    readonly 'verbose': boolean
                }]
                | readonly ['log', {
                    readonly 'all': boolean
                    readonly 'author': _pt.Optional_Value<string>
                    readonly 'graph': boolean
                    readonly 'grep': _pt.Optional_Value<string>
                    readonly 'max count': _pt.Optional_Value<number>
                    readonly 'oneline': boolean
                    readonly 'since': _pt.Optional_Value<string>
                    readonly 'until': _pt.Optional_Value<string>
                }]
                | readonly ['reflog', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'oneline': boolean
                }]
                | readonly ['tag', {
                    readonly 'list': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['fetch dry run', {
                    readonly 'all': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['ls remote', {
                    readonly 'heads': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'tags': boolean
                }]
                | readonly ['remote', {
                    readonly 'verbose': boolean
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly 'oneline': boolean
                }]
                | readonly ['show', {
                    readonly 'patch': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['diff', {
                    readonly 'cached': boolean
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['show', {
                    readonly 'commit': _pt.Optional_Value<string>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'branch': boolean
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                    readonly 'show stash': boolean
                }]
            >]
        >]
}

export namespace _T_Safety_Level {
    
    export namespace SG {
        
        export namespace destructive {
            
            export namespace areas_affected {
                export type L = string
            }
            export type areas_affected = _i_core._T_List<null, string>
            export type description = string
            export type warning = string
        }
        export type destructive = {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
            readonly 'warning': string
        }
        
        export namespace risky {
            
            export namespace areas_affected {
                export type L = string
            }
            export type areas_affected = _i_core._T_List<null, string>
            export type description = string
        }
        export type risky = {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
        }
        
        export namespace safe {
            export type description = string
        }
        export type safe = {
            readonly 'description': string
        }
    }
    export type SG = 
        | readonly ['destructive', {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
            readonly 'warning': string
        }]
        | readonly ['risky', {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
        }]
        | readonly ['safe', {
            readonly 'description': string
        }]
}

// *** ALIASES FOR NESTED TYPES

export namespace Command_Result {
    
    export namespace affected_areas {
        export type L = string
    }
    export type affected_areas = _i_core._T_List<null, string>
    export type command_line = string
    export type requires_force_push = boolean
    export type safety_level = string
}

export namespace Git_Command {
    
    export namespace SG {
        
        export namespace change {
            
            export namespace SG {
                
                export namespace configuration {
                    
                    export namespace SG {
                        
                        export namespace config_set {
                            export type global = boolean
                            export type key = string
                            export type local = boolean
                            export type system = boolean
                            export type value = string
                        }
                        export type config_set = {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                            readonly 'value': string
                        }
                        
                        export namespace config_unset {
                            export type global = boolean
                            export type key = string
                            export type local = boolean
                            export type system = boolean
                        }
                        export type config_unset = {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['config set', {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                            readonly 'value': string
                        }]
                        | readonly ['config unset', {
                            readonly 'global': boolean
                            readonly 'key': string
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }]
                }
                export type configuration = _i_core._T_State_Group<null, 
                    | readonly ['config set', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                        readonly 'value': string
                    }]
                    | readonly ['config unset', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >
                
                export namespace index {
                    
                    export namespace SG {
                        
                        export namespace add {
                            export type all = boolean
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            export type patch = boolean
                            export type update = boolean
                        }
                        export type add = {
                            readonly 'all': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'patch': boolean
                            readonly 'update': boolean
                        }
                        
                        export namespace reset_files {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                        }
                        export type reset_files = {
                            readonly 'files': _i_core._T_List<null, string>
                        }
                        
                        export namespace restore_staged {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                        }
                        export type restore_staged = {
                            readonly 'files': _i_core._T_List<null, string>
                        }
                        
                        export namespace rm {
                            export type cached = boolean
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            export type force = boolean
                        }
                        export type rm = {
                            readonly 'cached': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['add', {
                            readonly 'all': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'patch': boolean
                            readonly 'update': boolean
                        }]
                        | readonly ['reset files', {
                            readonly 'files': _i_core._T_List<null, string>
                        }]
                        | readonly ['restore staged', {
                            readonly 'files': _i_core._T_List<null, string>
                        }]
                        | readonly ['rm', {
                            readonly 'cached': boolean
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }]
                }
                export type index = _i_core._T_State_Group<null, 
                    | readonly ['add', {
                        readonly 'all': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'patch': boolean
                        readonly 'update': boolean
                    }]
                    | readonly ['reset files', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['restore staged', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['rm', {
                        readonly 'cached': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                >
                
                export namespace local_repo {
                    
                    export namespace SG {
                        
                        export namespace append {
                            
                            export namespace SG {
                                
                                export namespace branch_create {
                                    export type name = string
                                    
                                    export namespace start_point {
                                        export type O = string
                                    }
                                    export type start_point = _pt.Optional_Value<string>
                                }
                                export type branch_create = {
                                    readonly 'name': string
                                    readonly 'start point': _pt.Optional_Value<string>
                                }
                                
                                export namespace cherry_pick {
                                    
                                    export namespace commits {
                                        export type L = string
                                    }
                                    export type commits = _i_core._T_List<null, string>
                                    
                                    export namespace mainline {
                                        export type O = number
                                    }
                                    export type mainline = _pt.Optional_Value<number>
                                    export type no_commit = boolean
                                }
                                export type cherry_pick = {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }
                                
                                export namespace commit {
                                    export type all = boolean
                                    export type amend = boolean
                                    export type message = string
                                    export type no_verify = boolean
                                    export type signoff = boolean
                                }
                                export type commit = {
                                    readonly 'all': boolean
                                    readonly 'amend': boolean
                                    readonly 'message': string
                                    readonly 'no verify': boolean
                                    readonly 'signoff': boolean
                                }
                                
                                export namespace merge {
                                    export type branch = string
                                    export type ff_only = boolean
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type no_commit = boolean
                                    export type no_ff = boolean
                                }
                                export type merge = {
                                    readonly 'branch': string
                                    readonly 'ff only': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no commit': boolean
                                    readonly 'no ff': boolean
                                }
                                
                                export namespace pull_rebase_private {
                                    
                                    export namespace branch {
                                        export type O = string
                                    }
                                    export type branch = _pt.Optional_Value<string>
                                    
                                    export namespace remote {
                                        export type O = string
                                    }
                                    export type remote = _pt.Optional_Value<string>
                                }
                                export type pull_rebase_private = {
                                    readonly 'branch': _pt.Optional_Value<string>
                                    readonly 'remote': _pt.Optional_Value<string>
                                }
                                
                                export namespace revert {
                                    
                                    export namespace commits {
                                        export type L = string
                                    }
                                    export type commits = _i_core._T_List<null, string>
                                    
                                    export namespace mainline {
                                        export type O = number
                                    }
                                    export type mainline = _pt.Optional_Value<number>
                                    export type no_commit = boolean
                                }
                                export type revert = {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }
                                
                                export namespace tag_create {
                                    export type annotated = boolean
                                    
                                    export namespace commit {
                                        export type O = string
                                    }
                                    export type commit = _pt.Optional_Value<string>
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type name = string
                                }
                                export type tag_create = {
                                    readonly 'annotated': boolean
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }
                            }
                            export type SG = 
                                | readonly ['branch create', {
                                    readonly 'name': string
                                    readonly 'start point': _pt.Optional_Value<string>
                                }]
                                | readonly ['cherry pick', {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }]
                                | readonly ['commit', {
                                    readonly 'all': boolean
                                    readonly 'amend': boolean
                                    readonly 'message': string
                                    readonly 'no verify': boolean
                                    readonly 'signoff': boolean
                                }]
                                | readonly ['merge', {
                                    readonly 'branch': string
                                    readonly 'ff only': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no commit': boolean
                                    readonly 'no ff': boolean
                                }]
                                | readonly ['pull rebase private', {
                                    readonly 'branch': _pt.Optional_Value<string>
                                    readonly 'remote': _pt.Optional_Value<string>
                                }]
                                | readonly ['revert', {
                                    readonly 'commits': _i_core._T_List<null, string>
                                    readonly 'mainline': _pt.Optional_Value<number>
                                    readonly 'no commit': boolean
                                }]
                                | readonly ['tag create', {
                                    readonly 'annotated': boolean
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }]
                        }
                        export type append = _i_core._T_State_Group<null, 
                            | readonly ['branch create', {
                                readonly 'name': string
                                readonly 'start point': _pt.Optional_Value<string>
                            }]
                            | readonly ['cherry pick', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['commit', {
                                readonly 'all': boolean
                                readonly 'amend': boolean
                                readonly 'message': string
                                readonly 'no verify': boolean
                                readonly 'signoff': boolean
                            }]
                            | readonly ['merge', {
                                readonly 'branch': string
                                readonly 'ff only': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no commit': boolean
                                readonly 'no ff': boolean
                            }]
                            | readonly ['pull rebase private', {
                                readonly 'branch': _pt.Optional_Value<string>
                                readonly 'remote': _pt.Optional_Value<string>
                            }]
                            | readonly ['revert', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['tag create', {
                                readonly 'annotated': boolean
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >
                        
                        export namespace destroy {
                            
                            export namespace SG {
                                
                                export namespace branch_delete {
                                    export type force = boolean
                                    export type name = string
                                }
                                export type branch_delete = {
                                    readonly 'force': boolean
                                    readonly 'name': string
                                }
                                
                                export namespace commit_amend {
                                    export type all = boolean
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type no_edit = boolean
                                }
                                export type commit_amend = {
                                    readonly 'all': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no edit': boolean
                                }
                                
                                export namespace filter_repo {
                                    export type force = boolean
                                    export type invert_paths = boolean
                                    
                                    export namespace path {
                                        export type O = string
                                    }
                                    export type path = _pt.Optional_Value<string>
                                }
                                export type filter_repo = {
                                    readonly 'force': boolean
                                    readonly 'invert paths': boolean
                                    readonly 'path': _pt.Optional_Value<string>
                                }
                                
                                export namespace gc {
                                    export type aggressive = boolean
                                    
                                    export namespace prune {
                                        export type O = string
                                    }
                                    export type prune = _pt.Optional_Value<string>
                                }
                                export type gc = {
                                    readonly 'aggressive': boolean
                                    readonly 'prune': _pt.Optional_Value<string>
                                }
                                
                                export namespace rebase {
                                    export type interactive = boolean
                                    export type onto = string
                                    export type preserve_merges = boolean
                                    
                                    export namespace strategy {
                                        export type O = string
                                    }
                                    export type strategy = _pt.Optional_Value<string>
                                }
                                export type rebase = {
                                    readonly 'interactive': boolean
                                    readonly 'onto': string
                                    readonly 'preserve merges': boolean
                                    readonly 'strategy': _pt.Optional_Value<string>
                                }
                                
                                export namespace reset {
                                    
                                    export namespace mode {
                                        
                                        export namespace SG {
                                            
                                            export namespace hard {
                                            }
                                            export type hard = null
                                            
                                            export namespace mixed {
                                            }
                                            export type mixed = null
                                            
                                            export namespace soft {
                                            }
                                            export type soft = null
                                        }
                                        export type SG = 
                                            | readonly ['hard', null]
                                            | readonly ['mixed', null]
                                            | readonly ['soft', null]
                                    }
                                    export type mode = _i_core._T_State_Group<null, 
                                        | readonly ['hard', null]
                                        | readonly ['mixed', null]
                                        | readonly ['soft', null]
                                    >
                                    export type target = string
                                }
                                export type reset = {
                                    readonly 'mode': _i_core._T_State_Group<null, 
                                        | readonly ['hard', null]
                                        | readonly ['mixed', null]
                                        | readonly ['soft', null]
                                    >
                                    readonly 'target': string
                                }
                                
                                export namespace tag_delete {
                                    export type name = string
                                }
                                export type tag_delete = {
                                    readonly 'name': string
                                }
                                
                                export namespace tag_force {
                                    
                                    export namespace commit {
                                        export type O = string
                                    }
                                    export type commit = _pt.Optional_Value<string>
                                    
                                    export namespace message {
                                        export type O = string
                                    }
                                    export type message = _pt.Optional_Value<string>
                                    export type name = string
                                }
                                export type tag_force = {
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }
                            }
                            export type SG = 
                                | readonly ['branch delete', {
                                    readonly 'force': boolean
                                    readonly 'name': string
                                }]
                                | readonly ['commit amend', {
                                    readonly 'all': boolean
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'no edit': boolean
                                }]
                                | readonly ['filter repo', {
                                    readonly 'force': boolean
                                    readonly 'invert paths': boolean
                                    readonly 'path': _pt.Optional_Value<string>
                                }]
                                | readonly ['gc', {
                                    readonly 'aggressive': boolean
                                    readonly 'prune': _pt.Optional_Value<string>
                                }]
                                | readonly ['rebase', {
                                    readonly 'interactive': boolean
                                    readonly 'onto': string
                                    readonly 'preserve merges': boolean
                                    readonly 'strategy': _pt.Optional_Value<string>
                                }]
                                | readonly ['reset', {
                                    readonly 'mode': _i_core._T_State_Group<null, 
                                        | readonly ['hard', null]
                                        | readonly ['mixed', null]
                                        | readonly ['soft', null]
                                    >
                                    readonly 'target': string
                                }]
                                | readonly ['tag delete', {
                                    readonly 'name': string
                                }]
                                | readonly ['tag force', {
                                    readonly 'commit': _pt.Optional_Value<string>
                                    readonly 'message': _pt.Optional_Value<string>
                                    readonly 'name': string
                                }]
                        }
                        export type destroy = _i_core._T_State_Group<null, 
                            | readonly ['branch delete', {
                                readonly 'force': boolean
                                readonly 'name': string
                            }]
                            | readonly ['commit amend', {
                                readonly 'all': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no edit': boolean
                            }]
                            | readonly ['filter repo', {
                                readonly 'force': boolean
                                readonly 'invert paths': boolean
                                readonly 'path': _pt.Optional_Value<string>
                            }]
                            | readonly ['gc', {
                                readonly 'aggressive': boolean
                                readonly 'prune': _pt.Optional_Value<string>
                            }]
                            | readonly ['rebase', {
                                readonly 'interactive': boolean
                                readonly 'onto': string
                                readonly 'preserve merges': boolean
                                readonly 'strategy': _pt.Optional_Value<string>
                            }]
                            | readonly ['reset', {
                                readonly 'mode': _i_core._T_State_Group<null, 
                                    | readonly ['hard', null]
                                    | readonly ['mixed', null]
                                    | readonly ['soft', null]
                                >
                                readonly 'target': string
                            }]
                            | readonly ['tag delete', {
                                readonly 'name': string
                            }]
                            | readonly ['tag force', {
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >
                    }
                    export type SG = 
                        | readonly ['append', _i_core._T_State_Group<null, 
                            | readonly ['branch create', {
                                readonly 'name': string
                                readonly 'start point': _pt.Optional_Value<string>
                            }]
                            | readonly ['cherry pick', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['commit', {
                                readonly 'all': boolean
                                readonly 'amend': boolean
                                readonly 'message': string
                                readonly 'no verify': boolean
                                readonly 'signoff': boolean
                            }]
                            | readonly ['merge', {
                                readonly 'branch': string
                                readonly 'ff only': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no commit': boolean
                                readonly 'no ff': boolean
                            }]
                            | readonly ['pull rebase private', {
                                readonly 'branch': _pt.Optional_Value<string>
                                readonly 'remote': _pt.Optional_Value<string>
                            }]
                            | readonly ['revert', {
                                readonly 'commits': _i_core._T_List<null, string>
                                readonly 'mainline': _pt.Optional_Value<number>
                                readonly 'no commit': boolean
                            }]
                            | readonly ['tag create', {
                                readonly 'annotated': boolean
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >]
                        | readonly ['destroy', _i_core._T_State_Group<null, 
                            | readonly ['branch delete', {
                                readonly 'force': boolean
                                readonly 'name': string
                            }]
                            | readonly ['commit amend', {
                                readonly 'all': boolean
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'no edit': boolean
                            }]
                            | readonly ['filter repo', {
                                readonly 'force': boolean
                                readonly 'invert paths': boolean
                                readonly 'path': _pt.Optional_Value<string>
                            }]
                            | readonly ['gc', {
                                readonly 'aggressive': boolean
                                readonly 'prune': _pt.Optional_Value<string>
                            }]
                            | readonly ['rebase', {
                                readonly 'interactive': boolean
                                readonly 'onto': string
                                readonly 'preserve merges': boolean
                                readonly 'strategy': _pt.Optional_Value<string>
                            }]
                            | readonly ['reset', {
                                readonly 'mode': _i_core._T_State_Group<null, 
                                    | readonly ['hard', null]
                                    | readonly ['mixed', null]
                                    | readonly ['soft', null]
                                >
                                readonly 'target': string
                            }]
                            | readonly ['tag delete', {
                                readonly 'name': string
                            }]
                            | readonly ['tag force', {
                                readonly 'commit': _pt.Optional_Value<string>
                                readonly 'message': _pt.Optional_Value<string>
                                readonly 'name': string
                            }]
                        >]
                }
                export type local_repo = _i_core._T_State_Group<null, 
                    | readonly ['append', _i_core._T_State_Group<null, 
                        | readonly ['branch create', {
                            readonly 'name': string
                            readonly 'start point': _pt.Optional_Value<string>
                        }]
                        | readonly ['cherry pick', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['commit', {
                            readonly 'all': boolean
                            readonly 'amend': boolean
                            readonly 'message': string
                            readonly 'no verify': boolean
                            readonly 'signoff': boolean
                        }]
                        | readonly ['merge', {
                            readonly 'branch': string
                            readonly 'ff only': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no commit': boolean
                            readonly 'no ff': boolean
                        }]
                        | readonly ['pull rebase private', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['revert', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['tag create', {
                            readonly 'annotated': boolean
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                    | readonly ['destroy', _i_core._T_State_Group<null, 
                        | readonly ['branch delete', {
                            readonly 'force': boolean
                            readonly 'name': string
                        }]
                        | readonly ['commit amend', {
                            readonly 'all': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no edit': boolean
                        }]
                        | readonly ['filter repo', {
                            readonly 'force': boolean
                            readonly 'invert paths': boolean
                            readonly 'path': _pt.Optional_Value<string>
                        }]
                        | readonly ['gc', {
                            readonly 'aggressive': boolean
                            readonly 'prune': _pt.Optional_Value<string>
                        }]
                        | readonly ['rebase', {
                            readonly 'interactive': boolean
                            readonly 'onto': string
                            readonly 'preserve merges': boolean
                            readonly 'strategy': _pt.Optional_Value<string>
                        }]
                        | readonly ['reset', {
                            readonly 'mode': _i_core._T_State_Group<null, 
                                | readonly ['hard', null]
                                | readonly ['mixed', null]
                                | readonly ['soft', null]
                            >
                            readonly 'target': string
                        }]
                        | readonly ['tag delete', {
                            readonly 'name': string
                        }]
                        | readonly ['tag force', {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                >
                
                export namespace remote_repo {
                    
                    export namespace SG {
                        
                        export namespace clone {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            
                            export namespace depth {
                                export type O = number
                            }
                            export type depth = _pt.Optional_Value<number>
                            
                            export namespace directory {
                                export type O = string
                            }
                            export type directory = _pt.Optional_Value<string>
                            export type recursive = boolean
                            export type url = string
                        }
                        export type clone = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'depth': _pt.Optional_Value<number>
                            readonly 'directory': _pt.Optional_Value<string>
                            readonly 'recursive': boolean
                            readonly 'url': string
                        }
                        
                        export namespace fetch {
                            export type all = boolean
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            export type prune = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                        }
                        export type fetch = {
                            readonly 'all': boolean
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'prune': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }
                        
                        export namespace pull {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            export type ff_only = boolean
                            export type no_rebase = boolean
                            export type rebase = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                        }
                        export type pull = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'ff only': boolean
                            readonly 'no rebase': boolean
                            readonly 'rebase': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }
                        
                        export namespace push {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            
                            export namespace _delete {
                                export type O = string
                            }
                            export type _delete = _pt.Optional_Value<string>
                            export type force = boolean
                            export type force_with_lease = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                            export type set_upstream = boolean
                            export type tags = boolean
                        }
                        export type push = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'delete': _pt.Optional_Value<string>
                            readonly 'force': boolean
                            readonly 'force with lease': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'set upstream': boolean
                            readonly 'tags': boolean
                        }
                        
                        export namespace remote_add {
                            export type name = string
                            export type url = string
                        }
                        export type remote_add = {
                            readonly 'name': string
                            readonly 'url': string
                        }
                        
                        export namespace remote_remove {
                            export type name = string
                        }
                        export type remote_remove = {
                            readonly 'name': string
                        }
                    }
                    export type SG = 
                        | readonly ['clone', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'depth': _pt.Optional_Value<number>
                            readonly 'directory': _pt.Optional_Value<string>
                            readonly 'recursive': boolean
                            readonly 'url': string
                        }]
                        | readonly ['fetch', {
                            readonly 'all': boolean
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'prune': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['pull', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'ff only': boolean
                            readonly 'no rebase': boolean
                            readonly 'rebase': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['push', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'delete': _pt.Optional_Value<string>
                            readonly 'force': boolean
                            readonly 'force with lease': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'set upstream': boolean
                            readonly 'tags': boolean
                        }]
                        | readonly ['remote add', {
                            readonly 'name': string
                            readonly 'url': string
                        }]
                        | readonly ['remote remove', {
                            readonly 'name': string
                        }]
                }
                export type remote_repo = _i_core._T_State_Group<null, 
                    | readonly ['clone', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'depth': _pt.Optional_Value<number>
                        readonly 'directory': _pt.Optional_Value<string>
                        readonly 'recursive': boolean
                        readonly 'url': string
                    }]
                    | readonly ['fetch', {
                        readonly 'all': boolean
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'prune': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['pull', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'ff only': boolean
                        readonly 'no rebase': boolean
                        readonly 'rebase': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'delete': _pt.Optional_Value<string>
                        readonly 'force': boolean
                        readonly 'force with lease': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'set upstream': boolean
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote add', {
                        readonly 'name': string
                        readonly 'url': string
                    }]
                    | readonly ['remote remove', {
                        readonly 'name': string
                    }]
                >
                
                export namespace stash {
                    
                    export namespace SG {
                        
                        export namespace apply {
                            export type index = boolean
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type apply = {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                        
                        export namespace clear {
                        }
                        export type clear = null
                        
                        export namespace drop {
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type drop = {
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                        
                        export namespace pop {
                            export type index = boolean
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type pop = {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                        
                        export namespace push {
                            
                            export namespace files {
                                
                                export namespace O {
                                    export type L = string
                                }
                                export type O = _i_core._T_List<null, string>
                            }
                            export type files = _pt.Optional_Value<_i_core._T_List<null, string>>
                            export type include_untracked = boolean
                            export type keep_index = boolean
                            
                            export namespace message {
                                export type O = string
                            }
                            export type message = _pt.Optional_Value<string>
                        }
                        export type push = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'include untracked': boolean
                            readonly 'keep index': boolean
                            readonly 'message': _pt.Optional_Value<string>
                        }
                    }
                    export type SG = 
                        | readonly ['apply', {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                        | readonly ['clear', null]
                        | readonly ['drop', {
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                        | readonly ['pop', {
                            readonly 'index': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                        | readonly ['push', {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'include untracked': boolean
                            readonly 'keep index': boolean
                            readonly 'message': _pt.Optional_Value<string>
                        }]
                }
                export type stash = _i_core._T_State_Group<null, 
                    | readonly ['apply', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['clear', null]
                    | readonly ['drop', {
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['pop', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'include untracked': boolean
                        readonly 'keep index': boolean
                        readonly 'message': _pt.Optional_Value<string>
                    }]
                >
                
                export namespace workspace {
                    
                    export namespace SG {
                        
                        export namespace checkout_file {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            export type force = boolean
                        }
                        export type checkout_file = {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }
                        
                        export namespace clean {
                            export type directories = boolean
                            export type dry_run = boolean
                            export type force = boolean
                            export type ignored = boolean
                        }
                        export type clean = {
                            readonly 'directories': boolean
                            readonly 'dry run': boolean
                            readonly 'force': boolean
                            readonly 'ignored': boolean
                        }
                        
                        export namespace restore {
                            
                            export namespace files {
                                export type L = string
                            }
                            export type files = _i_core._T_List<null, string>
                            
                            export namespace source {
                                export type O = string
                            }
                            export type source = _pt.Optional_Value<string>
                            export type worktree = boolean
                        }
                        export type restore = {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'source': _pt.Optional_Value<string>
                            readonly 'worktree': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['checkout file', {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'force': boolean
                        }]
                        | readonly ['clean', {
                            readonly 'directories': boolean
                            readonly 'dry run': boolean
                            readonly 'force': boolean
                            readonly 'ignored': boolean
                        }]
                        | readonly ['restore', {
                            readonly 'files': _i_core._T_List<null, string>
                            readonly 'source': _pt.Optional_Value<string>
                            readonly 'worktree': boolean
                        }]
                }
                export type workspace = _i_core._T_State_Group<null, 
                    | readonly ['checkout file', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                    | readonly ['clean', {
                        readonly 'directories': boolean
                        readonly 'dry run': boolean
                        readonly 'force': boolean
                        readonly 'ignored': boolean
                    }]
                    | readonly ['restore', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'source': _pt.Optional_Value<string>
                        readonly 'worktree': boolean
                    }]
                >
            }
            export type SG = 
                | readonly ['configuration', _i_core._T_State_Group<null, 
                    | readonly ['config set', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                        readonly 'value': string
                    }]
                    | readonly ['config unset', {
                        readonly 'global': boolean
                        readonly 'key': string
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >]
                | readonly ['index', _i_core._T_State_Group<null, 
                    | readonly ['add', {
                        readonly 'all': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'patch': boolean
                        readonly 'update': boolean
                    }]
                    | readonly ['reset files', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['restore staged', {
                        readonly 'files': _i_core._T_List<null, string>
                    }]
                    | readonly ['rm', {
                        readonly 'cached': boolean
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                >]
                | readonly ['local repo', _i_core._T_State_Group<null, 
                    | readonly ['append', _i_core._T_State_Group<null, 
                        | readonly ['branch create', {
                            readonly 'name': string
                            readonly 'start point': _pt.Optional_Value<string>
                        }]
                        | readonly ['cherry pick', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['commit', {
                            readonly 'all': boolean
                            readonly 'amend': boolean
                            readonly 'message': string
                            readonly 'no verify': boolean
                            readonly 'signoff': boolean
                        }]
                        | readonly ['merge', {
                            readonly 'branch': string
                            readonly 'ff only': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no commit': boolean
                            readonly 'no ff': boolean
                        }]
                        | readonly ['pull rebase private', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['revert', {
                            readonly 'commits': _i_core._T_List<null, string>
                            readonly 'mainline': _pt.Optional_Value<number>
                            readonly 'no commit': boolean
                        }]
                        | readonly ['tag create', {
                            readonly 'annotated': boolean
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                    | readonly ['destroy', _i_core._T_State_Group<null, 
                        | readonly ['branch delete', {
                            readonly 'force': boolean
                            readonly 'name': string
                        }]
                        | readonly ['commit amend', {
                            readonly 'all': boolean
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'no edit': boolean
                        }]
                        | readonly ['filter repo', {
                            readonly 'force': boolean
                            readonly 'invert paths': boolean
                            readonly 'path': _pt.Optional_Value<string>
                        }]
                        | readonly ['gc', {
                            readonly 'aggressive': boolean
                            readonly 'prune': _pt.Optional_Value<string>
                        }]
                        | readonly ['rebase', {
                            readonly 'interactive': boolean
                            readonly 'onto': string
                            readonly 'preserve merges': boolean
                            readonly 'strategy': _pt.Optional_Value<string>
                        }]
                        | readonly ['reset', {
                            readonly 'mode': _i_core._T_State_Group<null, 
                                | readonly ['hard', null]
                                | readonly ['mixed', null]
                                | readonly ['soft', null]
                            >
                            readonly 'target': string
                        }]
                        | readonly ['tag delete', {
                            readonly 'name': string
                        }]
                        | readonly ['tag force', {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'message': _pt.Optional_Value<string>
                            readonly 'name': string
                        }]
                    >]
                >]
                | readonly ['remote repo', _i_core._T_State_Group<null, 
                    | readonly ['clone', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'depth': _pt.Optional_Value<number>
                        readonly 'directory': _pt.Optional_Value<string>
                        readonly 'recursive': boolean
                        readonly 'url': string
                    }]
                    | readonly ['fetch', {
                        readonly 'all': boolean
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'prune': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['pull', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'ff only': boolean
                        readonly 'no rebase': boolean
                        readonly 'rebase': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'delete': _pt.Optional_Value<string>
                        readonly 'force': boolean
                        readonly 'force with lease': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'set upstream': boolean
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote add', {
                        readonly 'name': string
                        readonly 'url': string
                    }]
                    | readonly ['remote remove', {
                        readonly 'name': string
                    }]
                >]
                | readonly ['stash', _i_core._T_State_Group<null, 
                    | readonly ['apply', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['clear', null]
                    | readonly ['drop', {
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['pop', {
                        readonly 'index': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                    | readonly ['push', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'include untracked': boolean
                        readonly 'keep index': boolean
                        readonly 'message': _pt.Optional_Value<string>
                    }]
                >]
                | readonly ['workspace', _i_core._T_State_Group<null, 
                    | readonly ['checkout file', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'force': boolean
                    }]
                    | readonly ['clean', {
                        readonly 'directories': boolean
                        readonly 'dry run': boolean
                        readonly 'force': boolean
                        readonly 'ignored': boolean
                    }]
                    | readonly ['restore', {
                        readonly 'files': _i_core._T_List<null, string>
                        readonly 'source': _pt.Optional_Value<string>
                        readonly 'worktree': boolean
                    }]
                >]
        }
        export type change = _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config set', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                    readonly 'value': string
                }]
                | readonly ['config unset', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['add', {
                    readonly 'all': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'patch': boolean
                    readonly 'update': boolean
                }]
                | readonly ['reset files', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['restore staged', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['rm', {
                    readonly 'cached': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['append', _i_core._T_State_Group<null, 
                    | readonly ['branch create', {
                        readonly 'name': string
                        readonly 'start point': _pt.Optional_Value<string>
                    }]
                    | readonly ['cherry pick', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['commit', {
                        readonly 'all': boolean
                        readonly 'amend': boolean
                        readonly 'message': string
                        readonly 'no verify': boolean
                        readonly 'signoff': boolean
                    }]
                    | readonly ['merge', {
                        readonly 'branch': string
                        readonly 'ff only': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no commit': boolean
                        readonly 'no ff': boolean
                    }]
                    | readonly ['pull rebase private', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['revert', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['tag create', {
                        readonly 'annotated': boolean
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
                | readonly ['destroy', _i_core._T_State_Group<null, 
                    | readonly ['branch delete', {
                        readonly 'force': boolean
                        readonly 'name': string
                    }]
                    | readonly ['commit amend', {
                        readonly 'all': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no edit': boolean
                    }]
                    | readonly ['filter repo', {
                        readonly 'force': boolean
                        readonly 'invert paths': boolean
                        readonly 'path': _pt.Optional_Value<string>
                    }]
                    | readonly ['gc', {
                        readonly 'aggressive': boolean
                        readonly 'prune': _pt.Optional_Value<string>
                    }]
                    | readonly ['rebase', {
                        readonly 'interactive': boolean
                        readonly 'onto': string
                        readonly 'preserve merges': boolean
                        readonly 'strategy': _pt.Optional_Value<string>
                    }]
                    | readonly ['reset', {
                        readonly 'mode': _i_core._T_State_Group<null, 
                            | readonly ['hard', null]
                            | readonly ['mixed', null]
                            | readonly ['soft', null]
                        >
                        readonly 'target': string
                    }]
                    | readonly ['tag delete', {
                        readonly 'name': string
                    }]
                    | readonly ['tag force', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['clone', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'depth': _pt.Optional_Value<number>
                    readonly 'directory': _pt.Optional_Value<string>
                    readonly 'recursive': boolean
                    readonly 'url': string
                }]
                | readonly ['fetch', {
                    readonly 'all': boolean
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'prune': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['pull', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'ff only': boolean
                    readonly 'no rebase': boolean
                    readonly 'rebase': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'delete': _pt.Optional_Value<string>
                    readonly 'force': boolean
                    readonly 'force with lease': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'set upstream': boolean
                    readonly 'tags': boolean
                }]
                | readonly ['remote add', {
                    readonly 'name': string
                    readonly 'url': string
                }]
                | readonly ['remote remove', {
                    readonly 'name': string
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['apply', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['clear', null]
                | readonly ['drop', {
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['pop', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'include untracked': boolean
                    readonly 'keep index': boolean
                    readonly 'message': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['checkout file', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
                | readonly ['clean', {
                    readonly 'directories': boolean
                    readonly 'dry run': boolean
                    readonly 'force': boolean
                    readonly 'ignored': boolean
                }]
                | readonly ['restore', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'source': _pt.Optional_Value<string>
                    readonly 'worktree': boolean
                }]
            >]
        >
        
        export namespace view {
            
            export namespace SG {
                
                export namespace configuration {
                    
                    export namespace SG {
                        
                        export namespace config {
                            export type global = boolean
                            
                            export namespace key {
                                export type O = string
                            }
                            export type key = _pt.Optional_Value<string>
                            export type list = boolean
                            export type local = boolean
                            export type system = boolean
                        }
                        export type config = {
                            readonly 'global': boolean
                            readonly 'key': _pt.Optional_Value<string>
                            readonly 'list': boolean
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['config', {
                            readonly 'global': boolean
                            readonly 'key': _pt.Optional_Value<string>
                            readonly 'list': boolean
                            readonly 'local': boolean
                            readonly 'system': boolean
                        }]
                }
                export type configuration = _i_core._T_State_Group<null, 
                    | readonly ['config', {
                        readonly 'global': boolean
                        readonly 'key': _pt.Optional_Value<string>
                        readonly 'list': boolean
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >
                
                export namespace index {
                    
                    export namespace SG {
                        
                        export namespace diff_cached {
                            
                            export namespace files {
                                
                                export namespace O {
                                    export type L = string
                                }
                                export type O = _i_core._T_List<null, string>
                            }
                            export type files = _pt.Optional_Value<_i_core._T_List<null, string>>
                            export type name_only = boolean
                            export type stat = boolean
                        }
                        export type diff_cached = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }
                        
                        export namespace status {
                            
                            export namespace porcelain {
                                export type O = string
                            }
                            export type porcelain = _pt.Optional_Value<string>
                            export type short = boolean
                        }
                        export type status = {
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['diff cached', {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }]
                        | readonly ['status', {
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                        }]
                }
                export type index = _i_core._T_State_Group<null, 
                    | readonly ['diff cached', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                    }]
                >
                
                export namespace local_repo {
                    
                    export namespace SG {
                        
                        export namespace branch {
                            export type all = boolean
                            export type remote = boolean
                            export type verbose = boolean
                        }
                        export type branch = {
                            readonly 'all': boolean
                            readonly 'remote': boolean
                            readonly 'verbose': boolean
                        }
                        
                        export namespace log {
                            export type all = boolean
                            
                            export namespace author {
                                export type O = string
                            }
                            export type author = _pt.Optional_Value<string>
                            export type graph = boolean
                            
                            export namespace grep {
                                export type O = string
                            }
                            export type grep = _pt.Optional_Value<string>
                            
                            export namespace max_count {
                                export type O = number
                            }
                            export type max_count = _pt.Optional_Value<number>
                            export type oneline = boolean
                            
                            export namespace since {
                                export type O = string
                            }
                            export type since = _pt.Optional_Value<string>
                            
                            export namespace until {
                                export type O = string
                            }
                            export type until = _pt.Optional_Value<string>
                        }
                        export type log = {
                            readonly 'all': boolean
                            readonly 'author': _pt.Optional_Value<string>
                            readonly 'graph': boolean
                            readonly 'grep': _pt.Optional_Value<string>
                            readonly 'max count': _pt.Optional_Value<number>
                            readonly 'oneline': boolean
                            readonly 'since': _pt.Optional_Value<string>
                            readonly 'until': _pt.Optional_Value<string>
                        }
                        
                        export namespace reflog {
                            
                            export namespace branch {
                                export type O = string
                            }
                            export type branch = _pt.Optional_Value<string>
                            export type oneline = boolean
                        }
                        export type reflog = {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'oneline': boolean
                        }
                        
                        export namespace tag {
                            
                            export namespace list {
                                export type O = string
                            }
                            export type list = _pt.Optional_Value<string>
                        }
                        export type tag = {
                            readonly 'list': _pt.Optional_Value<string>
                        }
                    }
                    export type SG = 
                        | readonly ['branch', {
                            readonly 'all': boolean
                            readonly 'remote': boolean
                            readonly 'verbose': boolean
                        }]
                        | readonly ['log', {
                            readonly 'all': boolean
                            readonly 'author': _pt.Optional_Value<string>
                            readonly 'graph': boolean
                            readonly 'grep': _pt.Optional_Value<string>
                            readonly 'max count': _pt.Optional_Value<number>
                            readonly 'oneline': boolean
                            readonly 'since': _pt.Optional_Value<string>
                            readonly 'until': _pt.Optional_Value<string>
                        }]
                        | readonly ['reflog', {
                            readonly 'branch': _pt.Optional_Value<string>
                            readonly 'oneline': boolean
                        }]
                        | readonly ['tag', {
                            readonly 'list': _pt.Optional_Value<string>
                        }]
                }
                export type local_repo = _i_core._T_State_Group<null, 
                    | readonly ['branch', {
                        readonly 'all': boolean
                        readonly 'remote': boolean
                        readonly 'verbose': boolean
                    }]
                    | readonly ['log', {
                        readonly 'all': boolean
                        readonly 'author': _pt.Optional_Value<string>
                        readonly 'graph': boolean
                        readonly 'grep': _pt.Optional_Value<string>
                        readonly 'max count': _pt.Optional_Value<number>
                        readonly 'oneline': boolean
                        readonly 'since': _pt.Optional_Value<string>
                        readonly 'until': _pt.Optional_Value<string>
                    }]
                    | readonly ['reflog', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'oneline': boolean
                    }]
                    | readonly ['tag', {
                        readonly 'list': _pt.Optional_Value<string>
                    }]
                >
                
                export namespace remote_repo {
                    
                    export namespace SG {
                        
                        export namespace fetch_dry_run {
                            export type all = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                        }
                        export type fetch_dry_run = {
                            readonly 'all': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }
                        
                        export namespace ls_remote {
                            export type heads = boolean
                            
                            export namespace remote {
                                export type O = string
                            }
                            export type remote = _pt.Optional_Value<string>
                            export type tags = boolean
                        }
                        export type ls_remote = {
                            readonly 'heads': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'tags': boolean
                        }
                        
                        export namespace remote {
                            export type verbose = boolean
                        }
                        export type remote = {
                            readonly 'verbose': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['fetch dry run', {
                            readonly 'all': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                        }]
                        | readonly ['ls remote', {
                            readonly 'heads': boolean
                            readonly 'remote': _pt.Optional_Value<string>
                            readonly 'tags': boolean
                        }]
                        | readonly ['remote', {
                            readonly 'verbose': boolean
                        }]
                }
                export type remote_repo = _i_core._T_State_Group<null, 
                    | readonly ['fetch dry run', {
                        readonly 'all': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['ls remote', {
                        readonly 'heads': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote', {
                        readonly 'verbose': boolean
                    }]
                >
                
                export namespace stash {
                    
                    export namespace SG {
                        
                        export namespace list {
                            export type oneline = boolean
                        }
                        export type list = {
                            readonly 'oneline': boolean
                        }
                        
                        export namespace show {
                            export type patch = boolean
                            
                            export namespace stash {
                                export type O = string
                            }
                            export type stash = _pt.Optional_Value<string>
                        }
                        export type show = {
                            readonly 'patch': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }
                    }
                    export type SG = 
                        | readonly ['list', {
                            readonly 'oneline': boolean
                        }]
                        | readonly ['show', {
                            readonly 'patch': boolean
                            readonly 'stash': _pt.Optional_Value<string>
                        }]
                }
                export type stash = _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'oneline': boolean
                    }]
                    | readonly ['show', {
                        readonly 'patch': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                >
                
                export namespace workspace {
                    
                    export namespace SG {
                        
                        export namespace diff {
                            export type cached = boolean
                            
                            export namespace files {
                                
                                export namespace O {
                                    export type L = string
                                }
                                export type O = _i_core._T_List<null, string>
                            }
                            export type files = _pt.Optional_Value<_i_core._T_List<null, string>>
                            export type name_only = boolean
                            export type stat = boolean
                        }
                        export type diff = {
                            readonly 'cached': boolean
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }
                        
                        export namespace show {
                            
                            export namespace commit {
                                export type O = string
                            }
                            export type commit = _pt.Optional_Value<string>
                            export type name_only = boolean
                            export type stat = boolean
                        }
                        export type show = {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }
                        
                        export namespace status {
                            export type branch = boolean
                            
                            export namespace porcelain {
                                export type O = string
                            }
                            export type porcelain = _pt.Optional_Value<string>
                            export type short = boolean
                            export type show_stash = boolean
                        }
                        export type status = {
                            readonly 'branch': boolean
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                            readonly 'show stash': boolean
                        }
                    }
                    export type SG = 
                        | readonly ['diff', {
                            readonly 'cached': boolean
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }]
                        | readonly ['show', {
                            readonly 'commit': _pt.Optional_Value<string>
                            readonly 'name only': boolean
                            readonly 'stat': boolean
                        }]
                        | readonly ['status', {
                            readonly 'branch': boolean
                            readonly 'porcelain': _pt.Optional_Value<string>
                            readonly 'short': boolean
                            readonly 'show stash': boolean
                        }]
                }
                export type workspace = _i_core._T_State_Group<null, 
                    | readonly ['diff', {
                        readonly 'cached': boolean
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['show', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'branch': boolean
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                        readonly 'show stash': boolean
                    }]
                >
            }
            export type SG = 
                | readonly ['configuration', _i_core._T_State_Group<null, 
                    | readonly ['config', {
                        readonly 'global': boolean
                        readonly 'key': _pt.Optional_Value<string>
                        readonly 'list': boolean
                        readonly 'local': boolean
                        readonly 'system': boolean
                    }]
                >]
                | readonly ['index', _i_core._T_State_Group<null, 
                    | readonly ['diff cached', {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                    }]
                >]
                | readonly ['local repo', _i_core._T_State_Group<null, 
                    | readonly ['branch', {
                        readonly 'all': boolean
                        readonly 'remote': boolean
                        readonly 'verbose': boolean
                    }]
                    | readonly ['log', {
                        readonly 'all': boolean
                        readonly 'author': _pt.Optional_Value<string>
                        readonly 'graph': boolean
                        readonly 'grep': _pt.Optional_Value<string>
                        readonly 'max count': _pt.Optional_Value<number>
                        readonly 'oneline': boolean
                        readonly 'since': _pt.Optional_Value<string>
                        readonly 'until': _pt.Optional_Value<string>
                    }]
                    | readonly ['reflog', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'oneline': boolean
                    }]
                    | readonly ['tag', {
                        readonly 'list': _pt.Optional_Value<string>
                    }]
                >]
                | readonly ['remote repo', _i_core._T_State_Group<null, 
                    | readonly ['fetch dry run', {
                        readonly 'all': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['ls remote', {
                        readonly 'heads': boolean
                        readonly 'remote': _pt.Optional_Value<string>
                        readonly 'tags': boolean
                    }]
                    | readonly ['remote', {
                        readonly 'verbose': boolean
                    }]
                >]
                | readonly ['stash', _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'oneline': boolean
                    }]
                    | readonly ['show', {
                        readonly 'patch': boolean
                        readonly 'stash': _pt.Optional_Value<string>
                    }]
                >]
                | readonly ['workspace', _i_core._T_State_Group<null, 
                    | readonly ['diff', {
                        readonly 'cached': boolean
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['show', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'name only': boolean
                        readonly 'stat': boolean
                    }]
                    | readonly ['status', {
                        readonly 'branch': boolean
                        readonly 'porcelain': _pt.Optional_Value<string>
                        readonly 'short': boolean
                        readonly 'show stash': boolean
                    }]
                >]
        }
        export type view = _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config', {
                    readonly 'global': boolean
                    readonly 'key': _pt.Optional_Value<string>
                    readonly 'list': boolean
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['diff cached', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['branch', {
                    readonly 'all': boolean
                    readonly 'remote': boolean
                    readonly 'verbose': boolean
                }]
                | readonly ['log', {
                    readonly 'all': boolean
                    readonly 'author': _pt.Optional_Value<string>
                    readonly 'graph': boolean
                    readonly 'grep': _pt.Optional_Value<string>
                    readonly 'max count': _pt.Optional_Value<number>
                    readonly 'oneline': boolean
                    readonly 'since': _pt.Optional_Value<string>
                    readonly 'until': _pt.Optional_Value<string>
                }]
                | readonly ['reflog', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'oneline': boolean
                }]
                | readonly ['tag', {
                    readonly 'list': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['fetch dry run', {
                    readonly 'all': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['ls remote', {
                    readonly 'heads': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'tags': boolean
                }]
                | readonly ['remote', {
                    readonly 'verbose': boolean
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly 'oneline': boolean
                }]
                | readonly ['show', {
                    readonly 'patch': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['diff', {
                    readonly 'cached': boolean
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['show', {
                    readonly 'commit': _pt.Optional_Value<string>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'branch': boolean
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                    readonly 'show stash': boolean
                }]
            >]
        >
    }
    export type SG = 
        | readonly ['change', _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config set', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                    readonly 'value': string
                }]
                | readonly ['config unset', {
                    readonly 'global': boolean
                    readonly 'key': string
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['add', {
                    readonly 'all': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'patch': boolean
                    readonly 'update': boolean
                }]
                | readonly ['reset files', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['restore staged', {
                    readonly 'files': _i_core._T_List<null, string>
                }]
                | readonly ['rm', {
                    readonly 'cached': boolean
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['append', _i_core._T_State_Group<null, 
                    | readonly ['branch create', {
                        readonly 'name': string
                        readonly 'start point': _pt.Optional_Value<string>
                    }]
                    | readonly ['cherry pick', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['commit', {
                        readonly 'all': boolean
                        readonly 'amend': boolean
                        readonly 'message': string
                        readonly 'no verify': boolean
                        readonly 'signoff': boolean
                    }]
                    | readonly ['merge', {
                        readonly 'branch': string
                        readonly 'ff only': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no commit': boolean
                        readonly 'no ff': boolean
                    }]
                    | readonly ['pull rebase private', {
                        readonly 'branch': _pt.Optional_Value<string>
                        readonly 'remote': _pt.Optional_Value<string>
                    }]
                    | readonly ['revert', {
                        readonly 'commits': _i_core._T_List<null, string>
                        readonly 'mainline': _pt.Optional_Value<number>
                        readonly 'no commit': boolean
                    }]
                    | readonly ['tag create', {
                        readonly 'annotated': boolean
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
                | readonly ['destroy', _i_core._T_State_Group<null, 
                    | readonly ['branch delete', {
                        readonly 'force': boolean
                        readonly 'name': string
                    }]
                    | readonly ['commit amend', {
                        readonly 'all': boolean
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'no edit': boolean
                    }]
                    | readonly ['filter repo', {
                        readonly 'force': boolean
                        readonly 'invert paths': boolean
                        readonly 'path': _pt.Optional_Value<string>
                    }]
                    | readonly ['gc', {
                        readonly 'aggressive': boolean
                        readonly 'prune': _pt.Optional_Value<string>
                    }]
                    | readonly ['rebase', {
                        readonly 'interactive': boolean
                        readonly 'onto': string
                        readonly 'preserve merges': boolean
                        readonly 'strategy': _pt.Optional_Value<string>
                    }]
                    | readonly ['reset', {
                        readonly 'mode': _i_core._T_State_Group<null, 
                            | readonly ['hard', null]
                            | readonly ['mixed', null]
                            | readonly ['soft', null]
                        >
                        readonly 'target': string
                    }]
                    | readonly ['tag delete', {
                        readonly 'name': string
                    }]
                    | readonly ['tag force', {
                        readonly 'commit': _pt.Optional_Value<string>
                        readonly 'message': _pt.Optional_Value<string>
                        readonly 'name': string
                    }]
                >]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['clone', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'depth': _pt.Optional_Value<number>
                    readonly 'directory': _pt.Optional_Value<string>
                    readonly 'recursive': boolean
                    readonly 'url': string
                }]
                | readonly ['fetch', {
                    readonly 'all': boolean
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'prune': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['pull', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'ff only': boolean
                    readonly 'no rebase': boolean
                    readonly 'rebase': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'delete': _pt.Optional_Value<string>
                    readonly 'force': boolean
                    readonly 'force with lease': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'set upstream': boolean
                    readonly 'tags': boolean
                }]
                | readonly ['remote add', {
                    readonly 'name': string
                    readonly 'url': string
                }]
                | readonly ['remote remove', {
                    readonly 'name': string
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['apply', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['clear', null]
                | readonly ['drop', {
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['pop', {
                    readonly 'index': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
                | readonly ['push', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'include untracked': boolean
                    readonly 'keep index': boolean
                    readonly 'message': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['checkout file', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'force': boolean
                }]
                | readonly ['clean', {
                    readonly 'directories': boolean
                    readonly 'dry run': boolean
                    readonly 'force': boolean
                    readonly 'ignored': boolean
                }]
                | readonly ['restore', {
                    readonly 'files': _i_core._T_List<null, string>
                    readonly 'source': _pt.Optional_Value<string>
                    readonly 'worktree': boolean
                }]
            >]
        >]
        | readonly ['view', _i_core._T_State_Group<null, 
            | readonly ['configuration', _i_core._T_State_Group<null, 
                | readonly ['config', {
                    readonly 'global': boolean
                    readonly 'key': _pt.Optional_Value<string>
                    readonly 'list': boolean
                    readonly 'local': boolean
                    readonly 'system': boolean
                }]
            >]
            | readonly ['index', _i_core._T_State_Group<null, 
                | readonly ['diff cached', {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                }]
            >]
            | readonly ['local repo', _i_core._T_State_Group<null, 
                | readonly ['branch', {
                    readonly 'all': boolean
                    readonly 'remote': boolean
                    readonly 'verbose': boolean
                }]
                | readonly ['log', {
                    readonly 'all': boolean
                    readonly 'author': _pt.Optional_Value<string>
                    readonly 'graph': boolean
                    readonly 'grep': _pt.Optional_Value<string>
                    readonly 'max count': _pt.Optional_Value<number>
                    readonly 'oneline': boolean
                    readonly 'since': _pt.Optional_Value<string>
                    readonly 'until': _pt.Optional_Value<string>
                }]
                | readonly ['reflog', {
                    readonly 'branch': _pt.Optional_Value<string>
                    readonly 'oneline': boolean
                }]
                | readonly ['tag', {
                    readonly 'list': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['remote repo', _i_core._T_State_Group<null, 
                | readonly ['fetch dry run', {
                    readonly 'all': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                }]
                | readonly ['ls remote', {
                    readonly 'heads': boolean
                    readonly 'remote': _pt.Optional_Value<string>
                    readonly 'tags': boolean
                }]
                | readonly ['remote', {
                    readonly 'verbose': boolean
                }]
            >]
            | readonly ['stash', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly 'oneline': boolean
                }]
                | readonly ['show', {
                    readonly 'patch': boolean
                    readonly 'stash': _pt.Optional_Value<string>
                }]
            >]
            | readonly ['workspace', _i_core._T_State_Group<null, 
                | readonly ['diff', {
                    readonly 'cached': boolean
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['show', {
                    readonly 'commit': _pt.Optional_Value<string>
                    readonly 'name only': boolean
                    readonly 'stat': boolean
                }]
                | readonly ['status', {
                    readonly 'branch': boolean
                    readonly 'porcelain': _pt.Optional_Value<string>
                    readonly 'short': boolean
                    readonly 'show stash': boolean
                }]
            >]
        >]
}

export namespace Safety_Level {
    
    export namespace SG {
        
        export namespace destructive {
            
            export namespace areas_affected {
                export type L = string
            }
            export type areas_affected = _i_core._T_List<null, string>
            export type description = string
            export type warning = string
        }
        export type destructive = {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
            readonly 'warning': string
        }
        
        export namespace risky {
            
            export namespace areas_affected {
                export type L = string
            }
            export type areas_affected = _i_core._T_List<null, string>
            export type description = string
        }
        export type risky = {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
        }
        
        export namespace safe {
            export type description = string
        }
        export type safe = {
            readonly 'description': string
        }
    }
    export type SG = 
        | readonly ['destructive', {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
            readonly 'warning': string
        }]
        | readonly ['risky', {
            readonly 'areas affected': _i_core._T_List<null, string>
            readonly 'description': string
        }]
        | readonly ['safe', {
            readonly 'description': string
        }]
}
