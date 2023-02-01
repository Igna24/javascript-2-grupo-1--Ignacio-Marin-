let counter = (
  function () {
    let value = 0
    return {
      increase: function () {
        value++
        console.log(value)
      },
      decrease: function () {
        value--
        console.log(value)
      }
    }
  }
)()


document.getElementById("increase").addEventListener("click",
  function () { counter.increase() })

document.getElementById("decrease").addEventListener("click",
  function () { counter.decrease() })

