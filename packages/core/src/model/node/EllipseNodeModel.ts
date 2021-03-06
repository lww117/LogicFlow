import { computed, observable } from 'mobx';
import { assign } from 'lodash-es';
import { Point } from '../../type';
import BaseNodeModel from './BaseNodeModel';
import { ModelType } from '../../constant/constant';
import { defaultTheme } from '../../constant/DefaultTheme';
import GraphModel from '../GraphModel';

class EllipseNodeModel extends BaseNodeModel {
  modelType = ModelType.ELLIPSE_NODE;
  @observable rx = defaultTheme.ellipse.rx;
  @observable ry = defaultTheme.ellipse.ry;

  constructor(data, graphModel: GraphModel) {
    super(data);
    this.setStyleFromTheme('ellipse', graphModel);
    assign(this, data);
  }

  @computed get width(): number {
    return this.rx * 2;
  }
  @computed get height(): number {
    return this.ry * 2;
  }
  @computed get anchors(): Point[] {
    return [
      { x: this.x + this.rx, y: this.y },
      { x: this.x, y: this.y + this.ry },
      { x: this.x - this.rx, y: this.y },
      { x: this.x, y: this.y - this.ry },
    ];
  }
}

export { EllipseNodeModel };
export default EllipseNodeModel;
