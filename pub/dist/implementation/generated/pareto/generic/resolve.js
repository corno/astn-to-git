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
exports.resolve_ordered_dictionary = exports.resolve_dense_ordered_dictionary = exports.resolve_dense_dictionary = exports.resolve_dictionary = exports.resolve_path = exports.get_entry = exports.get_entry_from_stack = exports.push_stack = exports.get_possibly_circular_dependent_sibling_entry = exports.dictionary_to_lookup = exports.abort = void 0;
const _ea = __importStar(require("exupery-core-alg"));
const abort = (location, type, location_to_string) => {
    return _ea.panic(_ea.cc(type, ($) => {
        switch ($[0]) {
            case 'no such entry': return _ea.ss($, ($) => `no such entry: '${$['key']}'`);
            case 'missing denseness entry': return _ea.ss($, ($) => `missing denseness entry: '${$['key']}'`);
            case 'circular dependency': return _ea.ss($, ($) => {
                const keys = _ea.build_text(($i) => {
                    $['keys'].__for_each(($) => {
                        $i['add snippet'](` '${$}', `);
                    });
                });
                return `circular dependency: (${keys})`;
            });
            case 'no context lookup': return _ea.ss($, ($) => `no context lookup`);
            case 'index out of bounds': return _ea.ss($, ($) => `index out of bounds, ${$['up steps taken']}`);
            case 'no element found at index': return _ea.ss($, ($) => `no element found at index, ${$['index']}`);
            default: return _ea.au($[0]);
        }
    }), ` @ ${location_to_string(location)}`);
};
exports.abort = abort;
const dictionary_to_lookup = ($, $p) => {
    return _ea.set($.map(($) => (['resolved', $])));
};
exports.dictionary_to_lookup = dictionary_to_lookup;
const get_possibly_circular_dependent_sibling_entry = ($, $p) => {
    return $.transform(($) => ({
        'key': $p.reference.key,
        'entry': $.__get_entry($p.reference.key).transform(($) => $, () => (0, exports.abort)($p.reference.location, ['no such entry', { 'key': $p.reference.key }], $p['location 2 string']))
    }), () => (0, exports.abort)($p.reference.location, ['no context lookup', null], $p['location 2 string']));
};
exports.get_possibly_circular_dependent_sibling_entry = get_possibly_circular_dependent_sibling_entry;
const push_stack = ($, $p) => {
    return _ea.build_list(($i) => {
        $i['add list']($);
        $i['add element']($p['element']);
    });
};
exports.push_stack = push_stack;
const get_entry_from_stack = ($, $p) => {
    const ref = $p.reference;
    const get_entry_from_stack = (up_steps_taken) => {
        return $.__get_element_at($.__get_length() - 1 - up_steps_taken).transform(($) => {
            return $.transform(($) => {
                return $.__get_entry(ref.key).transform(($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'error': return _ea.ss($, ($) => get_entry_from_stack(up_steps_taken += 1));
                        case 'resolved': return _ea.ss($, ($) => ({
                            'key': ref.key,
                            'up steps': up_steps_taken,
                            'entry': $,
                        }));
                        default: return _ea.au($[0]);
                    }
                }), () => _ea.panic(`no clue yet of what is happening here`));
            }, () => (0, exports.abort)(ref.location, ['index out of bounds', { 'up steps taken': up_steps_taken }], $p['location 2 string']));
        }, () => (0, exports.abort)(ref.location, ['no element found at index', { 'index': up_steps_taken }], $p['location 2 string']));
    };
    return get_entry_from_stack(0);
};
exports.get_entry_from_stack = get_entry_from_stack;
const get_entry = ($, $p) => {
    return $.transform(($) => ({
        'key': $p.reference.key,
        'entry': $.__get_entry($p.reference.key).transform(($) => _ea.cc($, ($) => {
            switch ($[0]) {
                case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'circular': return _ea.ss($, ($) => {
                            return (0, exports.abort)($p.reference.location, ['circular dependency', { 'keys': $ }], $p['location 2 string']);
                        });
                        default: return _ea.au($[0]);
                    }
                }));
                case 'resolved': return _ea.ss($, ($) => $);
                default: return _ea.au($[0]);
            }
        }), () => {
            return (0, exports.abort)($p.reference.location, ['no such entry', { 'key': $p.reference.key }], $p['location 2 string']);
        })
    }), () => (0, exports.abort)($p.reference.location, ['no context lookup', null], $p['location 2 string']));
};
exports.get_entry = get_entry;
const resolve_path = ($, $p) => {
    let current = {
        'list': _ea.array_literal([]),
        'result': {
            'data': $p.seed,
        },
    };
    $.list.__for_each(($) => {
        const result = $p.map($.element, current.result.data);
        const data = _ea.build_list(($i) => {
            current.list.__for_each(($) => {
                $i['add element']($);
            });
            $i['add element'](result.element);
        });
        current = {
            'list': data,
            'result': {
                'data': result.result,
            }
        };
    });
    return current;
};
exports.resolve_path = resolve_path;
const resolve_dictionary = ($, $p) => {
    return (0, exports.resolve_ordered_dictionary)($, $p).dictionary;
};
exports.resolve_dictionary = resolve_dictionary;
const resolve_dense_dictionary = ($, $p) => {
    return (0, exports.resolve_dense_ordered_dictionary)($, $p).dictionary;
};
exports.resolve_dense_dictionary = resolve_dense_dictionary;
const resolve_dense_ordered_dictionary = ($, $p) => {
    const location = $.location;
    const result = (0, exports.resolve_ordered_dictionary)($, $p);
    $p['denseness benchmark'].map(($) => {
        const validate_denseness = (benchmark, focus, location, location_to_string) => {
            benchmark.map(($, key) => {
                const benchmark = $;
                focus.__get_entry(key).transform(($) => {
                }, () => {
                    (0, exports.abort)(location, ['missing denseness entry', { 'key': key }], $p['location 2 string']);
                });
            });
        };
        validate_denseness($p['denseness benchmark'], result.dictionary, location, $p['location 2 string']);
    });
    return result;
};
exports.resolve_dense_ordered_dictionary = resolve_dense_ordered_dictionary;
const resolve_ordered_dictionary = ($, $p) => {
    const dictionary_location = $.location;
    /**
     * this variable contains all the entries on which siblings have subscribed
     */
    const all_siblings_subscribed_entries = {};
    const finished = {};
    const ordered_list = _ea.build_list(($i) => {
        const source_dictionary = $;
        const status_dictionary = {};
        function process_entry($, location, key_of_entry_being_processed) {
            status_dictionary[key_of_entry_being_processed] = ['processing', null];
            const entry = $p.map({
                'key': key_of_entry_being_processed,
                'value': $,
                'location': location,
            }, {
                'possibly circular dependent siblings': _ea.set({
                    __get_entry(key) {
                        //does the entry exist?
                        return source_dictionary.dictionary.__get_entry(key).map(($) => {
                            //yes, it exists in the source dictionary
                            if (all_siblings_subscribed_entries[key] === undefined) {
                                all_siblings_subscribed_entries[key] = { 'entry': null };
                            }
                            const subscr = all_siblings_subscribed_entries[key];
                            return {
                                'compute': () => {
                                    if (subscr.entry === null) {
                                        return _ea.panic(`entry not set: ${key}`);
                                    }
                                    return subscr.entry;
                                }
                            };
                        });
                    },
                }),
                'not circular dependent siblings': _ea.set({
                    __get_entry(key) {
                        const status = status_dictionary[key];
                        if (status === undefined) {
                            return source_dictionary.dictionary.__get_entry(key).transform(($) => _ea.set(['resolved', process_entry($.entry, $.location, key)]), () => {
                                return _ea.not_set();
                                // throw new ResolveError("")
                            });
                        }
                        else {
                            const get_keys_of_entries_being_processed = () => {
                                return _ea.build_list(($i) => {
                                    _ea.dictionary_literal(status_dictionary).map(($, key) => {
                                        if ($[0] === 'processing') {
                                            $i['add element'](key);
                                        }
                                    });
                                });
                            };
                            return _ea.cc(status, (s) => {
                                switch (s[0]) {
                                    case 'failed':
                                        return _ea.ss(s, (s) => {
                                            //nothing to report
                                            return _ea.set(['error', ['circular', get_keys_of_entries_being_processed()]]);
                                            //return notSet()
                                        });
                                    case 'processing':
                                        if (key === key_of_entry_being_processed) {
                                            //$se.onError(`'${key}' is referencing itself`)
                                        }
                                        else {
                                            // const keys: string[] = []
                                            // Object.keys(status_dictionary).forEach((key) => {
                                            //     if (status_dictionary[key][0] === 'processing') {
                                            //         keys.push(key)
                                            //     }
                                            // })
                                            //$se.onError(`the following entries are referencing each other: ${keys.join(", ")}`)
                                        }
                                        status_dictionary[key_of_entry_being_processed] = ['failed', null];
                                        return _ea.set(['error', ['circular', get_keys_of_entries_being_processed()]]);
                                    case 'success':
                                        return _ea.set(['resolved', s[1]]);
                                    default: return _ea.au(s[0]);
                                }
                            });
                        }
                    },
                }),
            });
            finished[key_of_entry_being_processed] = entry;
            $i['add element']({
                'key': key_of_entry_being_processed,
                'value': entry,
            });
            status_dictionary[key_of_entry_being_processed] = ['success', entry];
            return entry;
        }
        $.dictionary.map(($, key) => {
            if (status_dictionary[key] === undefined) {
                process_entry($.entry, $.location, key);
            }
        });
        _ea.dictionary_literal(all_siblings_subscribed_entries).map(($, key) => {
            if (finished[key] === undefined) {
                _ea.panic(`implementation error: entry not resolved: ${key}`);
            }
            all_siblings_subscribed_entries[key].entry = finished[key];
        });
    });
    return {
        'dictionary': _ea.dictionary_literal(finished),
        'ordered list': ordered_list,
    };
};
exports.resolve_ordered_dictionary = resolve_ordered_dictionary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbXBsZW1lbnRhdGlvbi9nZW5lcmF0ZWQvcGFyZXRvL2dlbmVyaWMvcmVzb2x2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUF1QztBQTBEaEMsTUFBTSxLQUFLLEdBQUcsQ0FBUyxRQUFnQixFQUFFLElBQXdCLEVBQUUsa0JBQWdELEVBQVMsRUFBRTtJQUNqSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQ1osR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNmLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWCxLQUFLLGVBQWUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzdFLEtBQUsseUJBQXlCLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNqRyxLQUFLLHFCQUFxQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7b0JBQy9CLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDdkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FB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