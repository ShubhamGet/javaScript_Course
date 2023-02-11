try {
    // custom error
    let age = prompt("Enter ur age ");
    age = Number.parseInt(age)
    if (age > 120) {
        throw new ReferenceError("This is probably not true ")
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)


}
