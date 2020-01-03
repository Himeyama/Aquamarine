$(function() {
    let e = $("pre.highlight")
    for (let i = 0; i < e.length; i++) {
        let n = $("pre").eq(i)
        let r = n.html().match(/.*\n/g)
        for (let j = 0; j < r.length; j++) {
            r[j] = `<code>${r[j].replace(/\r?\n/g, "")}</code>\n`
        }
        n.html(r.join(""))
    }
})