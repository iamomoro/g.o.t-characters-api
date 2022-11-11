import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends Component {
  render() {
    return (
      <div>
        {/* <p>{this.props.obj.id}</p> */}
        <img
          src={this.props.obj.imageUrl}
          alt={this.props.obj.Fullname}
          loading="lazy"
          className="w-[200px] h-[200px] rounded-full"
        />
        <div className="flex-wrap items-center">
          <button className="ml-[22px] p-4 w-48 text-white bg-[#000000] text-[14px] rounded-[20px] capitalize">
            {this.props.obj.title}
          </button>
          <button className="ml-[22px] p-4 w-48 text-white bg-[#D4AF37] text-xl rounded-[20px] capitalize">
            {this.props.obj.family}
          </button>
        </div>
        <div
          style={{ fontSize: { lg: '24px', xs: '20px' } }}
          className="m-[21px] text-[#000] font-bold mt-[11px] pb-[10px] capitalize"
        >
          {this.props.obj.Fullname}
        </div>
      </div>
    );
  }
}

export default CharacterCard;
