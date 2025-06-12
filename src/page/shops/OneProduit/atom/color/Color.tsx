// import React from 'react';
import colorStyle from "./color.module.scss"; 

function Color() {
  return (
     <div className={colorStyle.color}>
            <span>color</span>

            <div className={colorStyle.colorList}>
            <div className={colorStyle.red}></div>
            <div className={colorStyle.yello}></div>
            <div className={colorStyle.blue}></div>
            </div>
            
          </div>
  )
}

export default Color