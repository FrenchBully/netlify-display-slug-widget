import React, { Component } from 'react';

export class CampaignSlug extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  static defaultProps = {
    value: '',
  }

  onChangeHandler = (e) => {
    this.setState({url: e.target.value})
    this.props.onChange(e.target.value)
  }

  render() {
    const {
      forID,
      value,
      setActiveStyle,
      setInactiveStyle,
      classNameWrapper,
    } = this.props;

    const styles = {
      marginBottom: 0,
      fontSize: '12px',
      color: 'rgb(122, 130, 145)',
      padding: '3px 0px'
    }
    return (
      <div>
        <input
          type="text"
          id={forID}
          className={classNameWrapper}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
          value={value || ''}
          onChange={this.onChangeHandler}
        />
        <div style={styles}>{window.location.origin}/{this.state.url || '<CAMPAIGN NAME>'}</div>
      </div>
    );
  }
}