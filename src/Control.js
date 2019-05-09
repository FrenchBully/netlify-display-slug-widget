import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  onChangeHandler = (e) => {
    this.setState({url: e.target.value})
  }

  render() {
    const {
      forID,
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
        value={this.state.url}
        onChange={this.onChangeHandler}
      />
      <div style={styles}>{window.location.origin}/{this.state.url || '<CAMPAIGN NAME>'}</div>
      </div>
    );
  }
}