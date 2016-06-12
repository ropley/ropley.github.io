/**
 * Created by Clive on 23/05/2016.
 */
import React from 'react';
import Dimensions from './dimensions';
import Grade from './grade';
import Print from './print';
import Options from './options';
import Totaliser from './totaliser';

var ProcessBody = React.createClass({
        getInitialState: function () {
            return {
                // Edit these to supply application defaults
                cost: 0,
                disabledGradeC: false,
                disabledReinforcement: false,
                grade: 'A',
                handles: false,
                height: 0,
                length: 0,
                quality: "None",
                quantity: 0,
                reinforcement: false,
                width: 0
            }
        },
        calculate: function () {
            // Deal with costs in pennies until the last moment
            var boxArea = 0, discount = 0, gradeCost = 0, handleCost = 0, printCost = 0, reinforcementCost = 0, totalArea = 0;

            switch (this.state.quality) {
                case '3':
                    printCost = 20;
                    break;
                case '2':
                    printCost = 10;
                    break;
                case 'BW':
                    printCost = 5;
                    break;
                case 'None':
                    printCost = 0;
                    break;
                case 'FBC':
                    discount = 0.05;
                    break;  // 5% discount
                default:
                    printCost = 0;
                    break;
            }

            switch (this.state.handles) {
                case true:
                    handleCost = 10;
                    break;
                case false:
                    handleCost = 0;
                    break;
            }

            boxArea = (2.0 * this.state.width * this.state.length + 2.0 * this.state.width *
                this.state.height + 2.0 * this.state.height * this.state.length) || 0;
            totalArea = (boxArea * this.state.quantity) || 0;

            (boxArea > 2.0) ? this.state.disabledGradeC = true : this.state.disabledGradeC = false;
            if (this.state.grade == "C" && this.state.disabledGradeC) {
                this.state.grade = ""
            }
            (this.state.grade !== "A") ? (this.state.disabledReinforcement = true, this.state.reinforcement = false) : this.state.disabledReinforcement = false;

            switch (this.state.reinforcement) {
                case true:
                    reinforcementCost = 5;
                    break;
                case false:
                    reinforcementCost = 0;
                    break;
            }

            switch (this.state.grade) {
                case 'A':
                    gradeCost = 20;
                    break;
                case 'B':
                    gradeCost = 10;
                    break;
                case 'C':
                    gradeCost = 5;
                    break;
                default :
                    gradeCost = 0;
                    break;
            }

            this.state.cost = (totalArea * gradeCost + totalArea * printCost + this.state.quantity * handleCost + this.state.quantity * reinforcementCost)||"0.00";
            this.state.cost = (this.state.cost * (1 - discount) / 100).toFixed(2)||"0.00";  //Note conversion of pennies to pounds

            this.setState({
                cost: this.state.cost,
                disabledGradeC: this.state.disabledGradeC,
                disabledReinforcement: this.state.disabledReinforcement,
                grade: this.state.grade,
                reinforcement: this.state.reinforcement
            })
        },
        changeMeasurement: function (event) {
            // Deal with checkboxes first
            if (event.target.type == "checkbox") {
                this.state[event.target.name] = !this.state[event.target.name];
                this.setState({[event.target.name]: this.state[event.target.name]})
            }
            // Deal with other control types
            else {
                this.state[event.target.name] = event.target.value;
                this.setState({[event.target.name]: event.target.value});
            }
            this.calculate();
        },
        render: function () {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col s12  m8 push-m2 l8 push-l2 center-align">
                            <h4>Using our <span className="indigo-text text-lighten-1">FantasticBoxCo</span>nfigurator, it's
                                easy to bulk order boxes to your own specification</h4>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col l6 m12 s12">
                                <Dimensions
                                    changeMeasurement={this.changeMeasurement}
                                    height={this.state.height}
                                    length={this.state.length}
                                    quantity={this.state.quantity}
                                    width={this.state.width}/>
                                <Grade changeMeasurement={this.changeMeasurement}
                                       grade={this.state.grade}
                                       disabled={this.state.disabledGradeC}/>
                            </div>
                            <div className="col l6 m12 s12">
                                <Print changeMeasurement={this.changeMeasurement}
                                       quality={this.state.quality}/>
                                <Options changeMeasurement={this.changeMeasurement}
                                         disabled={this.state.disabledReinforcement}
                                         handles={this.state.handles}
                                         reinforcement={this.state.reinforcement}/>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <Totaliser totalCost={this.state.cost}/>
                        </div>
                    </div>
                </div>
            )
        }
    })
    ;

export default ProcessBody;