require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

//利用自执行函数(只执行一次)，将图片名信息转成图片URL路径信息.
imageDatas = (function genImageURL(imageDatasArr){
  for(var i=0;i<imageDatasArr.length;i++){
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/'+singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
      var imgFigures = [],
          controllerUnits = [];
      imageDatas.forEach((value, index) => {
        imgFigures.push(<ImgFigure key={index} data={value}/>);
      });
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

class ImgFigure extends React.Component {
  render() {
    return(
        <figure className="img-figure">
          <img src={this.props.data.imageURL}
              alt={this.props.data.title}/>
          <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
          </figcaption>
        </figure>
    );

}
}


export default AppComponent;
