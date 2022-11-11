import React, { Component } from 'react';


class CharacterCard extends Component {
  render() {
    return (
      <div className="flex border-2 border-yellow-300 p-4">
        {/* <p>{this.props.obj.id}</p> */}
        <img
          src={this.props.obj.imageUrl}
          alt={this.props.obj.Fullname}
          loading="lazy"
          className="w-[200px] h-[200px] rounded-full"
        />
        <div className='space-y-5'>
          <div className="ml-[22px] text-[#000] font-bold mt-[11px] pb-[10px] bg-[] space-x-2 flex align-middle uppercase">
            <span>Name: </span> {this.props.obj.fullName}
          </div>
          <div className="space-x-2 flex items-center align-middle font-bold">
            <button className="ml-[22px] p-4 w-48 capitalize">Family:</button>
            <button className="ml-[22px] p-4 w-48 text-white bg-[#D4AF37] text-xl rounded-full capitalize">
              {this.props.obj.family}
            </button>
          </div>
          <div className="space-x-2 flex items-center align-middle font-bold">
            <button className="ml-[22px] p-4 w-48 capitalize">Titile</button>
            <button className="ml-[22px] p-4 w-48 text-white bg-[#000000] text rounded-full capitalize">
              {this.props.obj.title}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
