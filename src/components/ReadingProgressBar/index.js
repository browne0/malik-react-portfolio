import React, {Component} from 'react'
import PropTypes from 'prop-types'
import throttle from './throttle'

export default class ProgressBar extends Component {

  static propTypes = {
      targetEl: PropTypes.string.isRequired
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)

    this.targetEl = null
    this.rootEl = null
    this.max = 0
    this.viewportH = 0
    this.targetHeight = 0

    this.state = {
      value: 0,
    }
  }

  componentDidMount() {
    const { props } = this

    this.targetEl = props.targetEl ? document.querySelector(props.targetEl) : document.body
    this.rootEl = props.rootEl ? document.querySelector(props.rootEl) : window

    this.measure()
    this.rootEl.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    this.rootEl.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  measureViewportHeight() {
    return !this.props.rootEl ?
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      :
      this.rootEl.clientHeight
  }

  measure() {
    this.targetHeight = this.targetEl.getBoundingClientRect().height
    this.viewportH = this.measureViewportHeight()
    this.max = this.targetHeight - this.viewportH + this.targetEl.offsetTop
  }

  handleResize = () => {
    throttle(this.measure(), 100)
  }

  handleScroll = () => {
    throttle(this.update(), 100)
  }

  update = () => {
    const value = !this.props.rootEl ?
      window.pageYOffset || document.documentElement.scrollTop
      :
      this.rootEl.scrollTop

    this.setState({
      value,
    })
  }

  render() {
    return (
      <progress value={ this.state.value } max={ this.max } className={ this.props.className }></progress>
    )
  }
}