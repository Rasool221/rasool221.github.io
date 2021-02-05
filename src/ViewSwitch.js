import React, { Component } from "react";
import Switch from "react-switch";

import FadeIn from 'react-fade-in';
import modelViewer from '@google/model-viewer';
import ImageMapper from 'react-image-mapper';

import ReactToolTip from 'react-tooltip';

import './ViewSwitch.css'

class ViewSwitch extends Component {
  constructor() {
    super();

    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
 
    this.TwoDText = "2D";
    this.ThreeDText = "3D";

    this.spanText = this.TwoDText;

    this.MAP = {
        name: "my-map",
        areas : [
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [796,439,915,433,918,448,796,453] },
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [790,420,885,353,898,367,796,428] },
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [710,367,756,339,768,348,716,375] },
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [688,355,689,310,699,304,700,353] },
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [590,338,591,293,605,291,602,342] },
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [561,351,531,316,540,302,573,343] },
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [865,693,815,600,824,586,853,646,877,692] },
          {name: "Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.", shape: "poly", coords: [781,735,782,633,810,588,794,664,792,734] },
          {name: "Axon - Long fibers that conduct electrical signals between neurons, muscles, and glands.", shape: "poly", coords: [459,523,345,543,348,569,391,561,475,550] },
          {name: "Myelin Sheath - insulating layer that increases the speed of the electrical impulses.", shape: "poly", coords: [591,498,544,497,555,525,597,526] },
          {name: "Myelin Sheath - insulating layer that increases the speed of the electrical impulses.", shape: "poly", coords: [537,507,505,517,516,545,557,529] },
          {name: "Myelin Sheath - insulating layer that increases the speed of the electrical impulses.", shape: "poly", coords: [504,517,472,527,475,553,518,545] },
          {name: "Terminal Button - Responsible for sending signals to other neurons.", shape: "poly", coords: [139,592,153,636,172,631,171,598,156,583] },
          {name: "Terminal Button - Responsible for sending signals to other neurons.", shape: "poly", coords: [265,723,247,734,265,759,296,756,296,729] },
          {name: "Terminal Button - Responsible for sending signals to other neurons.", shape: "poly", coords: [170,345,145,361,143,382,144,388,172,376,178,357] },
          {name: "Syanptic Cleft - The space that seperates two neurons, a junction that helps nerve impulses pass.", shape: "poly", coords: [390,65,415,137,418,188,409,246,421,235,420,148,413,56,402,64] },
          {name: "Neurotransmitter - Molecules that transmit messages between neurons and/or muscles.", shape: "poly", coords: [432,116,422,114,418,87,444,95] },
          {name: "Neurotransmitter - Molecules that transmit messages between neurons and/or muscles.", shape: "circle", coords: [429,211,11] },
          {name: "Soma (Cell Body) - The cell body, supports the chemical processing of a neuron.", shape: "poly", coords: [662,439,623,452,608,468,612,496,636,513,659,522,687,516,704,500,706,465,688,447] }
        ]
    };
  }

  handleChange(checked) {    
    this.setState({ checked });

    if (checked == true) {
        this.spanText = this.ThreeDText;
    } else if (checked == false) {
        this.spanText = this.TwoDText;
    }

    this.forceUpdate();
  }

  enterArea(area) {
    this.setState({ hoveredArea: area });
    ReactToolTip.rebuild();
  }

  leaveArea(area) {
    this.setState({ hoveredArea: null });
  }

  render() {
    return (
      <div className="containerDiv">
        <label>
          <span className="switchLabel" key={this.handleChange}>{this.spanText}</span>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
        <div className="modelRender">
          {this.state.checked ? 
            <model-viewer src="/3dmodel/braincell.glb" shadow-intensity="1" camera-controls auto-rotate ar></model-viewer>
            :
            <FadeIn>   
              <div className="container">
               <ImageMapper src="/2dimagemap/2DImage.png" map={this.MAP}
                  onMouseEnter={area => this.enterArea(area)}
                  onMouseLeave={area => this.leaveArea(area)}    
              />
              {
                this.state.hoveredArea &&
                <div>
                  <span className="tooltip" >
                    { this.state.hoveredArea.name}
                  </span>
                </div>
              }
              </div>        
            </FadeIn>
          }
        </div>
      </div>
    );
  }
}

export default ViewSwitch;