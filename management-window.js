const counterElement = document.getElementById('counter')

window.sharedData = {
  set counter(val) {
    this._counter = val
    renderCounter()
  },
  _counter: 1
}

function renderCounter () {
  counterElement.innerText = window.sharedData._counter
}

// IMPORTANT this creates the child in the same Isolate as the parent window and
// allows acess to the context of the parent window
window.open('./tool-window.html')