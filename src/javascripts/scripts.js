import * as d3 from 'd3';
import _ from 'lodash';
import dTree from 'd3-dtree';

window.d3 = d3;
window._ = _;
window.dTree = dTree;

d3.json('/json/data.json', (_error, treeData) => {
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
        if (!extra) {
          extra = {};
        }
        return `
        <div class="card">
            <div class="picture">
                <img
                    src="${extra.img}"
                    alt="people">
            </div>
            <div class="description">
                <h3>${name}</h3>
                <h5>${extra.age}</h5>
            </div>
        </div>
        `;
      },
    },
  });
});
