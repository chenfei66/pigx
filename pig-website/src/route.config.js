import navConfig from './doc.config'

const loadDocs = function (path) {
  return r => require.ensure([], () =>
    r(require(`./docs${path}.md`)),
    'roles');
};
const load = function (name, path) {
  if (path) {
    return r => require.ensure([], () =>
      r(require(`./${path}/${name}.vue`)),
      'group')
  }
  return r => require.ensure([], () =>
    r(require(`./views/${name}.vue`)),
    'group')
}

const registerRoute = (navConfig) => {
  const route = []
  let navs = navConfig
  route.push({
    path: '/doc',
    redirect: '/doc/pig',
    component: load('Doc'),
    children: []
  })
  navs.forEach(nav => {
    if (nav.href) return
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })

  function addRoute(page) {
    const component = loadDocs(page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: page.title || page.name,
      component: component.default || component
    }

    route[0].children.push(child)
  }
  return route
}

let route = registerRoute(navConfig)



export default route
