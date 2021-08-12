export function addClass (el, classsName) {
  if (!el.classList.contains(classsName)) {
    el.classList.add(classsName)
  }
}

export function removeClass (el, classsName) {
  el.classList.remove(classsName)
}
