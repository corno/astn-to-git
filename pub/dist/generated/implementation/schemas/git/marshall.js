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
const Command_Result = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'affected areas': _pa.cc($['affected areas'], ($) => ['list', $.map(($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })])]),
        'command line': _pa.cc($['command line'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        'requires force push': _pa.cc($['requires force push'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean']($, null),
            })]),
        'safety level': _pa.cc($['safety level'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
    })];
exports.Command_Result = Command_Result;
const Git_Command = ($, $p) => ['state', _pa.cc($, ($) => {
        switch ($[0]) {
            case 'change': return _pa.ss($, ($) => ({
                'state': "change",
                'value': ['state', _pa.cc($, ($) => {
                        switch ($[0]) {
                            case 'configuration': return _pa.ss($, ($) => ({
                                'state': "configuration",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'config set': return _pa.ss($, ($) => ({
                                                'state': "config set",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'global': _pa.cc($['global'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'key': _pa.cc($['key'], ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]),
                                                        'local': _pa.cc($['local'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'system': _pa.cc($['system'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'value': _pa.cc($['value'], ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]),
                                                    })],
                                            }));
                                            case 'config unset': return _pa.ss($, ($) => ({
                                                'state': "config unset",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'global': _pa.cc($['global'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'key': _pa.cc($['key'], ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]),
                                                        'local': _pa.cc($['local'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'system': _pa.cc($['system'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'index': return _pa.ss($, ($) => ({
                                'state': "index",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'add': return _pa.ss($, ($) => ({
                                                'state': "add",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })])]),
                                                        'patch': _pa.cc($['patch'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'update': _pa.cc($['update'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'reset files': return _pa.ss($, ($) => ({
                                                'state': "reset files",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })])]),
                                                    })],
                                            }));
                                            case 'restore staged': return _pa.ss($, ($) => ({
                                                'state': "restore staged",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })])]),
                                                    })],
                                            }));
                                            case 'rm': return _pa.ss($, ($) => ({
                                                'state': "rm",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'cached': _pa.cc($['cached'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })])]),
                                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'local repo': return _pa.ss($, ($) => ({
                                'state': "local repo",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'append': return _pa.ss($, ($) => ({
                                                'state': "append",
                                                'value': ['state', _pa.cc($, ($) => {
                                                        switch ($[0]) {
                                                            case 'branch create': return _pa.ss($, ($) => ({
                                                                'state': "branch create",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                        'start point': _pa.cc($['start point'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                    })],
                                                            }));
                                                            case 'cherry pick': return _pa.ss($, ($) => ({
                                                                'state': "cherry pick",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'commits': _pa.cc($['commits'], ($) => ['list', $.map(($) => ['text', ({
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                })])]),
                                                                        'mainline': _pa.cc($['mainline'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['backtick', null],
                                                                                        'value': $p['value serializers']['default number']($, null),
                                                                                    })]], () => ['not set', null])]),
                                                                        'no commit': _pa.cc($['no commit'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'commit': return _pa.ss($, ($) => ({
                                                                'state': "commit",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'amend': _pa.cc($['amend'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'message': _pa.cc($['message'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                        'no verify': _pa.cc($['no verify'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'signoff': _pa.cc($['signoff'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'merge': return _pa.ss($, ($) => ({
                                                                'state': "merge",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'branch': _pa.cc($['branch'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                        'ff only': _pa.cc($['ff only'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'message': _pa.cc($['message'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                        'no commit': _pa.cc($['no commit'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'no ff': _pa.cc($['no ff'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'pull rebase private': return _pa.ss($, ($) => ({
                                                                'state': "pull rebase private",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                    })],
                                                            }));
                                                            case 'revert': return _pa.ss($, ($) => ({
                                                                'state': "revert",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'commits': _pa.cc($['commits'], ($) => ['list', $.map(($) => ['text', ({
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                })])]),
                                                                        'mainline': _pa.cc($['mainline'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['backtick', null],
                                                                                        'value': $p['value serializers']['default number']($, null),
                                                                                    })]], () => ['not set', null])]),
                                                                        'no commit': _pa.cc($['no commit'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'tag create': return _pa.ss($, ($) => ({
                                                                'state': "tag create",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'annotated': _pa.cc($['annotated'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'commit': _pa.cc($['commit'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                        'message': _pa.cc($['message'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                    })],
                                                            }));
                                                            default: return _pa.au($[0]);
                                                        }
                                                    })],
                                            }));
                                            case 'destroy': return _pa.ss($, ($) => ({
                                                'state': "destroy",
                                                'value': ['state', _pa.cc($, ($) => {
                                                        switch ($[0]) {
                                                            case 'branch delete': return _pa.ss($, ($) => ({
                                                                'state': "branch delete",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'commit amend': return _pa.ss($, ($) => ({
                                                                'state': "commit amend",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'message': _pa.cc($['message'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                        'no edit': _pa.cc($['no edit'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'filter repo': return _pa.ss($, ($) => ({
                                                                'state': "filter repo",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'invert paths': _pa.cc($['invert paths'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'path': _pa.cc($['path'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                    })],
                                                            }));
                                                            case 'gc': return _pa.ss($, ($) => ({
                                                                'state': "gc",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'aggressive': _pa.cc($['aggressive'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'prune': _pa.cc($['prune'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                    })],
                                                            }));
                                                            case 'rebase': return _pa.ss($, ($) => ({
                                                                'state': "rebase",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'interactive': _pa.cc($['interactive'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'onto': _pa.cc($['onto'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                        'preserve merges': _pa.cc($['preserve merges'], ($) => ['text', ({
                                                                                'delimiter': ['backtick', null],
                                                                                'value': $p['value serializers']['boolean']($, null),
                                                                            })]),
                                                                        'strategy': _pa.cc($['strategy'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                    })],
                                                            }));
                                                            case 'reset': return _pa.ss($, ($) => ({
                                                                'state': "reset",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'mode': _pa.cc($['mode'], ($) => ['state', _pa.cc($, ($) => {
                                                                                switch ($[0]) {
                                                                                    case 'hard': return _pa.ss($, ($) => ({
                                                                                        'state': "hard",
                                                                                        'value': ['verbose group', _pa.dictionary_literal({})],
                                                                                    }));
                                                                                    case 'mixed': return _pa.ss($, ($) => ({
                                                                                        'state': "mixed",
                                                                                        'value': ['verbose group', _pa.dictionary_literal({})],
                                                                                    }));
                                                                                    case 'soft': return _pa.ss($, ($) => ({
                                                                                        'state': "soft",
                                                                                        'value': ['verbose group', _pa.dictionary_literal({})],
                                                                                    }));
                                                                                    default: return _pa.au($[0]);
                                                                                }
                                                                            })]),
                                                                        'target': _pa.cc($['target'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'tag delete': return _pa.ss($, ($) => ({
                                                                'state': "tag delete",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                    })],
                                                            }));
                                                            case 'tag force': return _pa.ss($, ($) => ({
                                                                'state': "tag force",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                        'commit': _pa.cc($['commit'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                        'message': _pa.cc($['message'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    })]], () => ['not set', null])]),
                                                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                                                                'delimiter': ['quote', null],
                                                                                'value': $,
                                                                            })]),
                                                                    })],
                                                            }));
                                                            default: return _pa.au($[0]);
                                                        }
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'remote repo': return _pa.ss($, ($) => ({
                                'state': "remote repo",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'clone': return _pa.ss($, ($) => ({
                                                'state': "clone",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'depth': _pa.cc($['depth'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['backtick', null],
                                                                        'value': $p['value serializers']['default number']($, null),
                                                                    })]], () => ['not set', null])]),
                                                        'directory': _pa.cc($['directory'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'recursive': _pa.cc($['recursive'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'url': _pa.cc($['url'], ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]),
                                                    })],
                                            }));
                                            case 'fetch': return _pa.ss($, ($) => ({
                                                'state': "fetch",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'prune': _pa.cc($['prune'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            case 'pull': return _pa.ss($, ($) => ({
                                                'state': "pull",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'ff only': _pa.cc($['ff only'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'no rebase': _pa.cc($['no rebase'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'rebase': _pa.cc($['rebase'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            case 'push': return _pa.ss($, ($) => ({
                                                'state': "push",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'delete': _pa.cc($['delete'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'force with lease': _pa.cc($['force with lease'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'set upstream': _pa.cc($['set upstream'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'tags': _pa.cc($['tags'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'remote add': return _pa.ss($, ($) => ({
                                                'state': "remote add",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]),
                                                        'url': _pa.cc($['url'], ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]),
                                                    })],
                                            }));
                                            case 'remote remove': return _pa.ss($, ($) => ({
                                                'state': "remote remove",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'stash': return _pa.ss($, ($) => ({
                                'state': "stash",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'apply': return _pa.ss($, ($) => ({
                                                'state': "apply",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'index': _pa.cc($['index'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            case 'clear': return _pa.ss($, ($) => ({
                                                'state': "clear",
                                                'value': ['verbose group', _pa.dictionary_literal({})],
                                            }));
                                            case 'drop': return _pa.ss($, ($) => ({
                                                'state': "drop",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            case 'pop': return _pa.ss($, ($) => ({
                                                'state': "pop",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'index': _pa.cc($['index'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            case 'push': return _pa.ss($, ($) => ({
                                                'state': "push",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'files': _pa.cc($['files'], ($) => ['optional', $.transform(($) => ['set', ['list', $.map(($) => ['text', ({
                                                                            'delimiter': ['quote', null],
                                                                            'value': $,
                                                                        })])]], () => ['not set', null])]),
                                                        'include untracked': _pa.cc($['include untracked'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'keep index': _pa.cc($['keep index'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'message': _pa.cc($['message'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'workspace': return _pa.ss($, ($) => ({
                                'state': "workspace",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'checkout file': return _pa.ss($, ($) => ({
                                                'state': "checkout file",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })])]),
                                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'clean': return _pa.ss($, ($) => ({
                                                'state': "clean",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'directories': _pa.cc($['directories'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'dry run': _pa.cc($['dry run'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'ignored': _pa.cc($['ignored'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'restore': return _pa.ss($, ($) => ({
                                                'state': "restore",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })])]),
                                                        'source': _pa.cc($['source'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'worktree': _pa.cc($['worktree'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            default: return _pa.au($[0]);
                        }
                    })],
            }));
            case 'view': return _pa.ss($, ($) => ({
                'state': "view",
                'value': ['state', _pa.cc($, ($) => {
                        switch ($[0]) {
                            case 'configuration': return _pa.ss($, ($) => ({
                                'state': "configuration",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'config': return _pa.ss($, ($) => ({
                                                'state': "config",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'global': _pa.cc($['global'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'key': _pa.cc($['key'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'list': _pa.cc($['list'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'local': _pa.cc($['local'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'system': _pa.cc($['system'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'index': return _pa.ss($, ($) => ({
                                'state': "index",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'diff cached': return _pa.ss($, ($) => ({
                                                'state': "diff cached",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'files': _pa.cc($['files'], ($) => ['optional', $.transform(($) => ['set', ['list', $.map(($) => ['text', ({
                                                                            'delimiter': ['quote', null],
                                                                            'value': $,
                                                                        })])]], () => ['not set', null])]),
                                                        'name only': _pa.cc($['name only'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'stat': _pa.cc($['stat'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'status': return _pa.ss($, ($) => ({
                                                'state': "status",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'porcelain': _pa.cc($['porcelain'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'short': _pa.cc($['short'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'local repo': return _pa.ss($, ($) => ({
                                'state': "local repo",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'branch': return _pa.ss($, ($) => ({
                                                'state': "branch",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'remote': _pa.cc($['remote'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'verbose': _pa.cc($['verbose'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'log': return _pa.ss($, ($) => ({
                                                'state': "log",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'author': _pa.cc($['author'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'graph': _pa.cc($['graph'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'grep': _pa.cc($['grep'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'max count': _pa.cc($['max count'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['backtick', null],
                                                                        'value': $p['value serializers']['default number']($, null),
                                                                    })]], () => ['not set', null])]),
                                                        'oneline': _pa.cc($['oneline'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'since': _pa.cc($['since'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'until': _pa.cc($['until'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            case 'reflog': return _pa.ss($, ($) => ({
                                                'state': "reflog",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'oneline': _pa.cc($['oneline'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'tag': return _pa.ss($, ($) => ({
                                                'state': "tag",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'list': _pa.cc($['list'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'remote repo': return _pa.ss($, ($) => ({
                                'state': "remote repo",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'fetch dry run': return _pa.ss($, ($) => ({
                                                'state': "fetch dry run",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            case 'ls remote': return _pa.ss($, ($) => ({
                                                'state': "ls remote",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'heads': _pa.cc($['heads'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'tags': _pa.cc($['tags'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'remote': return _pa.ss($, ($) => ({
                                                'state': "remote",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'verbose': _pa.cc($['verbose'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'stash': return _pa.ss($, ($) => ({
                                'state': "stash",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'list': return _pa.ss($, ($) => ({
                                                'state': "list",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'oneline': _pa.cc($['oneline'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'show': return _pa.ss($, ($) => ({
                                                'state': "show",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'patch': _pa.cc($['patch'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            case 'workspace': return _pa.ss($, ($) => ({
                                'state': "workspace",
                                'value': ['state', _pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'diff': return _pa.ss($, ($) => ({
                                                'state': "diff",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'cached': _pa.cc($['cached'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'files': _pa.cc($['files'], ($) => ['optional', $.transform(($) => ['set', ['list', $.map(($) => ['text', ({
                                                                            'delimiter': ['quote', null],
                                                                            'value': $,
                                                                        })])]], () => ['not set', null])]),
                                                        'name only': _pa.cc($['name only'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'stat': _pa.cc($['stat'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'show': return _pa.ss($, ($) => ({
                                                'state': "show",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'commit': _pa.cc($['commit'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'name only': _pa.cc($['name only'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'stat': _pa.cc($['stat'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            case 'status': return _pa.ss($, ($) => ({
                                                'state': "status",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                        'branch': _pa.cc($['branch'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'porcelain': _pa.cc($['porcelain'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    })]], () => ['not set', null])]),
                                                        'short': _pa.cc($['short'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                        'show stash': _pa.cc($['show stash'], ($) => ['text', ({
                                                                'delimiter': ['backtick', null],
                                                                'value': $p['value serializers']['boolean']($, null),
                                                            })]),
                                                    })],
                                            }));
                                            default: return _pa.au($[0]);
                                        }
                                    })],
                            }));
                            default: return _pa.au($[0]);
                        }
                    })],
            }));
            default: return _pa.au($[0]);
        }
    })];
exports.Git_Command = Git_Command;
const Safety_Level = ($, $p) => ['state', _pa.cc($, ($) => {
        switch ($[0]) {
            case 'destructive': return _pa.ss($, ($) => ({
                'state': "destructive",
                'value': ['verbose group', _pa.dictionary_literal({
                        'areas affected': _pa.cc($['areas affected'], ($) => ['list', $.map(($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })])]),
                        'description': _pa.cc($['description'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        'warning': _pa.cc($['warning'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                    })],
            }));
            case 'risky': return _pa.ss($, ($) => ({
                'state': "risky",
                'value': ['verbose group', _pa.dictionary_literal({
                        'areas affected': _pa.cc($['areas affected'], ($) => ['list', $.map(($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })])]),
                        'description': _pa.cc($['description'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                    })],
            }));
            case 'safe': return _pa.ss($, ($) => ({
                'state': "safe",
                'value': ['verbose group', _pa.dictionary_literal({
                        'description': _pa.cc($['description'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                    })],
            }));
            default: return _pa.au($[0]);
        }
    })];
exports.Safety_Level = Safety_Level;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyc2hhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ2VuZXJhdGVkL2ltcGxlbWVudGF0aW9uL3NjaGVtYXMvZ2l0L21hcnNoYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXVDO0FBT2hDLE1BQU0sY0FBYyxHQUFvQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNqRixXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTixjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZELFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDSixxQkFBcUIsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNyRSxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2dCQUMvQixP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