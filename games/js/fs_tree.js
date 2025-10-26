import { readFile, writeFile, readDir, rm, rmdir, mkdirs, stat, exists } from './fs.js'

function normalizePath(path) {
    return "/" + path.replace(/^Games\/?/, "")
}

async function loadPath(node) {
    let root_path = node.getPath()
    let items = await readDir(normalizePath(root_path));
    let out = [];
    for (var name of items) {
        let path = `${root_path}/${name}`
        let stats = await stat(normalizePath(path));
        let folder = stats.isDirectory()
        out.push({
            title: name,
            folder,
            lazy: folder,
        })
    };
    return out;
}

export async function treeShowPath(path) {
    path = normalizePath(path)
    var tree = $.ui.fancytree.getTree("#tree");
    var node = tree.getFirstChild();
    await node.setExpanded(true);
    let parts = path.split("/").filter(x => x.length)
    for (var part of parts) {
        var subnode = node.children && node.children.filter(c => c.title == part)[0]
        if (!subnode) {
            await node.load(true);
            subnode = node.children && node.children.filter(c => c.title == part)[0]
            if (!subnode) {
                break;
            }
        }
        node = subnode;
        if (!node.folder) {
            node.setActive();
            break;
        }
        await node.setExpanded(true);
        node.setActive();
    }
}

// Callback function to be set by the main page
export let onFileDoubleClick = null;

export function setFileDoubleClickHandler(handler) {
    onFileDoubleClick = handler;
}

export function treeInit() {
    console.log('Initializing file tree...');
    
    $("input.file-reader").change(async function (e) {
        var file = e.target.files[0];
        var path = $(e.target).attr("data-path");
        if (!file || !path) return;
        if (path.endsWith("/")) {
            path = path + file.name;
        }
        var fileExists = false;
        try {
            let stats = await stat(normalizePath(path));
            if (stats.isDirectory()) {
                alert("destination is directory");
                return;
            }
            fileExists = true
        } catch (e) {
        }
        let buffer = await file.arrayBuffer();
        if (!fileExists || confirm(`replace contents of ${path}?`)) {
            await writeFile(normalizePath(path), buffer);
            console.log('File saved to IndexedDB:', path);
        }
        treeShowPath(path);
        $(e.target).val("").attr("data-path", null);
    })

    $("#tree").fancytree({
        extensions: ["table"],
        toggleEffect: false,
        renderColumns: function (event, data) {
            var node = data.node,
                $tdList = $(node.tr).find(">td");

            let save = $("<a class='save' href='#'>save</a>").click(async function (e) {
                e.preventDefault();
                let data = await readFile(normalizePath(node.getPath()));
                let blob = new Blob([data])
                const a = document.createElement('a');
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = node.title;
                a.click();
            })
            
            let load = $("<a class='load' href='#'>load</a>").click(async function (e) {
                e.preventDefault();
                var path = node.getPath();
                if (node.folder) {
                    path += "/";
                }
                $('input.file-reader').attr("data-path", path).click()
            })
            
            let del = $("<a class='del' href='#'>del</a>").click(async function (e) {
                e.preventDefault();
                if (!confirm(`delete ${node.title}?`)) return;
                if (node.folder) {
                    await rmdir(normalizePath(node.getPath()));
                } else {
                    await rm(normalizePath(node.getPath()));
                }
                node.remove()
            })

            let mkdir = $("<a class='mkdir' href='#'>mkdir</a>").click(async function (e) {
                e.preventDefault();
                let name = prompt("Enter directory name");
                if (name) {
                    await mkdirs(normalizePath(node.getPath()) + "/" + name + "/");
                    await node.load(true);
                }
            })

            $tdList.eq(1).append(save);
            $tdList.eq(1).append(" ");
            $tdList.eq(1).append(load);
            $tdList.eq(1).append(" ");
            $tdList.eq(1).append(del);
            if (node.folder) {
                $tdList.eq(1).append(" ");
                $tdList.eq(1).append(mkdir);
            }
        },
        source: [
            { title: "Games", key: "root", folder: true, lazy: true, expanded: true },
        ],
        dblclick: function (event, data) {
            if (data.node.folder) return;
            let path = normalizePath(data.node.getPath());
            console.log('Double-clicked file:', path);
            
            // Call the handler if set
            if (onFileDoubleClick) {
                onFileDoubleClick(path, data.node.title);
            }
        },
        lazyLoad: function (event, data) {
            data.result = loadPath(data.node);
        },
    })
    
    console.log('File tree initialized');
}

export { readFile };

