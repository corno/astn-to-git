import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/git/marshall"


export const Command_Result: _i_signatures._T_Command_Result = ($, $p) => ['verbose group', _pa.dictionary_literal({
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
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'safety level': _pa.cc($['safety level'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Git_Command: _i_signatures._T_Git_Command = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'change': return _pa.ss($, ($) => ({
            'state': "change",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'configuration': return _pa.ss($, ($) => ({
                        'state': "configuration",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'config set': return _pa.ss($, ($) => ({
                                    'state': "config set",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'global': _pa.cc($['global'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'key': _pa.cc($['key'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                        'local': _pa.cc($['local'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'system': _pa.cc($['system'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'value': _pa.cc($['value'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    })],
                                }))
                                case 'config unset': return _pa.ss($, ($) => ({
                                    'state': "config unset",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'global': _pa.cc($['global'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'key': _pa.cc($['key'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                        'local': _pa.cc($['local'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'system': _pa.cc($['system'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'index': return _pa.ss($, ($) => ({
                        'state': "index",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'add': return _pa.ss($, ($) => ({
                                    'state': "add",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })])]),
                                        'patch': _pa.cc($['patch'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'update': _pa.cc($['update'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'reset files': return _pa.ss($, ($) => ({
                                    'state': "reset files",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })])]),
                                    })],
                                }))
                                case 'restore staged': return _pa.ss($, ($) => ({
                                    'state': "restore staged",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })])]),
                                    })],
                                }))
                                case 'rm': return _pa.ss($, ($) => ({
                                    'state': "rm",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'cached': _pa.cc($['cached'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })])]),
                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'local repo': return _pa.ss($, ($) => ({
                        'state': "local repo",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'append': return _pa.ss($, ($) => ({
                                    'state': "append",
                                    'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                        switch ($[0]) {
                                            case 'branch create': return _pa.ss($, ($) => ({
                                                'state': "branch create",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'name': _pa.cc($['name'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                    'start point': _pa.cc($['start point'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                })],
                                            }))
                                            case 'cherry pick': return _pa.ss($, ($) => ({
                                                'state': "cherry pick",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'commits': _pa.cc($['commits'], ($) => ['list', $.map(($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })])]),
                                                    'mainline': _pa.cc($['mainline'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['backtick', null],
                                                            'value': $p['value serializers']['default number'](
                                                                $,
                                                                null
                                                            ),
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'no commit': _pa.cc($['no commit'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                })],
                                            }))
                                            case 'commit': return _pa.ss($, ($) => ({
                                                'state': "commit",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'all': _pa.cc($['all'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'amend': _pa.cc($['amend'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'message': _pa.cc($['message'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                    'no verify': _pa.cc($['no verify'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'signoff': _pa.cc($['signoff'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                })],
                                            }))
                                            case 'merge': return _pa.ss($, ($) => ({
                                                'state': "merge",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'branch': _pa.cc($['branch'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                    'ff only': _pa.cc($['ff only'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'message': _pa.cc($['message'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'no commit': _pa.cc($['no commit'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'no ff': _pa.cc($['no ff'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                })],
                                            }))
                                            case 'pull rebase private': return _pa.ss($, ($) => ({
                                                'state': "pull rebase private",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                })],
                                            }))
                                            case 'revert': return _pa.ss($, ($) => ({
                                                'state': "revert",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'commits': _pa.cc($['commits'], ($) => ['list', $.map(($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })])]),
                                                    'mainline': _pa.cc($['mainline'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['backtick', null],
                                                            'value': $p['value serializers']['default number'](
                                                                $,
                                                                null
                                                            ),
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'no commit': _pa.cc($['no commit'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                })],
                                            }))
                                            case 'tag create': return _pa.ss($, ($) => ({
                                                'state': "tag create",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'annotated': _pa.cc($['annotated'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'commit': _pa.cc($['commit'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'message': _pa.cc($['message'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'name': _pa.cc($['name'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                })],
                                            }))
                                            default: return _pa.au($[0])
                                        }
                                    })],
                                }))
                                case 'destroy': return _pa.ss($, ($) => ({
                                    'state': "destroy",
                                    'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                        switch ($[0]) {
                                            case 'branch delete': return _pa.ss($, ($) => ({
                                                'state': "branch delete",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'force': _pa.cc($['force'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'name': _pa.cc($['name'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                })],
                                            }))
                                            case 'commit amend': return _pa.ss($, ($) => ({
                                                'state': "commit amend",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'all': _pa.cc($['all'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'message': _pa.cc($['message'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'no edit': _pa.cc($['no edit'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                })],
                                            }))
                                            case 'filter repo': return _pa.ss($, ($) => ({
                                                'state': "filter repo",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'force': _pa.cc($['force'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'invert paths': _pa.cc($['invert paths'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'path': _pa.cc($['path'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                })],
                                            }))
                                            case 'gc': return _pa.ss($, ($) => ({
                                                'state': "gc",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'aggressive': _pa.cc($['aggressive'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'prune': _pa.cc($['prune'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                })],
                                            }))
                                            case 'rebase': return _pa.ss($, ($) => ({
                                                'state': "rebase",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'interactive': _pa.cc($['interactive'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'onto': _pa.cc($['onto'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                    'preserve merges': _pa.cc($['preserve merges'], ($) => ['text', ({
                                                        'delimiter': ['backtick', null],
                                                        'value': $p['value serializers']['boolean'](
                                                            $,
                                                            null
                                                        ),
                                                    })]),
                                                    'strategy': _pa.cc($['strategy'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                })],
                                            }))
                                            case 'reset': return _pa.ss($, ($) => ({
                                                'state': "reset",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'mode': _pa.cc($['mode'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                                        switch ($[0]) {
                                                            case 'hard': return _pa.ss($, ($) => ({
                                                                'state': "hard",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                })],
                                                            }))
                                                            case 'mixed': return _pa.ss($, ($) => ({
                                                                'state': "mixed",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                })],
                                                            }))
                                                            case 'soft': return _pa.ss($, ($) => ({
                                                                'state': "soft",
                                                                'value': ['verbose group', _pa.dictionary_literal({
                                                                })],
                                                            }))
                                                            default: return _pa.au($[0])
                                                        }
                                                    })]),
                                                    'target': _pa.cc($['target'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                })],
                                            }))
                                            case 'tag delete': return _pa.ss($, ($) => ({
                                                'state': "tag delete",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'name': _pa.cc($['name'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                })],
                                            }))
                                            case 'tag force': return _pa.ss($, ($) => ({
                                                'state': "tag force",
                                                'value': ['verbose group', _pa.dictionary_literal({
                                                    'commit': _pa.cc($['commit'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'message': _pa.cc($['message'], ($) => ['optional', $.transform(
                                                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]],
                                                        () => ['not set', null]
                                                    )]),
                                                    'name': _pa.cc($['name'], ($) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                })],
                                            }))
                                            default: return _pa.au($[0])
                                        }
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'remote repo': return _pa.ss($, ($) => ({
                        'state': "remote repo",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'clone': return _pa.ss($, ($) => ({
                                    'state': "clone",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'depth': _pa.cc($['depth'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $p['value serializers']['default number'](
                                                    $,
                                                    null
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'directory': _pa.cc($['directory'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'recursive': _pa.cc($['recursive'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'url': _pa.cc($['url'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    })],
                                }))
                                case 'fetch': return _pa.ss($, ($) => ({
                                    'state': "fetch",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'prune': _pa.cc($['prune'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                case 'pull': return _pa.ss($, ($) => ({
                                    'state': "pull",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'ff only': _pa.cc($['ff only'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'no rebase': _pa.cc($['no rebase'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'rebase': _pa.cc($['rebase'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                case 'push': return _pa.ss($, ($) => ({
                                    'state': "push",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'delete': _pa.cc($['delete'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'force with lease': _pa.cc($['force with lease'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'set upstream': _pa.cc($['set upstream'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'tags': _pa.cc($['tags'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
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
                                }))
                                case 'remote remove': return _pa.ss($, ($) => ({
                                    'state': "remote remove",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'name': _pa.cc($['name'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'stash': return _pa.ss($, ($) => ({
                        'state': "stash",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'apply': return _pa.ss($, ($) => ({
                                    'state': "apply",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'index': _pa.cc($['index'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                case 'clear': return _pa.ss($, ($) => ({
                                    'state': "clear",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                    })],
                                }))
                                case 'drop': return _pa.ss($, ($) => ({
                                    'state': "drop",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                case 'pop': return _pa.ss($, ($) => ({
                                    'state': "pop",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'index': _pa.cc($['index'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                case 'push': return _pa.ss($, ($) => ({
                                    'state': "push",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'files': _pa.cc($['files'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['list', $.map(($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })])]],
                                            () => ['not set', null]
                                        )]),
                                        'include untracked': _pa.cc($['include untracked'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'keep index': _pa.cc($['keep index'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'message': _pa.cc($['message'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'workspace': return _pa.ss($, ($) => ({
                        'state': "workspace",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'clean': return _pa.ss($, ($) => ({
                                    'state': "clean",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'directories': _pa.cc($['directories'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'dry run': _pa.cc($['dry run'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'force': _pa.cc($['force'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'ignored': _pa.cc($['ignored'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'restore': return _pa.ss($, ($) => ({
                                    'state': "restore",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'files': _pa.cc($['files'], ($) => ['list', $.map(($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })])]),
                                        'source': _pa.cc($['source'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'worktree': _pa.cc($['worktree'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'view': return _pa.ss($, ($) => ({
            'state': "view",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'configuration': return _pa.ss($, ($) => ({
                        'state': "configuration",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'config': return _pa.ss($, ($) => ({
                                    'state': "config",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'global': _pa.cc($['global'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'key': _pa.cc($['key'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'list': _pa.cc($['list'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'local': _pa.cc($['local'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'system': _pa.cc($['system'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'index': return _pa.ss($, ($) => ({
                        'state': "index",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'diff cached': return _pa.ss($, ($) => ({
                                    'state': "diff cached",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'files': _pa.cc($['files'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['list', $.map(($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })])]],
                                            () => ['not set', null]
                                        )]),
                                        'name only': _pa.cc($['name only'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'stat': _pa.cc($['stat'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'status': return _pa.ss($, ($) => ({
                                    'state': "status",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'porcelain': _pa.cc($['porcelain'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'short': _pa.cc($['short'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'local repo': return _pa.ss($, ($) => ({
                        'state': "local repo",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'branch': return _pa.ss($, ($) => ({
                                    'state': "branch",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'remote': _pa.cc($['remote'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'verbose': _pa.cc($['verbose'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'log': return _pa.ss($, ($) => ({
                                    'state': "log",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'author': _pa.cc($['author'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'graph': _pa.cc($['graph'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'grep': _pa.cc($['grep'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'max count': _pa.cc($['max count'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $p['value serializers']['default number'](
                                                    $,
                                                    null
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'oneline': _pa.cc($['oneline'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'since': _pa.cc($['since'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'until': _pa.cc($['until'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                case 'reflog': return _pa.ss($, ($) => ({
                                    'state': "reflog",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'branch': _pa.cc($['branch'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'oneline': _pa.cc($['oneline'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'tag': return _pa.ss($, ($) => ({
                                    'state': "tag",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'list': _pa.cc($['list'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'remote repo': return _pa.ss($, ($) => ({
                        'state': "remote repo",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'fetch dry run': return _pa.ss($, ($) => ({
                                    'state': "fetch dry run",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'all': _pa.cc($['all'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                case 'ls remote': return _pa.ss($, ($) => ({
                                    'state': "ls remote",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'heads': _pa.cc($['heads'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'remote': _pa.cc($['remote'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'tags': _pa.cc($['tags'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'remote': return _pa.ss($, ($) => ({
                                    'state': "remote",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'verbose': _pa.cc($['verbose'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'stash': return _pa.ss($, ($) => ({
                        'state': "stash",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'list': return _pa.ss($, ($) => ({
                                    'state': "list",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'oneline': _pa.cc($['oneline'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'show': return _pa.ss($, ($) => ({
                                    'state': "show",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'patch': _pa.cc($['patch'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'stash': _pa.cc($['stash'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    case 'workspace': return _pa.ss($, ($) => ({
                        'state': "workspace",
                        'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'diff': return _pa.ss($, ($) => ({
                                    'state': "diff",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'cached': _pa.cc($['cached'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'files': _pa.cc($['files'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['list', $.map(($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })])]],
                                            () => ['not set', null]
                                        )]),
                                        'name only': _pa.cc($['name only'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'stat': _pa.cc($['stat'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'show': return _pa.ss($, ($) => ({
                                    'state': "show",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'commit': _pa.cc($['commit'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'name only': _pa.cc($['name only'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'stat': _pa.cc($['stat'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                case 'status': return _pa.ss($, ($) => ({
                                    'state': "status",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'branch': _pa.cc($['branch'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'porcelain': _pa.cc($['porcelain'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]],
                                            () => ['not set', null]
                                        )]),
                                        'short': _pa.cc($['short'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'show stash': _pa.cc($['show stash'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['boolean'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Safety_Level: _i_signatures._T_Safety_Level = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
        }))
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
        }))
        case 'safe': return _pa.ss($, ($) => ({
            'state': "safe",
            'value': ['verbose group', _pa.dictionary_literal({
                'description': _pa.cc($['description'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
