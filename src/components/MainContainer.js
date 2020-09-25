import React, { Component } from 'react'
import LeftMenu from './LeftMenu'
import Content from './Content'

export class MainContainer extends Component {

    state = { 
      width: ''
    }
   componentDidMount() {
    if ( this.state.width >= 1367) {

      console.log('hej')
            
    }
    let container = document.querySelector('#container') 
    let inner = document.querySelector('#inner')

    let mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
          return "(" + this.x + ", " + this.y + ")";
        }
      };
    
      // Track the mouse position relative to the center of the container.
      mouse.setOrigin(container);
      
          let counter = 0;
          let updateRate = 10;
          let isTimeToUpdate = function() {
              return counter++ % updateRate === 0;
          };
  
          let onMouseEnterHandler = function(event) {
            update(event);
          };
        
          let onMouseLeaveHandler = function() {
            inner.style = "";
          };
        
          let onMouseMoveHandler = function(event) {
            // console.log("move")
            if (isTimeToUpdate()) {
                update(event);                
            }
          };

            let update = function(event) {
            mouse.updatePosition(event);
            updateTransformStyle(
              (mouse.y / inner.offsetHeight / 8).toFixed(2),
              (mouse.x / inner.offsetWidth / 8).toFixed(2)
            );
            
          };

        let updateTransformStyle = function(x, y) {
          let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
          inner.style.transform = style;
          inner.style.webkitTransform = style;
          inner.style.mozTransform = style;
          inner.style.msTransform = style;
          inner.style.oTransform = style;
        };

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;  

        window.addEventListener("resize", () => {
          // Get width and height of the window excluding scrollbars
          // let width = document.documentElement.clientWidth; 
          let width = window.innerWidth;
                  
          this.setState({ width: width })

          //  console.log("Width: " , width );
          // console.log("from state: " , this.state.width );
        } );
   }
   


    render() { 
      
        return (
            // <div className="mainContainer"> 
            //         <LeftMenu />
            //         <Content />
            // </div>
            
            <div className="mainContainer">             
              <div id="container">
                <div id="inner">             
                      <LeftMenu />
                      <Content />                
                </div>
              </div> 
            </div> 
            // {/* <div id="body">
            //     <div id="container">
            //         <div id="inner">
                        
            //         </div>
            //     </div>
            // </div> */}
            
        )
    }
}

export default MainContainer
