"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safety_Level = exports.Git_Command = exports.Command_Result = void 0;
const _pa = __importStar(require("exupery-core-alg"));
const _i_generic = __importStar(require("../../generic/unmarshall"));
const Command_Result = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'affected areas': _pa.cc(_i_generic.get_entry($, {
            'key': "affected areas",
        }), ($) => _i_generic.process_unconstrained_list($, {
            'value': ($) => _i_generic.process_text($, null),
        })),
        'command line': _pa.cc(_i_generic.get_entry($, {
            'key': "command line",
        }), ($) => _i_generic.process_text($, null)),
        'requires force push': _pa.cc(_i_generic.get_entry($, {
            'key': "requires force push",
        }), ($) => _i_generic.process_boolean($, {
            'deserializer': $p['value deserializers']['boolean'],
        })),
        'safety level': _pa.cc(_i_generic.get_entry($, {
            'key': "safety level",
        }), ($) => _i_generic.process_text($, null)),
    }),
});
exports.Command_Result = Command_Result;
const Git_Command = ($, $p) => _i_generic.process_unconstrained_state_group($, {
    'states': _pa.dictionary_literal({
        'change': ($) => ['change', _i_generic.process_unconstrained_state_group($, {
                'states': _pa.dictionary_literal({
                    'configuration': ($) => ['configuration', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'config set': ($) => ['config set', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'global': _pa.cc(_i_generic.get_entry($, {
                                                'key': "global",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'key': _pa.cc(_i_generic.get_entry($, {
                                                'key': "key",
                                            }), ($) => _i_generic.process_text($, null)),
                                            'local': _pa.cc(_i_generic.get_entry($, {
                                                'key': "local",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'system': _pa.cc(_i_generic.get_entry($, {
                                                'key': "system",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'value': _pa.cc(_i_generic.get_entry($, {
                                                'key': "value",
                                            }), ($) => _i_generic.process_text($, null)),
                                        }),
                                    })],
                                'config unset': ($) => ['config unset', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'global': _pa.cc(_i_generic.get_entry($, {
                                                'key': "global",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'key': _pa.cc(_i_generic.get_entry($, {
                                                'key': "key",
                                            }), ($) => _i_generic.process_text($, null)),
                                            'local': _pa.cc(_i_generic.get_entry($, {
                                                'key': "local",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'system': _pa.cc(_i_generic.get_entry($, {
                                                'key': "system",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'index': ($) => ['index', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'add': ($) => ['add', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'all': _pa.cc(_i_generic.get_entry($, {
                                                'key': "all",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_unconstrained_list($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'patch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "patch",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'update': _pa.cc(_i_generic.get_entry($, {
                                                'key': "update",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'reset files': ($) => ['reset files', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_unconstrained_list($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'restore staged': ($) => ['restore staged', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_unconstrained_list($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'rm': ($) => ['rm', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'cached': _pa.cc(_i_generic.get_entry($, {
                                                'key': "cached",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_unconstrained_list($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'force': _pa.cc(_i_generic.get_entry($, {
                                                'key': "force",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'local repo': ($) => ['local repo', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'append': ($) => ['append', _i_generic.process_unconstrained_state_group($, {
                                        'states': _pa.dictionary_literal({
                                            'branch create': ($) => ['branch create', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'name': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "name",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                        'start point': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "start point",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                    }),
                                                })],
                                            'cherry pick': ($) => ['cherry pick', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'commits': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "commits",
                                                        }), ($) => _i_generic.process_unconstrained_list($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'mainline': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "mainline",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_number($, {
                                                                'deserializer': $p['value deserializers']['default number'],
                                                            }),
                                                        })),
                                                        'no commit': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "no commit",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                    }),
                                                })],
                                            'commit': ($) => ['commit', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'all': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "all",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'amend': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "amend",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'message': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "message",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                        'no verify': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "no verify",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'signoff': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "signoff",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                    }),
                                                })],
                                            'merge': ($) => ['merge', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'branch': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "branch",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                        'ff only': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "ff only",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'message': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "message",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'no commit': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "no commit",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'no ff': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "no ff",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                    }),
                                                })],
                                            'pull rebase private': ($) => ['pull rebase private', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'branch': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "branch",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'remote': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "remote",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                    }),
                                                })],
                                            'revert': ($) => ['revert', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'commits': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "commits",
                                                        }), ($) => _i_generic.process_unconstrained_list($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'mainline': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "mainline",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_number($, {
                                                                'deserializer': $p['value deserializers']['default number'],
                                                            }),
                                                        })),
                                                        'no commit': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "no commit",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                    }),
                                                })],
                                            'tag create': ($) => ['tag create', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'annotated': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "annotated",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'commit': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "commit",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'message': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "message",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'name': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "name",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                    }),
                                                })],
                                        }),
                                    })],
                                'destroy': ($) => ['destroy', _i_generic.process_unconstrained_state_group($, {
                                        'states': _pa.dictionary_literal({
                                            'branch delete': ($) => ['branch delete', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'force': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "force",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'name': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "name",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                    }),
                                                })],
                                            'commit amend': ($) => ['commit amend', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'all': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "all",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'message': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "message",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'no edit': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "no edit",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                    }),
                                                })],
                                            'filter repo': ($) => ['filter repo', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'force': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "force",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'invert paths': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "invert paths",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'path': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "path",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                    }),
                                                })],
                                            'gc': ($) => ['gc', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'aggressive': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "aggressive",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'prune': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "prune",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                    }),
                                                })],
                                            'rebase': ($) => ['rebase', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'interactive': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "interactive",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'onto': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "onto",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                        'preserve merges': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "preserve merges",
                                                        }), ($) => _i_generic.process_boolean($, {
                                                            'deserializer': $p['value deserializers']['boolean'],
                                                        })),
                                                        'strategy': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "strategy",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                    }),
                                                })],
                                            'reset': ($) => ['reset', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'mode': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "mode",
                                                        }), ($) => _i_generic.process_unconstrained_state_group($, {
                                                            'states': _pa.dictionary_literal({
                                                                'hard': ($) => ['hard', _i_generic.process_group($, {
                                                                        'properties': ($) => null,
                                                                    })],
                                                                'mixed': ($) => ['mixed', _i_generic.process_group($, {
                                                                        'properties': ($) => null,
                                                                    })],
                                                                'soft': ($) => ['soft', _i_generic.process_group($, {
                                                                        'properties': ($) => null,
                                                                    })],
                                                            }),
                                                        })),
                                                        'target': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "target",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                    }),
                                                })],
                                            'tag delete': ($) => ['tag delete', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'name': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "name",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                    }),
                                                })],
                                            'tag force': ($) => ['tag force', _i_generic.process_group($, {
                                                    'properties': ($) => ({
                                                        'commit': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "commit",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'message': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "message",
                                                        }), ($) => _i_generic.process_optional($, {
                                                            'value': ($) => _i_generic.process_text($, null),
                                                        })),
                                                        'name': _pa.cc(_i_generic.get_entry($, {
                                                            'key': "name",
                                                        }), ($) => _i_generic.process_text($, null)),
                                                    }),
                                                })],
                                        }),
                                    })],
                            }),
                        })],
                    'remote repo': ($) => ['remote repo', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'clone': ($) => ['clone', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'branch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "branch",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'depth': _pa.cc(_i_generic.get_entry($, {
                                                'key': "depth",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_number($, {
                                                    'deserializer': $p['value deserializers']['default number'],
                                                }),
                                            })),
                                            'directory': _pa.cc(_i_generic.get_entry($, {
                                                'key': "directory",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'recursive': _pa.cc(_i_generic.get_entry($, {
                                                'key': "recursive",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'url': _pa.cc(_i_generic.get_entry($, {
                                                'key': "url",
                                            }), ($) => _i_generic.process_text($, null)),
                                        }),
                                    })],
                                'fetch': ($) => ['fetch', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'all': _pa.cc(_i_generic.get_entry($, {
                                                'key': "all",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'branch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "branch",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'prune': _pa.cc(_i_generic.get_entry($, {
                                                'key': "prune",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'remote': _pa.cc(_i_generic.get_entry($, {
                                                'key': "remote",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'pull': ($) => ['pull', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'branch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "branch",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'ff only': _pa.cc(_i_generic.get_entry($, {
                                                'key': "ff only",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'no rebase': _pa.cc(_i_generic.get_entry($, {
                                                'key': "no rebase",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'rebase': _pa.cc(_i_generic.get_entry($, {
                                                'key': "rebase",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'remote': _pa.cc(_i_generic.get_entry($, {
                                                'key': "remote",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'push': ($) => ['push', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'branch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "branch",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'delete': _pa.cc(_i_generic.get_entry($, {
                                                'key': "delete",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'force': _pa.cc(_i_generic.get_entry($, {
                                                'key': "force",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'force with lease': _pa.cc(_i_generic.get_entry($, {
                                                'key': "force with lease",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'remote': _pa.cc(_i_generic.get_entry($, {
                                                'key': "remote",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'set upstream': _pa.cc(_i_generic.get_entry($, {
                                                'key': "set upstream",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'tags': _pa.cc(_i_generic.get_entry($, {
                                                'key': "tags",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'remote add': ($) => ['remote add', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'name': _pa.cc(_i_generic.get_entry($, {
                                                'key': "name",
                                            }), ($) => _i_generic.process_text($, null)),
                                            'url': _pa.cc(_i_generic.get_entry($, {
                                                'key': "url",
                                            }), ($) => _i_generic.process_text($, null)),
                                        }),
                                    })],
                                'remote remove': ($) => ['remote remove', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'name': _pa.cc(_i_generic.get_entry($, {
                                                'key': "name",
                                            }), ($) => _i_generic.process_text($, null)),
                                        }),
                                    })],
                            }),
                        })],
                    'stash': ($) => ['stash', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'apply': ($) => ['apply', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'index': _pa.cc(_i_generic.get_entry($, {
                                                'key': "index",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'stash': _pa.cc(_i_generic.get_entry($, {
                                                'key': "stash",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'clear': ($) => ['clear', _i_generic.process_group($, {
                                        'properties': ($) => null,
                                    })],
                                'drop': ($) => ['drop', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'stash': _pa.cc(_i_generic.get_entry($, {
                                                'key': "stash",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'pop': ($) => ['pop', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'index': _pa.cc(_i_generic.get_entry($, {
                                                'key': "index",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'stash': _pa.cc(_i_generic.get_entry($, {
                                                'key': "stash",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'push': ($) => ['push', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_unconstrained_list($, {
                                                    'value': ($) => _i_generic.process_text($, null),
                                                }),
                                            })),
                                            'include untracked': _pa.cc(_i_generic.get_entry($, {
                                                'key': "include untracked",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'keep index': _pa.cc(_i_generic.get_entry($, {
                                                'key': "keep index",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'message': _pa.cc(_i_generic.get_entry($, {
                                                'key': "message",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'workspace': ($) => ['workspace', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'checkout file': ($) => ['checkout file', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_unconstrained_list($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'force': _pa.cc(_i_generic.get_entry($, {
                                                'key': "force",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'clean': ($) => ['clean', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'directories': _pa.cc(_i_generic.get_entry($, {
                                                'key': "directories",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'dry run': _pa.cc(_i_generic.get_entry($, {
                                                'key': "dry run",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'force': _pa.cc(_i_generic.get_entry($, {
                                                'key': "force",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'ignored': _pa.cc(_i_generic.get_entry($, {
                                                'key': "ignored",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'restore': ($) => ['restore', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_unconstrained_list($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'source': _pa.cc(_i_generic.get_entry($, {
                                                'key': "source",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'worktree': _pa.cc(_i_generic.get_entry($, {
                                                'key': "worktree",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                }),
            })],
        'view': ($) => ['view', _i_generic.process_unconstrained_state_group($, {
                'states': _pa.dictionary_literal({
                    'configuration': ($) => ['configuration', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'config': ($) => ['config', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'global': _pa.cc(_i_generic.get_entry($, {
                                                'key': "global",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'key': _pa.cc(_i_generic.get_entry($, {
                                                'key': "key",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'list': _pa.cc(_i_generic.get_entry($, {
                                                'key': "list",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'local': _pa.cc(_i_generic.get_entry($, {
                                                'key': "local",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'system': _pa.cc(_i_generic.get_entry($, {
                                                'key': "system",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'index': ($) => ['index', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'diff cached': ($) => ['diff cached', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_unconstrained_list($, {
                                                    'value': ($) => _i_generic.process_text($, null),
                                                }),
                                            })),
                                            'name only': _pa.cc(_i_generic.get_entry($, {
                                                'key': "name only",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'stat': _pa.cc(_i_generic.get_entry($, {
                                                'key': "stat",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'status': ($) => ['status', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'porcelain': _pa.cc(_i_generic.get_entry($, {
                                                'key': "porcelain",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'short': _pa.cc(_i_generic.get_entry($, {
                                                'key': "short",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'local repo': ($) => ['local repo', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'branch': ($) => ['branch', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'all': _pa.cc(_i_generic.get_entry($, {
                                                'key': "all",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'remote': _pa.cc(_i_generic.get_entry($, {
                                                'key': "remote",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'verbose': _pa.cc(_i_generic.get_entry($, {
                                                'key': "verbose",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'log': ($) => ['log', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'all': _pa.cc(_i_generic.get_entry($, {
                                                'key': "all",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'author': _pa.cc(_i_generic.get_entry($, {
                                                'key': "author",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'graph': _pa.cc(_i_generic.get_entry($, {
                                                'key': "graph",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'grep': _pa.cc(_i_generic.get_entry($, {
                                                'key': "grep",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'max count': _pa.cc(_i_generic.get_entry($, {
                                                'key': "max count",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_number($, {
                                                    'deserializer': $p['value deserializers']['default number'],
                                                }),
                                            })),
                                            'oneline': _pa.cc(_i_generic.get_entry($, {
                                                'key': "oneline",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'since': _pa.cc(_i_generic.get_entry($, {
                                                'key': "since",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'until': _pa.cc(_i_generic.get_entry($, {
                                                'key': "until",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'reflog': ($) => ['reflog', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'branch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "branch",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'oneline': _pa.cc(_i_generic.get_entry($, {
                                                'key': "oneline",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'tag': ($) => ['tag', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'list': _pa.cc(_i_generic.get_entry($, {
                                                'key': "list",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'remote repo': ($) => ['remote repo', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'fetch dry run': ($) => ['fetch dry run', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'all': _pa.cc(_i_generic.get_entry($, {
                                                'key': "all",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'remote': _pa.cc(_i_generic.get_entry($, {
                                                'key': "remote",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                                'ls remote': ($) => ['ls remote', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'heads': _pa.cc(_i_generic.get_entry($, {
                                                'key': "heads",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'remote': _pa.cc(_i_generic.get_entry($, {
                                                'key': "remote",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'tags': _pa.cc(_i_generic.get_entry($, {
                                                'key': "tags",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'remote': ($) => ['remote', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'verbose': _pa.cc(_i_generic.get_entry($, {
                                                'key': "verbose",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'stash': ($) => ['stash', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'list': ($) => ['list', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'oneline': _pa.cc(_i_generic.get_entry($, {
                                                'key': "oneline",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'show': ($) => ['show', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'patch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "patch",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'stash': _pa.cc(_i_generic.get_entry($, {
                                                'key': "stash",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                    'workspace': ($) => ['workspace', _i_generic.process_unconstrained_state_group($, {
                            'states': _pa.dictionary_literal({
                                'diff': ($) => ['diff', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'cached': _pa.cc(_i_generic.get_entry($, {
                                                'key': "cached",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'files': _pa.cc(_i_generic.get_entry($, {
                                                'key': "files",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_unconstrained_list($, {
                                                    'value': ($) => _i_generic.process_text($, null),
                                                }),
                                            })),
                                            'name only': _pa.cc(_i_generic.get_entry($, {
                                                'key': "name only",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'stat': _pa.cc(_i_generic.get_entry($, {
                                                'key': "stat",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'show': ($) => ['show', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'commit': _pa.cc(_i_generic.get_entry($, {
                                                'key': "commit",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'name only': _pa.cc(_i_generic.get_entry($, {
                                                'key': "name only",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'stat': _pa.cc(_i_generic.get_entry($, {
                                                'key': "stat",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                                'status': ($) => ['status', _i_generic.process_group($, {
                                        'properties': ($) => ({
                                            'branch': _pa.cc(_i_generic.get_entry($, {
                                                'key': "branch",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'porcelain': _pa.cc(_i_generic.get_entry($, {
                                                'key': "porcelain",
                                            }), ($) => _i_generic.process_optional($, {
                                                'value': ($) => _i_generic.process_text($, null),
                                            })),
                                            'short': _pa.cc(_i_generic.get_entry($, {
                                                'key': "short",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                            'show stash': _pa.cc(_i_generic.get_entry($, {
                                                'key': "show stash",
                                            }), ($) => _i_generic.process_boolean($, {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            })),
                                        }),
                                    })],
                            }),
                        })],
                }),
            })],
    }),
});
exports.Git_Command = Git_Command;
const Safety_Level = ($, $p) => _i_generic.process_unconstrained_state_group($, {
    'states': _pa.dictionary_literal({
        'destructive': ($) => ['destructive', _i_generic.process_group($, {
                'properties': ($) => ({
                    'areas affected': _pa.cc(_i_generic.get_entry($, {
                        'key': "areas affected",
                    }), ($) => _i_generic.process_unconstrained_list($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                    'description': _pa.cc(_i_generic.get_entry($, {
                        'key': "description",
                    }), ($) => _i_generic.process_text($, null)),
                    'warning': _pa.cc(_i_generic.get_entry($, {
                        'key': "warning",
                    }), ($) => _i_generic.process_text($, null)),
                }),
            })],
        'risky': ($) => ['risky', _i_generic.process_group($, {
                'properties': ($) => ({
                    'areas affected': _pa.cc(_i_generic.get_entry($, {
                        'key': "areas affected",
                    }), ($) => _i_generic.process_unconstrained_list($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                    'description': _pa.cc(_i_generic.get_entry($, {
                        'key': "description",
                    }), ($) => _i_generic.process_text($, null)),
                }),
            })],
        'safe': ($) => ['safe', _i_generic.process_group($, {
                'properties': ($) => ({
                    'description': _pa.cc(_i_generic.get_entry($, {
                        'key': "description",
                    }), ($) => _i_generic.process_text($, null)),
                }),
            })],
    }),
});
exports.Safety_Level = Safety_Level;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXJzaGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pbXBsZW1lbnRhdGlvbi9nZW5lcmF0ZWQvcGFyZXRvL3NjaGVtYXMvZ2l0L3VubWFyc2hhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBdUM7QUFHdkMscUVBQXNEO0FBTS9DLE1BQU0sY0FBYyxHQUFvQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQzlGLENBQUMsRUFDRDtJQUNJLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQixnQkFBZ0IsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQ3pDLENBQUMsRUFDRDtZQUNJLEtBQUssRUFBRSxnQkFBZ0I7U0FDMUIsQ0FDSixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQzNDLENBQUMsRUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDbkMsQ0FBQyxFQUNELElBQUksQ0FDUDtTQUNKLENBQ0osQ0FBQztRQUNGLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQ3ZDLENBQUMsRUFDRDtZQUNJLEtBQUssRUFBRSxjQUFjO1NBQ3hCLENBQ0osRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDN0IsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO1FBQ0YscUJBQXFCLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUM5QyxDQUFDLEVBQ0Q7WUFDSSxLQUFLLEVBQUUscUJBQXFCO1NBQy9CLENBQ0osRUFBRSxDQUFDLENB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