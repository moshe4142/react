import React from 'react';

const PhoneCard = (props) => {
    return (
        <div className="w-[300px] h-[440px] text-black bg-white my-7 mx-8  rounded-lg drop-shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <img
                style={{ width: 296, height: 220 }}
                className="rounded-t-lg p-2"
                src={props.image}
                alt={props.model}
            />
            <div className="p-5">
                <div>
                    <h5 className="mb-3 text-2xl tracking-tight text-black">
                        Model: {props.model}
                    </h5>

                    <h5 className="mb-3 text-2xl tracking-tight text-black">
                        Price: {props.price}$
                    </h5>

                    <h5 className={`mb-3 text-2xl tracking-tight flex flex-wrap`}>
                        Description: {props.description}
                    </h5>

                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => alert(`${props.model}`)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;
