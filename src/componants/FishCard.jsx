import React from 'react';

const FishCard = (props) => {
    return (
        <div>
            <div className="w-[300px] h-[440px] text-black bg-white my-7 mx-8 border-black border-[0px] rounded-lg drop-shadow-2xl transform transition-transform duration-300 hover:scale-105">
         
                    <img style={{width: 296, height: 220}} className="rounded-t-lg p-2" src={props.image} alt="" />

                <div className="p-5">
                    <div>
                        <h5 className="mb-3 text-2xl tracking-tight text-black ">name: {props.name}</h5>
                        <h5 className="mb-3 text-2xl tracking-tight text-black ">water type: {props.waterType}</h5>
                        {/* Assuming `area` is a prop from JSON data */}
                        {/* <h5 className="mb-3 text-2xl tracking-tight text-black ">{props.area}</h5> */}
                        <h5 className={`mb-3 text-2xl tracking-tight ${props.DangerOfExtinction ? 'text-red-400' : 'text-green-400'} `}>
                            DangerOfExtinction: {props.DangerOfExtinction ? 'yes' : 'no'}
                        </h5>
                        <div className="flex justify-center items-center">
                            <button onClick={() => alert(`${props.name} 🐟🐠`)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FishCard;
