import Image from "next/image";

export default function Card({venueName, imgSrc}: {venueName: string, imgSrc: string}) {
    return (
        <div className="w-[250px] h-[300px] bg-white shadow-lg rounded-[10px] overflow-hidden flex flex-col">
            <div className="w-full h-[70%] relative flex-shrink-0">
                <Image src={imgSrc}
                alt='cover'
                fill={true}
                className="object-cover object-bottom"/>
            </div>
            <div className="p-[10px]">
                <div className="text-blue-600 m-0 text-[1.1em]">{venueName}</div>
            </div>
        </div>
    );
}