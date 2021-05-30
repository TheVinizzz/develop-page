// @ts-ignore
import React from 'react'
import IconLupa from "../../assets/iconLupa.png"
import Image from 'next/image'

export default function ButtonIcon({children}: any) {
    return (
        <button className="text-xl hover:bg-gray-400 rounded-full flex">
            <Image
                src={IconLupa}
                alt="icon-button"
                width={30}
                height={30}
                className="self-center"
            />
        </button>
    )
}
