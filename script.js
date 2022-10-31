const a = ["A", "B", "C", "D"]
console.log (a)

console.log (a[0])
console.log (a[1])
console.log (a[2])
console.log (a[3])

console.log (a.length)


const b = ["A", "B", "C", "D"]

b.push("E")
b.push(3)

console.log (b)


const c = ["A", "B", "C", "D"]

c.push([1, 2])

console.log (c)


const d = [
    ["A", "B"],
    [1, 2],
]

console.log(d)

const e = [
    ["A", "B"],
    [1, 2],
]

console.log(e[0][1])

const f = [
    ["A", "B"],
    [1, 2],
]

f[0] = 1

console.log(f)
