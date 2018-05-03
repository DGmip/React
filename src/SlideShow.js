import React, {Children} from 'react';

class SlideShow extends React.Component {
  state = {
    total: 0,
    current: 0,
  }

  componentDidMount() {
    const children = this.props.children
    this.setState({
      total: Children.count(children),
    })
    this.interval = setInterval(this.showNext, 900)
  }

  showNext = () => {
    const { total, current } = this.state
    this.setState({
      current: current + 1 === total ? 0 : current + 1
    });
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    const  { children }  = this.props
    const bullets = Array(this.state.total).fill('o')
    bullets[this.state.current] = 'O'
    return (
      <div className='slideshow'>
        <h4>Slideshow</h4>
        {bullets}
        {Children.toArray(children)[this.state.current]}
      </div>
    )
  }
}

export default SlideShow;
