import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/git/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/git/unmarshall"


export const Command_Result: _i_signatures._T_Command_Result = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'affected areas': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "affected areas",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'command line': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "command line",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'requires force push': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "requires force push",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'safety level': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "safety level",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Git_Command: _i_signatures._T_Git_Command = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'change': ($): _i_out._T_Git_Command.SG => ['change', _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'configuration': ($): _i_out._T_Git_Command.SG.change.SG => ['configuration', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'config set': ($): _i_out._T_Git_Command.SG.change.SG.configuration.SG => ['config set', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'global': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "global",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'key': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "key",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                                'local': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "local",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'system': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "system",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'value': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "value",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    'config unset': ($): _i_out._T_Git_Command.SG.change.SG.configuration.SG => ['config unset', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'global': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "global",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'key': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "key",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                                'local': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "local",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'system': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "system",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'index': ($): _i_out._T_Git_Command.SG.change.SG => ['index', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'add': ($): _i_out._T_Git_Command.SG.change.SG.index.SG => ['add', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'all': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "all",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_unconstrained_list(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'patch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "patch",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'update': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "update",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'reset files': ($): _i_out._T_Git_Command.SG.change.SG.index.SG => ['reset files', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_unconstrained_list(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'restore staged': ($): _i_out._T_Git_Command.SG.change.SG.index.SG => ['restore staged', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_unconstrained_list(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'rm': ($): _i_out._T_Git_Command.SG.change.SG.index.SG => ['rm', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'cached': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "cached",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_unconstrained_list(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'force': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "force",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'local repo': ($): _i_out._T_Git_Command.SG.change.SG => ['local repo', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'append': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG => ['append', _i_generic.process_unconstrained_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'branch create': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.append.SG => ['branch create', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'name': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "name",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                            'start point': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "start point",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'cherry pick': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.append.SG => ['cherry pick', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'commits': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "commits",
                                                                }
                                                            ), ($) => _i_generic.process_unconstrained_list(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'mainline': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "mainline",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_number(
                                                                        $,
                                                                        {
                                                                            'deserializer': $p['value deserializers']['default number'],
                                                                        }
                                                                    ),
                                                                }
                                                            )),
                                                            'no commit': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "no commit",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'commit': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.append.SG => ['commit', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'all': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "all",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'amend': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "amend",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'message': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "message",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                            'no verify': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "no verify",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'signoff': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "signoff",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'merge': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.append.SG => ['merge', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'branch': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "branch",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                            'ff only': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "ff only",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'message': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "message",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'no commit': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "no commit",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'no ff': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "no ff",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'pull rebase private': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.append.SG => ['pull rebase private', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'branch': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "branch",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'remote': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "remote",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'revert': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.append.SG => ['revert', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'commits': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "commits",
                                                                }
                                                            ), ($) => _i_generic.process_unconstrained_list(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'mainline': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "mainline",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_number(
                                                                        $,
                                                                        {
                                                                            'deserializer': $p['value deserializers']['default number'],
                                                                        }
                                                                    ),
                                                                }
                                                            )),
                                                            'no commit': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "no commit",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'tag create': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.append.SG => ['tag create', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'annotated': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "annotated",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'commit': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "commit",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'message': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "message",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'name': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "name",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                        }),
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                    'destroy': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG => ['destroy', _i_generic.process_unconstrained_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'branch delete': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['branch delete', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'force': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "force",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'name': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "name",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'commit amend': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['commit amend', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'all': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "all",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'message': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "message",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'no edit': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "no edit",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'filter repo': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['filter repo', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'force': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "force",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'invert paths': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "invert paths",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'path': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "path",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'gc': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['gc', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'aggressive': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "aggressive",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'prune': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "prune",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'rebase': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['rebase', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'interactive': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "interactive",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'onto': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "onto",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                            'preserve merges': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "preserve merges",
                                                                }
                                                            ), ($) => _i_generic.process_boolean(
                                                                $,
                                                                {
                                                                    'deserializer': $p['value deserializers']['boolean'],
                                                                }
                                                            )),
                                                            'strategy': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "strategy",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'reset': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['reset', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'mode': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "mode",
                                                                }
                                                            ), ($) => _i_generic.process_unconstrained_state_group(
                                                                $,
                                                                {
                                                                    'states': _pa.dictionary_literal({
                                                                        'hard': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG.reset.mode.SG => ['hard', _i_generic.process_group(
                                                                            $,
                                                                            {
                                                                                'properties': ($) => null,
                                                                            }
                                                                        )],
                                                                        'mixed': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG.reset.mode.SG => ['mixed', _i_generic.process_group(
                                                                            $,
                                                                            {
                                                                                'properties': ($) => null,
                                                                            }
                                                                        )],
                                                                        'soft': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG.reset.mode.SG => ['soft', _i_generic.process_group(
                                                                            $,
                                                                            {
                                                                                'properties': ($) => null,
                                                                            }
                                                                        )],
                                                                    }),
                                                                }
                                                            )),
                                                            'target': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "target",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'tag delete': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['tag delete', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'name': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "name",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'tag force': ($): _i_out._T_Git_Command.SG.change.SG.local_repo.SG.destroy.SG => ['tag force', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'commit': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "commit",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'message': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "message",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_text(
                                                                        $,
                                                                        null
                                                                    ),
                                                                }
                                                            )),
                                                            'name': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "name",
                                                                }
                                                            ), ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            )),
                                                        }),
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'remote repo': ($): _i_out._T_Git_Command.SG.change.SG => ['remote repo', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'clone': ($): _i_out._T_Git_Command.SG.change.SG.remote_repo.SG => ['clone', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'branch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "branch",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'depth': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "depth",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_number(
                                                            $,
                                                            {
                                                                'deserializer': $p['value deserializers']['default number'],
                                                            }
                                                        ),
                                                    }
                                                )),
                                                'directory': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "directory",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'recursive': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "recursive",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'url': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "url",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    'fetch': ($): _i_out._T_Git_Command.SG.change.SG.remote_repo.SG => ['fetch', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'all': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "all",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'branch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "branch",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'prune': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "prune",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'remote': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "remote",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'pull': ($): _i_out._T_Git_Command.SG.change.SG.remote_repo.SG => ['pull', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'branch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "branch",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'ff only': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "ff only",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'no rebase': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "no rebase",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'rebase': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "rebase",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'remote': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "remote",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'push': ($): _i_out._T_Git_Command.SG.change.SG.remote_repo.SG => ['push', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'branch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "branch",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'delete': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "delete",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'force': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "force",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'force with lease': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "force with lease",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'remote': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "remote",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'set upstream': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "set upstream",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'tags': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "tags",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'remote add': ($): _i_out._T_Git_Command.SG.change.SG.remote_repo.SG => ['remote add', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'name': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "name",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                                'url': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "url",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    'remote remove': ($): _i_out._T_Git_Command.SG.change.SG.remote_repo.SG => ['remote remove', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'name': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "name",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'stash': ($): _i_out._T_Git_Command.SG.change.SG => ['stash', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'apply': ($): _i_out._T_Git_Command.SG.change.SG.stash.SG => ['apply', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'index': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "index",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'stash': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "stash",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'clear': ($): _i_out._T_Git_Command.SG.change.SG.stash.SG => ['clear', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => null,
                                        }
                                    )],
                                    'drop': ($): _i_out._T_Git_Command.SG.change.SG.stash.SG => ['drop', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'stash': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "stash",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'pop': ($): _i_out._T_Git_Command.SG.change.SG.stash.SG => ['pop', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'index': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "index",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'stash': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "stash",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'push': ($): _i_out._T_Git_Command.SG.change.SG.stash.SG => ['push', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_unconstrained_list(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                ),
                                                            }
                                                        ),
                                                    }
                                                )),
                                                'include untracked': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "include untracked",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'keep index': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "keep index",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'message': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "message",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'workspace': ($): _i_out._T_Git_Command.SG.change.SG => ['workspace', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'checkout file': ($): _i_out._T_Git_Command.SG.change.SG.workspace.SG => ['checkout file', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_unconstrained_list(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'force': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "force",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'clean': ($): _i_out._T_Git_Command.SG.change.SG.workspace.SG => ['clean', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'directories': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "directories",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'dry run': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "dry run",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'force': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "force",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'ignored': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "ignored",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'restore': ($): _i_out._T_Git_Command.SG.change.SG.workspace.SG => ['restore', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_unconstrained_list(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'source': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "source",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'worktree': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "worktree",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                    }),
                }
            )],
            'view': ($): _i_out._T_Git_Command.SG => ['view', _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'configuration': ($): _i_out._T_Git_Command.SG.view.SG => ['configuration', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'config': ($): _i_out._T_Git_Command.SG.view.SG.configuration.SG => ['config', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'global': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "global",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'key': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "key",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'list': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "list",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'local': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "local",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'system': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "system",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'index': ($): _i_out._T_Git_Command.SG.view.SG => ['index', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'diff cached': ($): _i_out._T_Git_Command.SG.view.SG.index.SG => ['diff cached', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_unconstrained_list(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                ),
                                                            }
                                                        ),
                                                    }
                                                )),
                                                'name only': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "name only",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'stat': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "stat",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'status': ($): _i_out._T_Git_Command.SG.view.SG.index.SG => ['status', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'porcelain': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "porcelain",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'short': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "short",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'local repo': ($): _i_out._T_Git_Command.SG.view.SG => ['local repo', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'branch': ($): _i_out._T_Git_Command.SG.view.SG.local_repo.SG => ['branch', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'all': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "all",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'remote': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "remote",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'verbose': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "verbose",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'log': ($): _i_out._T_Git_Command.SG.view.SG.local_repo.SG => ['log', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'all': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "all",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'author': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "author",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'graph': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "graph",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'grep': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "grep",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'max count': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "max count",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_number(
                                                            $,
                                                            {
                                                                'deserializer': $p['value deserializers']['default number'],
                                                            }
                                                        ),
                                                    }
                                                )),
                                                'oneline': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "oneline",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'since': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "since",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'until': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "until",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'reflog': ($): _i_out._T_Git_Command.SG.view.SG.local_repo.SG => ['reflog', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'branch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "branch",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'oneline': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "oneline",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'tag': ($): _i_out._T_Git_Command.SG.view.SG.local_repo.SG => ['tag', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'list': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "list",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'remote repo': ($): _i_out._T_Git_Command.SG.view.SG => ['remote repo', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'fetch dry run': ($): _i_out._T_Git_Command.SG.view.SG.remote_repo.SG => ['fetch dry run', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'all': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "all",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'remote': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "remote",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'ls remote': ($): _i_out._T_Git_Command.SG.view.SG.remote_repo.SG => ['ls remote', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'heads': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "heads",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'remote': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "remote",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'tags': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "tags",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'remote': ($): _i_out._T_Git_Command.SG.view.SG.remote_repo.SG => ['remote', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'verbose': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "verbose",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'stash': ($): _i_out._T_Git_Command.SG.view.SG => ['stash', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'list': ($): _i_out._T_Git_Command.SG.view.SG.stash.SG => ['list', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'oneline': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "oneline",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'show': ($): _i_out._T_Git_Command.SG.view.SG.stash.SG => ['show', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'patch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "patch",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'stash': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "stash",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                        'workspace': ($): _i_out._T_Git_Command.SG.view.SG => ['workspace', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'diff': ($): _i_out._T_Git_Command.SG.view.SG.workspace.SG => ['diff', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'cached': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "cached",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'files': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "files",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_unconstrained_list(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                ),
                                                            }
                                                        ),
                                                    }
                                                )),
                                                'name only': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "name only",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'stat': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "stat",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'show': ($): _i_out._T_Git_Command.SG.view.SG.workspace.SG => ['show', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'commit': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "commit",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'name only': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "name only",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'stat': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "stat",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'status': ($): _i_out._T_Git_Command.SG.view.SG.workspace.SG => ['status', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'branch': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "branch",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'porcelain': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "porcelain",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        ),
                                                    }
                                                )),
                                                'short': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "short",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                                'show stash': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "show stash",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['boolean'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )],
                    }),
                }
            )],
        }),
    }
)
export const Safety_Level: _i_signatures._T_Safety_Level = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'destructive': ($): _i_out._T_Safety_Level.SG => ['destructive', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'areas affected': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "areas affected",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'description': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "description",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                        'warning': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "warning",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'risky': ($): _i_out._T_Safety_Level.SG => ['risky', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'areas affected': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "areas affected",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'description': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "description",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'safe': ($): _i_out._T_Safety_Level.SG => ['safe', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'description': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "description",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
        }),
    }
)
