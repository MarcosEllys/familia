import * as d3 from 'd3';
import _ from 'lodash';
import dTree from 'd3-dtree';

window.d3 = d3;
window._ = _;
window.dTree = dTree;

const ENV = window.location.host.match(/localhost/) ? 'dev' : 'prod';

const DATA_PATH = `${ENV ? '/json/' : '/familia/json'}data.json`;

d3.json(DATA_PATH, (_error, treeData) => {
  dTree.init(treeData, {
    target: '#graph',
    debug: false,
    width: window.screen.availWidth,
    height: window.screen.availHeight - 100,
    hideMarriageNodes: true,
    marriageNodeSize: 10,
    nodeWidth: 150,
    callbacks: {
      textRenderer: (name, extra) => {
        let myExtra = {};
        if (extra) {
          myExtra = extra;
        }
        return `
        <div class="card">
            <div class="picture">
                <img
                    src="${myExtra.img}"
                    alt="people">
            </div>
            <div class="description">
                <h3>${name}</h3>
                <h5>${myExtra.age}</h5>
            </div>
        </div>
        `;
      },
    },
  });
});
