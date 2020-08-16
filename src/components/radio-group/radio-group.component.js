import React from 'react';
import './radio-group.styles.scss';

export class RadioGroup extends React.Component {

    state = {
        selectedRadioOption: ''
    }

    onRadioOptionChange = (e) => {
        const value = e.target.value;
        this.setState((prevState) => ({
            selectedRadioOption: value 
        }));
        this.props.onRadioOptionChange(e.target.value);
    }

    componentDidMount() {
        const value = this.props.values[0].value;
        this.setState((prevState) => ({
            selectedRadioOption: value 
        }));
        this.props.onRadioOptionChange(value);
    }

    render() {
        return (
            <div className="radio-group">
                {
                    this.props.values.map((radioOption) => (
                        <div key={radioOption.value} className="radio-option">
                            <input checked={radioOption.value===this.state.selectedRadioOption} type="radio" id={radioOption.value} name={this.props.name} value={radioOption.value} onChange={this.onRadioOptionChange}/>
                            <label className="radio-option__label" htmlFor={radioOption.value}>{radioOption.text}</label>
                        </div>))
                }
            </div>
        );
    }
}