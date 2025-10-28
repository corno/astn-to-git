"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_command_line_arguments = void 0;
// Helper function to build a list of strings into space-separated command
const buildCommand = (parts) => {
    return parts.filter(part => part !== "").join(" ");
};
// Helper function to handle optional values
const optional = (value, mapper) => {
    return value.transform((v) => mapper(v), () => "");
};
// Helper function to handle lists
const list = (items, mapper) => {
    return items.__get_raw_copy().map(mapper).join(" ");
};
// Helper function to handle boolean flags
const flag = (condition, flagName) => {
    return condition ? `--${flagName}` : "";
};
// Helper function to handle boolean flags with different naming
const flagAlias = (condition, flagName) => {
    return condition ? flagName : "";
};
const generate_command_line_arguments = (gitCommand) => {
    const [type, content] = gitCommand;
    if (type === "view") {
        const [area, areaContent] = content;
        switch (area) {
            case "workspace": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "status":
                        return buildCommand([
                            "git status",
                            optional(commandData.porcelain, v => `--porcelain=${v}`),
                            flag(commandData.short, "short"),
                            flag(commandData.branch, "branch"),
                            flag(commandData["show stash"], "show-stash")
                        ]);
                    case "diff":
                        return buildCommand([
                            "git diff",
                            flag(commandData.cached, "cached"),
                            flag(commandData["name only"], "name-only"),
                            flag(commandData.stat, "stat"),
                            optional(commandData.files, files => list(files, f => f))
                        ]);
                    case "show":
                        return buildCommand([
                            "git show",
                            optional(commandData.commit, v => v),
                            flag(commandData["name only"], "name-only"),
                            flag(commandData.stat, "stat")
                        ]);
                }
                break;
            }
            case "index": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "diff cached":
                        return buildCommand([
                            "git diff --cached",
                            flag(commandData["name only"], "name-only"),
                            flag(commandData.stat, "stat"),
                            optional(commandData.files, files => list(files, f => f))
                        ]);
                    case "status":
                        return buildCommand([
                            "git status",
                            optional(commandData.porcelain, v => `--porcelain=${v}`),
                            flag(commandData.short, "short")
                        ]);
                }
                break;
            }
            case "stash": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "list":
                        return buildCommand([
                            "git stash list",
                            flag(commandData.oneline, "oneline")
                        ]);
                    case "show":
                        return buildCommand([
                            "git stash show",
                            optional(commandData.stash, v => v),
                            flag(commandData.patch, "patch")
                        ]);
                }
                break;
            }
            case "local repo": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "log":
                        return buildCommand([
                            "git log",
                            flag(commandData.oneline, "oneline"),
                            flag(commandData.graph, "graph"),
                            flag(commandData.all, "all"),
                            optional(commandData.since, v => `--since="${v}"`),
                            optional(commandData.until, v => `--until="${v}"`),
                            optional(commandData.author, v => `--author="${v}"`),
                            optional(commandData.grep, v => `--grep="${v}"`),
                            optional(commandData["max count"], v => `--max-count=${v}`)
                        ]);
                    case "branch":
                        return buildCommand([
                            "git branch",
                            flag(commandData.all, "all"),
                            flag(commandData.remote, "remote"),
                            flag(commandData.verbose, "verbose")
                        ]);
                    case "tag":
                        return buildCommand([
                            "git tag",
                            optional(commandData.list, v => `--list ${v}`)
                        ]);
                    case "reflog":
                        return buildCommand([
                            "git reflog",
                            optional(commandData.branch, v => v),
                            flag(commandData.oneline, "oneline")
                        ]);
                }
                break;
            }
            case "remote repo": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "remote":
                        return buildCommand([
                            "git remote",
                            flag(commandData.verbose, "verbose")
                        ]);
                    case "ls remote":
                        return buildCommand([
                            "git ls-remote",
                            flag(commandData.heads, "heads"),
                            flag(commandData.tags, "tags"),
                            optional(commandData.remote, v => v)
                        ]);
                    case "fetch dry run":
                        return buildCommand([
                            "git fetch --dry-run",
                            flag(commandData.all, "all"),
                            optional(commandData.remote, v => v)
                        ]);
                }
                break;
            }
            case "configuration": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "config":
                        return buildCommand([
                            "git config",
                            flag(commandData.list, "list"),
                            flag(commandData.global, "global"),
                            flag(commandData.local, "local"),
                            flag(commandData.system, "system"),
                            optional(commandData.key, v => v)
                        ]);
                }
                break;
            }
        }
    }
    else if (type === "change") {
        const [area, areaContent] = content;
        switch (area) {
            case "workspace": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "checkout file":
                        return buildCommand([
                            "git checkout",
                            flag(commandData.force, "force"),
                            "--",
                            list(commandData.files, f => f)
                        ]);
                    case "restore":
                        return buildCommand([
                            "git restore",
                            optional(commandData.source, v => `--source=${v}`),
                            flag(commandData.worktree, "worktree"),
                            list(commandData.files, f => f)
                        ]);
                    case "clean":
                        return buildCommand([
                            "git clean",
                            flag(commandData["dry run"], "dry-run"),
                            flag(commandData.force, "force"),
                            flag(commandData.directories, "d"),
                            flag(commandData.ignored, "x")
                        ]);
                }
                break;
            }
            case "index": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "add":
                        return buildCommand([
                            "git add",
                            flag(commandData.all, "all"),
                            flag(commandData.patch, "patch"),
                            flag(commandData.update, "update"),
                            list(commandData.files, f => f)
                        ]);
                    case "reset files":
                        return buildCommand([
                            "git reset --",
                            list(commandData.files, f => f)
                        ]);
                    case "restore staged":
                        return buildCommand([
                            "git restore --staged",
                            list(commandData.files, f => f)
                        ]);
                    case "rm":
                        return buildCommand([
                            "git rm",
                            flag(commandData.cached, "cached"),
                            flag(commandData.force, "force"),
                            list(commandData.files, f => f)
                        ]);
                }
                break;
            }
            case "stash": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "push":
                        return buildCommand([
                            "git stash push",
                            optional(commandData.message, v => `--message="${v}"`),
                            flag(commandData["keep index"], "keep-index"),
                            flag(commandData["include untracked"], "include-untracked"),
                            optional(commandData.files, files => list(files, f => f))
                        ]);
                    case "pop":
                        return buildCommand([
                            "git stash pop",
                            optional(commandData.stash, v => v),
                            flag(commandData.index, "index")
                        ]);
                    case "apply":
                        return buildCommand([
                            "git stash apply",
                            optional(commandData.stash, v => v),
                            flag(commandData.index, "index")
                        ]);
                    case "drop":
                        return buildCommand([
                            "git stash drop",
                            optional(commandData.stash, v => v)
                        ]);
                    case "clear":
                        return "git stash clear";
                }
                break;
            }
            case "local repo": {
                const [safetyLevel, safetyContent] = areaContent;
                if (safetyLevel === "append") {
                    const [command, commandData] = safetyContent;
                    switch (command) {
                        case "commit":
                            return buildCommand([
                                "git commit",
                                `--message="${commandData.message}"`,
                                flag(commandData.amend, "amend"),
                                flag(commandData.all, "all"),
                                flag(commandData["no verify"], "no-verify"),
                                flag(commandData.signoff, "signoff")
                            ]);
                        case "merge":
                            return buildCommand([
                                "git merge",
                                commandData.branch,
                                flag(commandData["no ff"], "no-ff"),
                                flag(commandData["ff only"], "ff-only"),
                                flag(commandData["no commit"], "no-commit"),
                                optional(commandData.message, v => `--message="${v}"`)
                            ]);
                        case "cherry pick":
                            return buildCommand([
                                "git cherry-pick",
                                flag(commandData["no commit"], "no-commit"),
                                optional(commandData.mainline, v => `--mainline=${v}`),
                                list(commandData.commits, c => c)
                            ]);
                        case "revert":
                            return buildCommand([
                                "git revert",
                                flag(commandData["no commit"], "no-commit"),
                                optional(commandData.mainline, v => `--mainline=${v}`),
                                list(commandData.commits, c => c)
                            ]);
                        case "branch create":
                            return buildCommand([
                                "git branch",
                                commandData.name,
                                optional(commandData["start point"], v => v)
                            ]);
                        case "tag create":
                            return buildCommand([
                                "git tag",
                                flag(commandData.annotated, "annotate"),
                                optional(commandData.message, v => `--message="${v}"`),
                                commandData.name,
                                optional(commandData.commit, v => v)
                            ]);
                        case "pull rebase private":
                            return buildCommand([
                                "git pull --rebase",
                                optional(commandData.remote, v => v),
                                optional(commandData.branch, v => v)
                            ]);
                    }
                }
                else if (safetyLevel === "destroy") {
                    const [command, commandData] = safetyContent;
                    switch (command) {
                        case "reset":
                            const [mode] = commandData.mode;
                            return buildCommand([
                                "git reset",
                                `--${mode}`,
                                commandData.target
                            ]);
                        case "commit amend":
                            return buildCommand([
                                "git commit --amend",
                                optional(commandData.message, v => `--message="${v}"`),
                                flag(commandData["no edit"], "no-edit"),
                                flag(commandData.all, "all")
                            ]);
                        case "rebase":
                            return buildCommand([
                                "git rebase",
                                flag(commandData.interactive, "interactive"),
                                flag(commandData["preserve merges"], "preserve-merges"),
                                optional(commandData.strategy, v => `--strategy=${v}`),
                                commandData.onto
                            ]);
                        case "filter repo":
                            return buildCommand([
                                "git filter-repo",
                                optional(commandData.path, v => `--path=${v}`),
                                flag(commandData["invert paths"], "invert-paths"),
                                flag(commandData.force, "force")
                            ]);
                        case "tag force":
                            return buildCommand([
                                "git tag --force",
                                optional(commandData.message, v => `--message="${v}"`),
                                commandData.name,
                                optional(commandData.commit, v => v)
                            ]);
                        case "branch delete":
                            return buildCommand([
                                "git branch",
                                flag(commandData.force, "D") || flagAlias(!commandData.force, "-d"),
                                commandData.name
                            ]);
                        case "tag delete":
                            return buildCommand([
                                "git tag --delete",
                                commandData.name
                            ]);
                        case "gc":
                            return buildCommand([
                                "git gc",
                                flag(commandData.aggressive, "aggressive"),
                                optional(commandData.prune, v => `--prune=${v}`)
                            ]);
                    }
                }
                break;
            }
            case "remote repo": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "fetch":
                        return buildCommand([
                            "git fetch",
                            flag(commandData.all, "all"),
                            flag(commandData.prune, "prune"),
                            optional(commandData.remote, v => v),
                            optional(commandData.branch, v => v)
                        ]);
                    case "push":
                        return buildCommand([
                            "git push",
                            flag(commandData.force, "force"),
                            flag(commandData["force with lease"], "force-with-lease"),
                            flag(commandData["set upstream"], "set-upstream"),
                            flag(commandData.tags, "tags"),
                            optional(commandData.remote, v => v),
                            optional(commandData.branch, v => v),
                            optional(commandData.delete, v => `--delete ${v}`)
                        ]);
                    case "pull":
                        return buildCommand([
                            "git pull",
                            flag(commandData.rebase, "rebase"),
                            flag(commandData["no rebase"], "no-rebase"),
                            flag(commandData["ff only"], "ff-only"),
                            optional(commandData.remote, v => v),
                            optional(commandData.branch, v => v)
                        ]);
                    case "clone":
                        return buildCommand([
                            "git clone",
                            optional(commandData.branch, v => `--branch=${v}`),
                            optional(commandData.depth, v => `--depth=${v}`),
                            flag(commandData.recursive, "recursive"),
                            commandData.url,
                            optional(commandData.directory, v => v)
                        ]);
                    case "remote add":
                        return buildCommand([
                            "git remote add",
                            commandData.name,
                            commandData.url
                        ]);
                    case "remote remove":
                        return buildCommand([
                            "git remote remove",
                            commandData.name
                        ]);
                }
                break;
            }
            case "configuration": {
                const [command, commandData] = areaContent;
                switch (command) {
                    case "config set":
                        return buildCommand([
                            "git config",
                            flag(commandData.global, "global"),
                            flag(commandData.local, "local"),
                            flag(commandData.system, "system"),
                            commandData.key,
                            commandData.value
                        ]);
                    case "config unset":
                        return buildCommand([
                            "git config --unset",
                            flag(commandData.global, "global"),
                            flag(commandData.local, "local"),
                            flag(commandData.system, "system"),
                            commandData.key
                        ]);
                }
                break;
            }
        }
    }
    // Fallback for unmatched cases
    return "git";
};
exports.generate_command_line_arguments = generate_command_line_arguments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVfY29tbWFuZF9saW5lX2FyZ3VtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuZm9ybWF0aW9ucy9nZW5lcmF0ZV9jb21tYW5kX2xpbmVfYXJndW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLDBFQUEwRTtBQUMxRSxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQWUsRUFBVSxFQUFFO0lBQzdDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFBO0FBRUQsNENBQTRDO0FBQzVDLE1BQU0sUUFBUSxHQUFHLENBQUksS0FBNEIsRUFBRSxNQUF3QixFQUFVLEVBQUU7SUFDbkYsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUNsQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUNoQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ1gsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUVELGtDQUFrQztBQUNsQyxNQUFNLElBQUksR0FBRyxDQUFJLEtBQStCLEVBQUUsTUFBMkIsRUFBVSxFQUFFO0lBQ3JGLE9BQU8sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkQsQ0FBQyxDQUFBO0FBRUQsMENBQTBDO0FBQzFDLE1BQU0sSUFBSSxHQUFHLENBQUMsU0FBa0IsRUFBRSxRQUFnQixFQUFVLEVBQUU7SUFDMUQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtBQUMzQyxDQUFDLENBQUE7QUFFRCxnRUFBZ0U7QUFDaEUsTUFBTSxTQUFTLEdBQUcsQ0FBQyxTQUFrQixF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