import * as _pt from 'exupery-core-types';
import * as _i_core from "../../../core/unconstrained";
export type _T_Command_Result = {
    readonly 'affected areas': _i_core._T_List<null, string>;
    readonly 'command line': string;
    readonly 'requires force push': boolean;
    readonly 'safety level': string;
};
export type _T_Git_Command = _i_core._T_State_Group<null, readonly [
    'change',
    _i_core._T_State_Group<null, readonly [
        'configuration',
        _i_core._T_State_Group<null, readonly [
            'config set',
            {
                readonly 'global': boolean;
                readonly 'key': string;
                readonly 'local': boolean;
                readonly 'system': boolean;
                readonly 'value': string;
            }
        ] | readonly [
            'config unset',
            {
                readonly 'global': boolean;
                readonly 'key': string;
                readonly 'local': boolean;
                readonly 'system': boolean;
            }
        ]>
    ] | readonly [
        'index',
        _i_core._T_State_Group<null, readonly [
            'add',
            {
                readonly 'all': boolean;
                readonly 'files': _i_core._T_List<null, string>;
                readonly 'patch': boolean;
                readonly 'update': boolean;
            }
        ] | readonly [
            'reset files',
            {
                readonly 'files': _i_core._T_List<null, string>;
            }
        ] | readonly [
            'restore staged',
            {
                readonly 'files': _i_core._T_List<null, string>;
            }
        ] | readonly [
            'rm',
            {
                readonly 'cached': boolean;
                readonly 'files': _i_core._T_List<null, string>;
                readonly 'force': boolean;
            }
        ]>
    ] | readonly [
        'local repo',
        _i_core._T_State_Group<null, readonly [
            'append',
            _i_core._T_State_Group<null, readonly [
                'branch create',
                {
                    readonly 'name': string;
                    readonly 'start point': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'cherry pick',
                {
                    readonly 'commits': _i_core._T_List<null, string>;
                    readonly 'mainline': _pt.Optional_Value<number>;
                    readonly 'no commit': boolean;
                }
            ] | readonly [
                'commit',
                {
                    readonly 'all': boolean;
                    readonly 'amend': boolean;
                    readonly 'message': string;
                    readonly 'no verify': boolean;
                    readonly 'signoff': boolean;
                }
            ] | readonly [
                'merge',
                {
                    readonly 'branch': string;
                    readonly 'ff only': boolean;
                    readonly 'message': _pt.Optional_Value<string>;
                    readonly 'no commit': boolean;
                    readonly 'no ff': boolean;
                }
            ] | readonly [
                'pull rebase private',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'revert',
                {
                    readonly 'commits': _i_core._T_List<null, string>;
                    readonly 'mainline': _pt.Optional_Value<number>;
                    readonly 'no commit': boolean;
                }
            ] | readonly [
                'tag create',
                {
                    readonly 'annotated': boolean;
                    readonly 'commit': _pt.Optional_Value<string>;
                    readonly 'message': _pt.Optional_Value<string>;
                    readonly 'name': string;
                }
            ]>
        ] | readonly [
            'destroy',
            _i_core._T_State_Group<null, readonly [
                'branch delete',
                {
                    readonly 'force': boolean;
                    readonly 'name': string;
                }
            ] | readonly [
                'commit amend',
                {
                    readonly 'all': boolean;
                    readonly 'message': _pt.Optional_Value<string>;
                    readonly 'no edit': boolean;
                }
            ] | readonly [
                'filter repo',
                {
                    readonly 'force': boolean;
                    readonly 'invert paths': boolean;
                    readonly 'path': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'gc',
                {
                    readonly 'aggressive': boolean;
                    readonly 'prune': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'rebase',
                {
                    readonly 'interactive': boolean;
                    readonly 'onto': string;
                    readonly 'preserve merges': boolean;
                    readonly 'strategy': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'reset',
                {
                    readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                    readonly 'target': string;
                }
            ] | readonly [
                'tag delete',
                {
                    readonly 'name': string;
                }
            ] | readonly [
                'tag force',
                {
                    readonly 'commit': _pt.Optional_Value<string>;
                    readonly 'message': _pt.Optional_Value<string>;
                    readonly 'name': string;
                }
            ]>
        ]>
    ] | readonly [
        'remote repo',
        _i_core._T_State_Group<null, readonly [
            'clone',
            {
                readonly 'branch': _pt.Optional_Value<string>;
                readonly 'depth': _pt.Optional_Value<number>;
                readonly 'directory': _pt.Optional_Value<string>;
                readonly 'recursive': boolean;
                readonly 'url': string;
            }
        ] | readonly [
            'fetch',
            {
                readonly 'all': boolean;
                readonly 'branch': _pt.Optional_Value<string>;
                readonly 'prune': boolean;
                readonly 'remote': _pt.Optional_Value<string>;
            }
        ] | readonly [
            'pull',
            {
                readonly 'branch': _pt.Optional_Value<string>;
                readonly 'ff only': boolean;
                readonly 'no rebase': boolean;
                readonly 'rebase': boolean;
                readonly 'remote': _pt.Optional_Value<string>;
            }
        ] | readonly [
            'push',
            {
                readonly 'branch': _pt.Optional_Value<string>;
                readonly 'delete': _pt.Optional_Value<string>;
                readonly 'force': boolean;
                readonly 'force with lease': boolean;
                readonly 'remote': _pt.Optional_Value<string>;
                readonly 'set upstream': boolean;
                readonly 'tags': boolean;
            }
        ] | readonly [
            'remote add',
            {
                readonly 'name': string;
                readonly 'url': string;
            }
        ] | readonly [
            'remote remove',
            {
                readonly 'name': string;
            }
        ]>
    ] | readonly [
        'stash',
        _i_core._T_State_Group<null, readonly [
            'apply',
            {
                readonly 'index': boolean;
                readonly 'stash': _pt.Optional_Value<string>;
            }
        ] | readonly ['clear', null] | readonly [
            'drop',
            {
                readonly 'stash': _pt.Optional_Value<string>;
            }
        ] | readonly [
            'pop',
            {
                readonly 'index': boolean;
                readonly 'stash': _pt.Optional_Value<string>;
            }
        ] | readonly [
            'push',
            {
                readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                readonly 'include untracked': boolean;
                readonly 'keep index': boolean;
                readonly 'message': _pt.Optional_Value<string>;
            }
        ]>
    ] | readonly [
        'workspace',
        _i_core._T_State_Group<null, readonly [
            'checkout file',
            {
                readonly 'files': _i_core._T_List<null, string>;
                readonly 'force': boolean;
            }
        ] | readonly [
            'clean',
            {
                readonly 'directories': boolean;
                readonly 'dry run': boolean;
                readonly 'force': boolean;
                readonly 'ignored': boolean;
            }
        ] | readonly [
            'restore',
            {
                readonly 'files': _i_core._T_List<null, string>;
                readonly 'source': _pt.Optional_Value<string>;
                readonly 'worktree': boolean;
            }
        ]>
    ]>
] | readonly [
    'view',
    _i_core._T_State_Group<null, readonly [
        'configuration',
        _i_core._T_State_Group<null, readonly [
            'config',
            {
                readonly 'global': boolean;
                readonly 'key': _pt.Optional_Value<string>;
                readonly 'list': boolean;
                readonly 'local': boolean;
                readonly 'system': boolean;
            }
        ]>
    ] | readonly [
        'index',
        _i_core._T_State_Group<null, readonly [
            'diff cached',
            {
                readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                readonly 'name only': boolean;
                readonly 'stat': boolean;
            }
        ] | readonly [
            'status',
            {
                readonly 'porcelain': _pt.Optional_Value<string>;
                readonly 'short': boolean;
            }
        ]>
    ] | readonly [
        'local repo',
        _i_core._T_State_Group<null, readonly [
            'branch',
            {
                readonly 'all': boolean;
                readonly 'remote': boolean;
                readonly 'verbose': boolean;
            }
        ] | readonly [
            'log',
            {
                readonly 'all': boolean;
                readonly 'author': _pt.Optional_Value<string>;
                readonly 'graph': boolean;
                readonly 'grep': _pt.Optional_Value<string>;
                readonly 'max count': _pt.Optional_Value<number>;
                readonly 'oneline': boolean;
                readonly 'since': _pt.Optional_Value<string>;
                readonly 'until': _pt.Optional_Value<string>;
            }
        ] | readonly [
            'reflog',
            {
                readonly 'branch': _pt.Optional_Value<string>;
                readonly 'oneline': boolean;
            }
        ] | readonly [
            'tag',
            {
                readonly 'list': _pt.Optional_Value<string>;
            }
        ]>
    ] | readonly [
        'remote repo',
        _i_core._T_State_Group<null, readonly [
            'fetch dry run',
            {
                readonly 'all': boolean;
                readonly 'remote': _pt.Optional_Value<string>;
            }
        ] | readonly [
            'ls remote',
            {
                readonly 'heads': boolean;
                readonly 'remote': _pt.Optional_Value<string>;
                readonly 'tags': boolean;
            }
        ] | readonly [
            'remote',
            {
                readonly 'verbose': boolean;
            }
        ]>
    ] | readonly [
        'stash',
        _i_core._T_State_Group<null, readonly [
            'list',
            {
                readonly 'oneline': boolean;
            }
        ] | readonly [
            'show',
            {
                readonly 'patch': boolean;
                readonly 'stash': _pt.Optional_Value<string>;
            }
        ]>
    ] | readonly [
        'workspace',
        _i_core._T_State_Group<null, readonly [
            'diff',
            {
                readonly 'cached': boolean;
                readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                readonly 'name only': boolean;
                readonly 'stat': boolean;
            }
        ] | readonly [
            'show',
            {
                readonly 'commit': _pt.Optional_Value<string>;
                readonly 'name only': boolean;
                readonly 'stat': boolean;
            }
        ] | readonly [
            'status',
            {
                readonly 'branch': boolean;
                readonly 'porcelain': _pt.Optional_Value<string>;
                readonly 'short': boolean;
                readonly 'show stash': boolean;
            }
        ]>
    ]>
]>;
export type _T_Safety_Level = _i_core._T_State_Group<null, readonly [
    'destructive',
    {
        readonly 'areas affected': _i_core._T_List<null, string>;
        readonly 'description': string;
        readonly 'warning': string;
    }
] | readonly [
    'risky',
    {
        readonly 'areas affected': _i_core._T_List<null, string>;
        readonly 'description': string;
    }
] | readonly [
    'safe',
    {
        readonly 'description': string;
    }
]>;
export type Command_Result = _T_Command_Result;
export type Git_Command = _T_Git_Command;
export type Safety_Level = _T_Safety_Level;
export declare namespace _T_Command_Result {
    namespace affected_areas {
        type L = string;
    }
    type affected_areas = _i_core._T_List<null, string>;
    type command_line = string;
    type requires_force_push = boolean;
    type safety_level = string;
}
export declare namespace _T_Git_Command {
    namespace SG {
        namespace change {
            namespace SG {
                namespace configuration {
                    namespace SG {
                        namespace config_set {
                            type global = boolean;
                            type key = string;
                            type local = boolean;
                            type system = boolean;
                            type value = string;
                        }
                        type config_set = {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                            readonly 'value': string;
                        };
                        namespace config_unset {
                            type global = boolean;
                            type key = string;
                            type local = boolean;
                            type system = boolean;
                        }
                        type config_unset = {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        };
                    }
                    type SG = readonly [
                        'config set',
                        {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                            readonly 'value': string;
                        }
                    ] | readonly [
                        'config unset',
                        {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        }
                    ];
                }
                type configuration = _i_core._T_State_Group<null, readonly [
                    'config set',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                        readonly 'value': string;
                    }
                ] | readonly [
                    'config unset',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>;
                namespace index {
                    namespace SG {
                        namespace add {
                            type all = boolean;
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            type patch = boolean;
                            type update = boolean;
                        }
                        type add = {
                            readonly 'all': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'patch': boolean;
                            readonly 'update': boolean;
                        };
                        namespace reset_files {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                        }
                        type reset_files = {
                            readonly 'files': _i_core._T_List<null, string>;
                        };
                        namespace restore_staged {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                        }
                        type restore_staged = {
                            readonly 'files': _i_core._T_List<null, string>;
                        };
                        namespace rm {
                            type cached = boolean;
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            type force = boolean;
                        }
                        type rm = {
                            readonly 'cached': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        };
                    }
                    type SG = readonly [
                        'add',
                        {
                            readonly 'all': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'patch': boolean;
                            readonly 'update': boolean;
                        }
                    ] | readonly [
                        'reset files',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                        }
                    ] | readonly [
                        'restore staged',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                        }
                    ] | readonly [
                        'rm',
                        {
                            readonly 'cached': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        }
                    ];
                }
                type index = _i_core._T_State_Group<null, readonly [
                    'add',
                    {
                        readonly 'all': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'patch': boolean;
                        readonly 'update': boolean;
                    }
                ] | readonly [
                    'reset files',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'restore staged',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'rm',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ]>;
                namespace local_repo {
                    namespace SG {
                        namespace append {
                            namespace SG {
                                namespace branch_create {
                                    type name = string;
                                    namespace start_point {
                                        type O = string;
                                    }
                                    type start_point = _pt.Optional_Value<string>;
                                }
                                type branch_create = {
                                    readonly 'name': string;
                                    readonly 'start point': _pt.Optional_Value<string>;
                                };
                                namespace cherry_pick {
                                    namespace commits {
                                        type L = string;
                                    }
                                    type commits = _i_core._T_List<null, string>;
                                    namespace mainline {
                                        type O = number;
                                    }
                                    type mainline = _pt.Optional_Value<number>;
                                    type no_commit = boolean;
                                }
                                type cherry_pick = {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                };
                                namespace commit {
                                    type all = boolean;
                                    type amend = boolean;
                                    type message = string;
                                    type no_verify = boolean;
                                    type signoff = boolean;
                                }
                                type commit = {
                                    readonly 'all': boolean;
                                    readonly 'amend': boolean;
                                    readonly 'message': string;
                                    readonly 'no verify': boolean;
                                    readonly 'signoff': boolean;
                                };
                                namespace merge {
                                    type branch = string;
                                    type ff_only = boolean;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type no_commit = boolean;
                                    type no_ff = boolean;
                                }
                                type merge = {
                                    readonly 'branch': string;
                                    readonly 'ff only': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no commit': boolean;
                                    readonly 'no ff': boolean;
                                };
                                namespace pull_rebase_private {
                                    namespace branch {
                                        type O = string;
                                    }
                                    type branch = _pt.Optional_Value<string>;
                                    namespace remote {
                                        type O = string;
                                    }
                                    type remote = _pt.Optional_Value<string>;
                                }
                                type pull_rebase_private = {
                                    readonly 'branch': _pt.Optional_Value<string>;
                                    readonly 'remote': _pt.Optional_Value<string>;
                                };
                                namespace revert {
                                    namespace commits {
                                        type L = string;
                                    }
                                    type commits = _i_core._T_List<null, string>;
                                    namespace mainline {
                                        type O = number;
                                    }
                                    type mainline = _pt.Optional_Value<number>;
                                    type no_commit = boolean;
                                }
                                type revert = {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                };
                                namespace tag_create {
                                    type annotated = boolean;
                                    namespace commit {
                                        type O = string;
                                    }
                                    type commit = _pt.Optional_Value<string>;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type name = string;
                                }
                                type tag_create = {
                                    readonly 'annotated': boolean;
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                };
                            }
                            type SG = readonly [
                                'branch create',
                                {
                                    readonly 'name': string;
                                    readonly 'start point': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'cherry pick',
                                {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                }
                            ] | readonly [
                                'commit',
                                {
                                    readonly 'all': boolean;
                                    readonly 'amend': boolean;
                                    readonly 'message': string;
                                    readonly 'no verify': boolean;
                                    readonly 'signoff': boolean;
                                }
                            ] | readonly [
                                'merge',
                                {
                                    readonly 'branch': string;
                                    readonly 'ff only': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no commit': boolean;
                                    readonly 'no ff': boolean;
                                }
                            ] | readonly [
                                'pull rebase private',
                                {
                                    readonly 'branch': _pt.Optional_Value<string>;
                                    readonly 'remote': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'revert',
                                {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                }
                            ] | readonly [
                                'tag create',
                                {
                                    readonly 'annotated': boolean;
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                }
                            ];
                        }
                        type append = _i_core._T_State_Group<null, readonly [
                            'branch create',
                            {
                                readonly 'name': string;
                                readonly 'start point': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'cherry pick',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'commit',
                            {
                                readonly 'all': boolean;
                                readonly 'amend': boolean;
                                readonly 'message': string;
                                readonly 'no verify': boolean;
                                readonly 'signoff': boolean;
                            }
                        ] | readonly [
                            'merge',
                            {
                                readonly 'branch': string;
                                readonly 'ff only': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no commit': boolean;
                                readonly 'no ff': boolean;
                            }
                        ] | readonly [
                            'pull rebase private',
                            {
                                readonly 'branch': _pt.Optional_Value<string>;
                                readonly 'remote': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'revert',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'tag create',
                            {
                                readonly 'annotated': boolean;
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>;
                        namespace destroy {
                            namespace SG {
                                namespace branch_delete {
                                    type force = boolean;
                                    type name = string;
                                }
                                type branch_delete = {
                                    readonly 'force': boolean;
                                    readonly 'name': string;
                                };
                                namespace commit_amend {
                                    type all = boolean;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type no_edit = boolean;
                                }
                                type commit_amend = {
                                    readonly 'all': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no edit': boolean;
                                };
                                namespace filter_repo {
                                    type force = boolean;
                                    type invert_paths = boolean;
                                    namespace path {
                                        type O = string;
                                    }
                                    type path = _pt.Optional_Value<string>;
                                }
                                type filter_repo = {
                                    readonly 'force': boolean;
                                    readonly 'invert paths': boolean;
                                    readonly 'path': _pt.Optional_Value<string>;
                                };
                                namespace gc {
                                    type aggressive = boolean;
                                    namespace prune {
                                        type O = string;
                                    }
                                    type prune = _pt.Optional_Value<string>;
                                }
                                type gc = {
                                    readonly 'aggressive': boolean;
                                    readonly 'prune': _pt.Optional_Value<string>;
                                };
                                namespace rebase {
                                    type interactive = boolean;
                                    type onto = string;
                                    type preserve_merges = boolean;
                                    namespace strategy {
                                        type O = string;
                                    }
                                    type strategy = _pt.Optional_Value<string>;
                                }
                                type rebase = {
                                    readonly 'interactive': boolean;
                                    readonly 'onto': string;
                                    readonly 'preserve merges': boolean;
                                    readonly 'strategy': _pt.Optional_Value<string>;
                                };
                                namespace reset {
                                    namespace mode {
                                        namespace SG {
                                            namespace hard {
                                            }
                                            type hard = null;
                                            namespace mixed {
                                            }
                                            type mixed = null;
                                            namespace soft {
                                            }
                                            type soft = null;
                                        }
                                        type SG = readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null];
                                    }
                                    type mode = _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                    type target = string;
                                }
                                type reset = {
                                    readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                    readonly 'target': string;
                                };
                                namespace tag_delete {
                                    type name = string;
                                }
                                type tag_delete = {
                                    readonly 'name': string;
                                };
                                namespace tag_force {
                                    namespace commit {
                                        type O = string;
                                    }
                                    type commit = _pt.Optional_Value<string>;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type name = string;
                                }
                                type tag_force = {
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                };
                            }
                            type SG = readonly [
                                'branch delete',
                                {
                                    readonly 'force': boolean;
                                    readonly 'name': string;
                                }
                            ] | readonly [
                                'commit amend',
                                {
                                    readonly 'all': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no edit': boolean;
                                }
                            ] | readonly [
                                'filter repo',
                                {
                                    readonly 'force': boolean;
                                    readonly 'invert paths': boolean;
                                    readonly 'path': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'gc',
                                {
                                    readonly 'aggressive': boolean;
                                    readonly 'prune': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'rebase',
                                {
                                    readonly 'interactive': boolean;
                                    readonly 'onto': string;
                                    readonly 'preserve merges': boolean;
                                    readonly 'strategy': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'reset',
                                {
                                    readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                    readonly 'target': string;
                                }
                            ] | readonly [
                                'tag delete',
                                {
                                    readonly 'name': string;
                                }
                            ] | readonly [
                                'tag force',
                                {
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                }
                            ];
                        }
                        type destroy = _i_core._T_State_Group<null, readonly [
                            'branch delete',
                            {
                                readonly 'force': boolean;
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'commit amend',
                            {
                                readonly 'all': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no edit': boolean;
                            }
                        ] | readonly [
                            'filter repo',
                            {
                                readonly 'force': boolean;
                                readonly 'invert paths': boolean;
                                readonly 'path': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'gc',
                            {
                                readonly 'aggressive': boolean;
                                readonly 'prune': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'rebase',
                            {
                                readonly 'interactive': boolean;
                                readonly 'onto': string;
                                readonly 'preserve merges': boolean;
                                readonly 'strategy': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'reset',
                            {
                                readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                readonly 'target': string;
                            }
                        ] | readonly [
                            'tag delete',
                            {
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'tag force',
                            {
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>;
                    }
                    type SG = readonly [
                        'append',
                        _i_core._T_State_Group<null, readonly [
                            'branch create',
                            {
                                readonly 'name': string;
                                readonly 'start point': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'cherry pick',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'commit',
                            {
                                readonly 'all': boolean;
                                readonly 'amend': boolean;
                                readonly 'message': string;
                                readonly 'no verify': boolean;
                                readonly 'signoff': boolean;
                            }
                        ] | readonly [
                            'merge',
                            {
                                readonly 'branch': string;
                                readonly 'ff only': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no commit': boolean;
                                readonly 'no ff': boolean;
                            }
                        ] | readonly [
                            'pull rebase private',
                            {
                                readonly 'branch': _pt.Optional_Value<string>;
                                readonly 'remote': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'revert',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'tag create',
                            {
                                readonly 'annotated': boolean;
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>
                    ] | readonly [
                        'destroy',
                        _i_core._T_State_Group<null, readonly [
                            'branch delete',
                            {
                                readonly 'force': boolean;
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'commit amend',
                            {
                                readonly 'all': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no edit': boolean;
                            }
                        ] | readonly [
                            'filter repo',
                            {
                                readonly 'force': boolean;
                                readonly 'invert paths': boolean;
                                readonly 'path': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'gc',
                            {
                                readonly 'aggressive': boolean;
                                readonly 'prune': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'rebase',
                            {
                                readonly 'interactive': boolean;
                                readonly 'onto': string;
                                readonly 'preserve merges': boolean;
                                readonly 'strategy': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'reset',
                            {
                                readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                readonly 'target': string;
                            }
                        ] | readonly [
                            'tag delete',
                            {
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'tag force',
                            {
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>
                    ];
                }
                type local_repo = _i_core._T_State_Group<null, readonly [
                    'append',
                    _i_core._T_State_Group<null, readonly [
                        'branch create',
                        {
                            readonly 'name': string;
                            readonly 'start point': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'cherry pick',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'commit',
                        {
                            readonly 'all': boolean;
                            readonly 'amend': boolean;
                            readonly 'message': string;
                            readonly 'no verify': boolean;
                            readonly 'signoff': boolean;
                        }
                    ] | readonly [
                        'merge',
                        {
                            readonly 'branch': string;
                            readonly 'ff only': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no commit': boolean;
                            readonly 'no ff': boolean;
                        }
                    ] | readonly [
                        'pull rebase private',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'revert',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'tag create',
                        {
                            readonly 'annotated': boolean;
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ] | readonly [
                    'destroy',
                    _i_core._T_State_Group<null, readonly [
                        'branch delete',
                        {
                            readonly 'force': boolean;
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'commit amend',
                        {
                            readonly 'all': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no edit': boolean;
                        }
                    ] | readonly [
                        'filter repo',
                        {
                            readonly 'force': boolean;
                            readonly 'invert paths': boolean;
                            readonly 'path': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'gc',
                        {
                            readonly 'aggressive': boolean;
                            readonly 'prune': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'rebase',
                        {
                            readonly 'interactive': boolean;
                            readonly 'onto': string;
                            readonly 'preserve merges': boolean;
                            readonly 'strategy': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'reset',
                        {
                            readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                            readonly 'target': string;
                        }
                    ] | readonly [
                        'tag delete',
                        {
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'tag force',
                        {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ]>;
                namespace remote_repo {
                    namespace SG {
                        namespace clone {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            namespace depth {
                                type O = number;
                            }
                            type depth = _pt.Optional_Value<number>;
                            namespace directory {
                                type O = string;
                            }
                            type directory = _pt.Optional_Value<string>;
                            type recursive = boolean;
                            type url = string;
                        }
                        type clone = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'depth': _pt.Optional_Value<number>;
                            readonly 'directory': _pt.Optional_Value<string>;
                            readonly 'recursive': boolean;
                            readonly 'url': string;
                        };
                        namespace fetch {
                            type all = boolean;
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            type prune = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                        }
                        type fetch = {
                            readonly 'all': boolean;
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'prune': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        };
                        namespace pull {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            type ff_only = boolean;
                            type no_rebase = boolean;
                            type rebase = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                        }
                        type pull = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'ff only': boolean;
                            readonly 'no rebase': boolean;
                            readonly 'rebase': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        };
                        namespace push {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            namespace _delete {
                                type O = string;
                            }
                            type _delete = _pt.Optional_Value<string>;
                            type force = boolean;
                            type force_with_lease = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                            type set_upstream = boolean;
                            type tags = boolean;
                        }
                        type push = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'delete': _pt.Optional_Value<string>;
                            readonly 'force': boolean;
                            readonly 'force with lease': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'set upstream': boolean;
                            readonly 'tags': boolean;
                        };
                        namespace remote_add {
                            type name = string;
                            type url = string;
                        }
                        type remote_add = {
                            readonly 'name': string;
                            readonly 'url': string;
                        };
                        namespace remote_remove {
                            type name = string;
                        }
                        type remote_remove = {
                            readonly 'name': string;
                        };
                    }
                    type SG = readonly [
                        'clone',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'depth': _pt.Optional_Value<number>;
                            readonly 'directory': _pt.Optional_Value<string>;
                            readonly 'recursive': boolean;
                            readonly 'url': string;
                        }
                    ] | readonly [
                        'fetch',
                        {
                            readonly 'all': boolean;
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'prune': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'pull',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'ff only': boolean;
                            readonly 'no rebase': boolean;
                            readonly 'rebase': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'push',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'delete': _pt.Optional_Value<string>;
                            readonly 'force': boolean;
                            readonly 'force with lease': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'set upstream': boolean;
                            readonly 'tags': boolean;
                        }
                    ] | readonly [
                        'remote add',
                        {
                            readonly 'name': string;
                            readonly 'url': string;
                        }
                    ] | readonly [
                        'remote remove',
                        {
                            readonly 'name': string;
                        }
                    ];
                }
                type remote_repo = _i_core._T_State_Group<null, readonly [
                    'clone',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'depth': _pt.Optional_Value<number>;
                        readonly 'directory': _pt.Optional_Value<string>;
                        readonly 'recursive': boolean;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'fetch',
                    {
                        readonly 'all': boolean;
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'prune': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pull',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'ff only': boolean;
                        readonly 'no rebase': boolean;
                        readonly 'rebase': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'delete': _pt.Optional_Value<string>;
                        readonly 'force': boolean;
                        readonly 'force with lease': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'set upstream': boolean;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote add',
                    {
                        readonly 'name': string;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'remote remove',
                    {
                        readonly 'name': string;
                    }
                ]>;
                namespace stash {
                    namespace SG {
                        namespace apply {
                            type index = boolean;
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type apply = {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                        namespace clear {
                        }
                        type clear = null;
                        namespace drop {
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type drop = {
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                        namespace pop {
                            type index = boolean;
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type pop = {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                        namespace push {
                            namespace files {
                                namespace O {
                                    type L = string;
                                }
                                type O = _i_core._T_List<null, string>;
                            }
                            type files = _pt.Optional_Value<_i_core._T_List<null, string>>;
                            type include_untracked = boolean;
                            type keep_index = boolean;
                            namespace message {
                                type O = string;
                            }
                            type message = _pt.Optional_Value<string>;
                        }
                        type push = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'include untracked': boolean;
                            readonly 'keep index': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                        };
                    }
                    type SG = readonly [
                        'apply',
                        {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ] | readonly ['clear', null] | readonly [
                        'drop',
                        {
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'pop',
                        {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'push',
                        {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'include untracked': boolean;
                            readonly 'keep index': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                        }
                    ];
                }
                type stash = _i_core._T_State_Group<null, readonly [
                    'apply',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly ['clear', null] | readonly [
                    'drop',
                    {
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pop',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'include untracked': boolean;
                        readonly 'keep index': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                    }
                ]>;
                namespace workspace {
                    namespace SG {
                        namespace checkout_file {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            type force = boolean;
                        }
                        type checkout_file = {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        };
                        namespace clean {
                            type directories = boolean;
                            type dry_run = boolean;
                            type force = boolean;
                            type ignored = boolean;
                        }
                        type clean = {
                            readonly 'directories': boolean;
                            readonly 'dry run': boolean;
                            readonly 'force': boolean;
                            readonly 'ignored': boolean;
                        };
                        namespace restore {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            namespace source {
                                type O = string;
                            }
                            type source = _pt.Optional_Value<string>;
                            type worktree = boolean;
                        }
                        type restore = {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'source': _pt.Optional_Value<string>;
                            readonly 'worktree': boolean;
                        };
                    }
                    type SG = readonly [
                        'checkout file',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        }
                    ] | readonly [
                        'clean',
                        {
                            readonly 'directories': boolean;
                            readonly 'dry run': boolean;
                            readonly 'force': boolean;
                            readonly 'ignored': boolean;
                        }
                    ] | readonly [
                        'restore',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'source': _pt.Optional_Value<string>;
                            readonly 'worktree': boolean;
                        }
                    ];
                }
                type workspace = _i_core._T_State_Group<null, readonly [
                    'checkout file',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ] | readonly [
                    'clean',
                    {
                        readonly 'directories': boolean;
                        readonly 'dry run': boolean;
                        readonly 'force': boolean;
                        readonly 'ignored': boolean;
                    }
                ] | readonly [
                    'restore',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'source': _pt.Optional_Value<string>;
                        readonly 'worktree': boolean;
                    }
                ]>;
            }
            type SG = readonly [
                'configuration',
                _i_core._T_State_Group<null, readonly [
                    'config set',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                        readonly 'value': string;
                    }
                ] | readonly [
                    'config unset',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>
            ] | readonly [
                'index',
                _i_core._T_State_Group<null, readonly [
                    'add',
                    {
                        readonly 'all': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'patch': boolean;
                        readonly 'update': boolean;
                    }
                ] | readonly [
                    'reset files',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'restore staged',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'rm',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ]>
            ] | readonly [
                'local repo',
                _i_core._T_State_Group<null, readonly [
                    'append',
                    _i_core._T_State_Group<null, readonly [
                        'branch create',
                        {
                            readonly 'name': string;
                            readonly 'start point': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'cherry pick',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'commit',
                        {
                            readonly 'all': boolean;
                            readonly 'amend': boolean;
                            readonly 'message': string;
                            readonly 'no verify': boolean;
                            readonly 'signoff': boolean;
                        }
                    ] | readonly [
                        'merge',
                        {
                            readonly 'branch': string;
                            readonly 'ff only': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no commit': boolean;
                            readonly 'no ff': boolean;
                        }
                    ] | readonly [
                        'pull rebase private',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'revert',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'tag create',
                        {
                            readonly 'annotated': boolean;
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ] | readonly [
                    'destroy',
                    _i_core._T_State_Group<null, readonly [
                        'branch delete',
                        {
                            readonly 'force': boolean;
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'commit amend',
                        {
                            readonly 'all': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no edit': boolean;
                        }
                    ] | readonly [
                        'filter repo',
                        {
                            readonly 'force': boolean;
                            readonly 'invert paths': boolean;
                            readonly 'path': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'gc',
                        {
                            readonly 'aggressive': boolean;
                            readonly 'prune': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'rebase',
                        {
                            readonly 'interactive': boolean;
                            readonly 'onto': string;
                            readonly 'preserve merges': boolean;
                            readonly 'strategy': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'reset',
                        {
                            readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                            readonly 'target': string;
                        }
                    ] | readonly [
                        'tag delete',
                        {
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'tag force',
                        {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ]>
            ] | readonly [
                'remote repo',
                _i_core._T_State_Group<null, readonly [
                    'clone',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'depth': _pt.Optional_Value<number>;
                        readonly 'directory': _pt.Optional_Value<string>;
                        readonly 'recursive': boolean;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'fetch',
                    {
                        readonly 'all': boolean;
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'prune': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pull',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'ff only': boolean;
                        readonly 'no rebase': boolean;
                        readonly 'rebase': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'delete': _pt.Optional_Value<string>;
                        readonly 'force': boolean;
                        readonly 'force with lease': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'set upstream': boolean;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote add',
                    {
                        readonly 'name': string;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'remote remove',
                    {
                        readonly 'name': string;
                    }
                ]>
            ] | readonly [
                'stash',
                _i_core._T_State_Group<null, readonly [
                    'apply',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly ['clear', null] | readonly [
                    'drop',
                    {
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pop',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'include untracked': boolean;
                        readonly 'keep index': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                    }
                ]>
            ] | readonly [
                'workspace',
                _i_core._T_State_Group<null, readonly [
                    'checkout file',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ] | readonly [
                    'clean',
                    {
                        readonly 'directories': boolean;
                        readonly 'dry run': boolean;
                        readonly 'force': boolean;
                        readonly 'ignored': boolean;
                    }
                ] | readonly [
                    'restore',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'source': _pt.Optional_Value<string>;
                        readonly 'worktree': boolean;
                    }
                ]>
            ];
        }
        type change = _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config set',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                    readonly 'value': string;
                }
            ] | readonly [
                'config unset',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'add',
                {
                    readonly 'all': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'patch': boolean;
                    readonly 'update': boolean;
                }
            ] | readonly [
                'reset files',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'restore staged',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'rm',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'append',
                _i_core._T_State_Group<null, readonly [
                    'branch create',
                    {
                        readonly 'name': string;
                        readonly 'start point': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'cherry pick',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'commit',
                    {
                        readonly 'all': boolean;
                        readonly 'amend': boolean;
                        readonly 'message': string;
                        readonly 'no verify': boolean;
                        readonly 'signoff': boolean;
                    }
                ] | readonly [
                    'merge',
                    {
                        readonly 'branch': string;
                        readonly 'ff only': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no commit': boolean;
                        readonly 'no ff': boolean;
                    }
                ] | readonly [
                    'pull rebase private',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'revert',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'tag create',
                    {
                        readonly 'annotated': boolean;
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ] | readonly [
                'destroy',
                _i_core._T_State_Group<null, readonly [
                    'branch delete',
                    {
                        readonly 'force': boolean;
                        readonly 'name': string;
                    }
                ] | readonly [
                    'commit amend',
                    {
                        readonly 'all': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no edit': boolean;
                    }
                ] | readonly [
                    'filter repo',
                    {
                        readonly 'force': boolean;
                        readonly 'invert paths': boolean;
                        readonly 'path': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'gc',
                    {
                        readonly 'aggressive': boolean;
                        readonly 'prune': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'rebase',
                    {
                        readonly 'interactive': boolean;
                        readonly 'onto': string;
                        readonly 'preserve merges': boolean;
                        readonly 'strategy': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reset',
                    {
                        readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                        readonly 'target': string;
                    }
                ] | readonly [
                    'tag delete',
                    {
                        readonly 'name': string;
                    }
                ] | readonly [
                    'tag force',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'clone',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'depth': _pt.Optional_Value<number>;
                    readonly 'directory': _pt.Optional_Value<string>;
                    readonly 'recursive': boolean;
                    readonly 'url': string;
                }
            ] | readonly [
                'fetch',
                {
                    readonly 'all': boolean;
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'prune': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pull',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'ff only': boolean;
                    readonly 'no rebase': boolean;
                    readonly 'rebase': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'delete': _pt.Optional_Value<string>;
                    readonly 'force': boolean;
                    readonly 'force with lease': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'set upstream': boolean;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote add',
                {
                    readonly 'name': string;
                    readonly 'url': string;
                }
            ] | readonly [
                'remote remove',
                {
                    readonly 'name': string;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'apply',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly ['clear', null] | readonly [
                'drop',
                {
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pop',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'include untracked': boolean;
                    readonly 'keep index': boolean;
                    readonly 'message': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'checkout file',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ] | readonly [
                'clean',
                {
                    readonly 'directories': boolean;
                    readonly 'dry run': boolean;
                    readonly 'force': boolean;
                    readonly 'ignored': boolean;
                }
            ] | readonly [
                'restore',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'source': _pt.Optional_Value<string>;
                    readonly 'worktree': boolean;
                }
            ]>
        ]>;
        namespace view {
            namespace SG {
                namespace configuration {
                    namespace SG {
                        namespace config {
                            type global = boolean;
                            namespace key {
                                type O = string;
                            }
                            type key = _pt.Optional_Value<string>;
                            type list = boolean;
                            type local = boolean;
                            type system = boolean;
                        }
                        type config = {
                            readonly 'global': boolean;
                            readonly 'key': _pt.Optional_Value<string>;
                            readonly 'list': boolean;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        };
                    }
                    type SG = readonly [
                        'config',
                        {
                            readonly 'global': boolean;
                            readonly 'key': _pt.Optional_Value<string>;
                            readonly 'list': boolean;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        }
                    ];
                }
                type configuration = _i_core._T_State_Group<null, readonly [
                    'config',
                    {
                        readonly 'global': boolean;
                        readonly 'key': _pt.Optional_Value<string>;
                        readonly 'list': boolean;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>;
                namespace index {
                    namespace SG {
                        namespace diff_cached {
                            namespace files {
                                namespace O {
                                    type L = string;
                                }
                                type O = _i_core._T_List<null, string>;
                            }
                            type files = _pt.Optional_Value<_i_core._T_List<null, string>>;
                            type name_only = boolean;
                            type stat = boolean;
                        }
                        type diff_cached = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        };
                        namespace status {
                            namespace porcelain {
                                type O = string;
                            }
                            type porcelain = _pt.Optional_Value<string>;
                            type short = boolean;
                        }
                        type status = {
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                        };
                    }
                    type SG = readonly [
                        'diff cached',
                        {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        }
                    ] | readonly [
                        'status',
                        {
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                        }
                    ];
                }
                type index = _i_core._T_State_Group<null, readonly [
                    'diff cached',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                    }
                ]>;
                namespace local_repo {
                    namespace SG {
                        namespace branch {
                            type all = boolean;
                            type remote = boolean;
                            type verbose = boolean;
                        }
                        type branch = {
                            readonly 'all': boolean;
                            readonly 'remote': boolean;
                            readonly 'verbose': boolean;
                        };
                        namespace log {
                            type all = boolean;
                            namespace author {
                                type O = string;
                            }
                            type author = _pt.Optional_Value<string>;
                            type graph = boolean;
                            namespace grep {
                                type O = string;
                            }
                            type grep = _pt.Optional_Value<string>;
                            namespace max_count {
                                type O = number;
                            }
                            type max_count = _pt.Optional_Value<number>;
                            type oneline = boolean;
                            namespace since {
                                type O = string;
                            }
                            type since = _pt.Optional_Value<string>;
                            namespace until {
                                type O = string;
                            }
                            type until = _pt.Optional_Value<string>;
                        }
                        type log = {
                            readonly 'all': boolean;
                            readonly 'author': _pt.Optional_Value<string>;
                            readonly 'graph': boolean;
                            readonly 'grep': _pt.Optional_Value<string>;
                            readonly 'max count': _pt.Optional_Value<number>;
                            readonly 'oneline': boolean;
                            readonly 'since': _pt.Optional_Value<string>;
                            readonly 'until': _pt.Optional_Value<string>;
                        };
                        namespace reflog {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            type oneline = boolean;
                        }
                        type reflog = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'oneline': boolean;
                        };
                        namespace tag {
                            namespace list {
                                type O = string;
                            }
                            type list = _pt.Optional_Value<string>;
                        }
                        type tag = {
                            readonly 'list': _pt.Optional_Value<string>;
                        };
                    }
                    type SG = readonly [
                        'branch',
                        {
                            readonly 'all': boolean;
                            readonly 'remote': boolean;
                            readonly 'verbose': boolean;
                        }
                    ] | readonly [
                        'log',
                        {
                            readonly 'all': boolean;
                            readonly 'author': _pt.Optional_Value<string>;
                            readonly 'graph': boolean;
                            readonly 'grep': _pt.Optional_Value<string>;
                            readonly 'max count': _pt.Optional_Value<number>;
                            readonly 'oneline': boolean;
                            readonly 'since': _pt.Optional_Value<string>;
                            readonly 'until': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'reflog',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'oneline': boolean;
                        }
                    ] | readonly [
                        'tag',
                        {
                            readonly 'list': _pt.Optional_Value<string>;
                        }
                    ];
                }
                type local_repo = _i_core._T_State_Group<null, readonly [
                    'branch',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': boolean;
                        readonly 'verbose': boolean;
                    }
                ] | readonly [
                    'log',
                    {
                        readonly 'all': boolean;
                        readonly 'author': _pt.Optional_Value<string>;
                        readonly 'graph': boolean;
                        readonly 'grep': _pt.Optional_Value<string>;
                        readonly 'max count': _pt.Optional_Value<number>;
                        readonly 'oneline': boolean;
                        readonly 'since': _pt.Optional_Value<string>;
                        readonly 'until': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reflog',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'tag',
                    {
                        readonly 'list': _pt.Optional_Value<string>;
                    }
                ]>;
                namespace remote_repo {
                    namespace SG {
                        namespace fetch_dry_run {
                            type all = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                        }
                        type fetch_dry_run = {
                            readonly 'all': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        };
                        namespace ls_remote {
                            type heads = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                            type tags = boolean;
                        }
                        type ls_remote = {
                            readonly 'heads': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'tags': boolean;
                        };
                        namespace remote {
                            type verbose = boolean;
                        }
                        type remote = {
                            readonly 'verbose': boolean;
                        };
                    }
                    type SG = readonly [
                        'fetch dry run',
                        {
                            readonly 'all': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'ls remote',
                        {
                            readonly 'heads': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'tags': boolean;
                        }
                    ] | readonly [
                        'remote',
                        {
                            readonly 'verbose': boolean;
                        }
                    ];
                }
                type remote_repo = _i_core._T_State_Group<null, readonly [
                    'fetch dry run',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'ls remote',
                    {
                        readonly 'heads': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote',
                    {
                        readonly 'verbose': boolean;
                    }
                ]>;
                namespace stash {
                    namespace SG {
                        namespace list {
                            type oneline = boolean;
                        }
                        type list = {
                            readonly 'oneline': boolean;
                        };
                        namespace show {
                            type patch = boolean;
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type show = {
                            readonly 'patch': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                    }
                    type SG = readonly [
                        'list',
                        {
                            readonly 'oneline': boolean;
                        }
                    ] | readonly [
                        'show',
                        {
                            readonly 'patch': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ];
                }
                type stash = _i_core._T_State_Group<null, readonly [
                    'list',
                    {
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'patch': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ]>;
                namespace workspace {
                    namespace SG {
                        namespace diff {
                            type cached = boolean;
                            namespace files {
                                namespace O {
                                    type L = string;
                                }
                                type O = _i_core._T_List<null, string>;
                            }
                            type files = _pt.Optional_Value<_i_core._T_List<null, string>>;
                            type name_only = boolean;
                            type stat = boolean;
                        }
                        type diff = {
                            readonly 'cached': boolean;
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        };
                        namespace show {
                            namespace commit {
                                type O = string;
                            }
                            type commit = _pt.Optional_Value<string>;
                            type name_only = boolean;
                            type stat = boolean;
                        }
                        type show = {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        };
                        namespace status {
                            type branch = boolean;
                            namespace porcelain {
                                type O = string;
                            }
                            type porcelain = _pt.Optional_Value<string>;
                            type short = boolean;
                            type show_stash = boolean;
                        }
                        type status = {
                            readonly 'branch': boolean;
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                            readonly 'show stash': boolean;
                        };
                    }
                    type SG = readonly [
                        'diff',
                        {
                            readonly 'cached': boolean;
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        }
                    ] | readonly [
                        'show',
                        {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        }
                    ] | readonly [
                        'status',
                        {
                            readonly 'branch': boolean;
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                            readonly 'show stash': boolean;
                        }
                    ];
                }
                type workspace = _i_core._T_State_Group<null, readonly [
                    'diff',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'branch': boolean;
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                        readonly 'show stash': boolean;
                    }
                ]>;
            }
            type SG = readonly [
                'configuration',
                _i_core._T_State_Group<null, readonly [
                    'config',
                    {
                        readonly 'global': boolean;
                        readonly 'key': _pt.Optional_Value<string>;
                        readonly 'list': boolean;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>
            ] | readonly [
                'index',
                _i_core._T_State_Group<null, readonly [
                    'diff cached',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                    }
                ]>
            ] | readonly [
                'local repo',
                _i_core._T_State_Group<null, readonly [
                    'branch',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': boolean;
                        readonly 'verbose': boolean;
                    }
                ] | readonly [
                    'log',
                    {
                        readonly 'all': boolean;
                        readonly 'author': _pt.Optional_Value<string>;
                        readonly 'graph': boolean;
                        readonly 'grep': _pt.Optional_Value<string>;
                        readonly 'max count': _pt.Optional_Value<number>;
                        readonly 'oneline': boolean;
                        readonly 'since': _pt.Optional_Value<string>;
                        readonly 'until': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reflog',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'tag',
                    {
                        readonly 'list': _pt.Optional_Value<string>;
                    }
                ]>
            ] | readonly [
                'remote repo',
                _i_core._T_State_Group<null, readonly [
                    'fetch dry run',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'ls remote',
                    {
                        readonly 'heads': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote',
                    {
                        readonly 'verbose': boolean;
                    }
                ]>
            ] | readonly [
                'stash',
                _i_core._T_State_Group<null, readonly [
                    'list',
                    {
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'patch': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ]>
            ] | readonly [
                'workspace',
                _i_core._T_State_Group<null, readonly [
                    'diff',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'branch': boolean;
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                        readonly 'show stash': boolean;
                    }
                ]>
            ];
        }
        type view = _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config',
                {
                    readonly 'global': boolean;
                    readonly 'key': _pt.Optional_Value<string>;
                    readonly 'list': boolean;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'diff cached',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'branch',
                {
                    readonly 'all': boolean;
                    readonly 'remote': boolean;
                    readonly 'verbose': boolean;
                }
            ] | readonly [
                'log',
                {
                    readonly 'all': boolean;
                    readonly 'author': _pt.Optional_Value<string>;
                    readonly 'graph': boolean;
                    readonly 'grep': _pt.Optional_Value<string>;
                    readonly 'max count': _pt.Optional_Value<number>;
                    readonly 'oneline': boolean;
                    readonly 'since': _pt.Optional_Value<string>;
                    readonly 'until': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'reflog',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'tag',
                {
                    readonly 'list': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'fetch dry run',
                {
                    readonly 'all': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'ls remote',
                {
                    readonly 'heads': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote',
                {
                    readonly 'verbose': boolean;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'list',
                {
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'patch': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'diff',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'commit': _pt.Optional_Value<string>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'branch': boolean;
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                    readonly 'show stash': boolean;
                }
            ]>
        ]>;
    }
    type SG = readonly [
        'change',
        _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config set',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                    readonly 'value': string;
                }
            ] | readonly [
                'config unset',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'add',
                {
                    readonly 'all': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'patch': boolean;
                    readonly 'update': boolean;
                }
            ] | readonly [
                'reset files',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'restore staged',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'rm',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'append',
                _i_core._T_State_Group<null, readonly [
                    'branch create',
                    {
                        readonly 'name': string;
                        readonly 'start point': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'cherry pick',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'commit',
                    {
                        readonly 'all': boolean;
                        readonly 'amend': boolean;
                        readonly 'message': string;
                        readonly 'no verify': boolean;
                        readonly 'signoff': boolean;
                    }
                ] | readonly [
                    'merge',
                    {
                        readonly 'branch': string;
                        readonly 'ff only': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no commit': boolean;
                        readonly 'no ff': boolean;
                    }
                ] | readonly [
                    'pull rebase private',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'revert',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'tag create',
                    {
                        readonly 'annotated': boolean;
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ] | readonly [
                'destroy',
                _i_core._T_State_Group<null, readonly [
                    'branch delete',
                    {
                        readonly 'force': boolean;
                        readonly 'name': string;
                    }
                ] | readonly [
                    'commit amend',
                    {
                        readonly 'all': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no edit': boolean;
                    }
                ] | readonly [
                    'filter repo',
                    {
                        readonly 'force': boolean;
                        readonly 'invert paths': boolean;
                        readonly 'path': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'gc',
                    {
                        readonly 'aggressive': boolean;
                        readonly 'prune': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'rebase',
                    {
                        readonly 'interactive': boolean;
                        readonly 'onto': string;
                        readonly 'preserve merges': boolean;
                        readonly 'strategy': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reset',
                    {
                        readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                        readonly 'target': string;
                    }
                ] | readonly [
                    'tag delete',
                    {
                        readonly 'name': string;
                    }
                ] | readonly [
                    'tag force',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'clone',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'depth': _pt.Optional_Value<number>;
                    readonly 'directory': _pt.Optional_Value<string>;
                    readonly 'recursive': boolean;
                    readonly 'url': string;
                }
            ] | readonly [
                'fetch',
                {
                    readonly 'all': boolean;
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'prune': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pull',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'ff only': boolean;
                    readonly 'no rebase': boolean;
                    readonly 'rebase': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'delete': _pt.Optional_Value<string>;
                    readonly 'force': boolean;
                    readonly 'force with lease': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'set upstream': boolean;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote add',
                {
                    readonly 'name': string;
                    readonly 'url': string;
                }
            ] | readonly [
                'remote remove',
                {
                    readonly 'name': string;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'apply',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly ['clear', null] | readonly [
                'drop',
                {
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pop',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'include untracked': boolean;
                    readonly 'keep index': boolean;
                    readonly 'message': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'checkout file',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ] | readonly [
                'clean',
                {
                    readonly 'directories': boolean;
                    readonly 'dry run': boolean;
                    readonly 'force': boolean;
                    readonly 'ignored': boolean;
                }
            ] | readonly [
                'restore',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'source': _pt.Optional_Value<string>;
                    readonly 'worktree': boolean;
                }
            ]>
        ]>
    ] | readonly [
        'view',
        _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config',
                {
                    readonly 'global': boolean;
                    readonly 'key': _pt.Optional_Value<string>;
                    readonly 'list': boolean;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'diff cached',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'branch',
                {
                    readonly 'all': boolean;
                    readonly 'remote': boolean;
                    readonly 'verbose': boolean;
                }
            ] | readonly [
                'log',
                {
                    readonly 'all': boolean;
                    readonly 'author': _pt.Optional_Value<string>;
                    readonly 'graph': boolean;
                    readonly 'grep': _pt.Optional_Value<string>;
                    readonly 'max count': _pt.Optional_Value<number>;
                    readonly 'oneline': boolean;
                    readonly 'since': _pt.Optional_Value<string>;
                    readonly 'until': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'reflog',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'tag',
                {
                    readonly 'list': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'fetch dry run',
                {
                    readonly 'all': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'ls remote',
                {
                    readonly 'heads': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote',
                {
                    readonly 'verbose': boolean;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'list',
                {
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'patch': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'diff',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'commit': _pt.Optional_Value<string>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'branch': boolean;
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                    readonly 'show stash': boolean;
                }
            ]>
        ]>
    ];
}
export declare namespace _T_Safety_Level {
    namespace SG {
        namespace destructive {
            namespace areas_affected {
                type L = string;
            }
            type areas_affected = _i_core._T_List<null, string>;
            type description = string;
            type warning = string;
        }
        type destructive = {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
            readonly 'warning': string;
        };
        namespace risky {
            namespace areas_affected {
                type L = string;
            }
            type areas_affected = _i_core._T_List<null, string>;
            type description = string;
        }
        type risky = {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
        };
        namespace safe {
            type description = string;
        }
        type safe = {
            readonly 'description': string;
        };
    }
    type SG = readonly [
        'destructive',
        {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
            readonly 'warning': string;
        }
    ] | readonly [
        'risky',
        {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
        }
    ] | readonly [
        'safe',
        {
            readonly 'description': string;
        }
    ];
}
export declare namespace Command_Result {
    namespace affected_areas {
        type L = string;
    }
    type affected_areas = _i_core._T_List<null, string>;
    type command_line = string;
    type requires_force_push = boolean;
    type safety_level = string;
}
export declare namespace Git_Command {
    namespace SG {
        namespace change {
            namespace SG {
                namespace configuration {
                    namespace SG {
                        namespace config_set {
                            type global = boolean;
                            type key = string;
                            type local = boolean;
                            type system = boolean;
                            type value = string;
                        }
                        type config_set = {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                            readonly 'value': string;
                        };
                        namespace config_unset {
                            type global = boolean;
                            type key = string;
                            type local = boolean;
                            type system = boolean;
                        }
                        type config_unset = {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        };
                    }
                    type SG = readonly [
                        'config set',
                        {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                            readonly 'value': string;
                        }
                    ] | readonly [
                        'config unset',
                        {
                            readonly 'global': boolean;
                            readonly 'key': string;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        }
                    ];
                }
                type configuration = _i_core._T_State_Group<null, readonly [
                    'config set',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                        readonly 'value': string;
                    }
                ] | readonly [
                    'config unset',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>;
                namespace index {
                    namespace SG {
                        namespace add {
                            type all = boolean;
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            type patch = boolean;
                            type update = boolean;
                        }
                        type add = {
                            readonly 'all': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'patch': boolean;
                            readonly 'update': boolean;
                        };
                        namespace reset_files {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                        }
                        type reset_files = {
                            readonly 'files': _i_core._T_List<null, string>;
                        };
                        namespace restore_staged {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                        }
                        type restore_staged = {
                            readonly 'files': _i_core._T_List<null, string>;
                        };
                        namespace rm {
                            type cached = boolean;
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            type force = boolean;
                        }
                        type rm = {
                            readonly 'cached': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        };
                    }
                    type SG = readonly [
                        'add',
                        {
                            readonly 'all': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'patch': boolean;
                            readonly 'update': boolean;
                        }
                    ] | readonly [
                        'reset files',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                        }
                    ] | readonly [
                        'restore staged',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                        }
                    ] | readonly [
                        'rm',
                        {
                            readonly 'cached': boolean;
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        }
                    ];
                }
                type index = _i_core._T_State_Group<null, readonly [
                    'add',
                    {
                        readonly 'all': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'patch': boolean;
                        readonly 'update': boolean;
                    }
                ] | readonly [
                    'reset files',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'restore staged',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'rm',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ]>;
                namespace local_repo {
                    namespace SG {
                        namespace append {
                            namespace SG {
                                namespace branch_create {
                                    type name = string;
                                    namespace start_point {
                                        type O = string;
                                    }
                                    type start_point = _pt.Optional_Value<string>;
                                }
                                type branch_create = {
                                    readonly 'name': string;
                                    readonly 'start point': _pt.Optional_Value<string>;
                                };
                                namespace cherry_pick {
                                    namespace commits {
                                        type L = string;
                                    }
                                    type commits = _i_core._T_List<null, string>;
                                    namespace mainline {
                                        type O = number;
                                    }
                                    type mainline = _pt.Optional_Value<number>;
                                    type no_commit = boolean;
                                }
                                type cherry_pick = {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                };
                                namespace commit {
                                    type all = boolean;
                                    type amend = boolean;
                                    type message = string;
                                    type no_verify = boolean;
                                    type signoff = boolean;
                                }
                                type commit = {
                                    readonly 'all': boolean;
                                    readonly 'amend': boolean;
                                    readonly 'message': string;
                                    readonly 'no verify': boolean;
                                    readonly 'signoff': boolean;
                                };
                                namespace merge {
                                    type branch = string;
                                    type ff_only = boolean;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type no_commit = boolean;
                                    type no_ff = boolean;
                                }
                                type merge = {
                                    readonly 'branch': string;
                                    readonly 'ff only': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no commit': boolean;
                                    readonly 'no ff': boolean;
                                };
                                namespace pull_rebase_private {
                                    namespace branch {
                                        type O = string;
                                    }
                                    type branch = _pt.Optional_Value<string>;
                                    namespace remote {
                                        type O = string;
                                    }
                                    type remote = _pt.Optional_Value<string>;
                                }
                                type pull_rebase_private = {
                                    readonly 'branch': _pt.Optional_Value<string>;
                                    readonly 'remote': _pt.Optional_Value<string>;
                                };
                                namespace revert {
                                    namespace commits {
                                        type L = string;
                                    }
                                    type commits = _i_core._T_List<null, string>;
                                    namespace mainline {
                                        type O = number;
                                    }
                                    type mainline = _pt.Optional_Value<number>;
                                    type no_commit = boolean;
                                }
                                type revert = {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                };
                                namespace tag_create {
                                    type annotated = boolean;
                                    namespace commit {
                                        type O = string;
                                    }
                                    type commit = _pt.Optional_Value<string>;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type name = string;
                                }
                                type tag_create = {
                                    readonly 'annotated': boolean;
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                };
                            }
                            type SG = readonly [
                                'branch create',
                                {
                                    readonly 'name': string;
                                    readonly 'start point': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'cherry pick',
                                {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                }
                            ] | readonly [
                                'commit',
                                {
                                    readonly 'all': boolean;
                                    readonly 'amend': boolean;
                                    readonly 'message': string;
                                    readonly 'no verify': boolean;
                                    readonly 'signoff': boolean;
                                }
                            ] | readonly [
                                'merge',
                                {
                                    readonly 'branch': string;
                                    readonly 'ff only': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no commit': boolean;
                                    readonly 'no ff': boolean;
                                }
                            ] | readonly [
                                'pull rebase private',
                                {
                                    readonly 'branch': _pt.Optional_Value<string>;
                                    readonly 'remote': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'revert',
                                {
                                    readonly 'commits': _i_core._T_List<null, string>;
                                    readonly 'mainline': _pt.Optional_Value<number>;
                                    readonly 'no commit': boolean;
                                }
                            ] | readonly [
                                'tag create',
                                {
                                    readonly 'annotated': boolean;
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                }
                            ];
                        }
                        type append = _i_core._T_State_Group<null, readonly [
                            'branch create',
                            {
                                readonly 'name': string;
                                readonly 'start point': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'cherry pick',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'commit',
                            {
                                readonly 'all': boolean;
                                readonly 'amend': boolean;
                                readonly 'message': string;
                                readonly 'no verify': boolean;
                                readonly 'signoff': boolean;
                            }
                        ] | readonly [
                            'merge',
                            {
                                readonly 'branch': string;
                                readonly 'ff only': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no commit': boolean;
                                readonly 'no ff': boolean;
                            }
                        ] | readonly [
                            'pull rebase private',
                            {
                                readonly 'branch': _pt.Optional_Value<string>;
                                readonly 'remote': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'revert',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'tag create',
                            {
                                readonly 'annotated': boolean;
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>;
                        namespace destroy {
                            namespace SG {
                                namespace branch_delete {
                                    type force = boolean;
                                    type name = string;
                                }
                                type branch_delete = {
                                    readonly 'force': boolean;
                                    readonly 'name': string;
                                };
                                namespace commit_amend {
                                    type all = boolean;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type no_edit = boolean;
                                }
                                type commit_amend = {
                                    readonly 'all': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no edit': boolean;
                                };
                                namespace filter_repo {
                                    type force = boolean;
                                    type invert_paths = boolean;
                                    namespace path {
                                        type O = string;
                                    }
                                    type path = _pt.Optional_Value<string>;
                                }
                                type filter_repo = {
                                    readonly 'force': boolean;
                                    readonly 'invert paths': boolean;
                                    readonly 'path': _pt.Optional_Value<string>;
                                };
                                namespace gc {
                                    type aggressive = boolean;
                                    namespace prune {
                                        type O = string;
                                    }
                                    type prune = _pt.Optional_Value<string>;
                                }
                                type gc = {
                                    readonly 'aggressive': boolean;
                                    readonly 'prune': _pt.Optional_Value<string>;
                                };
                                namespace rebase {
                                    type interactive = boolean;
                                    type onto = string;
                                    type preserve_merges = boolean;
                                    namespace strategy {
                                        type O = string;
                                    }
                                    type strategy = _pt.Optional_Value<string>;
                                }
                                type rebase = {
                                    readonly 'interactive': boolean;
                                    readonly 'onto': string;
                                    readonly 'preserve merges': boolean;
                                    readonly 'strategy': _pt.Optional_Value<string>;
                                };
                                namespace reset {
                                    namespace mode {
                                        namespace SG {
                                            namespace hard {
                                            }
                                            type hard = null;
                                            namespace mixed {
                                            }
                                            type mixed = null;
                                            namespace soft {
                                            }
                                            type soft = null;
                                        }
                                        type SG = readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null];
                                    }
                                    type mode = _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                    type target = string;
                                }
                                type reset = {
                                    readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                    readonly 'target': string;
                                };
                                namespace tag_delete {
                                    type name = string;
                                }
                                type tag_delete = {
                                    readonly 'name': string;
                                };
                                namespace tag_force {
                                    namespace commit {
                                        type O = string;
                                    }
                                    type commit = _pt.Optional_Value<string>;
                                    namespace message {
                                        type O = string;
                                    }
                                    type message = _pt.Optional_Value<string>;
                                    type name = string;
                                }
                                type tag_force = {
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                };
                            }
                            type SG = readonly [
                                'branch delete',
                                {
                                    readonly 'force': boolean;
                                    readonly 'name': string;
                                }
                            ] | readonly [
                                'commit amend',
                                {
                                    readonly 'all': boolean;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'no edit': boolean;
                                }
                            ] | readonly [
                                'filter repo',
                                {
                                    readonly 'force': boolean;
                                    readonly 'invert paths': boolean;
                                    readonly 'path': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'gc',
                                {
                                    readonly 'aggressive': boolean;
                                    readonly 'prune': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'rebase',
                                {
                                    readonly 'interactive': boolean;
                                    readonly 'onto': string;
                                    readonly 'preserve merges': boolean;
                                    readonly 'strategy': _pt.Optional_Value<string>;
                                }
                            ] | readonly [
                                'reset',
                                {
                                    readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                    readonly 'target': string;
                                }
                            ] | readonly [
                                'tag delete',
                                {
                                    readonly 'name': string;
                                }
                            ] | readonly [
                                'tag force',
                                {
                                    readonly 'commit': _pt.Optional_Value<string>;
                                    readonly 'message': _pt.Optional_Value<string>;
                                    readonly 'name': string;
                                }
                            ];
                        }
                        type destroy = _i_core._T_State_Group<null, readonly [
                            'branch delete',
                            {
                                readonly 'force': boolean;
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'commit amend',
                            {
                                readonly 'all': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no edit': boolean;
                            }
                        ] | readonly [
                            'filter repo',
                            {
                                readonly 'force': boolean;
                                readonly 'invert paths': boolean;
                                readonly 'path': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'gc',
                            {
                                readonly 'aggressive': boolean;
                                readonly 'prune': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'rebase',
                            {
                                readonly 'interactive': boolean;
                                readonly 'onto': string;
                                readonly 'preserve merges': boolean;
                                readonly 'strategy': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'reset',
                            {
                                readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                readonly 'target': string;
                            }
                        ] | readonly [
                            'tag delete',
                            {
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'tag force',
                            {
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>;
                    }
                    type SG = readonly [
                        'append',
                        _i_core._T_State_Group<null, readonly [
                            'branch create',
                            {
                                readonly 'name': string;
                                readonly 'start point': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'cherry pick',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'commit',
                            {
                                readonly 'all': boolean;
                                readonly 'amend': boolean;
                                readonly 'message': string;
                                readonly 'no verify': boolean;
                                readonly 'signoff': boolean;
                            }
                        ] | readonly [
                            'merge',
                            {
                                readonly 'branch': string;
                                readonly 'ff only': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no commit': boolean;
                                readonly 'no ff': boolean;
                            }
                        ] | readonly [
                            'pull rebase private',
                            {
                                readonly 'branch': _pt.Optional_Value<string>;
                                readonly 'remote': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'revert',
                            {
                                readonly 'commits': _i_core._T_List<null, string>;
                                readonly 'mainline': _pt.Optional_Value<number>;
                                readonly 'no commit': boolean;
                            }
                        ] | readonly [
                            'tag create',
                            {
                                readonly 'annotated': boolean;
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>
                    ] | readonly [
                        'destroy',
                        _i_core._T_State_Group<null, readonly [
                            'branch delete',
                            {
                                readonly 'force': boolean;
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'commit amend',
                            {
                                readonly 'all': boolean;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'no edit': boolean;
                            }
                        ] | readonly [
                            'filter repo',
                            {
                                readonly 'force': boolean;
                                readonly 'invert paths': boolean;
                                readonly 'path': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'gc',
                            {
                                readonly 'aggressive': boolean;
                                readonly 'prune': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'rebase',
                            {
                                readonly 'interactive': boolean;
                                readonly 'onto': string;
                                readonly 'preserve merges': boolean;
                                readonly 'strategy': _pt.Optional_Value<string>;
                            }
                        ] | readonly [
                            'reset',
                            {
                                readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                                readonly 'target': string;
                            }
                        ] | readonly [
                            'tag delete',
                            {
                                readonly 'name': string;
                            }
                        ] | readonly [
                            'tag force',
                            {
                                readonly 'commit': _pt.Optional_Value<string>;
                                readonly 'message': _pt.Optional_Value<string>;
                                readonly 'name': string;
                            }
                        ]>
                    ];
                }
                type local_repo = _i_core._T_State_Group<null, readonly [
                    'append',
                    _i_core._T_State_Group<null, readonly [
                        'branch create',
                        {
                            readonly 'name': string;
                            readonly 'start point': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'cherry pick',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'commit',
                        {
                            readonly 'all': boolean;
                            readonly 'amend': boolean;
                            readonly 'message': string;
                            readonly 'no verify': boolean;
                            readonly 'signoff': boolean;
                        }
                    ] | readonly [
                        'merge',
                        {
                            readonly 'branch': string;
                            readonly 'ff only': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no commit': boolean;
                            readonly 'no ff': boolean;
                        }
                    ] | readonly [
                        'pull rebase private',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'revert',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'tag create',
                        {
                            readonly 'annotated': boolean;
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ] | readonly [
                    'destroy',
                    _i_core._T_State_Group<null, readonly [
                        'branch delete',
                        {
                            readonly 'force': boolean;
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'commit amend',
                        {
                            readonly 'all': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no edit': boolean;
                        }
                    ] | readonly [
                        'filter repo',
                        {
                            readonly 'force': boolean;
                            readonly 'invert paths': boolean;
                            readonly 'path': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'gc',
                        {
                            readonly 'aggressive': boolean;
                            readonly 'prune': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'rebase',
                        {
                            readonly 'interactive': boolean;
                            readonly 'onto': string;
                            readonly 'preserve merges': boolean;
                            readonly 'strategy': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'reset',
                        {
                            readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                            readonly 'target': string;
                        }
                    ] | readonly [
                        'tag delete',
                        {
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'tag force',
                        {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ]>;
                namespace remote_repo {
                    namespace SG {
                        namespace clone {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            namespace depth {
                                type O = number;
                            }
                            type depth = _pt.Optional_Value<number>;
                            namespace directory {
                                type O = string;
                            }
                            type directory = _pt.Optional_Value<string>;
                            type recursive = boolean;
                            type url = string;
                        }
                        type clone = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'depth': _pt.Optional_Value<number>;
                            readonly 'directory': _pt.Optional_Value<string>;
                            readonly 'recursive': boolean;
                            readonly 'url': string;
                        };
                        namespace fetch {
                            type all = boolean;
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            type prune = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                        }
                        type fetch = {
                            readonly 'all': boolean;
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'prune': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        };
                        namespace pull {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            type ff_only = boolean;
                            type no_rebase = boolean;
                            type rebase = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                        }
                        type pull = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'ff only': boolean;
                            readonly 'no rebase': boolean;
                            readonly 'rebase': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        };
                        namespace push {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            namespace _delete {
                                type O = string;
                            }
                            type _delete = _pt.Optional_Value<string>;
                            type force = boolean;
                            type force_with_lease = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                            type set_upstream = boolean;
                            type tags = boolean;
                        }
                        type push = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'delete': _pt.Optional_Value<string>;
                            readonly 'force': boolean;
                            readonly 'force with lease': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'set upstream': boolean;
                            readonly 'tags': boolean;
                        };
                        namespace remote_add {
                            type name = string;
                            type url = string;
                        }
                        type remote_add = {
                            readonly 'name': string;
                            readonly 'url': string;
                        };
                        namespace remote_remove {
                            type name = string;
                        }
                        type remote_remove = {
                            readonly 'name': string;
                        };
                    }
                    type SG = readonly [
                        'clone',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'depth': _pt.Optional_Value<number>;
                            readonly 'directory': _pt.Optional_Value<string>;
                            readonly 'recursive': boolean;
                            readonly 'url': string;
                        }
                    ] | readonly [
                        'fetch',
                        {
                            readonly 'all': boolean;
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'prune': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'pull',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'ff only': boolean;
                            readonly 'no rebase': boolean;
                            readonly 'rebase': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'push',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'delete': _pt.Optional_Value<string>;
                            readonly 'force': boolean;
                            readonly 'force with lease': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'set upstream': boolean;
                            readonly 'tags': boolean;
                        }
                    ] | readonly [
                        'remote add',
                        {
                            readonly 'name': string;
                            readonly 'url': string;
                        }
                    ] | readonly [
                        'remote remove',
                        {
                            readonly 'name': string;
                        }
                    ];
                }
                type remote_repo = _i_core._T_State_Group<null, readonly [
                    'clone',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'depth': _pt.Optional_Value<number>;
                        readonly 'directory': _pt.Optional_Value<string>;
                        readonly 'recursive': boolean;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'fetch',
                    {
                        readonly 'all': boolean;
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'prune': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pull',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'ff only': boolean;
                        readonly 'no rebase': boolean;
                        readonly 'rebase': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'delete': _pt.Optional_Value<string>;
                        readonly 'force': boolean;
                        readonly 'force with lease': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'set upstream': boolean;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote add',
                    {
                        readonly 'name': string;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'remote remove',
                    {
                        readonly 'name': string;
                    }
                ]>;
                namespace stash {
                    namespace SG {
                        namespace apply {
                            type index = boolean;
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type apply = {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                        namespace clear {
                        }
                        type clear = null;
                        namespace drop {
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type drop = {
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                        namespace pop {
                            type index = boolean;
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type pop = {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                        namespace push {
                            namespace files {
                                namespace O {
                                    type L = string;
                                }
                                type O = _i_core._T_List<null, string>;
                            }
                            type files = _pt.Optional_Value<_i_core._T_List<null, string>>;
                            type include_untracked = boolean;
                            type keep_index = boolean;
                            namespace message {
                                type O = string;
                            }
                            type message = _pt.Optional_Value<string>;
                        }
                        type push = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'include untracked': boolean;
                            readonly 'keep index': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                        };
                    }
                    type SG = readonly [
                        'apply',
                        {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ] | readonly ['clear', null] | readonly [
                        'drop',
                        {
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'pop',
                        {
                            readonly 'index': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'push',
                        {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'include untracked': boolean;
                            readonly 'keep index': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                        }
                    ];
                }
                type stash = _i_core._T_State_Group<null, readonly [
                    'apply',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly ['clear', null] | readonly [
                    'drop',
                    {
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pop',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'include untracked': boolean;
                        readonly 'keep index': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                    }
                ]>;
                namespace workspace {
                    namespace SG {
                        namespace checkout_file {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            type force = boolean;
                        }
                        type checkout_file = {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        };
                        namespace clean {
                            type directories = boolean;
                            type dry_run = boolean;
                            type force = boolean;
                            type ignored = boolean;
                        }
                        type clean = {
                            readonly 'directories': boolean;
                            readonly 'dry run': boolean;
                            readonly 'force': boolean;
                            readonly 'ignored': boolean;
                        };
                        namespace restore {
                            namespace files {
                                type L = string;
                            }
                            type files = _i_core._T_List<null, string>;
                            namespace source {
                                type O = string;
                            }
                            type source = _pt.Optional_Value<string>;
                            type worktree = boolean;
                        }
                        type restore = {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'source': _pt.Optional_Value<string>;
                            readonly 'worktree': boolean;
                        };
                    }
                    type SG = readonly [
                        'checkout file',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'force': boolean;
                        }
                    ] | readonly [
                        'clean',
                        {
                            readonly 'directories': boolean;
                            readonly 'dry run': boolean;
                            readonly 'force': boolean;
                            readonly 'ignored': boolean;
                        }
                    ] | readonly [
                        'restore',
                        {
                            readonly 'files': _i_core._T_List<null, string>;
                            readonly 'source': _pt.Optional_Value<string>;
                            readonly 'worktree': boolean;
                        }
                    ];
                }
                type workspace = _i_core._T_State_Group<null, readonly [
                    'checkout file',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ] | readonly [
                    'clean',
                    {
                        readonly 'directories': boolean;
                        readonly 'dry run': boolean;
                        readonly 'force': boolean;
                        readonly 'ignored': boolean;
                    }
                ] | readonly [
                    'restore',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'source': _pt.Optional_Value<string>;
                        readonly 'worktree': boolean;
                    }
                ]>;
            }
            type SG = readonly [
                'configuration',
                _i_core._T_State_Group<null, readonly [
                    'config set',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                        readonly 'value': string;
                    }
                ] | readonly [
                    'config unset',
                    {
                        readonly 'global': boolean;
                        readonly 'key': string;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>
            ] | readonly [
                'index',
                _i_core._T_State_Group<null, readonly [
                    'add',
                    {
                        readonly 'all': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'patch': boolean;
                        readonly 'update': boolean;
                    }
                ] | readonly [
                    'reset files',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'restore staged',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                    }
                ] | readonly [
                    'rm',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ]>
            ] | readonly [
                'local repo',
                _i_core._T_State_Group<null, readonly [
                    'append',
                    _i_core._T_State_Group<null, readonly [
                        'branch create',
                        {
                            readonly 'name': string;
                            readonly 'start point': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'cherry pick',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'commit',
                        {
                            readonly 'all': boolean;
                            readonly 'amend': boolean;
                            readonly 'message': string;
                            readonly 'no verify': boolean;
                            readonly 'signoff': boolean;
                        }
                    ] | readonly [
                        'merge',
                        {
                            readonly 'branch': string;
                            readonly 'ff only': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no commit': boolean;
                            readonly 'no ff': boolean;
                        }
                    ] | readonly [
                        'pull rebase private',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'revert',
                        {
                            readonly 'commits': _i_core._T_List<null, string>;
                            readonly 'mainline': _pt.Optional_Value<number>;
                            readonly 'no commit': boolean;
                        }
                    ] | readonly [
                        'tag create',
                        {
                            readonly 'annotated': boolean;
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ] | readonly [
                    'destroy',
                    _i_core._T_State_Group<null, readonly [
                        'branch delete',
                        {
                            readonly 'force': boolean;
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'commit amend',
                        {
                            readonly 'all': boolean;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'no edit': boolean;
                        }
                    ] | readonly [
                        'filter repo',
                        {
                            readonly 'force': boolean;
                            readonly 'invert paths': boolean;
                            readonly 'path': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'gc',
                        {
                            readonly 'aggressive': boolean;
                            readonly 'prune': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'rebase',
                        {
                            readonly 'interactive': boolean;
                            readonly 'onto': string;
                            readonly 'preserve merges': boolean;
                            readonly 'strategy': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'reset',
                        {
                            readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                            readonly 'target': string;
                        }
                    ] | readonly [
                        'tag delete',
                        {
                            readonly 'name': string;
                        }
                    ] | readonly [
                        'tag force',
                        {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'message': _pt.Optional_Value<string>;
                            readonly 'name': string;
                        }
                    ]>
                ]>
            ] | readonly [
                'remote repo',
                _i_core._T_State_Group<null, readonly [
                    'clone',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'depth': _pt.Optional_Value<number>;
                        readonly 'directory': _pt.Optional_Value<string>;
                        readonly 'recursive': boolean;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'fetch',
                    {
                        readonly 'all': boolean;
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'prune': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pull',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'ff only': boolean;
                        readonly 'no rebase': boolean;
                        readonly 'rebase': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'delete': _pt.Optional_Value<string>;
                        readonly 'force': boolean;
                        readonly 'force with lease': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'set upstream': boolean;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote add',
                    {
                        readonly 'name': string;
                        readonly 'url': string;
                    }
                ] | readonly [
                    'remote remove',
                    {
                        readonly 'name': string;
                    }
                ]>
            ] | readonly [
                'stash',
                _i_core._T_State_Group<null, readonly [
                    'apply',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly ['clear', null] | readonly [
                    'drop',
                    {
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'pop',
                    {
                        readonly 'index': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'push',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'include untracked': boolean;
                        readonly 'keep index': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                    }
                ]>
            ] | readonly [
                'workspace',
                _i_core._T_State_Group<null, readonly [
                    'checkout file',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'force': boolean;
                    }
                ] | readonly [
                    'clean',
                    {
                        readonly 'directories': boolean;
                        readonly 'dry run': boolean;
                        readonly 'force': boolean;
                        readonly 'ignored': boolean;
                    }
                ] | readonly [
                    'restore',
                    {
                        readonly 'files': _i_core._T_List<null, string>;
                        readonly 'source': _pt.Optional_Value<string>;
                        readonly 'worktree': boolean;
                    }
                ]>
            ];
        }
        type change = _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config set',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                    readonly 'value': string;
                }
            ] | readonly [
                'config unset',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'add',
                {
                    readonly 'all': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'patch': boolean;
                    readonly 'update': boolean;
                }
            ] | readonly [
                'reset files',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'restore staged',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'rm',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'append',
                _i_core._T_State_Group<null, readonly [
                    'branch create',
                    {
                        readonly 'name': string;
                        readonly 'start point': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'cherry pick',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'commit',
                    {
                        readonly 'all': boolean;
                        readonly 'amend': boolean;
                        readonly 'message': string;
                        readonly 'no verify': boolean;
                        readonly 'signoff': boolean;
                    }
                ] | readonly [
                    'merge',
                    {
                        readonly 'branch': string;
                        readonly 'ff only': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no commit': boolean;
                        readonly 'no ff': boolean;
                    }
                ] | readonly [
                    'pull rebase private',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'revert',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'tag create',
                    {
                        readonly 'annotated': boolean;
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ] | readonly [
                'destroy',
                _i_core._T_State_Group<null, readonly [
                    'branch delete',
                    {
                        readonly 'force': boolean;
                        readonly 'name': string;
                    }
                ] | readonly [
                    'commit amend',
                    {
                        readonly 'all': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no edit': boolean;
                    }
                ] | readonly [
                    'filter repo',
                    {
                        readonly 'force': boolean;
                        readonly 'invert paths': boolean;
                        readonly 'path': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'gc',
                    {
                        readonly 'aggressive': boolean;
                        readonly 'prune': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'rebase',
                    {
                        readonly 'interactive': boolean;
                        readonly 'onto': string;
                        readonly 'preserve merges': boolean;
                        readonly 'strategy': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reset',
                    {
                        readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                        readonly 'target': string;
                    }
                ] | readonly [
                    'tag delete',
                    {
                        readonly 'name': string;
                    }
                ] | readonly [
                    'tag force',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'clone',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'depth': _pt.Optional_Value<number>;
                    readonly 'directory': _pt.Optional_Value<string>;
                    readonly 'recursive': boolean;
                    readonly 'url': string;
                }
            ] | readonly [
                'fetch',
                {
                    readonly 'all': boolean;
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'prune': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pull',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'ff only': boolean;
                    readonly 'no rebase': boolean;
                    readonly 'rebase': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'delete': _pt.Optional_Value<string>;
                    readonly 'force': boolean;
                    readonly 'force with lease': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'set upstream': boolean;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote add',
                {
                    readonly 'name': string;
                    readonly 'url': string;
                }
            ] | readonly [
                'remote remove',
                {
                    readonly 'name': string;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'apply',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly ['clear', null] | readonly [
                'drop',
                {
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pop',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'include untracked': boolean;
                    readonly 'keep index': boolean;
                    readonly 'message': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'checkout file',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ] | readonly [
                'clean',
                {
                    readonly 'directories': boolean;
                    readonly 'dry run': boolean;
                    readonly 'force': boolean;
                    readonly 'ignored': boolean;
                }
            ] | readonly [
                'restore',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'source': _pt.Optional_Value<string>;
                    readonly 'worktree': boolean;
                }
            ]>
        ]>;
        namespace view {
            namespace SG {
                namespace configuration {
                    namespace SG {
                        namespace config {
                            type global = boolean;
                            namespace key {
                                type O = string;
                            }
                            type key = _pt.Optional_Value<string>;
                            type list = boolean;
                            type local = boolean;
                            type system = boolean;
                        }
                        type config = {
                            readonly 'global': boolean;
                            readonly 'key': _pt.Optional_Value<string>;
                            readonly 'list': boolean;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        };
                    }
                    type SG = readonly [
                        'config',
                        {
                            readonly 'global': boolean;
                            readonly 'key': _pt.Optional_Value<string>;
                            readonly 'list': boolean;
                            readonly 'local': boolean;
                            readonly 'system': boolean;
                        }
                    ];
                }
                type configuration = _i_core._T_State_Group<null, readonly [
                    'config',
                    {
                        readonly 'global': boolean;
                        readonly 'key': _pt.Optional_Value<string>;
                        readonly 'list': boolean;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>;
                namespace index {
                    namespace SG {
                        namespace diff_cached {
                            namespace files {
                                namespace O {
                                    type L = string;
                                }
                                type O = _i_core._T_List<null, string>;
                            }
                            type files = _pt.Optional_Value<_i_core._T_List<null, string>>;
                            type name_only = boolean;
                            type stat = boolean;
                        }
                        type diff_cached = {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        };
                        namespace status {
                            namespace porcelain {
                                type O = string;
                            }
                            type porcelain = _pt.Optional_Value<string>;
                            type short = boolean;
                        }
                        type status = {
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                        };
                    }
                    type SG = readonly [
                        'diff cached',
                        {
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        }
                    ] | readonly [
                        'status',
                        {
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                        }
                    ];
                }
                type index = _i_core._T_State_Group<null, readonly [
                    'diff cached',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                    }
                ]>;
                namespace local_repo {
                    namespace SG {
                        namespace branch {
                            type all = boolean;
                            type remote = boolean;
                            type verbose = boolean;
                        }
                        type branch = {
                            readonly 'all': boolean;
                            readonly 'remote': boolean;
                            readonly 'verbose': boolean;
                        };
                        namespace log {
                            type all = boolean;
                            namespace author {
                                type O = string;
                            }
                            type author = _pt.Optional_Value<string>;
                            type graph = boolean;
                            namespace grep {
                                type O = string;
                            }
                            type grep = _pt.Optional_Value<string>;
                            namespace max_count {
                                type O = number;
                            }
                            type max_count = _pt.Optional_Value<number>;
                            type oneline = boolean;
                            namespace since {
                                type O = string;
                            }
                            type since = _pt.Optional_Value<string>;
                            namespace until {
                                type O = string;
                            }
                            type until = _pt.Optional_Value<string>;
                        }
                        type log = {
                            readonly 'all': boolean;
                            readonly 'author': _pt.Optional_Value<string>;
                            readonly 'graph': boolean;
                            readonly 'grep': _pt.Optional_Value<string>;
                            readonly 'max count': _pt.Optional_Value<number>;
                            readonly 'oneline': boolean;
                            readonly 'since': _pt.Optional_Value<string>;
                            readonly 'until': _pt.Optional_Value<string>;
                        };
                        namespace reflog {
                            namespace branch {
                                type O = string;
                            }
                            type branch = _pt.Optional_Value<string>;
                            type oneline = boolean;
                        }
                        type reflog = {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'oneline': boolean;
                        };
                        namespace tag {
                            namespace list {
                                type O = string;
                            }
                            type list = _pt.Optional_Value<string>;
                        }
                        type tag = {
                            readonly 'list': _pt.Optional_Value<string>;
                        };
                    }
                    type SG = readonly [
                        'branch',
                        {
                            readonly 'all': boolean;
                            readonly 'remote': boolean;
                            readonly 'verbose': boolean;
                        }
                    ] | readonly [
                        'log',
                        {
                            readonly 'all': boolean;
                            readonly 'author': _pt.Optional_Value<string>;
                            readonly 'graph': boolean;
                            readonly 'grep': _pt.Optional_Value<string>;
                            readonly 'max count': _pt.Optional_Value<number>;
                            readonly 'oneline': boolean;
                            readonly 'since': _pt.Optional_Value<string>;
                            readonly 'until': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'reflog',
                        {
                            readonly 'branch': _pt.Optional_Value<string>;
                            readonly 'oneline': boolean;
                        }
                    ] | readonly [
                        'tag',
                        {
                            readonly 'list': _pt.Optional_Value<string>;
                        }
                    ];
                }
                type local_repo = _i_core._T_State_Group<null, readonly [
                    'branch',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': boolean;
                        readonly 'verbose': boolean;
                    }
                ] | readonly [
                    'log',
                    {
                        readonly 'all': boolean;
                        readonly 'author': _pt.Optional_Value<string>;
                        readonly 'graph': boolean;
                        readonly 'grep': _pt.Optional_Value<string>;
                        readonly 'max count': _pt.Optional_Value<number>;
                        readonly 'oneline': boolean;
                        readonly 'since': _pt.Optional_Value<string>;
                        readonly 'until': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reflog',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'tag',
                    {
                        readonly 'list': _pt.Optional_Value<string>;
                    }
                ]>;
                namespace remote_repo {
                    namespace SG {
                        namespace fetch_dry_run {
                            type all = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                        }
                        type fetch_dry_run = {
                            readonly 'all': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        };
                        namespace ls_remote {
                            type heads = boolean;
                            namespace remote {
                                type O = string;
                            }
                            type remote = _pt.Optional_Value<string>;
                            type tags = boolean;
                        }
                        type ls_remote = {
                            readonly 'heads': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'tags': boolean;
                        };
                        namespace remote {
                            type verbose = boolean;
                        }
                        type remote = {
                            readonly 'verbose': boolean;
                        };
                    }
                    type SG = readonly [
                        'fetch dry run',
                        {
                            readonly 'all': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                        }
                    ] | readonly [
                        'ls remote',
                        {
                            readonly 'heads': boolean;
                            readonly 'remote': _pt.Optional_Value<string>;
                            readonly 'tags': boolean;
                        }
                    ] | readonly [
                        'remote',
                        {
                            readonly 'verbose': boolean;
                        }
                    ];
                }
                type remote_repo = _i_core._T_State_Group<null, readonly [
                    'fetch dry run',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'ls remote',
                    {
                        readonly 'heads': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote',
                    {
                        readonly 'verbose': boolean;
                    }
                ]>;
                namespace stash {
                    namespace SG {
                        namespace list {
                            type oneline = boolean;
                        }
                        type list = {
                            readonly 'oneline': boolean;
                        };
                        namespace show {
                            type patch = boolean;
                            namespace stash {
                                type O = string;
                            }
                            type stash = _pt.Optional_Value<string>;
                        }
                        type show = {
                            readonly 'patch': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        };
                    }
                    type SG = readonly [
                        'list',
                        {
                            readonly 'oneline': boolean;
                        }
                    ] | readonly [
                        'show',
                        {
                            readonly 'patch': boolean;
                            readonly 'stash': _pt.Optional_Value<string>;
                        }
                    ];
                }
                type stash = _i_core._T_State_Group<null, readonly [
                    'list',
                    {
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'patch': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ]>;
                namespace workspace {
                    namespace SG {
                        namespace diff {
                            type cached = boolean;
                            namespace files {
                                namespace O {
                                    type L = string;
                                }
                                type O = _i_core._T_List<null, string>;
                            }
                            type files = _pt.Optional_Value<_i_core._T_List<null, string>>;
                            type name_only = boolean;
                            type stat = boolean;
                        }
                        type diff = {
                            readonly 'cached': boolean;
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        };
                        namespace show {
                            namespace commit {
                                type O = string;
                            }
                            type commit = _pt.Optional_Value<string>;
                            type name_only = boolean;
                            type stat = boolean;
                        }
                        type show = {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        };
                        namespace status {
                            type branch = boolean;
                            namespace porcelain {
                                type O = string;
                            }
                            type porcelain = _pt.Optional_Value<string>;
                            type short = boolean;
                            type show_stash = boolean;
                        }
                        type status = {
                            readonly 'branch': boolean;
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                            readonly 'show stash': boolean;
                        };
                    }
                    type SG = readonly [
                        'diff',
                        {
                            readonly 'cached': boolean;
                            readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        }
                    ] | readonly [
                        'show',
                        {
                            readonly 'commit': _pt.Optional_Value<string>;
                            readonly 'name only': boolean;
                            readonly 'stat': boolean;
                        }
                    ] | readonly [
                        'status',
                        {
                            readonly 'branch': boolean;
                            readonly 'porcelain': _pt.Optional_Value<string>;
                            readonly 'short': boolean;
                            readonly 'show stash': boolean;
                        }
                    ];
                }
                type workspace = _i_core._T_State_Group<null, readonly [
                    'diff',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'branch': boolean;
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                        readonly 'show stash': boolean;
                    }
                ]>;
            }
            type SG = readonly [
                'configuration',
                _i_core._T_State_Group<null, readonly [
                    'config',
                    {
                        readonly 'global': boolean;
                        readonly 'key': _pt.Optional_Value<string>;
                        readonly 'list': boolean;
                        readonly 'local': boolean;
                        readonly 'system': boolean;
                    }
                ]>
            ] | readonly [
                'index',
                _i_core._T_State_Group<null, readonly [
                    'diff cached',
                    {
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                    }
                ]>
            ] | readonly [
                'local repo',
                _i_core._T_State_Group<null, readonly [
                    'branch',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': boolean;
                        readonly 'verbose': boolean;
                    }
                ] | readonly [
                    'log',
                    {
                        readonly 'all': boolean;
                        readonly 'author': _pt.Optional_Value<string>;
                        readonly 'graph': boolean;
                        readonly 'grep': _pt.Optional_Value<string>;
                        readonly 'max count': _pt.Optional_Value<number>;
                        readonly 'oneline': boolean;
                        readonly 'since': _pt.Optional_Value<string>;
                        readonly 'until': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reflog',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'tag',
                    {
                        readonly 'list': _pt.Optional_Value<string>;
                    }
                ]>
            ] | readonly [
                'remote repo',
                _i_core._T_State_Group<null, readonly [
                    'fetch dry run',
                    {
                        readonly 'all': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'ls remote',
                    {
                        readonly 'heads': boolean;
                        readonly 'remote': _pt.Optional_Value<string>;
                        readonly 'tags': boolean;
                    }
                ] | readonly [
                    'remote',
                    {
                        readonly 'verbose': boolean;
                    }
                ]>
            ] | readonly [
                'stash',
                _i_core._T_State_Group<null, readonly [
                    'list',
                    {
                        readonly 'oneline': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'patch': boolean;
                        readonly 'stash': _pt.Optional_Value<string>;
                    }
                ]>
            ] | readonly [
                'workspace',
                _i_core._T_State_Group<null, readonly [
                    'diff',
                    {
                        readonly 'cached': boolean;
                        readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'show',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'name only': boolean;
                        readonly 'stat': boolean;
                    }
                ] | readonly [
                    'status',
                    {
                        readonly 'branch': boolean;
                        readonly 'porcelain': _pt.Optional_Value<string>;
                        readonly 'short': boolean;
                        readonly 'show stash': boolean;
                    }
                ]>
            ];
        }
        type view = _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config',
                {
                    readonly 'global': boolean;
                    readonly 'key': _pt.Optional_Value<string>;
                    readonly 'list': boolean;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'diff cached',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'branch',
                {
                    readonly 'all': boolean;
                    readonly 'remote': boolean;
                    readonly 'verbose': boolean;
                }
            ] | readonly [
                'log',
                {
                    readonly 'all': boolean;
                    readonly 'author': _pt.Optional_Value<string>;
                    readonly 'graph': boolean;
                    readonly 'grep': _pt.Optional_Value<string>;
                    readonly 'max count': _pt.Optional_Value<number>;
                    readonly 'oneline': boolean;
                    readonly 'since': _pt.Optional_Value<string>;
                    readonly 'until': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'reflog',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'tag',
                {
                    readonly 'list': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'fetch dry run',
                {
                    readonly 'all': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'ls remote',
                {
                    readonly 'heads': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote',
                {
                    readonly 'verbose': boolean;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'list',
                {
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'patch': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'diff',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'commit': _pt.Optional_Value<string>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'branch': boolean;
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                    readonly 'show stash': boolean;
                }
            ]>
        ]>;
    }
    type SG = readonly [
        'change',
        _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config set',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                    readonly 'value': string;
                }
            ] | readonly [
                'config unset',
                {
                    readonly 'global': boolean;
                    readonly 'key': string;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'add',
                {
                    readonly 'all': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'patch': boolean;
                    readonly 'update': boolean;
                }
            ] | readonly [
                'reset files',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'restore staged',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                }
            ] | readonly [
                'rm',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'append',
                _i_core._T_State_Group<null, readonly [
                    'branch create',
                    {
                        readonly 'name': string;
                        readonly 'start point': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'cherry pick',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'commit',
                    {
                        readonly 'all': boolean;
                        readonly 'amend': boolean;
                        readonly 'message': string;
                        readonly 'no verify': boolean;
                        readonly 'signoff': boolean;
                    }
                ] | readonly [
                    'merge',
                    {
                        readonly 'branch': string;
                        readonly 'ff only': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no commit': boolean;
                        readonly 'no ff': boolean;
                    }
                ] | readonly [
                    'pull rebase private',
                    {
                        readonly 'branch': _pt.Optional_Value<string>;
                        readonly 'remote': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'revert',
                    {
                        readonly 'commits': _i_core._T_List<null, string>;
                        readonly 'mainline': _pt.Optional_Value<number>;
                        readonly 'no commit': boolean;
                    }
                ] | readonly [
                    'tag create',
                    {
                        readonly 'annotated': boolean;
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ] | readonly [
                'destroy',
                _i_core._T_State_Group<null, readonly [
                    'branch delete',
                    {
                        readonly 'force': boolean;
                        readonly 'name': string;
                    }
                ] | readonly [
                    'commit amend',
                    {
                        readonly 'all': boolean;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'no edit': boolean;
                    }
                ] | readonly [
                    'filter repo',
                    {
                        readonly 'force': boolean;
                        readonly 'invert paths': boolean;
                        readonly 'path': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'gc',
                    {
                        readonly 'aggressive': boolean;
                        readonly 'prune': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'rebase',
                    {
                        readonly 'interactive': boolean;
                        readonly 'onto': string;
                        readonly 'preserve merges': boolean;
                        readonly 'strategy': _pt.Optional_Value<string>;
                    }
                ] | readonly [
                    'reset',
                    {
                        readonly 'mode': _i_core._T_State_Group<null, readonly ['hard', null] | readonly ['mixed', null] | readonly ['soft', null]>;
                        readonly 'target': string;
                    }
                ] | readonly [
                    'tag delete',
                    {
                        readonly 'name': string;
                    }
                ] | readonly [
                    'tag force',
                    {
                        readonly 'commit': _pt.Optional_Value<string>;
                        readonly 'message': _pt.Optional_Value<string>;
                        readonly 'name': string;
                    }
                ]>
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'clone',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'depth': _pt.Optional_Value<number>;
                    readonly 'directory': _pt.Optional_Value<string>;
                    readonly 'recursive': boolean;
                    readonly 'url': string;
                }
            ] | readonly [
                'fetch',
                {
                    readonly 'all': boolean;
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'prune': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pull',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'ff only': boolean;
                    readonly 'no rebase': boolean;
                    readonly 'rebase': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'delete': _pt.Optional_Value<string>;
                    readonly 'force': boolean;
                    readonly 'force with lease': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'set upstream': boolean;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote add',
                {
                    readonly 'name': string;
                    readonly 'url': string;
                }
            ] | readonly [
                'remote remove',
                {
                    readonly 'name': string;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'apply',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly ['clear', null] | readonly [
                'drop',
                {
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'pop',
                {
                    readonly 'index': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'push',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'include untracked': boolean;
                    readonly 'keep index': boolean;
                    readonly 'message': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'checkout file',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'force': boolean;
                }
            ] | readonly [
                'clean',
                {
                    readonly 'directories': boolean;
                    readonly 'dry run': boolean;
                    readonly 'force': boolean;
                    readonly 'ignored': boolean;
                }
            ] | readonly [
                'restore',
                {
                    readonly 'files': _i_core._T_List<null, string>;
                    readonly 'source': _pt.Optional_Value<string>;
                    readonly 'worktree': boolean;
                }
            ]>
        ]>
    ] | readonly [
        'view',
        _i_core._T_State_Group<null, readonly [
            'configuration',
            _i_core._T_State_Group<null, readonly [
                'config',
                {
                    readonly 'global': boolean;
                    readonly 'key': _pt.Optional_Value<string>;
                    readonly 'list': boolean;
                    readonly 'local': boolean;
                    readonly 'system': boolean;
                }
            ]>
        ] | readonly [
            'index',
            _i_core._T_State_Group<null, readonly [
                'diff cached',
                {
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                }
            ]>
        ] | readonly [
            'local repo',
            _i_core._T_State_Group<null, readonly [
                'branch',
                {
                    readonly 'all': boolean;
                    readonly 'remote': boolean;
                    readonly 'verbose': boolean;
                }
            ] | readonly [
                'log',
                {
                    readonly 'all': boolean;
                    readonly 'author': _pt.Optional_Value<string>;
                    readonly 'graph': boolean;
                    readonly 'grep': _pt.Optional_Value<string>;
                    readonly 'max count': _pt.Optional_Value<number>;
                    readonly 'oneline': boolean;
                    readonly 'since': _pt.Optional_Value<string>;
                    readonly 'until': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'reflog',
                {
                    readonly 'branch': _pt.Optional_Value<string>;
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'tag',
                {
                    readonly 'list': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'remote repo',
            _i_core._T_State_Group<null, readonly [
                'fetch dry run',
                {
                    readonly 'all': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                }
            ] | readonly [
                'ls remote',
                {
                    readonly 'heads': boolean;
                    readonly 'remote': _pt.Optional_Value<string>;
                    readonly 'tags': boolean;
                }
            ] | readonly [
                'remote',
                {
                    readonly 'verbose': boolean;
                }
            ]>
        ] | readonly [
            'stash',
            _i_core._T_State_Group<null, readonly [
                'list',
                {
                    readonly 'oneline': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'patch': boolean;
                    readonly 'stash': _pt.Optional_Value<string>;
                }
            ]>
        ] | readonly [
            'workspace',
            _i_core._T_State_Group<null, readonly [
                'diff',
                {
                    readonly 'cached': boolean;
                    readonly 'files': _pt.Optional_Value<_i_core._T_List<null, string>>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'show',
                {
                    readonly 'commit': _pt.Optional_Value<string>;
                    readonly 'name only': boolean;
                    readonly 'stat': boolean;
                }
            ] | readonly [
                'status',
                {
                    readonly 'branch': boolean;
                    readonly 'porcelain': _pt.Optional_Value<string>;
                    readonly 'short': boolean;
                    readonly 'show stash': boolean;
                }
            ]>
        ]>
    ];
}
export declare namespace Safety_Level {
    namespace SG {
        namespace destructive {
            namespace areas_affected {
                type L = string;
            }
            type areas_affected = _i_core._T_List<null, string>;
            type description = string;
            type warning = string;
        }
        type destructive = {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
            readonly 'warning': string;
        };
        namespace risky {
            namespace areas_affected {
                type L = string;
            }
            type areas_affected = _i_core._T_List<null, string>;
            type description = string;
        }
        type risky = {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
        };
        namespace safe {
            type description = string;
        }
        type safe = {
            readonly 'description': string;
        };
    }
    type SG = readonly [
        'destructive',
        {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
            readonly 'warning': string;
        }
    ] | readonly [
        'risky',
        {
            readonly 'areas affected': _i_core._T_List<null, string>;
            readonly 'description': string;
        }
    ] | readonly [
        'safe',
        {
            readonly 'description': string;
        }
    ];
}
