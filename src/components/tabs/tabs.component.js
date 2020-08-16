import './tabs.styles.scss';
import React from 'react';

export class Tabs extends React.Component {

    state = {
        selectedTab: ''
    }

    componentDidMount = () => {
        this.setState((prevState) => ({
            selectedTab: this.props.tabs[0]
        }));
        this.props.onTabChange(this.props.tabs[0]);
    }

    onTabChange = (event) => {
        event.preventDefault();
        const content = event.target.textContent;
        this.setState((prevState) => ({
            selectedTab: content
        }));
        this.props.onTabChange(content);
    }

    render() {
        let tabIndex = 0;
        return (
            <div className="tab-set">
                {
                    this.props.tabs.map((tab) => {
                        tabIndex++;
                        return (
                            <button className={`tab-set__tab ${(tab === this.state.selectedTab) ? 'tab-set__tab--selected' : ''}`} key={tabIndex} onClick={this.onTabChange}>{tab}</button>
                        )
                    })
                }
            </div>
        )
    }
}