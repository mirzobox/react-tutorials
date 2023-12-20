effects
no scond argument, rebots on every render
empty array as a second argument, works only once
non-empty array as a second argument

useEffect(() => {
const timerId = setTimeout(() => {
console.log(1)
}, 1000)

return () => {
clearTimeout(timerId)
}
}, [])

useEffect hookining birinchi parametrida keladigan callback subscribe function u callback qaytaradigan callback unsubsribe function deb nomlanadi.
