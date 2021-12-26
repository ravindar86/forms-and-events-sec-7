import React from "react";

export class ImageCard extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {spans: ''};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // load the image immediately by adding event listener and invoke call back method to 
    // determine spans for that particular image
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height/10);

      this.setState({spans});
  }

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img src={urls.regular} alt={description} ref={this.imageRef}  />
      </div>
    );
  }
}
