import './selectbox.styles.scss';
import React from 'react';

export class SelectBox extends React.Component {
    componentDidMount() {
        this.props.onSelectOptionChange(this.props.values[0].value);
    }
    render() {
        return (
            <div className="select-box">
                <label className="select-box__label">{this.props.label}</label>
                <select className="select" onChange={(e) => this.props.onSelectOptionChange(e.target.value)}>
                    {
                        this.props.values.map((option) => (
                            <option className="select__option" key={option.text} value={option.value}>{option.text}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
}
