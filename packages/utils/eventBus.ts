export const EventBus = <T extends { [name: string]: unknown[] }>() => {
  const events: {
    [e in keyof T]?: ((...args: T[e]) => void)[]
  } = {}

  const emit = <Name extends keyof T>(name: Name, ...args: T[Name]) => {
    events[name]?.forEach((e) => {
      e(...args)
    })
  }

  const on = <Name extends keyof T>(name: Name, cb: (...args: T[Name]) => void) => {
    if (!events[name]) {
      events[name] = [cb]
      return
    }
    events[name]!.push(cb)
  }

  const off = <Name extends keyof T>(name: Name) => {
    events[name] = []
  }

  return { on, emit, off }
}
