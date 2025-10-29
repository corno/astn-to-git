import * as pa from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/git/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"
import { Signature } from "../../../../interface/algorithms/transformations/temp/generate_command_line_arguments_clean"


export const Git_Command = (
    $: d_in.Git_Command
): d_out.Block_Part => {
    return pa.cc($, (type) => {
        switch (type[0]) {
            case 'view': return pa.ss(type, (viewData) => 
                pa.cc(viewData, (area) => {
                    switch (area[0]) {
                        case 'workspace': return pa.ss(area, (workspaceData) =>
                            pa.cc(workspaceData, (command) => {
                                switch (command[0]) {
                                    case 'status': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git status"),
                                        commandData.porcelain.transform(
                                            (v) => sh.b.snippet(` --porcelain=${v}`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.short ? sh.b.snippet(" --short") : sh.b.nothing(),
                                        commandData.branch ? sh.b.snippet(" --branch") : sh.b.nothing(),
                                        commandData["show stash"] ? sh.b.snippet(" --show-stash") : sh.b.nothing()
                                    ]))
                                    case 'diff': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git diff"),
                                        commandData.cached ? sh.b.snippet(" --cached") : sh.b.nothing(),
                                        commandData["name only"] ? sh.b.snippet(" --name-only") : sh.b.nothing(),
                                        commandData.stat ? sh.b.snippet(" --stat") : sh.b.nothing(),
                                        commandData.files.transform(
                                            (files) => sh.b.sub([
                                                sh.b.snippet(" "),
                                               sh.b.sub(files.map((f) => sh.b.sub([ sh.b.snippet(f), sh.b.snippet(" ")])))
                                            ]),
                                            () => sh.b.nothing()
                                        )
                                    ]))
                                    case 'show': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git show"),
                                        commandData.commit.transform(
                                            (v) => sh.b.snippet(` ${v}`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData["name only"] ? sh.b.snippet(" --name-only") : sh.b.nothing(),
                                        commandData.stat ? sh.b.snippet(" --stat") : sh.b.nothing()
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        case 'index': return pa.ss(area, (indexData) =>
                            pa.cc(indexData, (command) => {
                                switch (command[0]) {
                                    case 'diff cached': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git diff --cached"),
                                        commandData["name only"] ? sh.b.snippet(" --name-only") : sh.b.nothing(),
                                        commandData.stat ? sh.b.snippet(" --stat") : sh.b.nothing(),
                                        commandData.files.transform(
                                            (files) => sh.b.sub([
                                                sh.b.snippet(" "),
                                               sh.b.sub(files.map((f) => sh.b.sub([ sh.b.snippet(f), sh.b.snippet(" ")])))
                                            ]),
                                            () => sh.b.nothing()
                                        )
                                    ]))
                                    case 'status': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git status"),
                                        commandData.porcelain.transform(
                                            (v) => sh.b.snippet(` --porcelain=${v}`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.short ? sh.b.snippet(" --short") : sh.b.nothing()
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        case 'stash': return pa.ss(area, (stashData) =>
                            pa.cc(stashData, (command) => {
                                switch (command[0]) {
                                    case 'list': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git stash.b.st"),
                                        commandData.oneline ? sh.b.snippet(" --oneline") : sh.b.nothing()
                                    ]))
                                    case 'show': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git stash show"),
                                        commandData.stash.transform(
                                            (v) => sh.b.snippet(` ${v}`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.patch ? sh.b.snippet(" --patch") : sh.b.nothing()
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        case 'local repo': return pa.ss(area, (localRepoData) =>
                            pa.cc(localRepoData, (command) => {
                                switch (command[0]) {
                                    case 'log': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git log"),
                                        commandData.oneline ? sh.b.snippet(" --oneline") : sh.b.nothing(),
                                        commandData.graph ? sh.b.snippet(" --graph") : sh.b.nothing(),
                                        commandData.all ? sh.b.snippet(" --all") : sh.b.nothing(),
                                        commandData.since.transform(
                                            (v) => sh.b.snippet(` --since="${v}"`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.until.transform(
                                            (v) => sh.b.snippet(` --until="${v}"`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.author.transform(
                                            (v) => sh.b.snippet(` --author="${v}"`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.grep.transform(
                                            (v) => sh.b.snippet(` --grep="${v}"`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData["max count"].transform(
                                            (v) => sh.b.snippet(` --max-count=${v}`),
                                            () => sh.b.nothing()
                                        )
                                    ]))
                                    case 'branch': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git branch"),
                                        commandData.all ? sh.b.snippet(" --all") : sh.b.nothing(),
                                        commandData.remote ? sh.b.snippet(" --remote") : sh.b.nothing(),
                                        commandData.verbose ? sh.b.snippet(" --verbose") : sh.b.nothing()
                                    ]))
                                    case 'tag': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git tag"),
                                        commandData.list.transform(
                                            (v) => sh.b.snippet(` --list ${v}`),
                                            () => sh.b.nothing()
                                        )
                                    ]))
                                    case 'reflog': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git reflog"),
                                        commandData.branch.transform(
                                            (v) => sh.b.snippet(` ${v}`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.oneline ? sh.b.snippet(" --oneline") : sh.b.nothing()
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        case 'remote repo': return pa.ss(area, (remoteRepoData) =>
                            pa.cc(remoteRepoData, (command) => {
                                switch (command[0]) {
                                    case 'remote': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git remote"),
                                        commandData.verbose ? sh.b.snippet(" --verbose") : sh.b.nothing()
                                    ]))
                                    case 'ls remote': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git ls-remote"),
                                        commandData.heads ? sh.b.snippet(" --heads") : sh.b.nothing(),
                                        commandData.tags ? sh.b.snippet(" --tags") : sh.b.nothing(),
                                        commandData.remote.transform(
                                            (v) => sh.b.snippet(` ${v}`),
                                            () => sh.b.nothing()
                                        )
                                    ]))
                                    case 'fetch dry run': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git fetch --dry-run"),
                                        commandData.all ? sh.b.snippet(" --all") : sh.b.nothing(),
                                        commandData.remote.transform(
                                            (v) => sh.b.snippet(` ${v}`),
                                            () => sh.b.nothing()
                                        )
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        case 'configuration': return pa.ss(area, (configData) =>
                            pa.cc(configData, (command) => {
                                switch (command[0]) {
                                    case 'config': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git config"),
                                        commandData.list ? sh.b.snippet(" --list") : sh.b.nothing(),
                                        commandData.global ? sh.b.snippet(" --global") : sh.b.nothing(),
                                        commandData.local ? sh.b.snippet(" --local") : sh.b.nothing(),
                                        commandData.system ? sh.b.snippet(" --system") : sh.b.nothing(),
                                        commandData.key.transform(
                                            (v) => sh.b.snippet(` ${v}`),
                                            () => sh.b.nothing()
                                        )
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        default: return sh.b.snippet("git")
                    }
                })
            )
            case 'change': return pa.ss(type, (changeData) => 
                pa.cc(changeData, (area) => {
                    switch (area[0]) {
                        case 'workspace': return pa.ss(area, (workspaceData) =>
                            pa.cc(workspaceData, (command) => {
                                switch (command[0]) {
                                    case 'checkout file': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git checkout"),
                                        commandData.force ? sh.b.snippet(" --force") : sh.b.nothing(),
                                        sh.b.snippet(" --"),
                                       sh.b.sub(commandData.files.map((f) => sh.b.sub([ sh.b.snippet(" "), sh.b.snippet(f)])))
                                    ]))
                                    case 'restore': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git restore"),
                                        commandData.source.transform(
                                            (v) => sh.b.snippet(` --source=${v}`),
                                            () => sh.b.nothing()
                                        ),
                                        commandData.worktree ? sh.b.snippet(" --worktree") : sh.b.nothing(),
                                       sh.b.sub(commandData.files.map((f) => sh.b.sub([ sh.b.snippet(" "), sh.b.snippet(f)])))
                                    ]))
                                    case 'clean': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git clean"),
                                        commandData["dry run"] ? sh.b.snippet(" --dry-run") : sh.b.nothing(),
                                        commandData.force ? sh.b.snippet(" --force") : sh.b.nothing(),
                                        commandData.directories ? sh.b.snippet(" -d") : sh.b.nothing(),
                                        commandData.ignored ? sh.b.snippet(" -x") : sh.b.nothing()
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        case 'index': return pa.ss(area, (indexData) =>
                            pa.cc(indexData, (command) => {
                                switch (command[0]) {
                                    case 'add': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git add"),
                                        commandData.all ? sh.b.snippet(" --all") : sh.b.nothing(),
                                        commandData.patch ? sh.b.snippet(" --patch") : sh.b.nothing(),
                                        commandData.update ? sh.b.snippet(" --update") : sh.b.nothing(),
                                       sh.b.sub(commandData.files.map((f) => sh.b.sub([ sh.b.snippet(" "), sh.b.snippet(f)])))
                                    ]))
                                    case 'reset files': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git reset --"),
                                       sh.b.sub(commandData.files.map((f) => sh.b.sub([ sh.b.snippet(" "), sh.b.snippet(f)])))
                                    ]))
                                    case 'restore staged': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git restore --staged"),
                                       sh.b.sub(commandData.files.map((f) => sh.b.sub([ sh.b.snippet(" "), sh.b.snippet(f)])))
                                    ]))
                                    case 'rm': return pa.ss(command, (commandData) => sh.b.sub([
                                        sh.b.snippet("git rm"),
                                        commandData.cached ? sh.b.snippet(" --cached") : sh.b.nothing(),
                                        commandData.force ? sh.b.snippet(" --force") : sh.b.nothing(),
                                       sh.b.sub(commandData.files.map((f) => sh.b.sub([ sh.b.snippet(" "), sh.b.snippet(f)])))
                                    ]))
                                    default: return pa.au(command[0])
                                }
                            })
                        )
                        default: return sh.b.snippet("git")
                    }
                })
            )
            default: return pa.au(type[0])
        }
    })
}