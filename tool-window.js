const inputElement = document.getElementById('input')

inputElement.addEventListener('input', updateCounter)

function updateCounter () {
    window.opener.sharedData.counter = ~~inputElement.value
    console.log(window.opener.sharedData._counter)
}