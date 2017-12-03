import React, { Component } from 'react';
import Grid from '../components/Grid.js';
import Modal from '../components/Modal.js';
import '../styles/css/Albums.css';

const items = [
  { name: '2017-2018', url: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Samoyed-2.jpg' },
  { name: '2016-2017', url: 'http://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg' },
  { name: '2015-2016', url: 'https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg' }, 
  { name: '2014-2015', url: 'https://www.thelabradorsite.com/wp-content/uploads/2015/07/yellow-labrador-puppy-garden.jpg' }, 
  { name: '2013-2014', url: 'https://cdn.marketplace.akc.org/media/45488/1456977861_4573_8635.jpg' }
];

class Album extends Component {
  constructor(props) {
      super(props);

      this.state = { 
        isOpen: false,
        isPhotoClicked: false,
        currPhoto: null
      };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  callback = (isClicked, photoSrc) => {
    this.setState({ 
      isPhotoClicked: isClicked,
      currPhoto: photoSrc 
    });
  }

  render() {
    return(
      <div>
        <div className="title">Photo Gallery</div>
        <Grid className="album__grid" callbackFromParent={ this.callback } urls={ items } />
        <Modal className="modal" src={ this.state.currPhoto } toggle={ this.state.isPhotoClicked } />
      </div>
    )
  }
}

export default Album;