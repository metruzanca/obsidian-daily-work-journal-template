/** Natural Language Dates API wrapper for easy usage inside of Templater templates */

function getDay(title) {
  const d = new Date(title)
  console.log({title, d:d.getDay()});
  return d.getDay()
}

module.exports = class Nld {
  static getPlugin() {
    return app.plugins.getPlugin("nldates-obsidian")
  }
  static parse(string) {
    const nld = Nld.getPlugin()
    return nld.parseDate(string).formattedString
  }
  static link(string) {
    return `[[${Nld.parse(string)}]]`
  }

  static previousWorkDay(title) {
    const isMonday = getDay(title) === 1
    if(isMonday) {
      return Nld.link('last friday')
    }
    return Nld.link('yesterday')
  }

  static nextWorkDay(title) {
    const isFriday = getDay(title) === 5
    if(isFriday) {
      return Nld.link('next monday')
    }
    return Nld.link('tomorrow')
  }
}