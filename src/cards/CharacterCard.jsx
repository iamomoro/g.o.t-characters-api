import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends Component {
  render() {
    return (
      <div classsNmae="flex border-2 border-black">
        {/* <p>{this.props.obj.id}</p> */}
        <img
          src={this.props.obj.imageUrl}
          alt={this.props.obj.Fullname}
          loading="lazy"
          className="w-[200px] h-[200px] rounded-full"
        />
        <div className="m-[21px] text-[#000] font-bold mt-[11px] pb-[10px] capitalize bg-[]">
          {this.props.obj.fullName}
        </div>
        <div className="grid space-y-10 flex-wrap items-center">
           <button className="ml-[22px] p-4 w-48 text-white bg-[#D4AF37] text-xl rounded-[20px] capitalize">
            {this.props.obj.family}
          </button>
          <button className="ml-[22px] p-4 w-48 text-white bg-[#000000] text rounded-[20px] capitalize">
            {this.props.obj.title}
          </button>
         
        </div>
      </div>
    );
  }
}

export default CharacterCard;
