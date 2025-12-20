
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/personal_project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/personal_project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24568, hash: '055a1d9e4274895ecae8b08e4c79d4e161a7a3c413a96dbfff9e661825b979ce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17078, hash: 'fd84cbcabe0e47dac395e9bb77b178948f7c705b5a04542454e4cb9632c37c73', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46003, hash: '2d1fe831494169411a02081b7963885f428366fb88017ab16a6c58d852c5af04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZBVIJ7QN.css': {size: 8043, hash: '36OwOxjXVAA', text: () => import('./assets-chunks/styles-ZBVIJ7QN_css.mjs').then(m => m.default)}
  },
};
