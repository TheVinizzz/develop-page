import React from "react";
import Image from "next/image";
import IconDog from "../../assets/dog-icon.png"

export default function TopBar() {
    return (
        <div className="w-full h-32 flex">
            <div className="flex">
                <div className="w-20 flex py-6">
                    <Image
                        alt="icon-dog"
                        src={IconDog}
                        width="100%"
                        height="100%"
                    />
                </div>
                <h1 className="self-center ml-2 text-2xl uppercase font-bold">DogShare</h1>
            </div>
        </div>
    )
}
